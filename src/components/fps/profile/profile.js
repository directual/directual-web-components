import React, { useState } from 'react'
import styles from './profile.module.css'
import Input, { InputGroup } from '../dataentry/input/input'
import ActionPanel from '../actionspanel/actionspanel'
import Button from '../button/button'
import { FormSection } from '../dataentry/form/form'

export function SignIn({ width, header, google, onSubmit }) {
    const submit = () => {
        onSubmit(loginDetails)
    }
    const [loginDetails, setLoginDetails] = useState({})
    return (
        <form className={styles.signinform} style={{ maxWidth: width || 'auto' }}>
            {header && <h1>{header}</h1>}
            {google && <React.Fragment>
                <ActionPanel column margin={{ top: 0, bottom: 18 }}>
                    <Button socialGoogle>Sign In with Google</Button>
                </ActionPanel>
                <FormSection title='Or' />
            </React.Fragment>}
            <Input
                type='email'
                required
                label='Email address'
                onChange={value => setLoginDetails({ ...loginDetails, login: value })}
            />
            <Input
                type='password'
                required
                label='Password'
                onChange={value => setLoginDetails({ ...loginDetails, password: value })}
            />
            <ActionPanel column margin={{ top: 0, bottom: 18 }}>
                <Button onClick={submit} accent icon='permission'>Sign In</Button>
            </ActionPanel>
        </form>
    )
}

export function SignUp(props) {
    return (
        <div className={styles.signinform} style={{ maxWidth: props.width || 'auto' }}>
            {props.header && <h1>{props.header}</h1>}
            {props.google && <React.Fragment>
                <ActionPanel column margin={{ top: 0, bottom: 18 }}>
                    <Button socialGoogle>Sign Up with Google</Button>
                </ActionPanel>
                <FormSection title='Or' />
            </React.Fragment>}
            <InputGroup>
                <Input
                    label='First name'
                    type='string'
                    required
                />
                <Input
                    label='Last name'
                    type='string'
                    required
                />
            </InputGroup>
            <Input
                type='email'
                label='Email address'
                required
            />
            <Input
                type='password'
                label='Password'
                required
            />
            <Input
                type='password'
                label='Repeat password'
                required
            />
            <ActionPanel column margin={{ top: 0, bottom: 18 }}>
                <Button accent icon='permission'>Sign In</Button>
            </ActionPanel>
        </div>
    )
}

export function Profile(props) {
    return (
        <div style={{ maxWidth: props.width || 'auto' }}>
            <ProfileHeader
                pictureUrl={props.user.profilePicture}
                fullName={`${props.user.firstName} ${props.user.lastName}`} />
            <ProfileBody
                user={props.user} />
            <div className={styles.logOut}>
                <Button icon='logout'>Log out</Button></div>
        </div>
    )
}

function ProfileHeader({ pictureUrl, fullName }) {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.profilePicture}>
                {pictureUrl ?
                    <div className={styles.profileImageHolder}
                        style={{
                            backgroundImage: `url(${pictureUrl})`
                        }} />
                    :
                    <div className={`${styles.noPicture} icon icon-user`} />
                }
            </div>
            {fullName ?
                <h1>{fullName}</h1>
                :
                <h1 className={styles.noName}>Noname</h1>
            }
        </div>
    )
}

function ProfileBody({ user, onSave }) {
    const [data, setData] = useState(user)
    return (
        <div className={styles.profileBody}>
            <InputGroup>
                <Input
                    label='First name'
                    type='string'
                    onChange={value => setData({ ...data, firstName: value })}
                    defaultValue={`${data.firstName || ''}`}
                />
                <Input
                    label='Last name'
                    type='string'
                    onChange={value => setData({ ...data, lastName: value })}
                    defaultValue={`${data.lastName || ''}`}
                />
            </InputGroup>
            <Input
                label='Phone'
                type='phone'
                defaultValue={`${data.phone || ''}`}
                onChange={value => value && setData({ ...data, phone: value })}
            />
            <Input
                label='Email'
                type='email'
                disabled
                defaultValue={data.email}
                description="email can't be changed"
            />
            <FormSection title='Authorisation' />
            <div className={styles.socialAcc}>
                <label>Social account</label>
                <div className={styles.google}>{data.email}</div>
            </div>
            <Input
                label='New password'
                type='password'
            />
            {/* <div className="dd-debug">
            {JSON.stringify(data)}</div> */}
            <ActionPanel>
                <Button accent disabled={JSON.stringify(data) === JSON.stringify(user)} icon='done'>
                    Save profile</Button>
                <Button
                    danger
                    disabled={JSON.stringify(data) === JSON.stringify(user)}
                    icon='ban'
                    onClick={() => setData(user)}
                >
                    Discard changes</Button>
            </ActionPanel>
        </div>
    )
}
