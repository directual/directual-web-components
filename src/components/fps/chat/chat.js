import React, { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import '../theme/theme.module.css'
import Button from '../button/button'
import Input from '../dataentry/input/input'
import FileUpload from '../dataentry/fileupload/fileupload'
import moment from 'moment'
import { dict } from '../locale'
import Hint from '../hint/hint'
import { template } from '../templating/template'

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
    const abortControllerRef = useRef(null);

    const user = auth.user

    const debug = false

    // console.log("FPS CHAT data")
    // console.log(data)

    const [firstLoading, setFirstLoading] = useState(false)
    const [chatsLoading, setChatsLoading] = useState(false)
    const [messageLoading, setMessageLoading] = useState(false)
    const [chatsError, setChatsError] = useState(null)
    const [globalLoading, setGlobalLoading] = useState(false)

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
        // CHATS REFRESH
        if (state.full) {
            refreshChats(!firstLoading)
        }
        //refreshMessages()
        // ====================
    }, [socket])

    // Switch chats
    useEffect(() => {
        if ((state.full && state.chatID) || !state.full) { refreshMessages() }
    }, [state.chatID])

    function refreshChats(skipLoading, finish) {
        console.log("CHATS REFRESH")
        setChatsLoading(skipLoading)
        const endpoint = _.get(data, "params.sl_chats")
        abortExistingRequest();
        abortControllerRef.current = new AbortController();

        // FAKE REQUEST
        debug &&
        setTimeout(() => {
            setChatsLoading(false)
            setFirstLoading(true)
            //setChatsError({ msg: "AUTHENTICATION_FAILED", code: "403" })
            setState({
                ...state, chats: [
                    { id: "1", title: "First chat", image: "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg" },
                    { id: "2", title: "Second chat", image: "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg" },
                    { id: "3", title: "Third chat", image: "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg" },
                ]
            })
        }, 1500)

        !debug &&
            callEndpoint && callEndpoint(
                endpoint,
                "GET",
                undefined,
                {},
                (result, data) => {
                    setChatsLoading(false)
                    setFirstLoading(true)
                    console.log('refreshChats')
                    console.log(result)
                    console.log(data)
                    if (result == 'error') {
                        setChatsError({ msg: data.msg, code: data.code })
                    } else {
                        setChatsError(null)
                        setState({ ...state, chats: data })
                    }
                    finish && finish()
                },
                { signal: abortControllerRef.current.signal }
            )
    }

    function refreshMessages() {
        console.log("MESSAGES REFRESH")
        const endpoint = _.get(data, "params.sl_messages")
        abortExistingRequest();
        abortControllerRef.current = new AbortController();

        // FAKE REQUEST
        debug &&
        setTimeout(() => {
            setMessageLoading(false)
            setState({
                ...state, messages: [
                    {
                        "text": "Здарова заебал",
                        "chat_id": "1",
                        "author_id": "1",
                        "id": "4641f494-d026-4053-bbc2-3219659c4d1c"
                    },
                    {
                        "text": "как дела ебать",
                        "author_id": "2",
                        "chat_id": "2",
                        "id": "701a5bc2-5de8-49ce-b6be-9bd6679d5dd1"
                    }
                ]
            })
        }, 1500)

        if (
            !debug &&
            ((state.full && state.chatID) || !state.full)) {
            setMessageLoading(true)
            callEndpoint && callEndpoint(
                endpoint,
                "GET",
                undefined,
                state.full ? { _chat: state.chatID } : {},
                (result, data) => {
                    setMessageLoading(false)
                    // console.log('refreshMessages')
                    // console.log(result)
                    // console.log(data)
                    if (result == 'error') {
                        setState({ ...state, messages: [] })
                    } else {
                        setState({ ...state, messages: data })
                    }
                },
                { signal: abortControllerRef.current.signal }
            )
        }
    }

    const scrollToBottom = () => {
        if (scrollableDivRef && scrollableDivRef.current) {
            scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight
        }
    }

    function abortExistingRequest() {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    };

    const chooseChat = (chatID) => {
        setState({ ...state, chatID: chatID })
    }

    // console.log(state)

    return <div className={`${styles.chat} FPS_CHAT`}>
        <Contacts
            chooseChat={chooseChat}
            globalLoading={globalLoading}
            {...props} loading={chatsLoading} chatsError={chatsError} state={state} />
        <ChatMessages
            chatID={_.get(state, "chatID")}
            state={state}
            user={user}
            {...props}
            height={300}
            scrollToBottom={scrollToBottom}
            scrollableDivRef={scrollableDivRef} />
    </div>
}

function Contacts(props) {

    const { loading, chatsError, state, chooseChat, globalLoading } = props

    return <div className={`${styles.chat_contacts}`}>
        <Input icon='search' placeholder='Search contacts' nomargin disabled />
        {loading ? <Loader>Loading chats...</Loader> : <React.Fragment>
            {chatsError ? <Hint error title={"Error " + chatsError.code} margin={{ top: 0, bottom: 0 }}>
                <p>{chatsError.msg}</p>
            </Hint> : state.chats.map(chat => <Contact
                {...props}
                chooseChat={() => !globalLoading ? chooseChat(chat.id) : undefined}
                selected={chat.id == state.chatID}
                key={chat.id}
                chat={chat} />)}
        </React.Fragment>}
    </div>

}

function Contact(props) {

    const { selected, data, chat, state, chooseChat } = props

    const appearence = _.get(data, "params.chats.appearence[0]")

    return <div className={`${styles.chat_contact} ${selected ? styles.selected : ''}`}
        onClick={chooseChat}
    >
        <div className={`${styles.chat_contact_avatar}`}>
            <img src={template(`{{${_.get(appearence, "imageField")}}}`, chat)} />
        </div>
        <div className={`${styles.chat_contact_text}`}>
            <p className={`${styles.chat_contact_name}`}>{template(_.get(appearence, "title"), chat)}</p>
        </div>
    </div>
}

function ChatMessages(props) {
    const { scrollableDivRef, data, scrollToBottom, chatID, state, user } = props

    useEffect(() => {
        scrollToBottom()
    }, [state.messages])

    const fields = _.get(data, "params.messages")

    return <div className={`${styles.chat_messages_wrapper}`}>
        {chatID ? <React.Fragment>
            <div
                ref={scrollableDivRef}
                className={`${styles.chat_messages}`} style={{ height: props.height }}>

                {/* <Button icon='refresh'>Load more...</Button> */}
                {state.messages.map(message => <ChatMessage
                    {...props}
                    message={message}
                    fields={fields}
                    author={template(`{{${fields.userIDField}}}`, message) == user}
                />)}
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

    const { author, fields, message } = props;

    return <div className={`${styles.chat_message_wrapper} ${author ? styles.chat_message_author : styles.chat_message_normal}`}>
        <div className={`${styles.chat_message}`}>
            <div className={`${styles.chat_message_text}`}>
                <pre>
                    {`${template(`{{${fields.textField}}}`, message)}`}
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