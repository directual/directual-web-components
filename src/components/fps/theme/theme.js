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
    classic: {
        menu_bgr: "#ffffff",
        menu_border_color: "#eeeeee",
        menu_item: "#999999",
        menu_item_hover: "#333333",
        menu_item_selected: "#058efc",
        menu_group: "#333333",

        // Button _ regular
        button_bgr: "#ffffff",
        button_border: "#8e8e8e",
        button_text: "#333333",

        button_hover_bgr: "#ffffff",
        button_hover_border: "#8e8e8e",
        button_hover_text: "#333333",

        button_active_bgr: "#8e8e8e",
        button_active_border: "#333333",
        button_active_text: "#ffffff",

        button_dropdown_hover_bgr: "rgba(5, 142, 252, 0.05)",

        // Button _ accent
        button_accent_bgr: "#058efc",
        button_accent_border: "#058efc",
        button_accent_text: "#ffffff",

        button_accent_hover_bgr: "#0062bd",
        button_accent_hover_border: "#0062bd",
        button_accent_hover_text: "#ffffff",

        button_accent_active_bgr: "#333333",
        button_accent_active_border: "#333333",
        button_accent_active_text: "#ffffff",

        // Button _ danger
        button_danger_bgr: "#ffffff",
        button_danger_border: "#8e8e8e",
        button_danger_text: "#333333",

        button_danger_hover_bgr: "#ff525b",
        button_danger_hover_border: "#ff525b",
        button_danger_hover_text: "#ffffff",

        button_danger_active_bgr: "#333333",
        button_danger_active_border: "#333333",
        button_danger_active_text: "#ffffff",

        // Table
        table_borders: "rgba(0, 0, 0, 0.12)",
        table_raw_hover: "rgba(5, 142, 252, 0.05)",

        // Cards
        cards_bgr: "#ffffff",
        cards_border: "#aaaaaa",
        cards_hover_bgr: "#ffffff",
        cards_hover_border: "#aaaaaa",
        cards_notification: "#ff525b",

        // Layout
        layout_bgr: "#eeeeee",
        layout_secondary_bgr: "#ffffff",
        layout_accent: "#058efc",
        layout_accent_hover: "#0062bd",
        layout_text: "#333333",
        layout_headers: "#333333",

        // Forms
        form_field_border: "#aaaaaa",
        form_field_bgr: "#ffffff",
        form_placeholder: "#333333",
        form_placeholder_disabled: "#999999",
        form_field_border_disabled: "#bbbbbb",
        form_field_bgr_disabled: "#cccccc",
        form_accent: "#058efc",

        // Code blocks
        code: "#333333",
        code_background: "#fff",

        // Hints
        hint_error: "#ff525b",
        hint_error_light: "#ffd6d8",
        hint_alert: "#eca910",
        hint_alert_light: "#f9dfa4",
        hint_ok: "#00c197",
        hint_ok_light: "#d6f8e5",
        hint_text_color: "#333333",

        // Labels (tags)
        label: "#26be99",
        label_text: "#fff",
    }

}

const customThemeColorNames = {
    menu_bgr: "Menu | Background color",
    menu_border_color: "Menu | Border color",
    menu_item: "Menu | Item color",
    menu_item_hover: "Menu | Hevered ttem color",
    menu_item_selected: "Menu | Selected item color",
    menu_group: "Menu | Subheader (group) color",

    // Button _ regular
    button_bgr: "Button | Regular | Button color",
    button_border: "Button | Regular | Border color",
    button_text: "Button | Regular | Text color",

    button_hover_bgr: "Button | Regular | Hover button color",
    button_hover_border: "Button | Regular | Hover border color",
    button_hover_text: "Button | Regular | Hover text color",

    button_active_bgr: "Button | Regular | Active button color",
    button_active_border: "Button | Regular | Active border color",
    button_active_text: "Button | Regular | Active text color",

    button_dropdown_hover_bgr: "Button | Dropdown | Hover color",

    // Button _ accent
    button_accent_bgr: "Button | Accent | Button color",
    button_accent_border: "Button | Accent | Border color",
    button_accent_text: "Button | Accent | Text color",

    button_accent_hover_bgr: "Button | Accent | Hover button color",
    button_accent_hover_border: "Button | Accent | Hover border color",
    button_accent_hover_text: "Button | Accent | Hover text color",

    button_accent_active_bgr: "Button | Accent | Active button color",
    button_accent_active_border: "Button | Accent | Active border color",
    button_accent_active_text: "Button | Accent | Active text color",

    // Button _ danger
    button_danger_bgr: "Button | Danger | Button color",
    button_danger_border: "Button | Danger | Border color",
    button_danger_text: "Button | Danger | Text color",

    button_danger_hover_bgr: "Button | Danger | Hover button color",
    button_danger_hover_border: "Button | Danger | Hover border color",
    button_danger_hover_text: "Button | Danger | Hover text color",

    button_danger_active_bgr: "Button | Danger | Active button color",
    button_danger_active_border: "Button | Danger | Active border color",
    button_danger_active_text: "Button | Danger | Active text color",

    // Table
    table_borders: "Table borders color",
    table_raw_hover: "Table hover row color",

    // Cards
    cards_bgr: "Cards color",
    cards_border: "Cards border",
    cards_hover_bgr: "Cards hover color",
    cards_hover_border: "Cards hover border color",
    cards_notification: "Cards notification (counter)",


    // Layout
    layout_bgr: "Layout background color",
    layout_secondary_bgr: "Layout secondary background color",
    layout_accent: "Accent color",
    layout_accent_hover: "Accent hover color",
    layout_text: "Main text color",
    layout_headers: "Headers color",

    // Forms
    form_field_border: "Form fields border color",
    form_field_bgr: "Form fields background color",
    form_placeholder: "Form field text color",
    form_placeholder_disabled: "Form disabled field color",
    form_field_border_disabled: "Form disabled field border color",
    form_field_bgr_disabled: "Form disabled field background",
    form_accent: "Form accent color",

    // Code blocks
    code: "Code text color",
    code_background: "Code text background",

    // Hints
    hint_error: "Error color",
    hint_error_light: "Error light color",
    hint_alert: "Alert color",
    hint_alert_light: "Alert light color",
    hint_ok: "OK color",
    hint_ok_light: "OK light color",
    hint_text_color: "Hint text color",

    // Labels (tags)
    label: "Label (tag) color",
    label_text: "Label (tag) text color",
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
            // Menu
            document.documentElement.style.setProperty('--menu-bgr', '#ffffff')
            document.documentElement.style.setProperty('--menu-border-color', '#aaaaaa')
            document.documentElement.style.setProperty('--menu-item', '#999999')
            document.documentElement.style.setProperty('--menu-item-hover', '#333333')
            document.documentElement.style.setProperty('--menu-item-selected', '#058efc')
            document.documentElement.style.setProperty('--menu-group', '#333333')

            //Buttons
            document.documentElement.style.setProperty('--button-bgr', '#ffffff')
            document.documentElement.style.setProperty('--button-border', '#8e8e8e')
            document.documentElement.style.setProperty('--button-text', '#333333')
            document.documentElement.style.setProperty('--button-hover-bgr', '#ffffff')
            document.documentElement.style.setProperty('--button-hover-border', '#8e8e8e')
            document.documentElement.style.setProperty('--button-hover-text', '#333333')
            document.documentElement.style.setProperty('--button-active-bgr', '#8e8e8e')
            document.documentElement.style.setProperty('--button-active-border', '#333333')
            document.documentElement.style.setProperty('--button-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-accent-bgr', '#058efc')
            document.documentElement.style.setProperty('--button-accent-border', '#058efc')
            document.documentElement.style.setProperty('--button-accent-text', '#ffffff')
            document.documentElement.style.setProperty('--button-accent-hover-bgr', '#0062bd')
            document.documentElement.style.setProperty('--button-accent-hover-border', '#0062bd')
            document.documentElement.style.setProperty('--button-accent-hover-text', '#ffffff')
            document.documentElement.style.setProperty('--button-accent-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-accent-active-border', '#333333')
            document.documentElement.style.setProperty('--button-accent-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-danger-bgr', '#ffffff')
            document.documentElement.style.setProperty('--button-danger-border', '#8e8e8e')
            document.documentElement.style.setProperty('--button-danger-text', '#333333')
            document.documentElement.style.setProperty('--button-danger-hover-bgr', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-hover-border', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-hover-text', '#ffffff')
            document.documentElement.style.setProperty('--button-danger-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-border', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-dropdown-hover-bgr', 'rgba(5, 142, 252, 0.05)')

            //Table, Cards
            document.documentElement.style.setProperty('--table-borders', 'rgba(0, 0, 0, 0.12)')
            document.documentElement.style.setProperty('--table-raw-hover', 'rgba(5, 142, 252, 0.05)')

            document.documentElement.style.setProperty('--cards-bgr', '#ffffff')
            document.documentElement.style.setProperty('--cards-border', '#aaaaaa')
            document.documentElement.style.setProperty('--cards-hover-bgr', '#ffffff')
            document.documentElement.style.setProperty('--cards-hover-border', '#aaaaaa')
            document.documentElement.style.setProperty('--cards-notification', '#ff525b;')

            // Layout
            document.documentElement.style.setProperty('--layout-bgr', '#ffffff')
            document.documentElement.style.setProperty('--layout-secondary-bgr', '#ffffff')
            document.documentElement.style.setProperty('--layout-accent', '#058efc')
            document.documentElement.style.setProperty('--layout-accent-hover', '#0062bd')
            document.documentElement.style.setProperty('--layout-text', '#333333')
            document.documentElement.style.setProperty('--layout-headers', '#333333')

            // Form
            document.documentElement.style.setProperty('--form-field-border', '#aaaaaa')
            document.documentElement.style.setProperty('--form-field-bgr', '#ffffff')
            document.documentElement.style.setProperty('--form-placeholder', '#333333')
            document.documentElement.style.setProperty('--form-placeholder-disabled', '#999999')
            document.documentElement.style.setProperty('--form-field-border-disabled', '#bbbbbb')
            document.documentElement.style.setProperty('--form-field-bgr-disabled', '#cccccc')
            document.documentElement.style.setProperty('--form-accent', '#058efc')

            document.documentElement.style.setProperty('--code', '#333333')
            document.documentElement.style.setProperty('--code-background', '#fff')

            document.documentElement.style.setProperty('--hint-error', '#ff525b')
            document.documentElement.style.setProperty('--hint-error-light', '#ffd6d8')
            document.documentElement.style.setProperty('--hint-alert', '#eca910')
            document.documentElement.style.setProperty('--hint-alert-light', '#f9dfa4')
            document.documentElement.style.setProperty('--hint-ok', '#00c197')
            document.documentElement.style.setProperty('--hint-ok-light', '#d6f8e5')
            document.documentElement.style.setProperty('--hint-text-color', '#333333')

            document.documentElement.style.setProperty('--label', '#26be99')
            document.documentElement.style.setProperty('--label-text', '#ffffff')
        }
        if (colorScheme === 'classic') {
            // Menu
            document.documentElement.style.setProperty('--menu-bgr', customThemeColors.classic.menu_bgr)
            document.documentElement.style.setProperty('--menu-border-color', customThemeColors.classic.)
            document.documentElement.style.setProperty('--menu-item', customThemeColors.classic.)
            document.documentElement.style.setProperty('--menu-item-hover', customThemeColors.classic.)
            document.documentElement.style.setProperty('--menu-item-selected', customThemeColors.classic.)
            document.documentElement.style.setProperty('--menu-group', customThemeColors.classic.)

            //Buttons
            document.documentElement.style.setProperty('--button-bgr', customThemeColors.classic.)
            document.documentElement.style.setProperty('--button-border', customThemeColors.classic.)
            document.documentElement.style.setProperty('--button-text', customThemeColors.classic.)
            document.documentElement.style.setProperty('--button-hover-bgr', customThemeColors.classic.)
            document.documentElement.style.setProperty('--button-hover-border', customThemeColors.classic.)
            document.documentElement.style.setProperty('--button-hover-text', '#333333')
            document.documentElement.style.setProperty('--button-active-bgr', '#8e8e8e')
            document.documentElement.style.setProperty('--button-active-border', '#333333')
            document.documentElement.style.setProperty('--button-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-accent-bgr', '#058efc')
            document.documentElement.style.setProperty('--button-accent-border', '#058efc')
            document.documentElement.style.setProperty('--button-accent-text', '#ffffff')
            document.documentElement.style.setProperty('--button-accent-hover-bgr', '#0062bd')
            document.documentElement.style.setProperty('--button-accent-hover-border', '#0062bd')
            document.documentElement.style.setProperty('--button-accent-hover-text', '#ffffff')
            document.documentElement.style.setProperty('--button-accent-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-accent-active-border', '#333333')
            document.documentElement.style.setProperty('--button-accent-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-danger-bgr', '#ffffff')
            document.documentElement.style.setProperty('--button-danger-border', '#8e8e8e')
            document.documentElement.style.setProperty('--button-danger-text', '#333333')
            document.documentElement.style.setProperty('--button-danger-hover-bgr', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-hover-border', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-hover-text', '#ffffff')
            document.documentElement.style.setProperty('--button-danger-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-border', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-dropdown-hover-bgr', 'rgba(5, 142, 252, 0.05)')

            //Table, Cards
            document.documentElement.style.setProperty('--table-borders', 'rgba(0, 0, 0, 0.12)')
            document.documentElement.style.setProperty('--table-raw-hover', 'rgba(5, 142, 252, 0.05)')

            document.documentElement.style.setProperty('--cards-bgr', '#ffffff')
            document.documentElement.style.setProperty('--cards-border', '#aaaaaa')
            document.documentElement.style.setProperty('--cards-hover-bgr', '#ffffff')
            document.documentElement.style.setProperty('--cards-hover-border', '#aaaaaa')
            document.documentElement.style.setProperty('--cards-notification', '#ff525b;')

            // Layout
            document.documentElement.style.setProperty('--layout-bgr', '#eeeeee')
            document.documentElement.style.setProperty('--layout-secondary-bgr', '#ffffff')
            document.documentElement.style.setProperty('--layout-accent', '#058efc')
            document.documentElement.style.setProperty('--layout-accent-hover', '#0062bd')
            document.documentElement.style.setProperty('--layout-text', '#333333')
            document.documentElement.style.setProperty('--layout-headers', '#333333')

            // Form
            document.documentElement.style.setProperty('--form-field-border', '#aaaaaa')
            document.documentElement.style.setProperty('--form-field-bgr', '#ffffff')
            document.documentElement.style.setProperty('--form-placeholder', '#333333')
            document.documentElement.style.setProperty('--form-placeholder-disabled', '#999999')
            document.documentElement.style.setProperty('--form-field-border-disabled', '#bbbbbb')
            document.documentElement.style.setProperty('--form-field-bgr-disabled', '#cccccc')
            document.documentElement.style.setProperty('--form-accent', '#058efc')

            document.documentElement.style.setProperty('--code', '#333333')
            document.documentElement.style.setProperty('--code-background', '#fff')

            document.documentElement.style.setProperty('--hint-error', '#ff525b')
            document.documentElement.style.setProperty('--hint-error-light', '#ffd6d8')
            document.documentElement.style.setProperty('--hint-alert', '#eca910')
            document.documentElement.style.setProperty('--hint-alert-light', '#f9dfa4')
            document.documentElement.style.setProperty('--hint-ok', '#00c197')
            document.documentElement.style.setProperty('--hint-ok-light', '#d6f8e5')
            document.documentElement.style.setProperty('--hint-text-color', '#333333')

            document.documentElement.style.setProperty('--label', '#26be99')
            document.documentElement.style.setProperty('--label-text', '#ffffff')
        }
        if (colorScheme === 'tiffany') {
            // Menu
            document.documentElement.style.setProperty('--menu-bgr', '#ffffff')
            document.documentElement.style.setProperty('--menu-border-color', '#eeeeee')
            document.documentElement.style.setProperty('--menu-item', '#999999')
            document.documentElement.style.setProperty('--menu-item-hover', '#333333')
            document.documentElement.style.setProperty('--menu-item-selected', '#4ad5c8')
            document.documentElement.style.setProperty('--menu-group', '#333333')

            //Buttons
            document.documentElement.style.setProperty('--button-bgr', '#ffffff')
            document.documentElement.style.setProperty('--button-border', '#8e8e8e')
            document.documentElement.style.setProperty('--button-text', '#333333')
            document.documentElement.style.setProperty('--button-hover-bgr', '#ffffff')
            document.documentElement.style.setProperty('--button-hover-border', '#8e8e8e')
            document.documentElement.style.setProperty('--button-hover-text', '#333333')
            document.documentElement.style.setProperty('--button-active-bgr', '#8e8e8e')
            document.documentElement.style.setProperty('--button-active-border', '#333333')
            document.documentElement.style.setProperty('--button-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-accent-bgr', '#4ad5c8')
            document.documentElement.style.setProperty('--button-accent-border', '#4ad5c8')
            document.documentElement.style.setProperty('--button-accent-text', '#ffffff')
            document.documentElement.style.setProperty('--button-accent-hover-bgr', '#37aea3')
            document.documentElement.style.setProperty('--button-accent-hover-border', '#37aea3')
            document.documentElement.style.setProperty('--button-accent-hover-text', '#ffffff')
            document.documentElement.style.setProperty('--button-accent-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-accent-active-border', '#333333')
            document.documentElement.style.setProperty('--button-accent-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-danger-bgr', '#ffffff')
            document.documentElement.style.setProperty('--button-danger-border', '#8e8e8e')
            document.documentElement.style.setProperty('--button-danger-text', '#333333')
            document.documentElement.style.setProperty('--button-danger-hover-bgr', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-hover-border', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-hover-text', '#ffffff')
            document.documentElement.style.setProperty('--button-danger-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-border', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-dropdown-hover-bgr', 'rgba(5, 142, 252, 0.05)')

            //Table, Cards
            document.documentElement.style.setProperty('--table-borders', 'rgba(0, 0, 0, 0.12)')
            document.documentElement.style.setProperty('--table-raw-hover', 'rgba(5, 142, 252, 0.05)')

            document.documentElement.style.setProperty('--cards-bgr', '#ffffff')
            document.documentElement.style.setProperty('--cards-border', '#aaaaaa')
            document.documentElement.style.setProperty('--cards-hover-bgr', '#ffffff')
            document.documentElement.style.setProperty('--cards-hover-border', '#aaaaaa')
            document.documentElement.style.setProperty('--cards-notification', '#ff525b;')

            // Layout
            document.documentElement.style.setProperty('--layout-bgr', '#eeeeee')
            document.documentElement.style.setProperty('--layout-secondary-bgr', '#ffffff')
            document.documentElement.style.setProperty('--layout-accent', '#4ad5c8')
            document.documentElement.style.setProperty('--layout-accent-hover', '#37aea3')
            document.documentElement.style.setProperty('--layout-text', '#333333')
            document.documentElement.style.setProperty('--layout-headers', '#333333')

            // Form
            document.documentElement.style.setProperty('--form-field-border', '#aaaaaa')
            document.documentElement.style.setProperty('--form-field-bgr', '#ffffff')
            document.documentElement.style.setProperty('--form-placeholder', '#333333')
            document.documentElement.style.setProperty('--form-placeholder-disabled', '#999999')
            document.documentElement.style.setProperty('--form-field-border-disabled', '#bbbbbb')
            document.documentElement.style.setProperty('--form-field-bgr-disabled', '#cccccc')
            document.documentElement.style.setProperty('--form-accent', '#4ad5c8')

            document.documentElement.style.setProperty('--code', '#333333')
            document.documentElement.style.setProperty('--code-background', '#fff')

            document.documentElement.style.setProperty('--hint-error', '#ff525b')
            document.documentElement.style.setProperty('--hint-error-light', '#ffd6d8')
            document.documentElement.style.setProperty('--hint-alert', '#eca910')
            document.documentElement.style.setProperty('--hint-alert-light', '#f9dfa4')
            document.documentElement.style.setProperty('--hint-ok', '#00c197')
            document.documentElement.style.setProperty('--hint-ok-light', '#d6f8e5')
            document.documentElement.style.setProperty('--hint-text-color', '#333333')

            document.documentElement.style.setProperty('--label', '#FFCCA9')
            document.documentElement.style.setProperty('--label-text', '#333333')

            // =================== OLD STUFF ==================

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

            // Menu
            document.documentElement.style.setProperty('--menu-bgr', '#1c1d3b')
            document.documentElement.style.setProperty('--menu-border-color', '#131022')
            document.documentElement.style.setProperty('--menu-item', '#aaa')
            document.documentElement.style.setProperty('--menu-item-hover', '#fff')
            document.documentElement.style.setProperty('--menu-item-selected', '#1ae191')
            document.documentElement.style.setProperty('--menu-group', '#fff')

            //Buttons
            document.documentElement.style.setProperty('--button-bgr', '#1c1d3b')
            document.documentElement.style.setProperty('--button-border', '#2f00ff')
            document.documentElement.style.setProperty('--button-text', '#fff')
            document.documentElement.style.setProperty('--button-hover-bgr', '#1c1d3b')
            document.documentElement.style.setProperty('--button-hover-border', '#2f00ff')
            document.documentElement.style.setProperty('--button-hover-text', '#fff')
            document.documentElement.style.setProperty('--button-active-bgr', '#2f00ff')
            document.documentElement.style.setProperty('--button-active-border', '#2f00ff')
            document.documentElement.style.setProperty('--button-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-accent-bgr', '#1ae191')
            document.documentElement.style.setProperty('--button-accent-border', '#1ae191')
            document.documentElement.style.setProperty('--button-accent-text', '#131022')
            document.documentElement.style.setProperty('--button-accent-hover-bgr', '#00ff98')
            document.documentElement.style.setProperty('--button-accent-hover-border', '#00ff98')
            document.documentElement.style.setProperty('--button-accent-hover-text', '#131022')
            document.documentElement.style.setProperty('--button-accent-active-bgr', '#fff')
            document.documentElement.style.setProperty('--button-accent-active-border', '#fff')
            document.documentElement.style.setProperty('--button-accent-active-text', '#333')

            document.documentElement.style.setProperty('--button-danger-bgr', '#1c1d3b')
            document.documentElement.style.setProperty('--button-danger-border', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-text', '#fff')
            document.documentElement.style.setProperty('--button-danger-hover-bgr', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-hover-border', '#ff525b')
            document.documentElement.style.setProperty('--button-danger-hover-text', '#fff')
            document.documentElement.style.setProperty('--button-danger-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-border', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-dropdown-hover-bgr', 'rgba(5, 142, 252, 0.05)')

            //Table, Cards
            document.documentElement.style.setProperty('--table-borders', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--table-raw-hover', 'rgba(26, 225, 145, 0.05)')

            document.documentElement.style.setProperty('--cards-bgr', '#1c1d3b')
            document.documentElement.style.setProperty('--cards-border', '#1c1d3b')
            document.documentElement.style.setProperty('--cards-hover-bgr', '#1c1d3b')
            document.documentElement.style.setProperty('--cards-hover-border', '#fff')
            document.documentElement.style.setProperty('--cards-notification', '#ff525b;')

            // Layout
            document.documentElement.style.setProperty('--layout-bgr', '#131022')
            document.documentElement.style.setProperty('--layout-secondary-bgr', '#1c1d3b')
            document.documentElement.style.setProperty('--layout-accent', '#4ad5c8')
            document.documentElement.style.setProperty('--layout-accent-hover', '#37aea3')
            document.documentElement.style.setProperty('--layout-text', '#fff')
            document.documentElement.style.setProperty('--layout-headers', '#fff')

            // Form
            document.documentElement.style.setProperty('--form-field-border', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--form-field-bgr', '#1c1d3b')
            document.documentElement.style.setProperty('--form-placeholder', '#fff')
            document.documentElement.style.setProperty('--form-placeholder-disabled', '#999999')
            document.documentElement.style.setProperty('--form-field-border-disabled', '#bbbbbb')
            document.documentElement.style.setProperty('--form-field-bgr-disabled', '#cccccc')
            document.documentElement.style.setProperty('--form-accent', '#1ae191')

            document.documentElement.style.setProperty('--code', '#333333')
            document.documentElement.style.setProperty('--code-background', 'rgba(0,0,0,.5)')

            document.documentElement.style.setProperty('--hint-error', '#ce4144')
            document.documentElement.style.setProperty('--hint-error-light', '#763136')
            document.documentElement.style.setProperty('--hint-alert', '#cd9300')
            document.documentElement.style.setProperty('--hint-alert-light', '#745b0e')
            document.documentElement.style.setProperty('--hint-ok', '#76ab24')
            document.documentElement.style.setProperty('--hint-ok-light', '#476927')
            document.documentElement.style.setProperty('--hint-text-color', '#fff')

            document.documentElement.style.setProperty('--label', '#2f00ff')
            document.documentElement.style.setProperty('--label-text', 'rgba(255,255,255,.85)')

            // =================== OLD STUFF ==================

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

            // Menu
            document.documentElement.style.setProperty('--menu-bgr', '#303d47')
            document.documentElement.style.setProperty('--menu-border-color', '#142025')
            document.documentElement.style.setProperty('--menu-item', '#aaa')
            document.documentElement.style.setProperty('--menu-item-hover', '#fff')
            document.documentElement.style.setProperty('--menu-item-selected', '#85c92e')
            document.documentElement.style.setProperty('--menu-group', '#fff')

            //Buttons
            document.documentElement.style.setProperty('--button-bgr', '#303d47')
            document.documentElement.style.setProperty('--button-border', '#ce9306')
            document.documentElement.style.setProperty('--button-text', '#fff')
            document.documentElement.style.setProperty('--button-hover-bgr', '#303d47')
            document.documentElement.style.setProperty('--button-hover-border', '#ce9306')
            document.documentElement.style.setProperty('--button-hover-text', '#fff')
            document.documentElement.style.setProperty('--button-active-bgr', '#ce9306')
            document.documentElement.style.setProperty('--button-active-border', '#ce9306')
            document.documentElement.style.setProperty('--button-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-accent-bgr', '#85c92e')
            document.documentElement.style.setProperty('--button-accent-border', '#85c92e')
            document.documentElement.style.setProperty('--button-accent-text', '#131022')
            document.documentElement.style.setProperty('--button-accent-hover-bgr', '#8fff00')
            document.documentElement.style.setProperty('--button-accent-hover-border', '#8fff00')
            document.documentElement.style.setProperty('--button-accent-hover-text', '#131022')
            document.documentElement.style.setProperty('--button-accent-active-bgr', '#fff')
            document.documentElement.style.setProperty('--button-accent-active-border', '#fff')
            document.documentElement.style.setProperty('--button-accent-active-text', '#333')

            document.documentElement.style.setProperty('--button-danger-bgr', '#303d47')
            document.documentElement.style.setProperty('--button-danger-border', '#ce4144')
            document.documentElement.style.setProperty('--button-danger-text', '#fff')
            document.documentElement.style.setProperty('--button-danger-hover-bgr', '#ce4144')
            document.documentElement.style.setProperty('--button-danger-hover-border', '#ce4144')
            document.documentElement.style.setProperty('--button-danger-hover-text', '#fff')
            document.documentElement.style.setProperty('--button-danger-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-border', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-dropdown-hover-bgr', 'rgba(133, 201, 46, 0.05)')

            //Table, Cards
            document.documentElement.style.setProperty('--table-borders', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--table-raw-hover', 'rgba(133, 201, 46, 0.05)')

            document.documentElement.style.setProperty('--cards-bgr', '#303d47')
            document.documentElement.style.setProperty('--cards-border', '#303d47')
            document.documentElement.style.setProperty('--cards-hover-bgr', '#303d47')
            document.documentElement.style.setProperty('--cards-hover-border', 'rgba(255,255,255,.5)')
            document.documentElement.style.setProperty('--cards-notification', '#ce4144;')

            // Layout
            document.documentElement.style.setProperty('--layout-bgr', '#142025')
            document.documentElement.style.setProperty('--layout-secondary-bgr', '#303d47')
            document.documentElement.style.setProperty('--layout-accent', '#85c92e')
            document.documentElement.style.setProperty('--layout-accent-hover', '#8fff00')
            document.documentElement.style.setProperty('--layout-text', '#fff')
            document.documentElement.style.setProperty('--layout-headers', '#fff')

            // Form
            document.documentElement.style.setProperty('--form-field-border', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--form-field-bgr', '#303d47')
            document.documentElement.style.setProperty('--form-placeholder', '#fff')
            document.documentElement.style.setProperty('--form-placeholder-disabled', '#999999')
            document.documentElement.style.setProperty('--form-field-border-disabled', '#bbbbbb')
            document.documentElement.style.setProperty('--form-field-bgr-disabled', '#cccccc')
            document.documentElement.style.setProperty('--form-accent', '#85c92e')

            document.documentElement.style.setProperty('--code', '#333333')
            document.documentElement.style.setProperty('--code-background', 'rgba(0,0,0,.5)')

            document.documentElement.style.setProperty('--hint-error', '#ce4144')
            document.documentElement.style.setProperty('--hint-error-light', '#763136')
            document.documentElement.style.setProperty('--hint-alert', '#cd9300')
            document.documentElement.style.setProperty('--hint-alert-light', '#745b0e')
            document.documentElement.style.setProperty('--hint-ok', '#76ab24')
            document.documentElement.style.setProperty('--hint-ok-light', '#476927')
            document.documentElement.style.setProperty('--hint-text-color', '#fff')

            document.documentElement.style.setProperty('--label', '#ce9306')
            document.documentElement.style.setProperty('--label-text', 'rgba(255,255,255,.85)')

            // =================== OLD STUFF ==================

            document.documentElement.style.setProperty('--button-border-color', '#ce9306') //!
            document.documentElement.style.setProperty('--field-border-color', 'rgba(255,255,255,.2)') //!
            document.documentElement.style.setProperty('--table-border-color', 'rgba(255,255,255,.2)') //!
            document.documentElement.style.setProperty('--accent-color', '#85c92e') //!
            document.documentElement.style.setProperty('--accent-transp-05-color', 'rgba(133, 201, 46, 0.05)') //!
            document.documentElement.style.setProperty('--secondary-accent-color', '#8fff00') //!
            document.documentElement.style.setProperty('--button-accent-color', ' #142025') //!
            document.documentElement.style.setProperty('--background-color', '#303d47') //!
            document.documentElement.style.setProperty('--background-contrast-color', '#142025') //!
            document.documentElement.style.setProperty('--secondary-background-color', '#142025') //!
            document.documentElement.style.setProperty('--font-color', '#c2c6cb') //!
            document.documentElement.style.setProperty('--header-color', '#c2c6cb') //!
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

            // Menu
            document.documentElement.style.setProperty('--menu-bgr', '#333333')
            document.documentElement.style.setProperty('--menu-border-color', '#000000')
            document.documentElement.style.setProperty('--menu-item', '#aaa')
            document.documentElement.style.setProperty('--menu-item-hover', '#fff')
            document.documentElement.style.setProperty('--menu-item-selected', '#60FF00')
            document.documentElement.style.setProperty('--menu-group', '#fff')

            //Buttons
            document.documentElement.style.setProperty('--button-bgr', '#303d47')
            document.documentElement.style.setProperty('--button-border', '#F8E71C')
            document.documentElement.style.setProperty('--button-text', '#fff')
            document.documentElement.style.setProperty('--button-hover-bgr', '#F8E71C')
            document.documentElement.style.setProperty('--button-hover-border', '#F8E71C')
            document.documentElement.style.setProperty('--button-hover-text', '#000000')
            document.documentElement.style.setProperty('--button-active-bgr', '#fff')
            document.documentElement.style.setProperty('--button-active-border', '#fff')
            document.documentElement.style.setProperty('--button-active-text', '#000')

            document.documentElement.style.setProperty('--button-accent-bgr', '#60FF00')
            document.documentElement.style.setProperty('--button-accent-border', '#60FF00')
            document.documentElement.style.setProperty('--button-accent-text', '#131022')
            document.documentElement.style.setProperty('--button-accent-hover-bgr', '#8fff00')
            document.documentElement.style.setProperty('--button-accent-hover-border', '#8fff00')
            document.documentElement.style.setProperty('--button-accent-hover-text', '#131022')
            document.documentElement.style.setProperty('--button-accent-active-bgr', '#fff')
            document.documentElement.style.setProperty('--button-accent-active-border', '#fff')
            document.documentElement.style.setProperty('--button-accent-active-text', '#333')

            document.documentElement.style.setProperty('--button-danger-bgr', '#303d47')
            document.documentElement.style.setProperty('--button-danger-border', '#ce4144')
            document.documentElement.style.setProperty('--button-danger-text', '#fff')
            document.documentElement.style.setProperty('--button-danger-hover-bgr', '#ce4144')
            document.documentElement.style.setProperty('--button-danger-hover-border', '#ce4144')
            document.documentElement.style.setProperty('--button-danger-hover-text', '#fff')
            document.documentElement.style.setProperty('--button-danger-active-bgr', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-border', '#333333')
            document.documentElement.style.setProperty('--button-danger-active-text', '#ffffff')

            document.documentElement.style.setProperty('--button-dropdown-hover-bgr', 'rgba(96, 255, 0, 0.05)')

            //Table, Cards
            document.documentElement.style.setProperty('--table-borders', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--table-raw-hover', 'rgba(96, 255, 0, 0.05)')

            document.documentElement.style.setProperty('--cards-bgr', '#333333')
            document.documentElement.style.setProperty('--cards-border', '#333333')
            document.documentElement.style.setProperty('--cards-hover-bgr', '#333333')
            document.documentElement.style.setProperty('--cards-hover-border', 'rgba(255,255,255,.5)')
            document.documentElement.style.setProperty('--cards-notification', '#ce4144;')

            // Layout
            document.documentElement.style.setProperty('--layout-bgr', '#000000')
            document.documentElement.style.setProperty('--layout-secondary-bgr', '#333333')
            document.documentElement.style.setProperty('--layout-accent', '#60FF00')
            document.documentElement.style.setProperty('--layout-accent-hover', '#98fe5b')
            document.documentElement.style.setProperty('--layout-text', '#fff')
            document.documentElement.style.setProperty('--layout-headers', '#60FF00')

            // Form
            document.documentElement.style.setProperty('--form-field-border', 'rgba(255,255,255,.2)')
            document.documentElement.style.setProperty('--form-field-bgr', '#303d47')
            document.documentElement.style.setProperty('--form-placeholder', '#fff')
            document.documentElement.style.setProperty('--form-placeholder-disabled', '#999999')
            document.documentElement.style.setProperty('--form-field-border-disabled', '#bbbbbb')
            document.documentElement.style.setProperty('--form-field-bgr-disabled', '#cccccc')
            document.documentElement.style.setProperty('--form-accent', '#60FF00')

            document.documentElement.style.setProperty('--code', '#333333')
            document.documentElement.style.setProperty('--code-background', 'rgba(0,0,0,.5)')

            document.documentElement.style.setProperty('--hint-error', '#ce4144')
            document.documentElement.style.setProperty('--hint-error-light', '#763136')
            document.documentElement.style.setProperty('--hint-alert', '#cd9300')
            document.documentElement.style.setProperty('--hint-alert-light', '#745b0e')
            document.documentElement.style.setProperty('--hint-ok', '#76ab24')
            document.documentElement.style.setProperty('--hint-ok-light', '#476927')
            document.documentElement.style.setProperty('--hint-text-color', '#fff')

            document.documentElement.style.setProperty('--label', '#F8E71C')
            document.documentElement.style.setProperty('--label-text', 'rgba(0,0,0,.85)')

            // =================== OLD STUFF ==================

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
            document.documentElement.style.setProperty('--button-border-color', _.get(themeName, 'customThemeColors.button_border_color') || customThemeColors.classic.prop)

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
        { key: 'Roboto', value: 'Roboto' },
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
