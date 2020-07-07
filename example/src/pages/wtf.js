import React from 'react'
import {
    Hint, Article, CodeSnippet
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function WhatIsIt() {
    return (
        <Article>
            <h1>Introducing Directual Design</h1>
            <img src="https://api.alfa.directual.com/fileUploaded/directual-site/11eb37d9-698f-43ae-afbf-4e4e9afc4d0b.jpg" />
            <h2>What is it?</h2>
            <p>Directual Design is an open-source React-components library and the part
                of <a href="http://directual.com/?ref=directul.design">Directual</a> low-code platform.
            </p><p>It is not yet another components library like Material UI. 
                Directual Design is scpecially designed for building components for Directual <a href="https://readme.directual.com/web-pages/portal">web-page builder</a>.
             </p>
             <p>There are two parts of the components library:</p>
             <ul>
                 <li><strong>Design System</strong> includes such basic controls as buttons, inputs, selects, icons, hints,
                etc.</li>
                <li><strong>Web-pages components</strong> include significant components like form, table, cards, chat, payments, canban board, etc. These you can find creating your app on Directual platform.</li>
             </ul>
            <p>Feel free to use Directual Design components in your React-based projects, as well as to become a contributor creating new components.</p>
            <p>Github repo:
                <a className="inline icon icon-export" href="https://github.com/directual/directual-web-components#readme" target="_blank">directual-web-components</a></p>
            <h2>Motivation</h2>
            <p>Directual has always been a perfect tool for setting up backend for web and mobile apps. The combination of React + Directual seems to be
                the best choice for developing complex web app. Bearing in mind Directual motto to <strong>let people create</strong>, our team
                started creating web-page builder as a part of Dirctual platform. Having that, non-technical builders will be able to develop their apps. 
            </p><p>
            The variety of use cases in front-end development of user-interface controls is immense. That motivated us to make our front-end part of the platform <strong>open source</strong>.
                We called that project Directual Design. It stands on the following principles:
            </p>
            <ul>
                <li>Providing developers with high-quality React-components which they can apply in their projects. You are
                    free to choose any backend technology, but <a href="https://readme.directual.com/directual-react-js/boilerplate-for-react-js">Directual has proved</a> to be the highly efficient one.
                </li>
                <li>
                    Engaging developers in using Directual <a href="https://readme.directual.com/web-pages/portal">web-page builder</a>. If you face a need for a new specific component, you can develop it yourself and then add to the library.
                </li>
            </ul>
            <h2>Using the library</h2>
            <p>Probably, more than 90% of Directual users will deal with Directual Design components on Directual web-page builder. If you are a developer and want to use the library in your React-app, here is the way:</p>
            <p>Installation: <code>npm install directual-web-components</code></p>
            <p>Example of usage:</p>
            <CodeSnippet expanded code={`import React from 'react'

import { Button } from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export function Example() {
return
    <Button onClick={()=>alert('Hello world!')}>
        Say hello to the world!
    </Button>
}`} />
            <h2>Building new components for Web-page builder</h2>
            <p>There is Directual web-page builder API (it is called <code>fps-api</code>), which
                adds components to the platform and renders settings-form based on <code>.settings</code> method. Example:</p>
            <CodeSnippet expanded code={`
export function FpsForm(props) {
    // component body
}
FpsForm.settings = {
    icon: icon,
    name: 'Form',
    sysName: 'FpsForm',
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' }, // this is the way to get/post data
        { name: 'Form title', sysName: 'formName', type: 'input' },
        { name: 'Form description', sysName: 'formDesc', type: 'textarea' },
        { name: 'Submit button text', sysName: 'formButton', type: 'input' },
        { name: 'Form max width, px', sysName: 'maxWidth', type: 'number' },
    ]
}`} />
            <h2>Contact us</h2>
            <p>Should any questions or suggestions appear, feel free to reach us out via
                email <a href="mailto:hello@directual.com">hello@directual.com</a> or
                on <a href="http://forum.directual.com/" target="_blank">Community forum</a>.</p>
            <p>We hope you enjoy Directual experience!</p>
        </Article>
    )
}