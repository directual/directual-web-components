import React, { useState, useEffect } from 'react'
import styles from './theme.module.css'
import Radio from '../dataentry/radio/radio'
import Input, { InputGroup } from '../dataentry/input/input'
import { FormSection } from '../dataentry/form/FpsForm'
import _ from 'lodash'
import TabsPane from '../layout/tabpane/tabpane'
import Checkbox from '../dataentry/checkbox/checkbox'
import Button from '../button/button'
import ActionPanel from '../actionspanel/actionspanel'


const customThemeColors = {
    button_border_color: '#8E8E8E',
    field_border_color: '#AAAAAA',
    table_border_color: 'rgba(0,0,0,0.12)',
    accent_color: '#058EFC',
    accent_transp_05_color: 'rgba(5,142,252,0.05)',
    secondary_accent_color: '#0062BD',
    button_accent_color: '#FFFFFF',
    background_color: '#FFFFFF',
    background_contrast_color: '#EEEEEE',
    secondary_background_color: '#EEEEEE',
    font_color: '#333333',
    header_color: '#333333',
    hint_color: '#333333',
    code_color: '#333333',
    code_color_background: '#FFFFFF',
    error_color: '#FF525B',
    error_color_light: '#FFD6D8',
    alert_color: '#ECA910',
    alert_color_light: '#F9DFA4',
    ok_color: '#00C197',
    ok_color_light: '#D6F8E5',
    label_color: '#26BE99',
    label_text_color: '#FFFFFF'
}

const customThemeColorNames = {
    button_border_color: 'Borders colour',
    field_border_color: 'Fields borders colour',
    table_border_color: 'Tables borders colour',
    accent_color: 'Accent colour',
    accent_transp_05_color: 'Accent transparent colour',
    secondary_accent_color: 'Secondary accent colour',
    button_accent_color: 'Accent button text colour',
    background_color: 'Main background colour',
    background_contrast_color: 'Background contrast colour',
    secondary_background_color: 'Secondary background colour',
    font_color: 'Main text colour',
    header_color: 'Headers colour',
    hint_color: 'Hint text colour',
    code_color: 'Code text colour',
    code_color_background: 'Code text background',
    error_color: 'Error colour',
    error_color_light: 'Error light colour',
    alert_color: 'ALert colour',
    alert_color_light: 'Alert light colour',
    ok_color: 'OK colour',
    ok_color_light: 'OK light colour',
    label_color: 'Labels colour',
    label_text_color: 'Labels text colour'
}

export function SetTheme({ themeName }) {

    // themeName is like {colors:'tiffany',radius:10}

    useEffect(() => {
        if (themeName.colorScheme) {
            setTheme(
                themeName.colorScheme,
                themeName.radius || 25,
                themeName.headersFont || 'Montserrat',
                themeName.fontText || 'Lato',
                themeName.headersFontWeight || '700',
                themeName.bodyFontWeight || '400',
                themeName.textSize || 16,
                themeName.h1size || 42,
                themeName.h2size || 30,
                themeName.h3size || 22,
                themeName.h3size || 22,
                themeName.customThemeColors || customThemeColors
            )
        } else { setTheme(themeName, 25, 'Montserrat', 'Lato', '700', '400', 16, 42, 30, 22) }
    }, [themeName])

    const setTheme = (colorScheme, radius, headersFont, fontText, headersFontWeight, bodyFontWeight,
        textSize, h1size, h2size, h3size) => {
        document.documentElement.style.setProperty('--headers-font-weight', headersFontWeight)
        document.documentElement.style.setProperty('--text-font-weight', bodyFontWeight)
        document.documentElement.style.setProperty('--headers-font-family', "'" + headersFont + "'" + ', sans-serif')
        document.documentElement.style.setProperty('--main-font-family', "'" + fontText + "'" + ', sans-serif')
        document.documentElement.style.setProperty('--border-radius', radius + 'px')
        document.documentElement.style.setProperty('--text-font-size', textSize + 'px')
        document.documentElement.style.setProperty('--h1-font-size', h1size + 'px')
        document.documentElement.style.setProperty('--h2-font-size', h2size + 'px')
        document.documentElement.style.setProperty('--h3-font-size', h3size + 'px')
        if (colorScheme === 'white') {
            document.documentElement.style.setProperty('--button-border-color', '#8E8E8E')
            document.documentElement.style.setProperty('--field-border-color', '#aaa')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(0,0,0,.12)')
            document.documentElement.style.setProperty('--accent-color', '#058efc')
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(5, 142, 252, 0.05)')
            document.documentElement.style.setProperty('--secondary-accent-color', '#0062BD')
            document.documentElement.style.setProperty('--button-accent-color', '#fff')
            document.documentElement.style.setProperty('--background-color', '#fff')
            document.documentElement.style.setProperty('--background-contrast-color', '#ddd')
            document.documentElement.style.setProperty('--secondary-background-color', '#fff')
            document.documentElement.style.setProperty('--font-color', '#333333')
            document.documentElement.style.setProperty('--header-color', '#333333')
            document.documentElement.style.setProperty('--hint-color', '#333')
            document.documentElement.style.setProperty('--code-color', '#333')
            document.documentElement.style.setProperty('--code-color-background', '#fff')
            document.documentElement.style.setProperty('--error-color', '#FF525B')
            document.documentElement.style.setProperty('--error-color-light', '#FFD6D8')
            document.documentElement.style.setProperty('--alert-color', '#ECA910')
            document.documentElement.style.setProperty('--alert-color-light', '#F9DFA4')
            document.documentElement.style.setProperty('--ok-color', '#00C197')
            document.documentElement.style.setProperty('--ok-color-light', '#D6F8E5')
            document.documentElement.style.setProperty('--label-color', '#B9E0CB')
            document.documentElement.style.setProperty('--label-text-color', '#333')
        }
        if (colorScheme === 'classic') {
            document.documentElement.style.setProperty('--button-border-color', '#8E8E8E')
            document.documentElement.style.setProperty('--field-border-color', '#aaa')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(0,0,0,.12)')
            document.documentElement.style.setProperty('--accent-color', '#058efc')
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(5, 142, 252, 0.05)')
            document.documentElement.style.setProperty('--secondary-accent-color', '#0062BD')
            document.documentElement.style.setProperty('--button-accent-color', '#ffffff')
            document.documentElement.style.setProperty('--background-color', '#ffffff')
            document.documentElement.style.setProperty('--background-contrast-color', '#eee')
            document.documentElement.style.setProperty('--secondary-background-color', '#eeeeee')
            document.documentElement.style.setProperty('--font-color', '#333333')
            document.documentElement.style.setProperty('--header-color', '#333333')
            document.documentElement.style.setProperty('--hint-color', '#333')
            document.documentElement.style.setProperty('--code-color', '#333')
            document.documentElement.style.setProperty('--code-color-background', '#fff')
            document.documentElement.style.setProperty('--error-color', '#FF525B')
            document.documentElement.style.setProperty('--error-color-light', '#FFD6D8')
            document.documentElement.style.setProperty('--alert-color', '#ECA910')
            document.documentElement.style.setProperty('--alert-color-light', '#F9DFA4')
            document.documentElement.style.setProperty('--ok-color', '#00C197')
            document.documentElement.style.setProperty('--ok-color-light', '#D6F8E5')
            document.documentElement.style.setProperty('--label-color', '#26BE99')
            document.documentElement.style.setProperty('--label-text-color', '#fff')
        }
        if (colorScheme === 'tiffany') {
            document.documentElement.style.setProperty('--button-border-color', '#8E8E8E')
            document.documentElement.style.setProperty('--field-border-color', '#aaa')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(0,0,0,.12)')
            document.documentElement.style.setProperty('--accent-color', '#4ad5c8')
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(74, 213, 200, 0.05)')
            document.documentElement.style.setProperty('--secondary-accent-color', '#37aea3')
            document.documentElement.style.setProperty('--button-accent-color', '#fff')
            document.documentElement.style.setProperty('--background-color', '#ffffff')
            document.documentElement.style.setProperty('--background-contrast-color', '#eee')
            document.documentElement.style.setProperty('--secondary-background-color', '#eeeeee')
            document.documentElement.style.setProperty('--font-color', '#333333')
            document.documentElement.style.setProperty('--header-color', '#333333')
            document.documentElement.style.setProperty('--hint-color', '#333')
            document.documentElement.style.setProperty('--code-color', '#333')
            document.documentElement.style.setProperty('--code-color-background', '#fff')
            document.documentElement.style.setProperty('--error-color', '#FF525B')
            document.documentElement.style.setProperty('--error-color-light', '#FFD6D8')
            document.documentElement.style.setProperty('--alert-color', '#ECA910')
            document.documentElement.style.setProperty('--alert-color-light', '#F9DFA4')
            document.documentElement.style.setProperty('--ok-color', '#00C197')
            document.documentElement.style.setProperty('--ok-color-light', '#D6F8E5')
            document.documentElement.style.setProperty('--label-color', '#FFCCA9')
            document.documentElement.style.setProperty('--label-text-color', '#333')
        }
        if (colorScheme === 'darkMint') {
            document.documentElement.style.setProperty('--button-border-color', '#2f00ff')
            document.documentElement.style.setProperty('--field-border-color', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--accent-color', '#1ae191')
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(26, 225, 145, 0.05)')
            document.documentElement.style.setProperty('--secondary-accent-color', '#00ff98')
            document.documentElement.style.setProperty('--button-accent-color', ' #131022')
            document.documentElement.style.setProperty('--background-color', '#1c1d3b')
            document.documentElement.style.setProperty('--background-contrast-color', '#131022')
            document.documentElement.style.setProperty('--secondary-background-color', '#131022')
            document.documentElement.style.setProperty('--font-color', '#fff')
            document.documentElement.style.setProperty('--header-color', '#fff')
            document.documentElement.style.setProperty('--hint-color', '#fff')
            document.documentElement.style.setProperty('--code-color', '#333')
            document.documentElement.style.setProperty('--code-color-background', 'rgba(255,255,255,0.7)')
            document.documentElement.style.setProperty('--error-color', '#FF525B')
            document.documentElement.style.setProperty('--error-color-light', '#6B4151')
            document.documentElement.style.setProperty('--alert-color', '#ECA910')
            document.documentElement.style.setProperty('--alert-color-light', '#665846')
            document.documentElement.style.setProperty('--ok-color', '#00C197')
            document.documentElement.style.setProperty('--ok-color-light', '#346266')
            document.documentElement.style.setProperty('--label-color', '#2f00ff')
            document.documentElement.style.setProperty('--label-text-color', 'rgba(255,255,255,.85)')
        }
        if (colorScheme === 'warmNight') {
            document.documentElement.style.setProperty('--button-border-color', '#ce9306')
            document.documentElement.style.setProperty('--field-border-color', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--accent-color', '#85c92e')
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(133, 201, 46, 0.05)')
            document.documentElement.style.setProperty('--secondary-accent-color', '#8fff00')
            document.documentElement.style.setProperty('--button-accent-color', ' #142025')
            document.documentElement.style.setProperty('--background-color', '#303d47')
            document.documentElement.style.setProperty('--background-contrast-color', '#142025')
            document.documentElement.style.setProperty('--secondary-background-color', '#142025')
            document.documentElement.style.setProperty('--font-color', '#c2c6cb')
            document.documentElement.style.setProperty('--header-color', '#c2c6cb')
            document.documentElement.style.setProperty('--hint-color', '#fff')
            document.documentElement.style.setProperty('--code-color', '#333')
            document.documentElement.style.setProperty('--code-color-background', 'rgba(255,255,255,0.7)')
            document.documentElement.style.setProperty('--error-color', '#ce4144')
            document.documentElement.style.setProperty('--error-color-light', '#763136')
            document.documentElement.style.setProperty('--alert-color', '#cd9300')
            document.documentElement.style.setProperty('--alert-color-light', '#745b0e')
            document.documentElement.style.setProperty('--ok-color', '#76ab24')
            document.documentElement.style.setProperty('--ok-color-light', '#476927')
            document.documentElement.style.setProperty('--label-color', '#ce9306')
            document.documentElement.style.setProperty('--label-text-color', 'rgba(255,255,255,.85)')
        }
        if (colorScheme === 'hacker') {
            document.documentElement.style.setProperty('--button-border-color', '#F8E71C')
            document.documentElement.style.setProperty('--field-border-color', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--accent-color', '#60FF00')
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(96, 255, 0, 0.05)')
            document.documentElement.style.setProperty('--secondary-accent-color', '#98fe5b')
            document.documentElement.style.setProperty('--button-accent-color', ' #000000')
            document.documentElement.style.setProperty('--background-color', '#333333')
            document.documentElement.style.setProperty('--background-contrast-color', '#000000')
            document.documentElement.style.setProperty('--secondary-background-color', '#000000')
            document.documentElement.style.setProperty('--font-color', '#fff')
            document.documentElement.style.setProperty('--header-color', '#60FF00')
            document.documentElement.style.setProperty('--hint-color', '#fff')
            document.documentElement.style.setProperty('--code-color', '#333')
            document.documentElement.style.setProperty('--code-color-background', 'rgba(255,255,255,0.7)')
            document.documentElement.style.setProperty('--error-color', '#ce4144')
            document.documentElement.style.setProperty('--error-color-light', '#763136')
            document.documentElement.style.setProperty('--alert-color', '#cd9300')
            document.documentElement.style.setProperty('--alert-color-light', '#745b0e')
            document.documentElement.style.setProperty('--ok-color', '#76ab24')
            document.documentElement.style.setProperty('--ok-color-light', '#476927')
            document.documentElement.style.setProperty('--label-color', '#F8E71C')
            document.documentElement.style.setProperty('--label-text-color', 'rgba(0,0,0,.85)')
        }
        if (colorScheme === 'raspberry') {
            document.documentElement.style.setProperty('--button-border-color', '#8E8E8E')
            document.documentElement.style.setProperty('--field-border-color', '#eaafa7')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(0,0,0,.12)')
            document.documentElement.style.setProperty('--accent-color', '#db004a')
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(219, 0, 74, 0.05)')
            document.documentElement.style.setProperty('--secondary-accent-color', '#d40037')
            document.documentElement.style.setProperty('--button-accent-color', '#fff')
            document.documentElement.style.setProperty('--background-color', '#ffffff')
            document.documentElement.style.setProperty('--background-contrast-color', '#f5e8e4')
            document.documentElement.style.setProperty('--secondary-background-color', '#f5e8e4')
            document.documentElement.style.setProperty('--font-color', '#333333')
            document.documentElement.style.setProperty('--header-color', '#db004a')
            document.documentElement.style.setProperty('--hint-color', '#333')
            document.documentElement.style.setProperty('--code-color', '#333')
            document.documentElement.style.setProperty('--code-color-background', '#fff')
            document.documentElement.style.setProperty('--error-color', '#FF525B')
            document.documentElement.style.setProperty('--error-color-light', '#FFD6D8')
            document.documentElement.style.setProperty('--alert-color', '#ECA910')
            document.documentElement.style.setProperty('--alert-color-light', '#F9DFA4')
            document.documentElement.style.setProperty('--ok-color', '#00C197')
            document.documentElement.style.setProperty('--ok-color-light', '#D6F8E5')
            document.documentElement.style.setProperty('--label-color', '#a6e97a')
            document.documentElement.style.setProperty('--label-text-color', 'rgba(0,0,0,.5)')
        }
        if (colorScheme === 'baltic') {
            document.documentElement.style.setProperty('--button-border-color', '#8E8E8E')
            document.documentElement.style.setProperty('--field-border-color', '#aaa')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(0,0,0,.12)')
            document.documentElement.style.setProperty('--accent-color', '#8ca3a3')
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(140, 163, 163, 0.05)')
            document.documentElement.style.setProperty('--secondary-accent-color', '#6a8d8d')
            document.documentElement.style.setProperty('--button-accent-color', '#ffffff')
            document.documentElement.style.setProperty('--background-color', '#fff')
            document.documentElement.style.setProperty('--background-contrast-color', '#eeefe7')
            document.documentElement.style.setProperty('--secondary-background-color', '#eeefe7')
            document.documentElement.style.setProperty('--font-color', '#515a5a')
            document.documentElement.style.setProperty('--header-color', '#515a5a')
            document.documentElement.style.setProperty('--hint-color', '#515a5a')
            document.documentElement.style.setProperty('--code-color', '#515a5a')
            document.documentElement.style.setProperty('--code-color-background', '#fff')
            document.documentElement.style.setProperty('--error-color', '#b2473d')
            document.documentElement.style.setProperty('--error-color-light', '#e2c3bf')
            document.documentElement.style.setProperty('--alert-color', '#ECA910')
            document.documentElement.style.setProperty('--alert-color-light', '#F9DFA4')
            document.documentElement.style.setProperty('--ok-color', '#588654')
            document.documentElement.style.setProperty('--ok-color-light', '#d7f1d5')
            document.documentElement.style.setProperty('--label-color', '#8f6d7d')
            document.documentElement.style.setProperty('--label-text-color', '#fff')
        }
        if (colorScheme === 'custom') {
            document.documentElement.style.setProperty('--button-border-color', _.get(themeName, 'customThemeColors.button_border_color') || customThemeColors.button_border_color)
            document.documentElement.style.setProperty('--field-border-color', _.get(themeName, 'customThemeColors.field_border_color') || customThemeColors.field_border_color)
            document.documentElement.style.setProperty('--table-border-color', _.get(themeName, 'customThemeColors.table_border_color') || customThemeColors.table_border_color)
            document.documentElement.style.setProperty('--accent-color', _.get(themeName, 'customThemeColors.accent_color') || customThemeColors.accent_color)
            document.documentElement.style.setProperty('--accent-transp-05-color', _.get(themeName, 'customThemeColors.accent_transp_05_color') || customThemeColors.accent_transp_05_color)
            document.documentElement.style.setProperty('--secondary-accent-color', _.get(themeName, 'customThemeColors.secondary_accent_color') || customThemeColors.secondary_accent_color)
            document.documentElement.style.setProperty('--button-accent-color', _.get(themeName, 'customThemeColors.button_accent_color') || customThemeColors.button_accent_color)
            document.documentElement.style.setProperty('--background-color', _.get(themeName, 'customThemeColors.background_color') || customThemeColors.background_color)
            document.documentElement.style.setProperty('--background-contrast-color', _.get(themeName, 'customThemeColors.background_contrast_color') || customThemeColors.background_contrast_color)
            document.documentElement.style.setProperty('--secondary-background-color', _.get(themeName, 'customThemeColors.secondary_background_color') || customThemeColors.secondary_background_color)
            document.documentElement.style.setProperty('--font-color', _.get(themeName, 'customThemeColors.font_color') || customThemeColors.font_color)
            document.documentElement.style.setProperty('--header-color', _.get(themeName, 'customThemeColors.header_color') || customThemeColors.header_color)
            document.documentElement.style.setProperty('--hint-color', _.get(themeName, 'customThemeColors.hint_color') || customThemeColors.hint_color)
            document.documentElement.style.setProperty('--code-color', _.get(themeName, 'customThemeColors.code_color') || customThemeColors.code_color)
            document.documentElement.style.setProperty('--code-color-background', _.get(themeName, 'customThemeColors.code_color_background') || customThemeColors.code_color_background)
            document.documentElement.style.setProperty('--error-color', _.get(themeName, 'customThemeColors.error_color') || customThemeColors.error_color)
            document.documentElement.style.setProperty('--error-color-light', _.get(themeName, 'customThemeColors.error_color_light') || customThemeColors.error_color_light)
            document.documentElement.style.setProperty('--alert-color', _.get(themeName, 'customThemeColors.alert_color') || customThemeColors.alert_color)
            document.documentElement.style.setProperty('--alert-color-light', _.get(themeName, 'customThemeColors.alert_color_light') || customThemeColors.alert_color_light)
            document.documentElement.style.setProperty('--ok-color', _.get(themeName, 'customThemeColors.ok_color') || customThemeColors.ok_color)
            document.documentElement.style.setProperty('--ok-color-light', _.get(themeName, 'customThemeColors.ok_color_light') || customThemeColors.ok_color_light)
            document.documentElement.style.setProperty('--label-color', _.get(themeName, 'customThemeColors.label_color') || customThemeColors.label_color)
            document.documentElement.style.setProperty('--label-text-color', _.get(themeName, 'customThemeColors.label_text_color') || customThemeColors.label_text_color)
        }

    }
    return null
}



export default function FpsTheme(props) {
    const options =
        [
            {
                value: 'classic',
                label: 'Directual Blue',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/50790519-1bd7-4fcb-ac77-b6ad2fe8e161.svg'
            },
            {
                value: 'white',
                label: 'Snow White',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/9129ba57-2a1d-4644-9d75-9634d5b576b4.svg'
            },
            {
                value: 'tiffany',
                label: 'Tiffany Blue',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/9eb3e82a-2293-47f6-992e-899daaaa6369.svg'
            },
            {
                value: 'darkMint',
                label: 'Denim-Mint',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/d200bdab-d4af-44f2-b5e9-e3e3b15d94d2.svg'
            },
            {
                value: 'warmNight',
                label: 'Warm Night',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/037fb9e9-b9b5-4e0d-b335-1ce331b112b9.svg'
            },
            {
                value: 'hacker',
                label: 'Hacker Style',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/de91e0cc-62d1-4d89-ae59-264368763397.svg'
            },
            {
                value: 'raspberry',
                label: 'Raspberry',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/b2eee4fa-fbbb-4f83-a2f4-bbcb248f481e.svg'
            },
            {
                value: 'baltic',
                label: 'Baltic',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/44fbcd36-9525-45d1-ab10-32f57562b8a3.svg'
            },
            {
                value: 'custom',
                label: 'Custom theme',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/c407d11f-bf59-4ef7-9c5a-7fb1d904d1c6.svg'
            },
        ]

    const userOptions = (props.themes && options.filter(option => props.themes.indexOf(option.value) != -1)) || options

    const [selectedColorScheme, setSelectedColorScheme] = useState(
        {
            colorScheme: props.defaultValue.colorScheme || options[0].value,
            radius: props.defaultValue.radius || 25,
            headersFont: props.defaultValue.headersFont || 'Montserrat',
            fontText: props.defaultValue.fontText || 'Lato',
            headersFontWeight: props.defaultValue.headersFontWeight || '700',
            bodyFontWeight: props.defaultValue.bodyFontWeight || '400',
            textSize: props.defaultValue.textSize || 16,
            h1size: props.defaultValue.h1size || 42,
            h2size: props.defaultValue.h2size || 30,
            h3size: props.defaultValue.h3size || 22,
            customThemeColors: props.defaultValue.customThemeColors,
            desktopMenu: props.defaultValue.desktopMenu || 'left',
            mobileMenu: props.defaultValue.mobileMenu || 'right',
        }
    )

    useEffect(() => {
        selectedColorScheme && props.onChange && props.onChange(selectedColorScheme)
    }, [selectedColorScheme])

    const fontFaces = [
        { key: 'Montserrat', value: 'Montserrat' },
        { key: 'Lato', value: 'Lato' },
        { key: 'Merriweather', value: 'Merriweather' },
        { key: 'Oswald', value: 'Oswald' },
        { key: 'Rubik', value: 'Rubik' },
        { key: 'Ubuntu', value: 'Ubuntu' },
        { key: 'Courier New', value: 'Courier New' },
        { key: 'Cuprum', value: 'Cuprum' },
        { key: 'Nunito', value: 'Nunito' },
        { key: 'Playfair Display', value: 'Playfair Display' },
        { key: 'Alice', value: 'Alice' },
        { key: 'Bitter', value: 'Bitter' },
        { key: 'Fira Sans', value: 'Fira Sans' },
        { key: 'Gabriela', value: 'Gabriela' },
        { key: 'Orelega One', value: 'Orelega One' },
        { key: 'Philosopher', value: 'Philosopher' },
        { key: 'Poppins', value: 'Poppins' },
        { key: 'Chakra Petch', value: 'Chakra Petch' },
        { key: 'Comfortaa', value: 'Comfortaa' },
        { key: 'Kanit', value: 'Kanit' },
        { key: 'Noto Serif JP', value: 'すべての (Noto Serif)' },
    ]
    const fontWeights = [
        { key: '900', value: 'Black 900' },
        { key: '700', value: 'Bold 700' },
        { key: '500', value: 'Medium 500' },
        { key: '400', value: 'Regular 400' },
        { key: '300', value: 'Light 300' },
    ]

    const parseJson = json => {
        let parsedJson = {}
        if (typeof json == 'object') return json
        try {
            parsedJson = JSON.parse(json)
        }
        catch (e) {
            console.log(json);
            console.log(e);
        }
        return parsedJson
    }

    const stringifyJson = json => {
        if (typeof json == 'string') return json
        return JSON.stringify(json)
    }

    const [dummyText, setDummyText] = useState('The quick brown fox jumps over the lazy dog')

    const deepCloneCustomThemeColors = JSON.parse(JSON.stringify(customThemeColors))

    const [themeRawView, setThemeRawView] = useState(false)

    useEffect(() => {
        if (!selectedColorScheme.customThemeColors || customThemeColors.customThemeColors == {}) {
            const saveCS = { ...selectedColorScheme, customThemeColors: { ...deepCloneCustomThemeColors } }
            setSelectedColorScheme(saveCS)
        }
    }, [])

    const myCustomTheme = <div>
        <Checkbox className={styles.checkbox} label='Raw mode (JSON)' defaultValue={themeRawView} onChange={setThemeRawView} />
        {!themeRawView ? <div>
            <span className={styles.colorTip}>Use HEX, e.g. <code>#123000</code> or RGBA, e.g. <code>rgba(0,0,0,0.5)</code></span>
            <div className={styles.horInputs}>
                {Object.keys(customThemeColors).map(key => <Input
                    type='colour'
                    label={customThemeColorNames[key]}
                    height={props.height}
                    width={290}
                    className={styles.input}
                    code
                    defaultValue={_.get(selectedColorScheme, `customThemeColors.${key}`)}
                    onChange={value => {
                        let correctedValue = !value ? '' : (value[0] == '#' || value[0] == 'r') ? value : '#' + value
                        const copyCS = { ...selectedColorScheme }
                        _.set(copyCS, `customThemeColors.${key}`, correctedValue)
                        setSelectedColorScheme(copyCS)
                    }}
                />)}
            </div></div> :
            <Input type="json"
                description='Share this JSON as your custom colouring scheme with other Directual users'
                onChange={value => setSelectedColorScheme({ ...selectedColorScheme, customThemeColors: parseJson(value) })}
                rows='auto' defaultValue={stringifyJson(_.merge({ ...customThemeColors }, selectedColorScheme.customThemeColors))} />}
        <ActionPanel>
            <Button danger
                icon='ban'
                onClick={() => {
                    const saveCS = { ...selectedColorScheme, customThemeColors: { ...deepCloneCustomThemeColors } }
                    setSelectedColorScheme(saveCS)
                }}
            >Reset colour scheme to default&nbsp;<strong>Directual Blue</strong></Button>
        </ActionPanel>
    </div>

    const tabs = [
        { key: 'myTheme', title: 'My custom theme', content: myCustomTheme },
    ]

    return (
        <div className={styles.themeSettings}>
            <div className={styles.horInputs}>
                <Input
                    type='radio'
                    width={250}
                    className={styles.input}
                    label='Desktop menu layout'
                    options={[
                        { value: 'left', label: 'Left side' },
                        { value: 'top', label: 'Top side' },
                    ]}
                    defaultValue={selectedColorScheme.desktopMenu}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, desktopMenu: value })}
                />
                <Input
                    type='radio'
                    width={250}
                    className={styles.input}
                    label='Mobile menu layout'
                    options={[
                        { value: 'right', label: 'On the right' },
                        { value: 'left', label: 'On the left' },
                    ]}
                    defaultValue={selectedColorScheme.mobileMenu}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, mobileMenu: value })}
                />
            </div>
            <Input
                type='radio'
                label='Choose color scheme'
                radioImages
                options={userOptions}
                defaultValue={selectedColorScheme.colorScheme}
                onChange={value => setSelectedColorScheme({ ...selectedColorScheme, colorScheme: value })}
            />
            {selectedColorScheme.colorScheme == 'custom' && <React.Fragment>
                <FormSection title='Custom coloring scheme' />
                <TabsPane tabs={tabs}
                    hideSingleTab
                    currentTabKey='myTheme' fixedScroll={false} />
            </React.Fragment>}
            <FormSection title='Typography' />
            <Input
                type='number'
                label='Border radius'
                positive
                height={props.height}
                unitName='px'
                width={150}
                defaultValue={selectedColorScheme.radius}
                onChange={value => value ? setSelectedColorScheme({ ...selectedColorScheme, radius: value }) : setSelectedColorScheme({ ...selectedColorScheme, radius: 'none' })}
            />
            <div className={styles.horInputs} style={{ fontFamily: selectedColorScheme.headersFont, fontWeight: selectedColorScheme.headersFontWeight }}>
                <Input
                    type="select"
                    className={styles.input}
                    width={250}
                    label="Headers font family"
                    height={props.height}
                    defaultValue={selectedColorScheme.headersFont}
                    options={fontFaces}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, headersFont: value })}
                />
                <Input
                    type='select'
                    width={250}
                    className={styles.input}
                    height={props.height}
                    label="Headers font weight"
                    options={fontWeights}
                    defaultValue={selectedColorScheme.headersFontWeight}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, headersFontWeight: value })}
                />
            </div>

            <div className={styles.horInputs}>
                <Input
                    type="select"
                    width={250}
                    className={styles.input}
                    label="Text font family"
                    height={props.height}
                    defaultValue={selectedColorScheme.fontText}
                    options={fontFaces}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, fontText: value })}
                />
                <Input
                    type='select'
                    label="Text font weight"
                    height={props.height}
                    width={250}
                    className={styles.input}
                    options={fontWeights}
                    defaultValue={selectedColorScheme.bodyFontWeight}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, bodyFontWeight: value })}
                />
            </div>
            <div className={styles.horInputs}>
                <Input
                    type='number'
                    label='Text size'
                    positive
                    height={props.height}
                    className={styles.input}
                    unitName='px'
                    width={120}
                    defaultValue={selectedColorScheme.textSize}
                    onChange={value => value ? setSelectedColorScheme({ ...selectedColorScheme, textSize: value }) : setSelectedColorScheme({ ...selectedColorScheme, textSize: 16 })}
                />
                <Input
                    type='number'
                    label='H1 size'
                    positive
                    height={props.height}
                    className={styles.input}
                    unitName='px'
                    width={120}
                    defaultValue={selectedColorScheme.h1size}
                    onChange={value => value ? setSelectedColorScheme({ ...selectedColorScheme, h1size: value }) : setSelectedColorScheme({ ...selectedColorScheme, h1size: 42 })}
                />
                <Input
                    type='number'
                    label='H2 size'
                    positive
                    height={props.height}
                    className={styles.input}
                    unitName='px'
                    width={120}
                    defaultValue={selectedColorScheme.h2size}
                    onChange={value => value ? setSelectedColorScheme({ ...selectedColorScheme, h2size: value }) : setSelectedColorScheme({ ...selectedColorScheme, h2size: 30 })}
                />
                <Input
                    type='number'
                    label='H3 size'
                    positive
                    height={props.height}
                    className={styles.input}
                    unitName='px'
                    width={120}
                    defaultValue={selectedColorScheme.h3size}
                    onChange={value => value ? setSelectedColorScheme({ ...selectedColorScheme, h3size: value }) : setSelectedColorScheme({ ...selectedColorScheme, h3size: 22 })}
                />
            </div>
            <FormSection title='Typography Example' />
            <Input
                defaultValue={dummyText}
                onChange={value => setDummyText(value)}
                label='Dummy text'
                width={500}
            />
            <h1
                style={{
                    fontFamily: selectedColorScheme.headersFont,
                    fontWeight: selectedColorScheme.headersFontWeight,
                    padding: 0,
                    marginBottom: 12,
                    fontSize: selectedColorScheme.h1size
                }}
            >H1: {dummyText}</h1>
            <h2
                style={{
                    fontFamily: selectedColorScheme.headersFont,
                    fontWeight: selectedColorScheme.headersFontWeight,
                    padding: 0,
                    marginBottom: 12,
                    fontSize: selectedColorScheme.h2size
                }}
            >H2: {dummyText}</h2>
            <h3
                style={{
                    fontFamily: selectedColorScheme.headersFont,
                    fontWeight: selectedColorScheme.headersFontWeight,
                    marginBottom: 12,
                    padding: 0,
                    fontSize: selectedColorScheme.h3size
                }}
            >H3: {dummyText}</h3>
            <p
                style={{
                    fontFamily: selectedColorScheme.fontText,
                    fontWeight: selectedColorScheme.bodyFontWeight,
                    padding: 0,
                    marginTop: 0,
                    marginBottom: 12,
                    lineHeight: 'normal',
                    fontSize: selectedColorScheme.textSize
                }}
            >{dummyText}! {dummyText}? {dummyText}.</p>
            <FormSection title='Branding' />
        </div>
    )
}
