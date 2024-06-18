import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import '../theme/theme.module.css'
import Button from '../button/button'
import Input from '../dataentry/input/input'
import FileUpload from '../dataentry/fileupload/fileupload'

import styles from './comments.module.css'
import PropTypes from 'prop-types';


export default function Comments(props) {

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

    const [comments, setComments] = useState(commentsExample)

    return <div className={`${styles.comments} FPS_COMMENTS`}>
        <CommentsHeader header="Comments" counter={12} {...props} />
        <AddComment {...props} />
        <div className={styles.commentsList}>
            {comments.map(comment => <Comment comment={comment} {...props} key={comment.id} />)}
        </div>
    </div>
}

function Comment(props) {
    const { comment } = props

    return <div className={`${styles.commentWrapper} FPS_COMMENT_WRAPPER`}>
        <div className={styles.commentVote}>
            <div className={styles.commentVoteUp}>+</div>
            <div className={styles.commentVoteResult}>{comment.likes - comment.dislikes}</div>
            <div className={styles.commentVoteDown}>–</div>
        </div>
        <div className={styles.commentBody}>
            <div className={styles.commentBodyHeader}>

            </div>
            <div className={styles.commentBodyText}>
                {comment.text}
            </div>

        </div>
    </div>
}

function CommentsHeader(props) {
    const { header, counter, locale } = props

    return <div className={`${styles.commentsHeader} FPS_COMMENTS_HEADER`}>
        <h3>{header}<span className={`${styles.commentsCounter} FPS_COMMENTS_HEADER_COUNTER`}>{counter}</span></h3>
    </div>
}

function AddComment(props) {

    const { locale } = props

    const [addFile, setAddFile] = useState(false)
    return <div className={styles.commentsAdd}>
        <Input type='textarea' nomargin rows='auto' placeholder="Write text here..." />
        <div className={styles.commentsAddPanel}>
            {addFile ?
                <div className={styles.commentFileUpload}><FileUpload
                    //images
                    locale={locale}
                    edit
                    nomargin
                    allowUpload
                    host={'host'}
                    multiple={true}
                    onChange={value => console.log(value)}
                />
                    <div className={`${styles.commentActions}`} onClick={e => setAddFile(false)}>Cancel</div>
                </div>
                : <div className={`icon icon-clip ${styles.commentActions}`} onClick={e => setAddFile(true)} />}
            <Button accent icon="bubble">Send</Button>
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
