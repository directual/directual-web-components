import React, { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import '../theme/theme.module.css'
import Button from '../button/button'
import Input from '../dataentry/input/input'
import FileUpload from '../dataentry/fileupload/fileupload'
import moment from 'moment'
import { dict } from '../locale'
import Hint from '../hint/hint'

import styles from './chat.module.css'
import PropTypes from 'prop-types';
import icon from './../../../icons/fps-form2.svg'
import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong'
import Loader from '../loader/loader'

// import { FieldLink } from '../dataentry/form/FpsForm2Input'


export default function FpsChat(props) {

    const { auth, data, callEndpoint, onEvent, socket, id, locale, handleRoute } = props
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'
    const scrollableDivRef = useRef(null);

    console.log("=== chat data ===")
    console.log(data)

    const [firstLoading, setFirstLoading] = useState(false)
    const [chatsLoading, setChatsLoading] = useState(false)
    const [messageLoading, setMessageLoading] = useState(false)
    const [chatsError, setChatsError] = useState(null)

    // CURRENT CHAT STATE
    const [state, setState] = useState(
        {
            full: _.get(data, "params.chat_format") !== 'compact' && _.get(data, "params.sl_chats"),
            chats: [],
            messages: [],
            chatID: null // current active chat id
        }
    )

    // process Socket.io update
    useEffect(() => {
        console.log("CHATS REFRESH")
        // CHATS REFRESH
        if (state.full) {
            refreshChats(!firstLoading)
        }
        // ====================

    }, [socket])

    function refreshChats(skipLoading) {
        setChatsLoading(skipLoading)
        const endpoint = _.get(data, "params.sl_chats")

        // FAKE REQUEST
        false &&
        setTimeout(() => {
            setChatsLoading(false)
            setFirstLoading(true)
            setChatsError({ msg: "AUTHENTICATION_FAILED", code: "403" })
        }, 1500)

        //false &&
            callEndpoint && callEndpoint(
                endpoint,
                "GET",
                undefined,
                {},
                (result, data) => {
                    setChatsLoading(false)
                    setFirstLoading(true)
                    if (result = 'error') {
                        setChatsError({ msg: data.msg, code: data.code })
                    } else {
                        setChatsError(null)

                    }
                }
            )
    }

    const scrollToBottom = () => {
        if (scrollableDivRef && scrollableDivRef.current) {
            scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight
        }
    }

    return <div className={`${styles.chat} FPS_CHAT`}>
        <Contacts {...props} loading={chatsLoading} chatsError={chatsError} state={state}/>
        <ChatMessages 
            chatID={_.get(state, "chatID")}
            state={state}
            {...props} height={300} scrollToBottom={scrollToBottom} scrollableDivRef={scrollableDivRef} />
    </div>
}

function Contacts(props) {

    const { loading, chatsError } = props
    const name = "Pavel Ershov"
    const avatar = "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg"

    return <div className={`${styles.chat_contacts}`}>
        <Input icon='search' placeholder='Search contacts' nomargin disabled />
        {loading ? <Loader>Loading chats...</Loader> : <React.Fragment>
            {chatsError ? <Hint error title={"Error " + chatsError.code} margin={{ top: 0, bottom: 0 }}>
                <p>{chatsError.msg}</p>
            </Hint> : <React.Fragment>
                <Contact name={name} avatar={avatar} {...props} />
                <Contact name={name} avatar={avatar} {...props} selected />
                <Contact name={name} avatar={avatar} {...props} />
            </React.Fragment>}
        </React.Fragment>}
    </div>

}

function Contact(props) {

    const { selected, name, avatar } = props

    return <div className={`${styles.chat_contact} ${selected ? styles.selected : ''}`}>
        <div className={`${styles.chat_contact_avatar}`}>
            <img src={avatar} />
        </div>
        <div className={`${styles.chat_contact_text}`}>
            <p className={`${styles.chat_contact_name}`}>{name}</p>
        </div>
    </div>
}

function ChatMessages(props) {
    const { scrollableDivRef, scrollToBottom, chatID } = props

    useEffect(() => {
        scrollToBottom()
    }, [])

    return <div className={`${styles.chat_messages_wrapper}`}>
        {chatID ? <React.Fragment>
            <div
                ref={scrollableDivRef}
                className={`${styles.chat_messages}`} style={{ height: props.height }}>
                {/* <Button icon='refresh'>Load more...</Button> */}
                {/* <ChatMessage />
            <ChatMessage author />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage author /> */}
            </div>
            <ChatInput {...props} />
        </React.Fragment> : <div className={styles.chat_messages_blank}>
            <SomethingWentWrong icon="bubble" />
        </div>}
    </div>
}

function ChatInput(props) {

    const { locale, data, state } = props
    const [addFile, setAddFile] = useState(false)

    return <div className={`${styles.chat_input_outer_wrapper}`}>
        <div className={`${styles.chat_input_wrapper}`}>
            <Input
                nomargin
                className={styles.chat_input}
                type='textarea'
                rows='auto'
                placeholder='Type your message'
            />
            <div className={`icon icon-clip ${styles.chat_input_attach}`} onClick={e => setAddFile(!addFile)} />
            <Button accent icon='bubble' onClick={() => { }} width={120}>Send</Button>
        </div>
        {addFile && <FileUpload
            locale={locale}
            edit
            allowUpload
            host='/api/upload'
            multiple={false}
            nomargin
        // defaultValue={comment[_.get(data, "params._fileField")]}
        // onChange={setCommentField(_.get(data, "params._fileField"))}
        />}
    </div>
}

function ChatMessage(props) {

    const { author } = props;

    return <div className={`${styles.chat_message_wrapper} ${author ? styles.chat_message_author : styles.chat_message_normal}`}>
        <div className={`${styles.chat_message}`}>
            <div className={`${styles.chat_message_text}`}>
                <pre>
                    {`Hello!

How do you do? How do you do? How do you do? How do you do? How do you do? How do you do? How do you do? How do you do?

I have a question`}
                </pre>
            </div>
        </div>
    </div>
}

FpsChat.propTypes = {
    data: PropTypes.object,
    auth: PropTypes.object,
    locale: PropTypes.string,
};

FpsChat.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG"
};


FpsChat.settings = {
    icon: icon,
    name: 'Chat',
    sysName: 'FpsChat',
    isLegacy: false,
    isMarketplace: true,
    form: [
        // { name: 'API-endpoint for contacts', sysName: 'api', type: 'api-endpoint' },
        // { name: 'API-endpoint for messages', sysName: 'api_messages', type: 'api-endpoint' },
        // { name: 'API-endpoint for message types', sysName: 'api_messages', type: 'api-endpoint' },
        // { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
        // { name: 'Component comment', sysName: 'comment', type: 'comment' },
    ]
}