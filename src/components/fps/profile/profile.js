import React, { useState } from 'react'
import styles from './profile.module.css'
import Input, { InputGroup } from '../dataentry/input/input'
import ActionPanel from '../actionspanel/actionspanel'
import Button from '../button/button'
import { FormSection } from '../dataentry/form/FpsForm'
import icon from "../../../icons/fps-cards.svg";
import FpsCards from "../viewobjects/cards/FpsCards";

export function SignIn({ width, header, signUpheader, google, onSignIn, onSignUp, userNameFormat, allowSignUp }) {
    const submit = () => {
        onSignIn && onSignIn(loginDetails)
    }

    const userNameLabel = userNameFormat == 'email' ? 'Email address' :
        userNameFormat == 'phone' ? 'Phone number' : 'Login'

    // Hidden login:

    const queryString = typeof window !== 'undefined' ? window.location.search : '';
    const urlParams = new URLSearchParams(queryString);
    const defaultLogin = urlParams.get('login') || null;

    const [loginDetails, setLoginDetails] = useState({ login: defaultLogin })
    const [isLoginValid,setIsLoginValid] = useState(true)
    const [signUp, setSignUp] = useState(false)

    if (signUp) {
        return (
            <React.Fragment>
                <SignUp
                    header={signUpheader}
                    width={width}
                    google={google}
                    userNameLabel={userNameLabel}
                    userNameFormat={userNameFormat}
                    onSignUp={onSignUp}
                />
                <a onClick={() => setSignUp(false)}>I have an account</a>
            </React.Fragment>
        )
    } else {

        return (
            <div className={styles.signinform} style={{ maxWidth: width || 'auto' }}>
                <form >
                    {header && <h1 style={{marginBottom:24}}>{header || 'Sign In'}</h1>}
                    {google && <React.Fragment>
                        <ActionPanel column margin={{ top: 0, bottom: 18 }}>
                            <Button socialGoogle>Sign In with Google</Button>
                        </ActionPanel>
                        <FormSection title='Or' />
                    </React.Fragment>}
                    <Input
                        type={userNameFormat || 'string'}
                        //required
                        defaultValue={defaultLogin}
                        label={userNameLabel}
                        onChange={value => setLoginDetails({ ...loginDetails, login: value })}
                        isValid={value => setIsLoginValid(value)}
                    />
                    <Input
                        type='password'
                        //required
                        label='Password'
                        onChange={value => setLoginDetails({ ...loginDetails, password: value })}
                    />
                    <ActionPanel column margin={{ top: 0, bottom: 18 }}>
                        <Button
                            disabled={
                                !loginDetails.login ||
                                !loginDetails.password || !isLoginValid}
                            onClick={submit} accent icon='permission'>{header || 'Sign In'}</Button>
                    </ActionPanel>
                </form>
                {allowSignUp && <a onClick={() => setSignUp(true)}>Create an account</a>}
            </div>
        )
    }

}

// SignIn.settings = {
//   icon: icon,
//   name: 'SignIn view',
//   sysName: 'SignIn',
//   system: true,
//   form: [
//     { name: 'Turn on Signing Up', sysName: 'allowRegiter', type: 'switch' },
//     // { name: 'List title', sysName: 'tableTitle', type: 'input' },
//     // { name: 'Page size', sysName: 'pageSize', type: 'number' },
//     // { name: 'Filters', sysName: 'tableFilters', type: 'on_off' },
//     // { name: 'Quick search', sysName: 'tableQuickSearch', type: 'on_off' },
//   ]
// }

export function SignUp(props) {
    const [signUpDetails, setSignUpDetails] = useState({})
    return (
        <div className={styles.signinform} style={{ maxWidth: props.width || 'auto' }}>
            <form>
                {props.header && <h1 style={{marginBottom:24}}>{props.header || 'Sign Up'}</h1>}
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
                        //required
                        defaultValue={signUpDetails.firstName}
                        onChange={value => setSignUpDetails({ ...signUpDetails, firstName: value })}
                    />
                    <Input
                        label='Last name'
                        type='string'
                        //required
                        defaultValue={signUpDetails.lastName}
                        onChange={value => setSignUpDetails({ ...signUpDetails, lastName: value })}
                    />
                </InputGroup>
                <Input
                    label={props.userNameLabel}
                    type={props.userNameFormat || 'string'}
                    //required
                    defaultValue={signUpDetails.login}
                    onChange={value => setSignUpDetails({ ...signUpDetails, login: value })}
                    isValid={value => setIsLoginValid(value)}
                />
                <Input
                    type='password'
                    label='Password'
                    //required
                    defaultValue={signUpDetails.password}
                    onChange={value => setSignUpDetails({ ...signUpDetails, password: value })}
                />
                <Input
                    type='password'
                    label='Repeat password'
                    //required
                    defaultValue={signUpDetails.repeatPassword}
                    onChange={value => setSignUpDetails({ ...signUpDetails, repeatPassword: value })}
                    error={(signUpDetails.password && signUpDetails.repeatPassword &&
                            signUpDetails.password != signUpDetails.repeatPassword) ? 'Passwords do not match' : null}

                />
                <ActionPanel column margin={{ top: 0, bottom: 18 }}>
                    <Button
                        disabled={
                            !signUpDetails.firstName || !isLoginValid ||
                            !signUpDetails.lastName || !signUpDetails.login ||
                            !signUpDetails.password || signUpDetails.password != signUpDetails.repeatPassword}
                        onClick={() => props.onSignUp(signUpDetails)}
                        accent icon='permission'>{props.header || 'Sign Up'}</Button>
                </ActionPanel>
            </form>
        </div>
    )
}

// SignUp.settings = {
//   icon: icon,
//   name: 'SignUp view',
//   sysName: 'SignUp',
//   system: true,
//   form: [
//     // { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
//     // { name: 'List title', sysName: 'tableTitle', type: 'input' },
//     // { name: 'Page size', sysName: 'pageSize', type: 'number' },
//     // { name: 'Filters', sysName: 'tableFilters', type: 'on_off' },
//     // { name: 'Quick search', sysName: 'tableQuickSearch', type: 'on_off' },
//   ]
// }


export function Profile(props) {
    return (
        <div style={{ maxWidth: props.width || 'auto' }}>
            {/* {props.data  && <ProfileHeader
                pictureUrl={props.data.profilePicture}
                fullName={`${props.data.firstName} ${props.data.lastName}`} /> }
          {props.data && <ProfileBody
                user={props.data} /> } */}
            <div className={styles.logOut}>
                <Button icon='logout' onClick={() => props.logOut()}>Log out</Button></div>
        </div>
    )
}

// Profile.settings = {
//   icon: icon,
//   name: 'Log out button',
//   sysName: 'LogOut',
//   system: true,
//   form: [
//     // { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
//     // { name: 'List title', sysName: 'tableTitle', type: 'input' },
//     // { name: 'Page size', sysName: 'pageSize', type: 'number' },
//     // { name: 'Filters', sysName: 'tableFilters', type: 'on_off' },
//     // { name: 'Quick search', sysName: 'tableQuickSearch', type: 'on_off' },
//   ]
// }

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
                onChange={value => value ? setData({ ...data, phone: value }) : undefined}
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
                onChange={value => value ? setData({ ...data, newPassword: value }) : undefined}
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
