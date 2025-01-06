import React, { useState, useEffect } from 'react'
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

// import { FieldLink } from '../dataentry/form/FpsForm2Input'


export default function Chat(props) {

    const { auth, data, callEndpoint, onEvent, id, locale, handleRoute } = props
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

    console.log("=== chat data ===")
    console.log(data)

    // process Socket.io update
    useEffect(() => {
        // if (!_.isEqual(_.get(data, "data"), comments)) {

        // }
    }, [_.get(data, "data")])

    return <div className={`${styles.chat} FPS_CHAT`}>
        <Contacts />
        <ChatMessages />
    </div>
}

function Contacts(props) {

    return <div className={`${styles.chat_contacts}`}>
        <Contact />
        <Contact />
        <Contact />
    </div>

}

function Contact(props) {

    return <div className={`${styles.chat_contact}`}>
        <div className={`${styles.chat_contact_avatar}`}>
            {/* <img src="https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg" /> */}
        </div>
        <div className={`${styles.chat_contact_name}`}>
            Pavel Ershov
        </div>
    </div>
}

function ChatMessages(props) {
    return <div className={`${styles.chat_messages}`}>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
    </div>
}

function ChatMessage(props) {

    return <div className={`${styles.chat_message}`}>
        <div className={`${styles.chat_message}`}>
            <div className={`${styles.chat_message_text}`}>
                Hello!
            </div>
        </div>
    </div>
}

Chat.propTypes = {
    data: PropTypes.object,
    auth: PropTypes.object,
    locale: PropTypes.string,
};

Chat.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG"
};


Chat.settings = {
    icon: icon,
    name: 'Chat',
    sysName: 'FpsChat',
    isLegacy: false,
    isMarketplace: true,
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
        { name: 'Component comment', sysName: 'comment', type: 'comment' },
    ]
}