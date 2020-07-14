import React, { useState, useEffect } from 'react'
import styles from './theme.module.css'
import Radio from '../dataentry/radio/radio'
import Input, { InputGroup } from '../dataentry/input/input'

export function SetTheme({ themeName }) {

    // themeName is like {colors:'tiffany',radius:10}

    useEffect(() => {
        if (themeName.colorScheme) {
            setTheme(themeName.colorScheme, themeName.radius || 25, themeName.headersFont || 'Montserrat', themeName.fontText || 'Lato', themeName.headersFontWeight || '700', themeName.bodyFontWeight || '400')
        } else { setTheme(themeName, 25, 'Montserrat', 'Lato', '700', '400') }
    }, [themeName])




    const setTheme = (colorScheme, radius, headersFont, fontText, headersFontWeight, bodyFontWeight) => {
        document.documentElement.style.setProperty('--headers-font-weight', headersFontWeight)
        document.documentElement.style.setProperty('--text-font-weight', bodyFontWeight)
        document.documentElement.style.setProperty('--headers-font-family', "'" + headersFont + "'" + ', sans-serif')
        document.documentElement.style.setProperty('--main-font-family', "'" + fontText + "'" + ', sans-serif')
        document.documentElement.style.setProperty('--border-radius', radius + 'px')
        if (colorScheme === 'white') {
            document.documentElement.style.setProperty('--button-border-color', '#8E8E8E')
            document.documentElement.style.setProperty('--field-border-color', '#aaa')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(0,0,0,.12)')
            document.documentElement.style.setProperty('--accent-color', '#058efc')
            document.documentElement.style.setProperty('--secondary-accent-color', '#0062BD')
            document.documentElement.style.setProperty('--button-accent-color', '#fff')
            document.documentElement.style.setProperty('--background-color', '#fff')
            document.documentElement.style.setProperty('--background-contrast-color', '#ddd')
            document.documentElement.style.setProperty('--secondary-background-color', '#fff')
            document.documentElement.style.setProperty('--font-color', '#333333')
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
            document.documentElement.style.setProperty('--secondary-accent-color', '#0062BD')
            document.documentElement.style.setProperty('--button-accent-color', '#ffffff')
            document.documentElement.style.setProperty('--background-color', '#ffffff')
            document.documentElement.style.setProperty('--background-contrast-color', '#eee')
            document.documentElement.style.setProperty('--secondary-background-color', '#eeeeee')
            document.documentElement.style.setProperty('--font-color', '#333333')
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
        if (colorScheme === 'tiffany') {
            document.documentElement.style.setProperty('--button-border-color', '#8E8E8E')
            document.documentElement.style.setProperty('--field-border-color', '#aaa')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(0,0,0,.12)')
            document.documentElement.style.setProperty('--accent-color', '#4ad5c8')
            document.documentElement.style.setProperty('--secondary-accent-color', '#37aea3')
            document.documentElement.style.setProperty('--button-accent-color', '#fff')
            document.documentElement.style.setProperty('--background-color', '#ffffff')
            document.documentElement.style.setProperty('--background-contrast-color', '#eee')
            document.documentElement.style.setProperty('--secondary-background-color', '#eeeeee')
            document.documentElement.style.setProperty('--font-color', '#333333')
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
            document.documentElement.style.setProperty('--secondary-accent-color', '#00ff98')
            document.documentElement.style.setProperty('--button-accent-color', ' #131022')
            document.documentElement.style.setProperty('--background-color', '#131022')
            document.documentElement.style.setProperty('--background-contrast-color', '#1c1d3b')
            document.documentElement.style.setProperty('--secondary-background-color', '#1c1d3b')
            document.documentElement.style.setProperty('--font-color', '#fff')
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
            document.documentElement.style.setProperty('--secondary-accent-color', '#8fff00')
            document.documentElement.style.setProperty('--button-accent-color', ' #142025')
            document.documentElement.style.setProperty('--background-color', '#303d47')
            document.documentElement.style.setProperty('--background-contrast-color', '#142025')
            document.documentElement.style.setProperty('--secondary-background-color', '#142025')
            document.documentElement.style.setProperty('--font-color', '#c2c6cb')
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
            document.documentElement.style.setProperty('--secondary-accent-color', '#98fe5b')
            document.documentElement.style.setProperty('--button-accent-color', ' #000000')
            document.documentElement.style.setProperty('--background-color', '#333333')
            document.documentElement.style.setProperty('--background-contrast-color', '#000000')
            document.documentElement.style.setProperty('--secondary-background-color', '#000000')
            document.documentElement.style.setProperty('--font-color', '#fff')
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
            }
        ]

    const userOptions = (props.themes && options.filter(option => props.themes.indexOf(option.value) != -1)) || options

    const [selectedColorScheme, setSelectedColorScheme] = useState(
        {
            colorScheme: props.defaultValue.colorScheme || options[0].value,
            radius: props.defaultValue.radius || 25,
            headersFont: props.defaultValue.headersFont || 'Montserrat',
            fontText: props.defaultValue.fontText || 'Lato',
            headersFontWeight: props.defaultValue.headersFontWeight || '700',
            bodyFontWeight: props.defaultValue.bodyFontWeight || '400'
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
    ]
    const fontWeights = [
        { key: '900', value: 'Black 900' },
        { key: '700', value: 'Bold 700' },
        { key: '500', value: 'Medium 500' },
        { key: '400', value: 'Regular 400' },
        { key: '300', value: 'Light 300' },
    ]

    return (
        <React.Fragment>
            <Input
                type='radio'
                label='Choose color scheme'
                radioImages
                options={userOptions}
                defaultValue={selectedColorScheme.colorScheme}
                onChange={value => setSelectedColorScheme({ ...selectedColorScheme, colorScheme: value })}
            />
            <Input
                type='number'
                label='Border radius'
                positive
                unitName='px'
                width={150}
                defaultValue={selectedColorScheme.radius}
                onChange={value => value ? setSelectedColorScheme({ ...selectedColorScheme, radius: value }) : setSelectedColorScheme({ ...selectedColorScheme, radius: 'none' })}
            />
            <InputGroup
                width={500}>
                <Input
                    type="select"
                    label="Headers font face"
                    defaultValue={selectedColorScheme.headersFont}
                    options={fontFaces}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, headersFont: value })}
                />
                <Input
                    type='select'
                    label="Headers font weight"
                    options={fontWeights}
                    defaultValue={selectedColorScheme.headersFontWeight}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, headersFontWeight: value })}
                />
            </InputGroup>
            <InputGroup
                width={500}>
                <Input
                    type="select"
                    label="Text font face"
                    defaultValue={selectedColorScheme.fontText}
                    options={fontFaces}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, fontText: value })}
                />
                <Input
                    type='select'
                    label="Text font weight"
                    options={fontWeights}
                    defaultValue={selectedColorScheme.bodyFontWeight}
                    onChange={value => setSelectedColorScheme({ ...selectedColorScheme, bodyFontWeight: value })}
                />
            </InputGroup>
        </React.Fragment>
    )
}
