import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import '../theme/theme.module.css'
import Button from '../button/button'
import Input from '../dataentry/input/input'
import FileUpload from '../dataentry/fileupload/fileupload'
import moment from 'moment'
import { dict } from '../locale'
import Hint from '../hint/hint'

import styles from './comments.module.css'
import PropTypes from 'prop-types';
import icon from './../../../icons/fps-form2.svg'

import { FieldLink } from '../dataentry/form/FpsForm2Input'


export default function Comments(props) {


    const { auth, data, callEndpoint, onEvent, id, locale, handleRoute } = props
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

    console.log("=== comments data ===")
    console.log(data)

    const [comments, setComments] = useState(_.get(data, "data") || [])
    const [loading, setLoading] = useState(false)

    // process Socket.io update
    useEffect(() => {
        if (!_.isEqual(_.get(data, "data"), comments)) {
            setComments(_.get(data, "data"))
        }
    }, [_.get(data, "data")])

    function sendComment(comment, finish, local) {
        // console.log("=== sending comment...")
        // console.log(comment)
        !local && setLoading(true)
        const endpoint = _.get(data, "sl")
        callEndpoint && callEndpoint(
            endpoint,
            "POST",
            comment,
            undefined,
            (result, data) => {
                if (result == "ok") {
                    console.log("FINISH SUBMIT")
                    console.log(data)
                    setLoading(false)
                    finish && finish()
                } else {
                    setLoading(false)
                    finish && finish()
                }
            }
        )
    }

    const allowAttachment = _.includes(data.writeFields, _.get(data, "params._fileField"))
    const allowSend = _.includes(data.writeFields, _.get(data, "params._textField"))

    return <div className={`${styles.comments} FPS_COMMENTS`}>
        <CommentsHeader header={dict[lang].comments.comments} counter={comments.length} {...props} />
        {allowSend && <AddComment
            {...props}
            lang={lang}
            loading={loading}
            sendComment={sendComment}
            allowAttachment={allowAttachment} />}
        <div className={styles.commentsList}>
            {comments
                .filter(comment => !_.get(comment, _.get(data, "params._replyField")) || _.get(comment, _.get(data, "params._replyField")) == 'root')
                .map(comment => <Comment {...props}
                    sendComment={sendComment}
                    lang={lang}
                    allowSend={allowSend}
                    loading={loading}
                    allowAttachment={allowAttachment}
                    comments={comments}
                    comment={comment}
                    key={comment.id} />)}
        </div>
    </div>
}

function Comment(props) {
    const { comment, auth, lang, data, comments, parent, allowSend, sendComment } = props

    const [addReply, setAddReply] = useState(false)

    // форматируем дату для карточки (если есть) в соответствии с formatOptions
    const formatDate = (value, formatOptions) => {
        if (!value) { return null }
        formatOptions = formatOptions || {}
        const formattedDate = formatOptions.isUTC == 'true' ?
            moment.utc(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
            :
            moment(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
        return formattedDate
    }

    const commentID = _.get(comment, "id")
    const commentText = _.get(comment, _.get(data, "params._textField"))
    const commentDate = _.get(comment, _.get(data, "params._dateField"))
    const formatCommentDate = _.get(_.find(_.get(data, "headers"), { sysName: _.get(data, "params._dateField") }), "formatOptions")
    const commentAttachment = _.get(comment, _.get(data, "params._fileField")) ?
        _.get(comment, _.get(data, "params._fileField")).split(",") : []
    const commentAuthor = _.get(comment, _.get(data, "params._userField"))
    const childComments = comments.filter(c => _.get(c, _.get(data, "params._replyField")) == commentID)
    function shortenString(str, N) {
        if (_.isString(str) && str.length > N) {
            return _.truncate(str, { length: N + 3, omission: '...' });
        }
        return str;
    }

    const [localLoading, setLocalLoading] = useState(false)

    let name = `${_.get(commentAuthor, "firstName", "")} ${_.get(commentAuthor, "lastName", "")}`
    if (name == " ") { name = dict[lang].comments.anon }

    const isTask = !!_.get(comment, _.get(data, "params.assignmentOn_assignee"))

    const isAssignedToMe = (_.get(auth, "user") == _.get(comment, _.get(data, "params.assignmentOn_assignee")) ||
        _.get(auth, "user") == _.get(comment, _.get(data, "params.assignmentOn_assignee") + ".id")) &&
        _.get(auth, "isAuth")

    const assigneName = isTask ?
        (_.get(comment, _.get(data, "params.assignmentOn_assignee") + ".firstName") ?
            _.get(comment, _.get(data, "params.assignmentOn_assignee") + ".firstName") + ' ' + _.get(comment, _.get(data, "params.assignmentOn_assignee") + ".lastName") :
            (_.get(comment, _.get(data, "params.assignmentOn_assignee") + ".id") || _.get(comment, _.get(data, "params.assignmentOn_assignee"))))
        : ''

    const isResoled = isAssignedToMe && (_.get(comment, _.get(data, "params.assignmentOn_bool")))

    const resolvedDate = _.get(comment, _.get(data, "params.assignmentOn_dateClosed"))
    const formatResolvedDate = _.get(_.find(_.get(data, "headers"), { sysName: _.get(data, "params.assignmentOn_dateClosed") }), "formatOptions")

    const resolveTask = () => {
        setLocalLoading(true)
        let payload = { ...comment }
        _.set(payload, _.get(data, "params.assignmentOn_bool"), true)
        _.set(payload, _.get(data, "params.assignmentOn_dateClosed"), moment().toISOString())
        sendComment(payload, () => setLocalLoading(false), true)
    }

    return <div>

        <div className={`${styles.commentWrapper} FPS_COMMENT_WRAPPER`}>
            {isTask && <div className={`${styles.commentWrapperAssignTo} ${isResoled ? styles.taskResolved : ""}  FPS_COMMENT_WRAPPER__ASSIGN`}>
                {isAssignedToMe ? <span>{dict[lang].comments.assignedToMe}</span>
                    : <span>{dict[lang].comments.assignedTo} <b>{assigneName}</b></span>}
                {isResoled ?
                    <span>{dict[lang].comments.taskResolved} {formatDate(resolvedDate, formatResolvedDate)}</span> :
                    isAssignedToMe ? <Button
                        loading={localLoading}
                        onClick={resolveTask}
                        small height={32}
                        icon='done'>{dict[lang].comments.resolveTask}</Button> : ''}
            </div>}
            {/* <div className={styles.commentVote}>
                <div className={styles.commentVoteUp}>+</div>
                <div className={styles.commentVoteResult}>{comment.likes - comment.dislikes}</div>
                <div className={styles.commentVoteDown}>–</div>
            </div> */}
            <div className={styles.commentBody}>
                {parent && <div className={`${styles.commentParent} icon icon-arrowRight small`}>{parent}</div>}
                <div className={styles.commentBodyHeader}>
                    <div className={styles.commentBodyHeaderUserpic}>
                        <img src={_.get(commentAuthor, "userpic")} />
                    </div>
                    {(_.get(commentAuthor, "firstName") || _.get(commentAuthor, "lastName")) ? <div className={styles.commentBodyHeaderName}>
                        {_.get(commentAuthor, "firstName")} {_.get(commentAuthor, "lastName")}
                    </div> :
                        <div className={styles.commentBodyHeaderName} style={{ opacity: ".5" }}>{dict[lang].comments.anon}</div>}
                    <div className={styles.commentBodyHeaderDate}>
                        {formatDate(commentDate, formatCommentDate)}
                    </div>
                </div>
                <div className={styles.commentBodyText}>
                    {commentText}
                </div>
                {commentAttachment && commentAttachment.length > 0 &&
                    commentAttachment.map(file => {
                        const fileName = file.split("/")[file.split("/").length - 1]
                        return <div className={styles.commentBodyFiles}>
                            <a target="_blank" href={file}
                                className={`icon icon-clip small ${styles.commentFileLink}`}>{fileName}</a>
                        </div>
                    })}
                {_.includes(data.writeFields, _.get(data, "params._replyField")) && allowSend && <div className={styles.commentBodyFooter}>
                    <div onClick={e => setAddReply(true)} className={`icon icon-bubble small ${styles.commentReplyButton}`}>{dict[lang].comments.reply}</div>
                </div>}
            </div>
        </div>
        {addReply && <div className={styles.childComments}>
            <AddComment {...props} parentID={commentID} onCancel={() => setAddReply(false)} header="Reply" />
        </div>}
        {(childComments || []).length > 0 && <div className={`${styles.commentsList} ${styles.childComments}`}>
            {(childComments || []).map(childComment => <Comment
                {...props}
                comment={childComment}
                parent={`@${name}: ${shortenString(commentText, 64)}`}
                key={childComment.id} />)}
        </div>}
    </div>
}

function CommentsHeader(props) {
    const { header, counter, locale } = props

    return <div className={`${styles.commentsHeader} FPS_COMMENTS_HEADER`}>
        <h3>{header}<span className={`${styles.commentsCounter} FPS_COMMENTS_HEADER_COUNTER`}>{counter}</span></h3>
    </div>
}

function AddComment(props) {

    const { locale, onCancel, lang, header, roles, callEndpoint, allowAttachment, sendComment, parentID, data, loading } = props

    const rolesExample = [
        { key: 'admin', value: 'Admin' },
        { key: 'security', value: 'Security officer' },
        { key: 'finance', value: 'Finance department' },
    ]
    const usersExample = [
        { key: 'pavel@directual.com', value: 'Pavel Ershov' },
        { key: 'nikita@directual.com', value: 'Nikita Navalikhin' },
    ]
    const defaultComment = {
        [_.get(data, "params._textField")]: "",
        [_.get(data, "params._fileField")]: "",
        [_.get(data, "params._replyField")]: parentID
    }

    const [addFile, setAddFile] = useState(false)
    const [showLock, setShowLock] = useState(!!roles)
    const [showAssignTo, setShowAssignTo] = useState(!!roles)
    const [comment, setComment] = useState(defaultComment)

    const setCommentField = field => value => {
        const copyComment = { ...comment }
        _.set(copyComment, field, value)
        setComment(copyComment)
    }

    const [isSent, setIsSent] = useState(false)

    function finish() {
        onCancel && onCancel()
        setComment(defaultComment)
        setIsSent(true)
        setShowAssignTo(false)
        setShowLock(false)
        setAddFile(false)
        setTimeout(() => setIsSent(false), 5000)
    }

    if (isSent) return <Hint margin={{ top: 0, bottom: 0 }} ok>{dict[lang].comments.submitted}</Hint>

    return <div className={styles.commentsAdd}>
        <Input label={header} type='textarea'
            defaultValue={comment[_.get(data, "params._textField")]}
            onChange={setCommentField(_.get(data, "params._textField"))}
            rows='auto' placeholder={dict[lang].comments.write} />
        <div className={styles.commentsAdditionslControls}>
            {addFile && allowAttachment && <FileUpload
                locale={locale}
                edit
                allowUpload
                host='/api/upload'
                multiple={true}
                defaultValue={comment[_.get(data, "params._fileField")]}
                onChange={setCommentField(_.get(data, "params._fileField"))}
            />}
            {showLock && <Input
                label={dict[lang].comments.roles}
                options={rolesExample}
                type='multiselect' icon='lock' placeholder={dict[lang].comments.roles_ph} />}
            {/* {showLock && <Hint>The feature is under development</Hint>} */}
            {showAssignTo &&
                <FieldLink
                    field={{
                        _field_link_type: "complexSelect",
                        _field_arrayLink_endpoint: _.get(data, "params.assignmentOn_endpoint")
                    }}
                    fieldInfo={{
                        name: dict[lang].comments.assignTo
                    }}
                    onChange={setCommentField(_.get(data, "params.assignmentOn_assignee"))}
                    model={{}} // костылек из мультиформы
                    callEndpoint={(endpoint, params, finish, setOptions, setError) => {
                        console.log('===> calling endpoint /' + endpoint)
                        const transformedArray = (inputArray, visibleNames) => _.map(inputArray, (item) => {
                            const parseJson = json => {
                                if (!json) return {}
                                let parsedJson = {}
                                if (typeof json == 'object') return json
                                try {
                                    parsedJson = JSON.parse(json)
                                }
                                catch (e) {
                                    console.log(json);
                                    console.log(e);
                                }
                                return parsedJson
                            }

                            const { id, ...rest } = item; // Destructure `id` and the rest of the properties
                            const value = _.trim(_.map(parseJson(visibleNames), field => _.get(item, field.sysName)).join(' ')) ||
                                _.values(_.pickBy(rest, _.isString)).join(' '); // Concatenate string values
                            const excludeFields = [..._.map(parseJson(visibleNames), i => i.sysName), ...["userpic", "image", "picture", "photo"]]
                            const description = _.trim((_.keys(_.omit(rest, excludeFields)) || []).map(i => rest[i]).join(" "))
                            return {
                                key: id,
                                value: _.trim(value) || id,
                                image: _.get(rest, "userpic") || _.get(rest, "image") || _.get(rest, "picture") || _.get(rest, "photo"),
                                description: description,
                            };
                        });

                        // fake request
                        // setTimeout(() => {
                        //   const data = [
                        //     {
                        //       "name": "Paul",
                        //       "id": "paul",
                        //       "userpic": "https://cdn.jpg.wtf/futurico/8a/c5/1723104957-8ac578d40e056a4b98acdd34ac41526f.jpeg"
                        //     },
                        //     {
                        //       "name": "Peter",
                        //       "id": "peter"
                        //     }
                        //   ]
                        //   const visibleNames = '[{"sysName":"firstName"}]'
                        //   finish && finish(transformedArray(data, visibleNames))
                        //   setOptions && setOptions(transformedArray(data, visibleNames))
                        // }, 1000)

                        // false &&
                        callEndpoint && callEndpoint(
                            endpoint,
                            "GET",
                            undefined,
                            params,
                            (result, data, visibleNames) => {
                                if (result == "ok") {
                                    finish && finish(transformedArray(data, visibleNames))
                                    setOptions && setOptions(transformedArray(data, visibleNames))
                                }
                                else {
                                    setError && setError(data)
                                    finish && finish([])
                                    setOptions && setOptions([])
                                }
                            }
                        )
                    }}
                    template={() => { }}
                />
            }
            {/* {showAssignTo && <Hint>The feature is under development</Hint>} */}
        </div>
        <div className={styles.commentsAddPanel}>
            <div className={`icon icon-clip ${styles.commentActions} ${addFile ? styles.active : ''}`} onClick={e => setAddFile(!addFile)} />
            {/* <div className={`icon icon-lock ${styles.commentActions} ${showLock ? styles.active : ''}`} onClick={e => setShowLock(!showLock)} /> */}
            {_.get(data, "params.assignmentOn") && <div className={`icon icon-checkbox ${styles.commentActions} ${showAssignTo ? styles.active : ''}`} onClick={e => setShowAssignTo(!showAssignTo)} />}
            <Button loading={loading}
                disabled={!comment[_.get(data, "params._fileField")] && !comment[_.get(data, "params._textField")]}
                accent icon="bubble" onClick={() => sendComment(comment, finish)}>{dict[lang].comments.send}</Button>
            {onCancel && <Button onClick={onCancel}>{dict[lang].comments.cancel}</Button>}
        </div>
    </div>
}

Comments.propTypes = {
    data: PropTypes.object,
    auth: PropTypes.object,
    locale: PropTypes.string,
};

Comments.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG"
};


Comments.settings = {
    icon: icon,
    name: 'Comments',
    sysName: 'FpsComments',
    isLegacy: false,
    isMarketplace: true,
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
        { name: 'Component comment', sysName: 'comment', type: 'comment' },
    ]
}