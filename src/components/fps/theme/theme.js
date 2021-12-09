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
        '--menu-bgr': "#ffffff",
        '--menu-border-color': "#eeeeee",
        '--menu-item': "#999999",
        '--menu-item-hover': "#333333",
        '--menu-item-selected': "#058efc",
        '--menu-group': "#333333",

        // Button regular
        '--button-bgr': "#ffffff",
        '--button-border': "#8e8e8e",
        '--button-text': "#333333",

        '--button-hover-bgr': "#ffffff",
        '--button-hover-border': "#8e8e8e",
        '--button-hover-text': "#333333",

        '--button-active-bgr': "#8e8e8e",
        '--button-active-border': "#333333",
        '--button-active-text': "#ffffff",

        // Button dropdown
        '--button-dropdown-hover-bgr': "rgba(5, 142, 252, 0.05)",

        // Button accent
        '--button-accent-bgr': "#058efc",
        '--button-accent-border': "#058efc",
        '--button-accent-text': "#ffffff",

        '--button-accent-hover-bgr': "#0062bd",
        '--button-accent-hover-border': "#0062bd",
        '--button-accent-hover-text': "#ffffff",

        '--button-accent-active-bgr': "#333333",
        '--button-accent-active-border': "#333333",
        '--button-accent-active-text': "#ffffff",

        // Button danger
        '--button-danger-bgr': "#ffffff",
        '--button-danger-border': "#8e8e8e",
        '--button-danger-text': "#333333",

        '--button-danger-hover-bgr': "#ff525b",
        '--button-danger-hover-border': "#ff525b",
        '--button-danger-hover-text': "#ffffff",

        '--button-danger-active-bgr': "#333333",
        '--button-danger-active-border': "#333333",
        '--button-danger-active-text': "#ffffff",

        // Table
        '--table-borders': "rgba(0, 0, 0, 0.12)",
        '--table-raw-hover': "rgba(5, 142, 252, 0.05)",

        // Cards
        '--cards-bgr': "#ffffff",
        '--cards-border': "#aaaaaa",
        '--cards-hover-bgr': "#ffffff",
        '--cards-hover-border': "#aaaaaa",
        '--cards-notification': "#ff525b",
        '--cards-notification-text': "#fff",

        // Layout
        '--layout-bgr': "#eeeeee",
        '--layout-secondary-bgr': "#ffffff",
        '--layout-accent': "#058efc",
        '--layout-accent-hover': "#0062bd",
        '--layout-text': "#333333",
        '--layout-headers': "#333333",
        '--layout-footer-bgr': "#fff",
        '--layout-footer-text': "#333",
        '--layout-footer-border': "#eeeeee",

        // Forms
        '--form-field-border': "#aaaaaa",
        '--form-field-bgr': "#ffffff",
        '--form-placeholder': "#333333",
        '--form-placeholder-disabled': "#999999",
        '--form-field-border-disabled': "#bbbbbb",
        '--form-field-bgr-disabled': "#cccccc",
        '--form-accent': "#058efc",

        // Code blocks
        '--code': "#333333",
        '--code-background': "#fff",

        // Hints
        '--hint-error': "#ff525b",
        '--hint-error-light': "#ffd6d8",
        '--hint-alert': "#eca910",
        '--hint-alert-light': "#f9dfa4",
        '--hint-ok': "#00c197",
        '--hint-ok-light': "#d6f8e5",
        '--hint-text-color': "#333333",

        // Labels (tags)
        '--label': "#26be99",
        '--label-text': "#ffffff",
    },
    white: {
        '--menu-bgr': "#ffffff",
        '--menu-border-color': "#aaaaaa",
        '--menu-item': "#999999",
        '--menu-item-hover': "#333333",
        '--menu-item-selected': "#058efc",
        '--menu-group': "#333333",

        // Button regular
        '--button-bgr': "#ffffff",
        '--button-border': "#8e8e8e",
        '--button-text': "#333333",

        '--button-hover-bgr': "#ffffff",
        '--button-hover-border': "#8e8e8e",
        '--button-hover-text': "#333333",

        '--button-active-bgr': "#8e8e8e",
        '--button-active-border': "#333333",
        '--button-active-text': "#ffffff",

        // Button dropdown
        '--button-dropdown-hover-bgr': "rgba(5, 142, 252, 0.05)",

        // Button accent
        '--button-accent-bgr': "#058efc",
        '--button-accent-border': "#058efc",
        '--button-accent-text': "#ffffff",

        '--button-accent-hover-bgr': "#0062bd",
        '--button-accent-hover-border': "#0062bd",
        '--button-accent-hover-text': "#ffffff",

        '--button-accent-active-bgr': "#333333",
        '--button-accent-active-border': "#333333",
        '--button-accent-active-text': "#ffffff",

        // Button danger
        '--button-danger-bgr': "#ffffff",
        '--button-danger-border': "#8e8e8e",
        '--button-danger-text': "#333333",

        '--button-danger-hover-bgr': "#ff525b",
        '--button-danger-hover-border': "#ff525b",
        '--button-danger-hover-text': "#ffffff",

        '--button-danger-active-bgr': "#333333",
        '--button-danger-active-border': "#333333",
        '--button-danger-active-text': "#ffffff",

        // Table
        '--table-borders': "rgba(0, 0, 0, 0.12)",
        '--table-raw-hover': "rgba(5, 142, 252, 0.05)",

        // Cards
        '--cards-bgr': "#ffffff",
        '--cards-border': "#aaaaaa",
        '--cards-hover-bgr': "#ffffff",
        '--cards-hover-border': "#aaaaaa",
        '--cards-notification': "#ff525b",
        '--cards-notification-text': "#fff",

        // Layout
        '--layout-bgr': "#ffffff",
        '--layout-secondary-bgr': "#ffffff",
        '--layout-accent': "#058efc",
        '--layout-accent-hover': "#0062bd",
        '--layout-text': "#333333",
        '--layout-headers': "#333333",
        '--layout-footer-bgr': "#fff",
        '--layout-footer-text': "#333",
        '--layout-footer-border': "#eeeeee",

        // Forms
        '--form-field-border': "#aaaaaa",
        '--form-field-bgr': "#ffffff",
        '--form-placeholder': "#333333",
        '--form-placeholder-disabled': "#999999",
        '--form-field-border-disabled': "#bbbbbb",
        '--form-field-bgr-disabled': "#cccccc",
        '--form-accent': "#058efc",

        // Code blocks
        '--code': "#333333",
        '--code-background': "#fff",

        // Hints
        '--hint-error': "#ff525b",
        '--hint-error-light': "#ffd6d8",
        '--hint-alert': "#eca910",
        '--hint-alert-light': "#f9dfa4",
        '--hint-ok': "#00c197",
        '--hint-ok-light': "#d6f8e5",
        '--hint-text-color': "#333333",

        // Labels (tags)
        '--label': "#26be99",
        '--label-text': "#ffffff",
    },
    tiffany: {
        '--menu-bgr': "#ffffff",
        '--menu-border-color': "#aaaaaa",
        '--menu-item': "#999999",
        '--menu-item-hover': "#333333",
        '--menu-item-selected': "#058efc",
        '--menu-group': "#333333",

        // Button regular
        '--button-bgr': "#ffffff",
        '--button-border': "#8e8e8e",
        '--button-text': "#333333",

        '--button-hover-bgr': "#ffffff",
        '--button-hover-border': "#8e8e8e",
        '--button-hover-text': "#333333",

        '--button-active-bgr': "#8e8e8e",
        '--button-active-border': "#333333",
        '--button-active-text': "#ffffff",

        // Button dropdown
        '--button-dropdown-hover-bgr': "rgba(5, 142, 252, 0.05)",

        // Button accent
        '--button-accent-bgr': "#4ad5c8",
        '--button-accent-border': "#4ad5c8",
        '--button-accent-text': "#ffffff",

        '--button-accent-hover-bgr': "#37aea3",
        '--button-accent-hover-border': "#37aea3",
        '--button-accent-hover-text': "#ffffff",

        '--button-accent-active-bgr': "#333333",
        '--button-accent-active-border': "#333333",
        '--button-accent-active-text': "#ffffff",

        // Button danger
        '--button-danger-bgr': "#ffffff",
        '--button-danger-border': "#8e8e8e",
        '--button-danger-text': "#333333",

        '--button-danger-hover-bgr': "#ff525b",
        '--button-danger-hover-border': "#ff525b",
        '--button-danger-hover-text': "#ffffff",

        '--button-danger-active-bgr': "#333333",
        '--button-danger-active-border': "#333333",
        '--button-danger-active-text': "#ffffff",

        // Table
        '--table-borders': "rgba(0, 0, 0, 0.12)",
        '--table-raw-hover': "rgba(5, 142, 252, 0.05)",

        // Cards
        '--cards-bgr': "#ffffff",
        '--cards-border': "#aaaaaa",
        '--cards-hover-bgr': "#ffffff",
        '--cards-hover-border': "#aaaaaa",
        '--cards-notification': "#ff525b",
        '--cards-notification-text': "#fff",

        // Layout
        '--layout-bgr': "#eeeeee",
        '--layout-secondary-bgr': "#ffffff",
        '--layout-accent': "#4ad5c8",
        '--layout-accent-hover': "#37aea3",
        '--layout-text': "#333333",
        '--layout-headers': "#333333",
        '--layout-footer-bgr': "#fff",
        '--layout-footer-text': "#333",
        '--layout-footer-border': "#eeeeee",

        // Forms
        '--form-field-border': "#aaaaaa",
        '--form-field-bgr': "#ffffff",
        '--form-placeholder': "#333333",
        '--form-placeholder-disabled': "#999999",
        '--form-field-border-disabled': "#bbbbbb",
        '--form-field-bgr-disabled': "#cccccc",
        '--form-accent': "#4ad5c8",

        // Code blocks
        '--code': "#333333",
        '--code-background': "#fff",

        // Hints
        '--hint-error': "#ff525b",
        '--hint-error-light': "#ffd6d8",
        '--hint-alert': "#eca910",
        '--hint-alert-light': "#f9dfa4",
        '--hint-ok': "#00c197",
        '--hint-ok-light': "#d6f8e5",
        '--hint-text-color': "#333333",

        // Labels (tags)
        '--label': "#FFCCA9",
        '--label-text': "#333333",
    },
    darkMint: {
        '--menu-bgr': "#1c1d3b",
        '--menu-border-color': "#131022",
        '--menu-item': "#aaaaaa",
        '--menu-item-hover': "#ffffff",
        '--menu-item-selected': "#1ae191",
        '--menu-group': "#fff",

        // Button regular
        '--button-bgr': "#1c1d3b",
        '--button-border': "#2f00ff",
        '--button-text': "#fff",

        '--button-hover-bgr': "#1c1d3b",
        '--button-hover-border': "#2f00ff",
        '--button-hover-text': "#fff",

        '--button-active-bgr': "#2f00ff",
        '--button-active-border': "#2f00ff",
        '--button-active-text': "#ffffff",

        // Button dropdown
        '--button-dropdown-hover-bgr': "rgba(255, 255, 255, 0.05)",

        // Button accent
        '--button-accent-bgr': "#1ae191",
        '--button-accent-border': "#1ae191",
        '--button-accent-text': "#131022",

        '--button-accent-hover-bgr': "#00ff98",
        '--button-accent-hover-border': "#00ff98",
        '--button-accent-hover-text': "#131022",

        '--button-accent-active-bgr': "#fff",
        '--button-accent-active-border': "#fff",
        '--button-accent-active-text': "#333",

        // Button danger
        '--button-danger-bgr': "#1c1d3b",
        '--button-danger-border': "#ff525b",
        '--button-danger-text': "#fff",

        '--button-danger-hover-bgr': "#ff525b",
        '--button-danger-hover-border': "#ff525b",
        '--button-danger-hover-text': "#ffffff",

        '--button-danger-active-bgr': "#333333",
        '--button-danger-active-border': "#333333",
        '--button-danger-active-text': "#ffffff",

        // Table
        '--table-borders': "rgba(255,255,255,.2)",
        '--table-raw-hover': "rgba(255, 255, 255, 0.05)",

        // Cards
        '--cards-bgr': "#1c1d3b",
        '--cards-border': "#1c1d3b",
        '--cards-hover-bgr': "#1c1d3b",
        '--cards-hover-border': "#fff",
        '--cards-notification': "#ff525b",
        '--cards-notification-text': "#fff",

        // Layout
        '--layout-bgr': "#131022",
        '--layout-secondary-bgr': "#1c1d3b",
        '--layout-accent': "#1ae191",
        '--layout-accent-hover': "#00ff98",
        '--layout-text': "#fff",
        '--layout-headers': "#fff",
        '--layout-footer-bgr': "#1c1d3b",
        '--layout-footer-text': "#fff",
        '--layout-footer-border': "#131022",

        // Forms
        '--form-field-border': "rgba(255,255,255,.2)",
        '--form-field-bgr': "#1c1d3b",
        '--form-placeholder': "#fff",
        '--form-placeholder-disabled': "rgba(255,255,255,.8)",
        '--form-field-border-disabled': "rgba(255,255,255,.5)",
        '--form-field-bgr-disabled': "rgba(255,255,255,.4)",
        '--form-accent': "#1ae191",

        // Code blocks
        '--code': "#333",
        '--code-background': "rgba(0,0,0,.5)",

        // Hints
        '--hint-error': "#ce4144",
        '--hint-error-light': "#763136",
        '--hint-alert': "#cd9300",
        '--hint-alert-light': "#745b0e",
        '--hint-ok': "#76ab24",
        '--hint-ok-light': "#476927",
        '--hint-text-color': "#fff",

        // Labels (tags)
        '--label': "#2f00ff",
        '--label-text': "rgba(255,255,255,.85)",
    },
    warmNight: {
        '--menu-bgr': "#303d47",
        '--menu-border-color': "#142025",
        '--menu-item': "#aaaaaa",
        '--menu-item-hover': "#ffffff",
        '--menu-item-selected': "#85c92e",
        '--menu-group': "#fff",

        // Button regular
        '--button-bgr': "#303d47",
        '--button-border': "#ce9306",
        '--button-text': "#fff",

        '--button-hover-bgr': "#303d47",
        '--button-hover-border': "#ce9306",
        '--button-hover-text': "#fff",

        '--button-active-bgr': "#ce9306",
        '--button-active-border': "#ce9306",
        '--button-active-text': "#ffffff",

        // Button dropdown
        '--button-dropdown-hover-bgr': "rgba(255, 255, 255, 0.05)",

        // Button accent
        '--button-accent-bgr': "#85c92e",
        '--button-accent-border': "#85c92e",
        '--button-accent-text': "#131022",

        '--button-accent-hover-bgr': "#8fff00",
        '--button-accent-hover-border': "#8fff00",
        '--button-accent-hover-text': "#131022",

        '--button-accent-active-bgr': "#fff",
        '--button-accent-active-border': "#fff",
        '--button-accent-active-text': "#333",

        // Button danger
        '--button-danger-bgr': "#303d47",
        '--button-danger-border': "#ce4144",
        '--button-danger-text': "#fff",

        '--button-danger-hover-bgr': "#ce4144",
        '--button-danger-hover-border': "#ce4144",
        '--button-danger-hover-text': "#ffffff",

        '--button-danger-active-bgr': "#333333",
        '--button-danger-active-border': "#333333",
        '--button-danger-active-text': "#ffffff",

        // Table
        '--table-borders': "rgba(255,255,255,.2)",
        '--table-raw-hover': "rgba(255, 255, 255, 0.05)",

        // Cards
        '--cards-bgr': "#303d47",
        '--cards-border': "#303d47",
        '--cards-hover-bgr': "#303d47",
        '--cards-hover-border': "rgba(255,255,255,.5)",
        '--cards-notification': "#ce4144",
        '--cards-notification-text': "#fff",

        // Layout
        '--layout-bgr': "#142025",
        '--layout-secondary-bgr': "#303d47",
        '--layout-accent': "#85c92e",
        '--layout-accent-hover': "#8fff00",
        '--layout-text': "#fff",
        '--layout-headers': "#fff",
        '--layout-footer-bgr': "#303d47",
        '--layout-footer-text': "#fff",
        '--layout-footer-border': "#142025",

        // Forms
        '--form-field-border': "rgba(255,255,255,.2)",
        '--form-field-bgr': "#303d47",
        '--form-placeholder': "#fff",
        '--form-placeholder-disabled': "rgba(255,255,255,.8)",
        '--form-field-border-disabled': "rgba(255,255,255,.5)",
        '--form-field-bgr-disabled': "rgba(255,255,255,.4)",
        '--form-accent': "#85c92e",

        // Code blocks
        '--code': "#333",
        '--code-background': "rgba(0,0,0,.5)",

        // Hints
        '--hint-error': "#ce4144",
        '--hint-error-light': "#763136",
        '--hint-alert': "#cd9300",
        '--hint-alert-light': "#745b0e",
        '--hint-ok': "#76ab24",
        '--hint-ok-light': "#476927",
        '--hint-text-color': "#fff",

        // Labels (tags)
        '--label': "#ce9306",
        '--label-text': "rgba(255,255,255,.85)",
    },
    hacker: {
        '--menu-bgr': "#333333",
        '--menu-border-color': "#111",
        '--menu-item': "#aaaaaa",
        '--menu-item-hover': "#ffffff",
        '--menu-item-selected': "#60FF00",
        '--menu-group': "#fff",

        // Button regular
        '--button-bgr': "#303d47",
        '--button-border': "#F8E71C",
        '--button-text': "#fff",

        '--button-hover-bgr': "#F8E71C",
        '--button-hover-border': "#F8E71C",
        '--button-hover-text': "#000",

        '--button-active-bgr': "#fff",
        '--button-active-border': "#fff",
        '--button-active-text': "#000",

        // Button dropdown
        '--button-dropdown-hover-bgr': "rgba(255, 255, 255, 0.05)",

        // Button accent
        '--button-accent-bgr': "#60FF00",
        '--button-accent-border': "#60FF00",
        '--button-accent-text': "#131022",

        '--button-accent-hover-bgr': "#8fff00",
        '--button-accent-hover-border': "#8fff00",
        '--button-accent-hover-text': "#131022",

        '--button-accent-active-bgr': "#fff",
        '--button-accent-active-border': "#fff",
        '--button-accent-active-text': "#333",

        // Button danger
        '--button-danger-bgr': "#303d47",
        '--button-danger-border': "#ce4144",
        '--button-danger-text': "#fff",

        '--button-danger-hover-bgr': "#ce4144",
        '--button-danger-hover-border': "#ce4144",
        '--button-danger-hover-text': "#ffffff",

        '--button-danger-active-bgr': "#333333",
        '--button-danger-active-border': "#333333",
        '--button-danger-active-text': "#ffffff",

        // Table
        '--table-borders': "rgba(255,255,255,.2)",
        '--table-raw-hover': "rgba(255, 255, 255, 0.05)",

        // Cards
        '--cards-bgr': "#333333",
        '--cards-border': "#333333",
        '--cards-hover-bgr': "#333333",
        '--cards-hover-border': "rgba(255,255,255,.5)",
        '--cards-notification': "#ce4144",
        '--cards-notification-text': "#fff",

        // Layout
        '--layout-bgr': "#111",
        '--layout-secondary-bgr': "#333333",
        '--layout-accent': "#60FF00",
        '--layout-accent-hover': "#98fe5b",
        '--layout-text': "#fff",
        '--layout-headers': "#60FF00",

        // Forms
        '--form-field-border': "rgba(255,255,255,.2)",
        '--form-field-bgr': "#333",
        '--form-placeholder': "#fff",
        '--form-placeholder-disabled': "rgba(255,255,255,.8)",
        '--form-field-border-disabled': "rgba(255,255,255,.5)",
        '--form-field-bgr-disabled': "rgba(255,255,255,.4)",
        '--form-accent': "#60FF00",

        // Code blocks
        '--code': "#333",
        '--code-background': "rgba(0,0,0,.5)",

        // Hints
        '--hint-error': "#ce4144",
        '--hint-error-light': "#763136",
        '--hint-alert': "#cd9300",
        '--hint-alert-light': "#745b0e",
        '--hint-ok': "#76ab24",
        '--hint-ok-light': "#476927",
        '--hint-text-color': "#fff",

        // Labels (tags)
        '--label': "#F8E71C",
        '--label-text': "rgba(0,0,0,.85)",
    },
    raspberry: {
        '--menu-bgr': "#ffffff",
        '--menu-border-color': "#f5e8e4",
        '--menu-item': "#999999",
        '--menu-item-hover': "#333333",
        '--menu-item-selected': "#db004a",
        '--menu-group': "#333333",

        // Button regular
        '--button-bgr': "#ffffff",
        '--button-border': "#8E8E8E",
        '--button-text': "#333333",

        '--button-hover-bgr': "#ffffff",
        '--button-hover-border': "#8E8E8E",
        '--button-hover-text': "#333333",

        '--button-active-bgr': "#8e8e8e",
        '--button-active-border': "#333333",
        '--button-active-text': "#ffffff",

        // Button dropdown
        '--button-dropdown-hover-bgr': "rgba(219, 0, 74, 0.05)",

        // Button accent
        '--button-accent-bgr': "#db004a",
        '--button-accent-border': "#db004a",
        '--button-accent-text': "#ffffff",

        '--button-accent-hover-bgr': "#d40037",
        '--button-accent-hover-border': "#d40037",
        '--button-accent-hover-text': "#ffffff",

        '--button-accent-active-bgr': "#333333",
        '--button-accent-active-border': "#333333",
        '--button-accent-active-text': "#ffffff",

        // Button danger
        '--button-danger-bgr': "#ffffff",
        '--button-danger-border': "#8e8e8e",
        '--button-danger-text': "#333333",

        '--button-danger-hover-bgr': "#ff525b",
        '--button-danger-hover-border': "#ff525b",
        '--button-danger-hover-text': "#ffffff",

        '--button-danger-active-bgr': "#333333",
        '--button-danger-active-border': "#333333",
        '--button-danger-active-text': "#ffffff",

        // Table
        '--table-borders': "rgba(0,0,0,.12)",
        '--table-raw-hover': "rgba(219, 0, 74, 0.05)",

        // Cards
        '--cards-bgr': "#ffffff",
        '--cards-border': "#f5e8e4",
        '--cards-hover-bgr': "#ffffff",
        '--cards-hover-border': "#f5e8e4",
        '--cards-notification': "#ff525b",
        '--cards-notification-text': "#fff",

        // Layout
        '--layout-bgr': "#f5e8e4",
        '--layout-secondary-bgr': "#fff",
        '--layout-accent': "#db004a",
        '--layout-accent-hover': "#d40037",
        '--layout-text': "#333333",
        '--layout-headers': "#666",
        '--layout-footer-bgr': "#fff",
        '--layout-footer-text': "#333",
        '--layout-footer-border': "#f5e8e4",

        // Forms
        '--form-field-border': "#eaafa7",
        '--form-field-bgr': "#ffffff",
        '--form-placeholder': "#333333",
        '--form-placeholder-disabled': "#999999",
        '--form-field-border-disabled': "#bbbbbb",
        '--form-field-bgr-disabled': "#cccccc",
        '--form-accent': "#db004a",

        // Code blocks
        '--code': "#333333",
        '--code-background': "#fff",

        // Hints
        '--hint-error': "#ff525b",
        '--hint-error-light': "#ffd6d8",
        '--hint-alert': "#eca910",
        '--hint-alert-light': "#f9dfa4",
        '--hint-ok': "#00c197",
        '--hint-ok-light': "#d6f8e5",
        '--hint-text-color': "#333333",

        // Labels (tags)
        '--label': "#a6e97a",
        '--label-text': "rgba(0,0,0,.5)",
    },
    baltic: {
        '--menu-bgr': "#ffffff",
        '--menu-border-color': "#eeefe7",
        '--menu-item': "#999999",
        '--menu-item-hover': "#333333",
        '--menu-item-selected': "#8ca3a3",
        '--menu-group': "#333333",

        // Button regular
        '--button-bgr': "#ffffff",
        '--button-border': "#8E8E8E",
        '--button-text': "#333333",

        '--button-hover-bgr': "#ffffff",
        '--button-hover-border': "#8E8E8E",
        '--button-hover-text': "#333333",

        '--button-active-bgr': "#8e8e8e",
        '--button-active-border': "#333333",
        '--button-active-text': "#ffffff",

        // Button dropdown
        '--button-dropdown-hover-bgr': "rgba(140, 163, 163, 0.05)",

        // Button accent
        '--button-accent-bgr': "#8ca3a3",
        '--button-accent-border': "#8ca3a3",
        '--button-accent-text': "#ffffff",

        '--button-accent-hover-bgr': "#6a8d8d",
        '--button-accent-hover-border': "#6a8d8d",
        '--button-accent-hover-text': "#ffffff",

        '--button-accent-active-bgr': "#333333",
        '--button-accent-active-border': "#333333",
        '--button-accent-active-text': "#ffffff",

        // Button danger
        '--button-danger-bgr': "#ffffff",
        '--button-danger-border': "#8e8e8e",
        '--button-danger-text': "#333333",

        '--button-danger-hover-bgr': "#ff525b",
        '--button-danger-hover-border': "#ff525b",
        '--button-danger-hover-text': "#ffffff",

        '--button-danger-active-bgr': "#333333",
        '--button-danger-active-border': "#333333",
        '--button-danger-active-text': "#ffffff",

        // Table
        '--table-borders': "rgba(0,0,0,.12)",
        '--table-raw-hover': "rgba(140, 163, 163, 0.05)",

        // Cards
        '--cards-bgr': "#ffffff",
        '--cards-border': "#eeefe7",
        '--cards-hover-bgr': "#ffffff",
        '--cards-hover-border': "#eeefe7",
        '--cards-notification': "#ff525b",
        '--cards-notification-text': "#fff",

        // Layout
        '--layout-bgr': "#eeefe7",
        '--layout-secondary-bgr': "#fff",
        '--layout-accent': "#8ca3a3",
        '--layout-accent-hover': "#6a8d8d",
        '--layout-text': "#333333",
        '--layout-headers': "#666",
        '--layout-footer-bgr': "#fff",
        '--layout-footer-text': "#333",
        '--layout-footer-border': "#eeefe7",

        // Forms
        '--form-field-border': "#aaa",
        '--form-field-bgr': "#ffffff",
        '--form-placeholder': "#333333",
        '--form-placeholder-disabled': "#999999",
        '--form-field-border-disabled': "#bbbbbb",
        '--form-field-bgr-disabled': "#cccccc",
        '--form-accent': "#8ca3a3",

        // Code blocks
        '--code': "#333333",
        '--code-background': "#fff",

        // Hints
        '--hint-error': "#ff525b",
        '--hint-error-light': "#ffd6d8",
        '--hint-alert': "#eca910",
        '--hint-alert-light': "#f9dfa4",
        '--hint-ok': "#00c197",
        '--hint-ok-light': "#d6f8e5",
        '--hint-text-color': "#333333",

        // Labels (tags)
        '--label': "#8f6d7d",
        '--label-text': "#fff",
    },
}

const customThemeColorNames = {
    '--menu-bgr': "Menu | Background color",
    '--menu-border-color': "Menu | Border color",
    '--menu-item': "Menu | Item color",
    '--menu-item-hover': "Menu | Hevered item color",
    '--menu-item-selected': "Menu | Selected item color",
    '--menu-group': "Menu | Subheader (group) color",

    // Button _ regular
    '--button-bgr': "Button | Regular | Button color",
    '--button-border': "Button | Regular | Border color",
    '--button-text': "Button | Regular | Text color",

    '--button-hover-bgr': "Button | Regular | Hover button color",
    '--button-hover-border': "Button | Regular | Hover border color",
    '--button-hover-text': "Button | Regular | Hover text color",

    '--button-active-bgr': "Button | Regular | Active button color",
    '--button-active-border': "Button | Regular | Active border color",
    '--button-active-text': "Button | Regular | Active text color",

    '--button-dropdown-hover-bgr': "Button | Dropdown | Hover color",

    // Button _ accent
    '--button-accent-bgr': "Button | Accent | Button color",
    '--button-accent-border': "Button | Accent | Border color",
    '--button-accent-text': "Button | Accent | Text color",

    '--button-accent-hover-bgr': "Button | Accent | Hover button color",
    '--button-accent-hover-border': "Button | Accent | Hover border color",
    '--button-accent-hover-text': "Button | Accent | Hover text color",

    '--button-accent-active-bgr': "Button | Accent | Active button color",
    '--button-accent-active-border': "Button | Accent | Active border color",
    '--button-accent-active-text': "Button | Accent | Active text color",

    // Button _ danger
    '--button-danger-bgr': "Button | Danger | Button color",
    '--button-danger-border': "Button | Danger | Border color",
    '--button-danger-text': "Button | Danger | Text color",

    '--button-danger-hover-bgr': "Button | Danger | Hover button color",
    '--button-danger-hover-border': "Button | Danger | Hover border color",
    '--button-danger-hover-text': "Button | Danger | Hover text color",

    '--button-danger-active-bgr': "Button | Danger | Active button color",
    '--button-danger-active-border': "Button | Danger | Active border color",
    '--button-danger-active-text': "Button | Danger | Active text color",

    // Table
    '--table-borders': "Table borders color",
    '--table-raw-hover': "Table hover row color",

    // Cards
    '--cards-bgr': "Cards color",
    '--cards-border': "Cards border",
    '--cards-hover-bgr': "Cards hover color",
    '--cards-hover-border': "Cards hover border color",
    '--cards-notification': "Cards notification (counter)",
    '--cards-notification-text': "Cards notification text",


    // Layout
    '--layout-bgr': "Layout background color",
    '--layout-secondary-bgr': "Layout secondary background color",
    '--layout-accent': "Accent color",
    '--layout-accent-hover': "Accent hover color",
    '--layout-text': "Main text color",
    '--layout-headers': "Headers color",
    '--layout-footer-bgr': "Footer color",
    '--layout-footer-text': "Footer text color",
    '--layout-footer-border': "Footer border color",

    // Forms
    '--form-field-border': "Form fields border color",
    '--form-field-bgr': "Form fields background color",
    '--form-placeholder': "Form field text color",
    '--form-placeholder-disabled': "Form disabled field color",
    '--form-field-border-disabled': "Form disabled field border color",
    '--form-field-bgr-disabled': "Form disabled field background",
    '--form-accent': "Form accent color",

    // Code blocks
    '--code': "Code text color",
    '--code-background': "Code text background",

    // Hints
    '--hint-error': "Error color",
    '--hint-error-light': "Error light color",
    '--hint-alert': "Alert color",
    '--hint-alert-light': "Alert light color",
    '--hint-ok': "OK color",
    '--hint-ok-light': "OK light color",
    '--hint-text-color': "Hint text color",

    // Labels (tags)
    '--label': "Label (tag) color",
    '--label-text': "Label (tag) text color",
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
        if (colorScheme === 'custom') {
            for (const param in customThemeColors.classic) {
                document.documentElement.style.setProperty(param,
                    (themeName.customThemeColors && themeName.customThemeColors[param]) || customThemeColors.classic[param])
            }
        } else {
            for (const param in customThemeColors[colorScheme]) {
                document.documentElement.style.setProperty(param, customThemeColors[colorScheme][param])
            }
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
                label: 'Customise theme',
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


    const [themeRawView, setThemeRawView] = useState(false)

    // useEffect(() => {
    //     if (!selectedColorScheme.customThemeColors || customThemeColors.customThemeColors == {}) {
    //         const saveCS = { ...selectedColorScheme, customThemeColors: { ...deepCloneCustomThemeColors } }
    //         setSelectedColorScheme(saveCS)
    //     }
    // }, [])

    const myCustomTheme = <div>
        <Checkbox className={styles.checkbox} label='Raw mode (JSON)' defaultValue={themeRawView} onChange={setThemeRawView} />
        {!themeRawView ? <div>
            <span className={styles.colorTip}>Use HEX, e.g. <code>#123000</code> or RGBA, e.g. <code>rgba(0,0,0,0.5)</code>,
                or <code>red</code>, <code>coral</code>, <code>green</code>, etc.</span>
            <div className={styles.horInputs}>
                {Object.keys(customThemeColors.classic).map(key => <Input
                    type='colour'
                    label={customThemeColorNames[key]}
                    height={props.height}
                    width={290}
                    className={styles.input}
                    code
                    defaultValue={_.get(selectedColorScheme, `customThemeColors.${key}`)}
                    onChange={value => {
                        let correctedValue = !value ? '' : !value[0].match(/[0-9]/gm) ? value : '#' + value
                        const copyCS = { ...selectedColorScheme }
                        _.set(copyCS, `customThemeColors.${key}`, correctedValue)
                        setSelectedColorScheme(copyCS)
                    }}
                />)}
            </div></div> :
            <Input type="json"
                description='Share this JSON as your custom colouring scheme with other Directual users'
                onChange={value => setSelectedColorScheme({ ...selectedColorScheme, customThemeColors: parseJson(value) })}
                rows='auto' defaultValue={stringifyJson(_.merge({ ...customThemeColors.classic }, selectedColorScheme.customThemeColors))} />}
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
                onChange={value => value === 'custom' ?
                    setSelectedColorScheme({ ...selectedColorScheme, colorScheme: value, })
                    :
                    setSelectedColorScheme({ ...selectedColorScheme, colorScheme: value, customThemeColors: { ...customThemeColors[value] } })
                }
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
