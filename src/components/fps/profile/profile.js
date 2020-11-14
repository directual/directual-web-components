import React, { useState } from 'react'
import styles from './profile.module.css'
import Input, { InputGroup } from '../dataentry/input/input'
import ActionPanel from '../actionspanel/actionspanel'
import Button from '../button/button'
import { FormSection } from '../dataentry/form/FpsForm'

export function SignIn({ width, header, google, onSubmit, userNameFormat }) {
    const submit = () => {
        onSubmit(loginDetails)
    }

    const userNameLabel = userNameFormat == 'email' ? 'Email address' :
        userNameFormat == 'phone' ? 'Phone number' : 'Login'

    // Hidden login:

    const queryString = typeof window !== 'undefined' ? window.location.search : '';
    const urlParams = new URLSearchParams(queryString);
    const defaultLogin = urlParams.get('login') || null;

    const [loginDetails, setLoginDetails] = useState({login: defaultLogin})

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
                type={userNameFormat || 'string'}
                required
                defaultValue={defaultLogin}
                label={userNameLabel}
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
          {/* {props.data  && <ProfileHeader
                pictureUrl={props.data.profilePicture}
                fullName={`${props.data.firstName} ${props.data.lastName}`} /> }
          {props.data && <ProfileBody
                user={props.data} /> } */}
            <div className={styles.logOut}>
                <Button icon='logout' onClick={()=>props.logOut()}>Log out</Button></div>
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
                onChange={value => value ? setData({ ...data, phone: value }): undefined}
            />
            <Input
                label='Email'
                type='email'
                disabled
                defaultValue={data.email}
                description="email can't be changed"
            />
            <Input
                label='Role'
                disabled
                defaultValue={data.role}
            />
            <FormSection title='Authorisation' />
            <div className={styles.socialAcc}>
                <label>Social account</label>
                {data.socialGoogle ?
                    <div className={styles.google}>
                        <span className={styles.googleAcc}>
                            <span>
                                {data.socialGoogle}
                            </span></span>
                        <a className={styles.disconnect}
                            onClick={() => setData({ ...data, socialGoogle: null })}
                        >disconnect</a></div> :
                    <div>none</div>}
            </div>
            <Input
                label='New password'
                type='password'
                defaultValue={`${data.newPassword || ''}`}
                onChange={value => value ? setData({ ...data, newPassword: value }): undefined}
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
