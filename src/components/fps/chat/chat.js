import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import '../theme/theme.module.css';
import Button from '../button/button';
import Input, { InputRow } from '../dataentry/input/input';
import FileUpload from '../dataentry/fileupload/fileupload';
import moment from 'moment';
import { dict } from '../locale'; // Import the dict object
import Hint from '../hint/hint';
import { template } from '../templating/template';
import InnerHTML from 'dangerously-set-html-content'
import { QuickActionsControl } from '../viewobjects/cards/cards';
import styles from './chat.module.css';
import PropTypes from 'prop-types';
import icon from './../../../icons/fps-form2.svg';
import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong';
import Loader from '../loader/loader';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

function sanitizedHTML(inputHTML) {
    return DOMPurify.sanitize(inputHTML, {
        USE_PROFILES: { html: true }, // You can further configure this to be more restrictive if needed
    });
}
export default function FpsChat(props) {
    const { auth, data, callEndpoint, onEvent, socket, id, locale, handleRoute, currentBP = 'tablet' } = props;
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'; // Determine the language
    const scrollableDivRef = useRef(null);
    const abortControllerRef = useRef(null);

    const user = auth.user;

    console.log("currentBP = " + currentBP)

    const debug = false;

    const [firstLoading, setFirstLoading] = useState(false);
    const [chatsLoading, setChatsLoading] = useState(false);
    const [messageLoading, setMessageLoading] = useState(false);
    const [chatsError, setChatsError] = useState(null);
    const [globalLoading, setGlobalLoading] = useState(false);

    const [actionLoading, setActionLoading] = useState("");

    const [state, setState] = useState({
        full: _.get(data, "params.chat_format") !== 'compact' && _.get(data, "params.sl_chats"),
        chats: [],
        hidePanel: false,
        messages: [],
        chatID: null // current active chat id
    });

    const [message, setMessage] = useState({});

    const editMessage = (msg, attachment) => {
        const newMessage = _.cloneDeep(message);
        _.set(newMessage, `${state.chatID}.msg`, msg);
        _.set(newMessage, `${state.chatID}.attachment`, attachment);
        setMessage(newMessage);
    };

    useEffect(() => {
        if (state.full) {
            refreshChats(!firstLoading, refreshMessages());
        } else {
            refreshMessages();
        }
    }, [socket]);

    useEffect(() => {
        if ((state.full && state.chatID) || !state.full) { refreshMessages(); }
    }, [state.chatID]);

    function refreshChats(skipLoading, finish) {
        // console.log("CHATS REFRESH");
        setChatsLoading(skipLoading);
        const endpoint = _.get(data, "params.sl_chats");
        abortExistingRequest();
        abortControllerRef.current = new AbortController();

        debug &&
            setTimeout(() => {
                setChatsLoading(false);
                setFirstLoading(true);
                setState((prevState) => ({
                    ...prevState,
                    chats: [
                        { id: "1", title: "<p>First chat</p><div>test test test test test test teeeeeeetttttttttteeeeeeeees</div>", image: "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg" },
                        { id: "2", title: "<p>Second chat</p>", image: "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg" },
                        { id: "3", title: "Third chat", image: "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg" },
                    ]
                }));
            }, 1500);

        !debug &&
            callEndpoint && callEndpoint(
                endpoint,
                "GET",
                undefined,
                {},
                (result, data) => {
                    setChatsLoading(false);
                    setFirstLoading(true);
                    if (result == 'error') {
                        setChatsError({ msg: data.msg, code: data.code });
                    } else {
                        setChatsError(null);
                        setState((prevState) => ({
                            ...prevState,
                            chats: data
                        }));
                    }
                    finish && finish();
                },
                { signal: abortControllerRef.current.signal }
            );
    }

    function refreshMessages() {
        // console.log("MESSAGES REFRESH");
        const endpoint = _.get(data, "params.sl_messages");
        abortExistingRequest();
        abortControllerRef.current = new AbortController();

        debug &&
            setTimeout(() => {
                setMessageLoading(false);
                setState((prevState) => ({
                    ...prevState,
                    messages: [
                        {
                            "text": `# Здарова заебал`,
                            "chat_id": "1",
                            "author_id": "1",
                            "id": "4641f494-d026-4053-bbc2-3219659c4d1c"
                        },
                        {
                            "text": "<h1>как дела ебать</h1>",
                            "author_id": "2",
                            "chat_id": "2",
                            "id": "701a5bc2-5de8-49ce-b6be-9bd6679d5dd1"
                        },
                        {
                            "text": "как дела",
                            "author_id": "2",
                            "chat_id": "2",
                            "id": "701a5bc2-5de8-49ce-b6be-9bd6679d51"
                        }
                        ,
                        {
                            "text": "как дела",
                            "author_id": "2",
                            "chat_id": "2",
                            "id": "701a5bc2-5de8-49ce-b6be-9bdd1"
                        }
                        ,
                        {
                            "text": "как дела",
                            "author_id": "2",
                            "chat_id": "2",
                            "id": "701a5bc2-5de8-79d5dd1"
                        },
                        {
                            "text": "как дела",
                            "author_id": "2",
                            "chat_id": "2",
                            "id": "701a5-9bd6679d5dd1"
                        },
                        {
                            "text": "Здарова заебал",
                            "chat_id": "1",
                            "author_id": "1",
                            "id": "4641f492-3219659c4d1c"
                        },
                        {
                            "text": "Здарова заебал",
                            "chat_id": "1",
                            "author_id": "1",
                            "id": "4641f494-d026-4053-bbc2c4d1c"
                        }
                    ]
                }));
            }, 1500);

        if (!debug && ((state.full && state.chatID) || !state.full)) {
            setMessageLoading(true);
            callEndpoint && callEndpoint(
                endpoint,
                "GET",
                undefined,
                state.full ? { _chat: state.chatID } : {},
                (result, data) => {
                    // console.log("messages")
                    // console.log(data)
                    setMessageLoading(false);
                    if (result == 'error') {
                        setState((prevState) => ({ ...prevState, messages: [] }));
                    } else {
                        setState((prevState) => ({ ...prevState, messages: _.reverse(data) }));
                    }
                },
                { signal: abortControllerRef.current.signal }
            );
        }
    }

    const scrollToBottom = () => {
        if (scrollableDivRef && scrollableDivRef.current) {
            scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
        }
    };

    function abortExistingRequest() {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    };

    const chooseChat = (chatID) => {
        setState({ ...state, chatID: chatID });
    };

    const fakeSend = (currentChat) => {
        setActionLoading("");
        console.log("fake send message")
        const newMessage = _.cloneDeep(message);
        _.set(newMessage, `${currentChat}.msg`, "");
        _.set(newMessage, `${currentChat}.attachment`, "");
        setMessage(newMessage);
        console.log(newMessage)
    }

    const performAction = (action) => {
        console.log("performAction")
        console.log(action)
        const endpoint = _.get(data, "params.sl_actions");
        const currentChat = state.chatID + "";
        if (!endpoint) return;
        if (action == "send") {
            setActionLoading("send");
            const body = {
                [_.get(data, "params.actions.textField")]: message[`${currentChat}`].msg,
                [_.get(data, "params.actions.chatLinkField")]: currentChat,
                [_.get(data, "params.actions.actionTypeField")]: action,
                [_.get(data, "params.actions.attachmentsField")]: message[`${currentChat}`].attachment
            };
            debug ?
                fakeSend(currentChat)
                :
                callEndpoint && callEndpoint(
                    endpoint,
                    "POST",
                    body,
                    undefined,
                    (result, data) => {
                        setActionLoading("");
                        const newMessage = _.cloneDeep(message);
                        _.set(newMessage, `${currentChat}.msg`, "");
                        _.set(newMessage, `${currentChat}.attachment`, "");
                        setMessage(newMessage);
                    },
                );
        } else {
            setActionLoading("topBar");
            const body = {
                [_.get(data, "params.actions.textField")]: action.actionPayload,
                [_.get(data, "params.actions.chatLinkField")]: currentChat,
                [_.get(data, "params.actions.actionTypeField")]: _.get(action, "actionType"),
            };
            debug ?
                console.log("send action", _.get(action, "actionType"))
                :
                callEndpoint && callEndpoint(
                    endpoint,
                    "POST",
                    body,
                    undefined,
                    (result, data) => {
                        setActionLoading("");
                        if (data && data.length > 0) {
                            console.log("response data")
                            console.log(data)
                            try {
                                const response = JSON.parse(data)
                                // update chatID
                                if (_.has(response, "chatID")) {
                                    const newChatID = _.get(response, "chatID") || ""
                                    console.log("chatID update", newChatID)
                                    !globalLoading && chooseChat(newChatID)
                                }
                                // redirect
                                if (!_.isEmpty(_.get(response, "redirect")) &&
                                    !_.isEmpty(_.get(response, "redirect.target"))) {
                                    let delay = 0
                                    if (!_.isEmpty(_.get(response, "redirect.delay"))) {
                                        delay = typeof _.get(response, "redirect.delay") == 'number' ? _.get(response, "redirect.delay") : parseInt(_.get(response, "redirect.delay"))
                                    }
                                    let target = _.get(response, "redirect.target")
                                    setTimeout(() => {
                                        if (target.startsWith("http")) {
                                            window.location.href = target;
                                        } else {
                                            handleRoute(target)()
                                        }
                                    }, delay)
                                }
                            } catch (err) {
                                console.log(err)
                            }
                        }
                    },
                );
        }
    };

    // формируем заголовок чата:
    const selectedChat = _.find(state.chats, { id: _.get(state, "chatID") }) || {}
    const chatTitle = sanitizedHTML(template(_.get(data, "params.chats.chatTitle"), selectedChat))

    const handleHidePanel = (hide) => {
        setState(prevState => ({
            ...prevState,
            hidePanel: hide
        }));
    };

    const isMobile = currentBP === 'mobile';
    const [showContacts, setShowContacts] = useState(true);

    useEffect(() => {
        if (isMobile && !_.isEmpty(state.chatID)) {
            setShowContacts(false);
        }
    }, [state.chatID]);

    return (
        <div className={`${styles.chat} FPS_CHAT`}>
            {(!isMobile || showContacts) && <Contacts
                chooseChat={chooseChat}
                globalLoading={globalLoading}
                {...props}
                isMobile={isMobile}
                loading={chatsLoading}
                chatsError={chatsError}
                state={state}
                performAction={performAction}
                onHidePanel={handleHidePanel} />}
            {(!isMobile || !showContacts) && <ChatMessages
                chatID={_.get(state, "chatID")}
                chatTitle={chatTitle}
                state={state}
                setShowContacts={setShowContacts}
                showContacts={showContacts}
                isMobile={isMobile}
                user={user}
                socket={socket}
                {...props}
                height={_.get(data, "params.chat_height") || 300}
                message={message}
                editMessage={editMessage}
                actionLoading={actionLoading}
                performAction={performAction}
                scrollToBottom={scrollToBottom}
                scrollableDivRef={scrollableDivRef}
                onHidePanel={handleHidePanel} />}
        </div>
    );
}

function Contacts(props) {
    const { loading, chatsError, state, data, performAction, chooseChat, globalLoading, isMobile } = props;
    const [isDragging, setIsDragging] = useState(false);
    const [width, setWidth] = useState(220);
    const [startX, setStartX] = useState(0);
    const [startWidth, setStartWidth] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setStartWidth(width);
        e.preventDefault();
    };

    const actions = _.get(data, "params.actions.otherActions", [])
        .filter(i => i.actionPlace == "contacts")
        .map(i => {
            return {
                ...i,
                ...{
                    "buttonIcon": i.actionIcon
                }
            }
        })

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const delta = e.clientX - startX;
        const newWidth = startWidth + delta;

        if (newWidth <= 50) { // Threshold to hide panel
            props.onHidePanel(true);
        } else if (newWidth >= 200 && newWidth <= 400) {
            props.onHidePanel(false);
            setWidth(newWidth);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, startX, startWidth]);

    if (state.hidePanel) return null;

    return (
        <div className={`${styles.chat_contacts}`} style={{ width: isMobile ? 'fit-content' : width, flexGrow: isMobile ? 2 : 0 }}>
            {!isMobile && <div className={styles.drag_handle} onMouseDown={handleMouseDown} />}
            <div className={styles.chat_contacts_header}>
                <div style={{ flexGrow: 2 }}>
                    <Input icon='search' placeholder={dict[props.locale].search} nomargin />
                </div>
                {actions && actions.length > 0 && <QuickActionsControl
                    quickActions={actions}
                    performAction={a => performAction(a)}
                />}
            </div>
            {loading ? <Loader>{dict[props.locale].loading}</Loader> : <React.Fragment>
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
    );
}

function Contact(props) {
    const { selected, data, chat, state, chooseChat } = props;

    const appearence = _.get(data, "params.chats.appearence[0]");
    const chatTitle = sanitizedHTML(template(_.get(appearence, "title"), chat))

    return (
        <div className={`${styles.chat_contact} ${selected ? styles.selected : ''}`}
            onClick={chooseChat}
        >
            <div className={`${styles.chat_contact_avatar}`}
                style={{
                    width: _.get(appearence, "imageSize", 30),
                    height: _.get(appearence, "imageSize", 30)
                }}
            >
                <img src={template(`{{${_.get(appearence, "imageField")}}}`, chat)} />
            </div>
            <div className={`${styles.chat_contact_text}`}>
                <p className={`${styles.chat_contact_name}`}>{chatTitle && <InnerHTML allowRerender={true} html={chatTitle || ''} />}</p>
            </div>
        </div>
    );
}

function ChatMessages(props) {
    const { scrollableDivRef, data, actionLoading, chatTitle,
        performAction, scrollToBottom, chatID, state, user, message, editMessage, onHidePanel, socket, isMobile, setShowContacts, showContacts } = props;

    useEffect(() => {
        scrollToBottom();
    }, [state.messages]);

    const fields = _.get(data, "params.messages")
    const actions = _.get(data, "params.actions.otherActions", [])
        .filter(i => i.actionPlace !== "contacts")
        .map(i => {
            return {
                ...i,
                ...{
                    "buttonIcon": i.actionIcon
                }
            }
        })

    return (
        <div className={`${styles.chat_messages_wrapper} D_FPS_CHAT_MESSAGES_WRAPPER`}
            style={{ height: props.height }}>
            <div className={`${styles.chat_messages_header} D_FPS_CHAT_MESSAGES_HEADER`}>
                {actionLoading == "topBar" ? <Loader /> : <React.Fragment>
                    <div className={styles.header_left}>
                        {isMobile && <div
                            className={`icon icon-back ${styles.expand_button}`}
                            onClick={() => setShowContacts(true)}
                        />}

                        {state.hidePanel && (
                            <div
                                className={`icon icon-menu ${styles.expand_button}`}
                                onClick={() => onHidePanel(false)}
                            />
                        )}
                        <div>{chatTitle ? <InnerHTML allowRerender={true} html={chatTitle || ''} /> : chatID}</div>
                    </div>
                    {chatID && <QuickActionsControl
                        quickActions={actions}
                        performAction={a => performAction(a)}
                    />}
                </React.Fragment>}
            </div>
            {chatID ?
                <React.Fragment>
                    <div
                        ref={scrollableDivRef}
                        className={`${styles.chat_messages}`}>
                        {state.messages.length == 0 && <div className={styles.chat_messages_blank}>
                            <SomethingWentWrong icon="ban" message={dict[props.locale].chat.noMessages} />
                        </div>}
                        { state.messages.map(text => <ChatMessage
                            {...props}
                            message={message}
                            text={text}
                            key={text.id}
                            editMessage={editMessage}
                            fields={fields}
                            author={template(`{{${fields.userIDField}}}`, text) == user}
                        />)}
                    </div>
                    <ChatInput {...props} performAction={performAction}
                        message={message} editMessage={editMessage}
                        actionLoading={actionLoading} />
                </React.Fragment> : <div className={styles.chat_messages_blank} >
                    <SomethingWentWrong icon="bubble" />
                </div>}
        </div>
    );
}

function ChatInput(props) {
    const { locale, data, state, actionLoading, performAction, message, editMessage, socket, chatID, isMobile } = props;
    const [addFile, setAddFile] = useState(false);
    const [resetFocus, setResetFocus] = useState(0);

    useEffect(() => {
        setResetFocus(resetFocus + 1);
    }, [socket, chatID]);

    return (
        <div className={`${styles.chat_input_outer_wrapper}`}>
            <div className={`${styles.chat_input_wrapper}`}>
                <Input
                    nomargin
                    className={styles.chat_input}
                    type='textarea'
                    rows='auto'
                    shiftEnter
                    // autoFocus
                    reFocus={resetFocus}
                    // debug
                    pressEnter={() => performAction("send")}
                    disabled={actionLoading == "send"}
                    defaultValue={_.get(message, `${state.chatID}.msg`)}
                    onChange={value => editMessage(value, _.get(message, `${state.chatID}.attachment`))}
                    placeholder={dict[locale].chat.typeMessage}
                />
                <div className={`