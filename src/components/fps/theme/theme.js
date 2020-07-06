import React, { useState, useEffect } from 'react'
import styles from './theme.module.css'
import Radio from '../dataentry/radio/radio'
import Input from '../dataentry/input/input'

export function SetTheme({ themeName }) {

    // themeName is like {colors:'tiffany',radius:10}

    useEffect(() => {
        if (themeName.colorScheme) {
            setTheme(themeName.colorScheme, themeName.radius || 25)
        } else {setTheme(themeName, 25)}
    }, [themeName])

    
    

    const setTheme = (colorScheme,radius) => {
        document.documentElement.style.setProperty('--border-radius', radius + 'px')
        if (colorScheme === 'classic') {
            document.documentElement.style.setProperty('--button-border-color', '#8E8E8E')
            document.documentElement.style.setProperty('--field-border-color', '#aaa')
            document.documentElement.style.setProperty('--table-border-color', 'rgba(0,0,0,.12)')
            document.documentElement.style.setProperty('--accent-color', '#058efc')
            document.documentElement.style.setProperty('--secondary-accent-color', '#0062BD')
            document.documentElement.style.setProperty('--button-accent-color', '#fff')
            document.documentElement.style.setProperty('--background-color', '#ffffff')
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
    // const [themeName, setThemeName] = useState(props.themeName || 'dd')

    // const logoDarkTheme = props.logoDarkTheme || ''
    // const logoLightTheme = props.logoLightTheme || ''

    // let currentTheme

    // if (typeof window !== 'undefined') { currentTheme = localStorage.getItem(themeName + '-theme') }
    // !currentTheme && (currentTheme = 'classic')

    // let currentBR
    // if (typeof window !== 'undefined') { currentBR = localStorage.getItem(themeName + '-br') }
    // !currentBR && (currentBR = '25')

    // const setBR = radius => {
    //     if (typeof window === 'undefined') return
    //     if (typeof window !== 'undefined') { localStorage.setItem(themeName + '-br', radius) }
    // }



    // currentTheme && setTheme(currentTheme)
    // const changeTheme = e => setTheme(e.target.value)

    // currentBR && setBR(currentBR)
    // const changeBR = e => setBR(e)

    // const userOptions = (props.themes && options.filter(option => props.themes.indexOf(option.value) != -1)) || options

    const options =
        [
            {
                value: 'classic',
                label: 'Directual Blue',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/50790519-1bd7-4fcb-ac77-b6ad2fe8e161.svg'
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
            radius: props.defaultValue.radius || 25
        }
    )

    useEffect(()=>{
        selectedColorScheme && props.onChange && props.onChange(selectedColorScheme)
    },[selectedColorScheme])

    const fontHeaders = [
        {key: 'Montserrat', value: 'Montserrat Black'}
    ]
    const fontText = [
        {key: 'Lato', value: 'Lato'}
    ]

    return (
        <React.Fragment>
            <Input
                type='radio'
                label='Choose color scheme'
                radioImages
                options={userOptions}
                defaultValue={selectedColorScheme.colorScheme}
                onChange={value => setSelectedColorScheme({...selectedColorScheme, colorScheme: value})}
            />
            <Input
                type='number'
                label='Border radius'
                positive
                width={150}
                defaultValue={selectedColorScheme.radius}
                onChange={value => value ? setSelectedColorScheme({...selectedColorScheme, radius: value}) : setSelectedColorScheme({...selectedColorScheme, radius: 0})}
            />
            <Input
                type="select"
                label="Headers font face"
                defaultValue='Montserrat'
                options={fontHeaders}
                width={300}
                disabled
            />
            <Input
                type="select"
                label="Text font face"
                defaultValue='Lato'
                options={fontText}
                width={300}
                disabled
            />
        </React.Fragment>
    )
}
