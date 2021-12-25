import React from 'react'
import icon from './../../../icons/fps-button.svg'
import Button from './button'
// import Input from '../dataentry/input/input'
// import ActionPanel from '../actionspanel/actionspanel'
import { ComponentWrapper } from '../wrapper/wrapper'

export default function FpsButton({ data, handleRoute }) {

    const href = data.href || '/'
    const icon = data.icon || ''
    const buttonColor = data.buttonColor
    const iconSize = data.size
    const height = data.height
    return (
        <ComponentWrapper>
            <Button
                onClick={handleRoute(href)}
                small={iconSize == 'small'}
                verySmall={iconSize == 'verySmall'}
                icon={icon}
                accent={buttonColor == 'accent'}
                danger={buttonColor == 'danger'}
                height={height}>
                {data.buttonLabel}
            </Button>
        </ComponentWrapper>
    )
}

FpsButton.settings = {
    icon: icon,
    name: "Link button",
    sysName: 'FpsButton',
    form: [
        { name: "Label", sysName: "buttonLabel", type: "string" },
        // { name: "Type", sysName: "type", type: "buttonOrLink" },
        { name: "Colour", sysName: "buttonColor", type: "buttonType" },
        { name: 'Link to', sysName: 'href', type: 'linkTo' },
        { name: 'Icon', sysName: 'icon', type: 'icon' },
        { name: 'Icon size', sysName: 'size', type: 'iconSize' },
        { name: 'Height, px', sysName: 'height', type: 'number' },
        { name: 'Apply template engine', sysName: 'withTemplate', type: 'boolean' },
    ]
}

