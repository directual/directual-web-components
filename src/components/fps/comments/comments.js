import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import '../theme/theme.module.css'
import Button from '../button/button'
import Input from '../dataentry/input/input'
import FileUpload from '../dataentry/fileupload/fileupload'
import moment from 'moment'
import { dict } from '../locale'

import styles from './comments.module.css'
import PropTypes from 'prop-types';
import icon from './../../../icons/fps-form2.svg'


export default function Comments(props) {


    const { auth, data, callEndpoint, onEvent, id, locale, handleRoute } = props
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

    console.log("=== comments data ===")
    console.log(data)


    const commentsExample = [
        {
            id: "1",
            author:
            {
                id: "pavel@directual.com",
                firstName: "Pavel",
                lastName: "Ershov",
                userpic: "https://api.alfa.directual.com/fileUploaded/dev/be1ae50d-d24f-4ad8-bb3a-6765390d2c9f.jpg"
            },
            dateCreated: "2024-05-13T22:04",
            isEdited: "",
            dateEdited: "",
            text: "Бей свиней, спасай Россию!",
            likes: 12,
            dislikes: 3
        },
        {
            id: "2",
            author:
            {
                id: "vlad@directual.com",
                firstName: "Vladlen",
                lastName: "Tatarsky",
                userpic: "https://api.alfa.directual.com/fileUploaded/dev/be1ae50d-d24f-4ad8-bb3a-6765390d2c9f.jpg"
            },
            dateCreated: "2024-04-13T22:04",
            isEdited: "",
            dateEdited: "",
            text: "Будет Новороссия! Будет!!!",
            likes: 132,
            dislikes: 0
        }
    ]

    const [comments, setComments] = useState(_.get(data, "data") || [])

    return <div className={`${styles.comments} FPS_COMMENTS`}>
        <CommentsHeader header="Comments" counter={comments.length} {...props} />
        <AddComment {...props} />
        <div className={styles.commentsList}>
            {comments
                .filter(comment => !_.get(comment, _.get(data, "params._replyField")) || _.get(comment, _.get(data, "params._replyField")) == 'root')
                .map(comment => <Comment {...props} comments={comments} comment={comment} key={comment.id} />)}
        </div>
    </div>
}

function Comment(props) {
    const { comment, auth, data, comments, parent } = props

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


    return <div><div className={`${styles.commentWrapper} FPS_COMMENT_WRAPPER`}>
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
                <div className={styles.commentBodyHeaderName}>
                    {_.get(commentAuthor, "firstName")} {_.get(commentAuthor, "lastName")}
                </div>
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
            <div className={styles.commentBodyFooter}>
                <div onClick={e => setAddReply(true)} className={`icon icon-bubble small ${styles.commentReplyButton}`}>Reply</div>
            </div>
        </div>
    </div>
        {addReply && <div className={styles.childComments}>
            <AddComment {...props} onCancel={() => setAddReply(false)} header="Reply" />
        </div>}
        {(childComments || []).length > 0 && <div className={`${styles.commentsList} ${styles.childComments}`}>
            {(childComments || []).map(childComment => <Comment
                {...props}
                comment={childComment}
                parent={`@${_.get(commentAuthor, "firstName")} ${_.get(commentAuthor, "lastName")}: ${shortenString(commentText, 64)}`}
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

    const { locale, onCancel, header, roles, assignTo } = props

    const rolesExample = [
        { key: 'admin', value: 'Admin' },
        { key: 'security', value: 'Security officer' },
        { key: 'finance', value: 'Finance department' },
    ]
    const usersExample = [
        { key: 'pavel@directual.com', value: 'Pavel Ershov' },
        { key: 'nikita@directual.com', value: 'Nikita Navalikhin' },
    ]

    const [addFile, setAddFile] = useState(false)
    const [showLock, setShowLock] = useState(!!roles)
    const [showAssignTo, setShowAssignTo] = useState(!!roles)
    return <div className={styles.commentsAdd}>
        <Input label={header} type='textarea' rows='auto' placeholder="Write text here..." />
        <div className={styles.commentsAdditionslControls}>
            {addFile && <FileUpload
                locale={locale}
                edit
                allowUpload
                host={'host'}
                multiple={true}
                onChange={value => console.log(value)}
            />}
            {showLock && <Input
                label="User roles, who can see this comment"
                options={rolesExample}
                type='multiselect' icon='lock' placeholder="Choose roles..." />}
            {showAssignTo && <Input
                label="Assign to"
                options={usersExample}
                type='select' icon='checkbox' placeholder="Choose the user..." />}
        </div>
        <div className={styles.commentsAddPanel}>
            <div className={`icon icon-clip ${styles.commentActions} ${addFile ? styles.active : ''}`} onClick={e => setAddFile(!addFile)} />
            <div className={`icon icon-lock ${styles.commentActions} ${showLock ? styles.active : ''}`} onClick={e => setShowLock(!showLock)} />
            <div className={`icon icon-checkbox ${styles.commentActions} ${showAssignTo ? styles.active : ''}`} onClick={e => setShowAssignTo(!showAssignTo)} />
            <Button accent icon="bubble">Send</Button>
            {onCancel && <Button onClick={onCancel}>Cancel</Button>}
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