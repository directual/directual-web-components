import React, { useState } from 'react'
import styles from './profile.module.css'
import Input, { InputGroup } from '../dataentry/input/input'
import ActionPanel from '../actionspanel/actionspanel'
import Button from '../button/button'
import { FormSection } from '../dataentry/form/form'

export function Profile(props) {
    return (
        <div>profile</div>
    )
}

export function SignIn( {width, header, google, onSubmit}) {
    const submit = () => {
        onSubmit(loginDetails)
    }
    const [loginDetails,setLoginDetails] = useState({})
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
                label='Email address'
                onChange={value => setLoginDetails({...loginDetails, login:value})}
            />
            <Input
                type='password'
                label='Password'
                onChange={value => setLoginDetails({...loginDetails, password:value})}
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
