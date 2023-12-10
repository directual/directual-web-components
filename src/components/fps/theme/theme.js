import React, { useState, useEffect } from 'react'
import styles from './theme.module.css'
import Radio from '../dataentry/radio/radio'
import Input, { InputGroup } from '../dataentry/input/input'
import { FormSection } from '../dataentry/form/FpsForm'
import _ from 'lodash'
import TabsPane from '../layout/tabpane/tabpane'
import Checkbox from '../dataentry/checkbox/checkbox'
import ActionPanel from '../actionspanel/actionspanel'
import Button from '../button/button'
import Hint from '../hint/hint'


const customThemeColors = {
    classic: {
        "--menu-bgr": "#ffffff",
        "--menu-border-color": "#c7c7c7",
        "--menu-item": "#313131",
        "--menu-item-hover": "#058efc",
        "--menu-item-hover-bgr": "#ffffff",
        "--menu-item-hover-border": "#ffffff",
        "--menu-item-selected": "#ffffff",
        "--menu-item-selected-bgr": "#058efc",
        "--menu-item-selected-border": "#058efc",
        "--menu-group": "rgba(0,0,0,0.3)",
        "--menu-group-hover": "rgba(0,0,0,0.7)",
        "--menu-alert": "#ffffff",
        "--menu-alert-bgr": "#ff525b",
        "--button-bgr": "#ffffff",
        "--button-border": "#8e8e8e",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8e8e8e",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(5, 142, 252, 0.05)",
        "--button-accent-bgr": "#058efc",
        "--button-accent-border": "#058efc",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#0062bd",
        "--button-accent-hover-border": "#0062bd",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#333333",
        "--button-accent-active-border": "#333333",
        "--button-accent-active-text": "#ffffff",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#8e8e8e",
        "--button-danger-text": "#333333",
        "--button-danger-hover-bgr": "#ff525b",
        "--button-danger-hover-border": "#ff525b",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#ffffff",
        "--table-borders": "rgba(0, 0, 0, 0.12)",
        "--table-raw-hover": "rgba(5, 142, 252, 0.05)",
        "--cards-bgr": "#ffffff",
        "--cards-border": "#aaaaaa",
        "--cards-hover-bgr": "#ffffff",
        "--cards-hover-border": "#aaaaaa",
        "--cards-notification": "#ff525b",
        "--cards-notification-text": "#ffffff",
        "--layout-bgr": "#eeeeee",
        "--layout-secondary-bgr": "#ffffff",
        "--layout-accent": "#058efc",
        "--layout-accent-hover": "#0062bd",
        "--layout-text": "#333333",
        "--layout-headers": "#333333",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#eeeeee",
        "--form-field-border": "#aaaaaa",
        "--form-field-bgr": "#ffffff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#058efc",
        "--code": "#333333",
        "--code-background": "#fff",
        "--hint-error": "#ff525b",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#00c197",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#26be99",
        "--label-text": "#ffffff"
    },
    white: {
        "--menu-bgr": "#dcdcdc",
        "--menu-border-color": "#c1c1c1",
        "--menu-item": "#5c5c5c",
        "--menu-item-hover": "#058efc",
        "--menu-item-selected": "#fff",
        "--menu-item-selected-bgr": "#058efc",
        "--menu-group": "rgba(0,0,0,0.35)",
        "--button-bgr": "#ffffff",
        "--button-border": "#8e8e8e",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8e8e8e",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(5, 142, 252, 0.05)",
        "--button-accent-bgr": "#058efc",
        "--button-accent-border": "#058efc",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#0062bd",
        "--button-accent-hover-border": "#0062bd",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#333333",
        "--button-accent-active-border": "#333333",
        "--button-accent-active-text": "#ffffff",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#8e8e8e",
        "--button-danger-text": "#333333",
        "--button-danger-hover-bgr": "#ff525b",
        "--button-danger-hover-border": "#ff525b",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#ffffff",
        "--table-borders": "rgba(0, 0, 0, 0.12)",
        "--table-raw-hover": "rgba(5, 142, 252, 0.05)",
        "--cards-bgr": "#ffffff",
        "--cards-border": "#aaaaaa",
        "--cards-hover-bgr": "#ffffff",
        "--cards-hover-border": "#aaaaaa",
        "--cards-notification": "#ff525b",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#ffffff",
        "--layout-secondary-bgr": "#ffffff",
        "--layout-accent": "#058efc",
        "--layout-accent-hover": "#0062bd",
        "--layout-text": "#333333",
        "--layout-headers": "#333333",
        "--layout-footer-bgr": "#dcdcdc",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#c1c1c1",
        "--form-field-border": "#aaaaaa",
        "--form-field-bgr": "#ffffff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#058efc",
        "--code": "#333333",
        "--code-background": "#eeeeee",
        "--hint-error": "#ff525b",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#00c197",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#26be99",
        "--label-text": "#ffffff",
        "--menu-item-selected-border": "058efc",
        "--menu-group-hover": "rgba(0,0,0,0.7)",
        "--menu-item-hover-bgr": "#EEEEEE",
        "--menu-item-hover-border": "#EEEEEE",
        "--menu-alert": "#ffffff",
        "--menu-alert-bgr": "#ff525b"
    },
    tiffany: {
        "--menu-bgr": "#ffffff",
        "--menu-border-color": "#c7c7c7",
        "--menu-item": "#313131",
        "--menu-item-hover": "#4ad5c8",
        "--menu-item-hover-bgr": "#ffffff",
        "--menu-item-hover-border": "#ffffff",
        "--menu-item-selected": "#ffffff",
        "--menu-item-selected-bgr": "#4ad5c8",
        "--menu-item-selected-border": "#4ad5c8",
        "--menu-group": "rgba(0,0,0,0.3)",
        "--menu-group-hover": "rgba(0,0,0,0.7)",
        "--menu-alert": "rgba(0,0,0,0.65)",
        "--menu-alert-bgr": "#FFCCA9",
        "--button-bgr": "#ffffff",
        "--button-border": "#8e8e8e",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8e8e8e",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(5, 142, 252, 0.05)",
        "--button-accent-bgr": "#4ad5c8",
        "--button-accent-border": "#4ad5c8",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#37aea3",
        "--button-accent-hover-border": "#37aea3",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#333333",
        "--button-accent-active-border": "#333333",
        "--button-accent-active-text": "#ffffff",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#8e8e8e",
        "--button-danger-text": "#333333",
        "--button-danger-hover-bgr": "#ff525b",
        "--button-danger-hover-border": "#ff525b",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#ffffff",
        "--table-borders": "rgba(0, 0, 0, 0.12)",
        "--table-raw-hover": "rgba(5, 142, 252, 0.05)",
        "--cards-bgr": "#ffffff",
        "--cards-border": "#aaaaaa",
        "--cards-hover-bgr": "#ffffff",
        "--cards-hover-border": "#aaaaaa",
        "--cards-notification": "#FFCCA9",
        "--cards-notification-text": "rgba(0,0,0,0.7)",
        "--layout-bgr": "#eeeeee",
        "--layout-secondary-bgr": "#ffffff",
        "--layout-accent": "#4ad5c8",
        "--layout-accent-hover": "#37aea3",
        "--layout-text": "#333333",
        "--layout-headers": "#333333",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#eeeeee",
        "--form-field-border": "#aaaaaa",
        "--form-field-bgr": "#ffffff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#4ad5c8",
        "--code": "#333333",
        "--code-background": "#fff",
        "--hint-error": "#ff525b",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#00c197",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#FFCCA9",
        "--label-text": "rgba(0,0,0,0.7)"
    },
    darkMint: {
        "--menu-bgr": "#131022",
        "--menu-border-color": "#404059",
        "--menu-item": "#fcfcfc",
        "--menu-item-hover": "#1ae191",
        "--menu-item-selected": "#131022",
        "--menu-item-selected-bgr": "#1ae191",
        "--menu-group": "rgba(255,255,255,.4)",
        "--button-bgr": "#131022",
        "--button-border": "#2f00ff",
        "--button-text": "#fff",
        "--button-hover-bgr": "#131022",
        "--button-hover-border": "#2f00ff",
        "--button-hover-text": "#fff",
        "--button-active-bgr": "#2f00ff",
        "--button-active-border": "#2f00ff",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(255, 255, 255, 0.05)",
        "--button-accent-bgr": "#1ae191",
        "--button-accent-border": "#1ae191",
        "--button-accent-text": "#131022",
        "--button-accent-hover-bgr": "#00ff98",
        "--button-accent-hover-border": "#00ff98",
        "--button-accent-hover-text": "#131022",
        "--button-accent-active-bgr": "#fff",
        "--button-accent-active-border": "#fff",
        "--button-accent-active-text": "#00ff98",
        "--button-danger-bgr": "#131022",
        "--button-danger-border": "#ff525b",
        "--button-danger-text": "#fff",
        "--button-danger-hover-bgr": "#ff525b",
        "--button-danger-hover-border": "#ff525b",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#000",
        "--button-danger-active-border": "#404059",
        "--button-danger-active-text": "#ff525b",
        "--table-borders": "rgba(255,255,255,.2)",
        "--table-raw-hover": "rgba(255, 255, 255, 0.05)",
        "--cards-bgr": "#131022",
        "--cards-border": "#404059",
        "--cards-hover-bgr": "#131022",
        "--cards-hover-border": "#fff",
        "--cards-notification": "#ff525b",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#26274D",
        "--layout-secondary-bgr": "#131022",
        "--layout-accent": "#1ae191",
        "--layout-accent-hover": "#00ff98",
        "--layout-text": "#fff",
        "--layout-headers": "#fff",
        "--layout-footer-bgr": "#131022",
        "--layout-footer-text": "#fff",
        "--layout-footer-border": "#404059",
        "--form-field-border": "#404059",
        "--form-field-bgr": "#131022",
        "--form-placeholder": "#fff",
        "--form-placeholder-disabled": "rgba(255,255,255,.8)",
        "--form-field-border-disabled": "rgba(255,255,255,.5)",
        "--form-field-bgr-disabled": "rgba(255,255,255,.4)",
        "--form-accent": "#1ae191",
        "--code": "#d1d1d1",
        "--code-background": "#131022",
        "--hint-error": "#ce4144",
        "--hint-error-light": "#763136",
        "--hint-alert": "#cd9300",
        "--hint-alert-light": "#745b0e",
        "--hint-ok": "#76ab24",
        "--hint-ok-light": "#476927",
        "--hint-text-color": "#fff",
        "--label": "#2f00ff",
        "--label-text": "rgba(255,255,255,.85)",
        "--menu-item-hover-bgr": "#26274D",
        "--menu-item-hover-border": "#26274D",
        "--menu-item-selected-border": "#1ae191",
        "--menu-group-hover": "rgba(255,255,255,.8)",
        "--menu-alert": "#ffffff",
        "--menu-alert-bgr": "#ff525b"
    },
    warmNight: {
        "--menu-bgr": "#384753",
        "--menu-border-color": "#5c6f7d",
        "--menu-item": "#aaaaaa",
        "--menu-item-hover": "#ffffff",
        "--menu-item-selected": "#85c92e",
        "--menu-item-selected-bgr": "#142025",
        "--menu-group": "rgba(255,255,255,0.72)",
        "--button-bgr": "#384753",
        "--button-border": "#ce9306",
        "--button-text": "#fff",
        "--button-hover-bgr": "#384753",
        "--button-hover-border": "#ce9306",
        "--button-hover-text": "#fff",
        "--button-active-bgr": "#ce9306",
        "--button-active-border": "#ce9306",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(255, 255, 255, 0.05)",
        "--button-accent-bgr": "#85c92e",
        "--button-accent-border": "#85c92e",
        "--button-accent-text": "#131022",
        "--button-accent-hover-bgr": "#8fff00",
        "--button-accent-hover-border": "#8fff00",
        "--button-accent-hover-text": "#131022",
        "--button-accent-active-bgr": "#fff",
        "--button-accent-active-border": "#fff",
        "--button-accent-active-text": "#333",
        "--button-danger-bgr": "#384753",
        "--button-danger-border": "#ce4144",
        "--button-danger-text": "#fff",
        "--button-danger-hover-bgr": "#ce4144",
        "--button-danger-hover-border": "#ce4144",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#ce4144",
        "--table-borders": "rgba(255,255,255,.2)",
        "--table-raw-hover": "rgba(255, 255, 255, 0.05)",
        "--cards-bgr": "#384753",
        "--cards-border": "#5c6f7d",
        "--cards-hover-bgr": "#303d47",
        "--cards-hover-border": "rgba(255,255,255,0.82)",
        "--cards-notification": "#ce4144",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#142025",
        "--layout-secondary-bgr": "#384753",
        "--layout-accent": "#85c92e",
        "--layout-accent-hover": "#8fff00",
        "--layout-text": "#fff",
        "--layout-headers": "#fff",
        "--layout-footer-bgr": "#384753",
        "--layout-footer-text": "#fff",
        "--layout-footer-border": "#142025",
        "--form-field-border": "#5c6f7d",
        "--form-field-bgr": "#384753",
        "--form-placeholder": "#fff",
        "--form-placeholder-disabled": "rgba(255,255,255,.8)",
        "--form-field-border-disabled": "rgba(255,255,255,.5)",
        "--form-field-bgr-disabled": "rgba(255,255,255,.4)",
        "--form-accent": "#85c92e",
        "--code": "#e1e1e1",
        "--code-background": "#384753",
        "--hint-error": "#ce4144",
        "--hint-error-light": "#763136",
        "--hint-alert": "#cd9300",
        "--hint-alert-light": "#745b0e",
        "--hint-ok": "#76ab24",
        "--hint-ok-light": "#476927",
        "--hint-text-color": "#fff",
        "--label": "#ce9306",
        "--label-text": "rgba(255,255,255,.85)",
        "--menu-item-selected-border": "#142025",
        "--menu-item-hover-bgr": "#384753",
        "--menu-item-hover-border": "#384753",
        "--menu-group-hover": "#ffffff",
        "--menu-alert-bgr": "#ce4144",
        "--menu-alert": "#fff"
    },
    hacker: {
        "--menu-bgr": "#333333",
        "--menu-border-color": "#111",
        "--menu-item": "#fff",
        "--menu-item-hover": "#fff",
        "--menu-item-selected": "#111",
        "--menu-item-selected-bgr": "#60FF00",
        "--menu-group": "rgba(255,255,255,0.5)",
        "--button-bgr": "#303d47",
        "--button-border": "#F8E71C",
        "--button-text": "#fff",
        "--button-hover-bgr": "#F8E71C",
        "--button-hover-border": "#F8E71C",
        "--button-hover-text": "#000",
        "--button-active-bgr": "#fff",
        "--button-active-border": "#fff",
        "--button-active-text": "#000",
        "--button-dropdown-hover-bgr": "rgba(255, 255, 255, 0.05)",
        "--button-accent-bgr": "#60FF00",
        "--button-accent-border": "#60FF00",
        "--button-accent-text": "#131022",
        "--button-accent-hover-bgr": "#8fff00",
        "--button-accent-hover-border": "#8fff00",
        "--button-accent-hover-text": "#131022",
        "--button-accent-active-bgr": "#fff",
        "--button-accent-active-border": "#fff",
        "--button-accent-active-text": "#333",
        "--button-danger-bgr": "#303d47",
        "--button-danger-border": "#ce4144",
        "--button-danger-text": "#fff",
        "--button-danger-hover-bgr": "#ce4144",
        "--button-danger-hover-border": "#ce4144",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#ffffff",
        "--table-borders": "rgba(255,255,255,.2)",
        "--table-raw-hover": "rgba(255, 255, 255, 0.05)",
        "--cards-bgr": "#333333",
        "--cards-border": "#555",
        "--cards-hover-bgr": "#333333",
        "--cards-hover-border": "#aaa",
        "--cards-notification": "#ce4144",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#111",
        "--layout-secondary-bgr": "#333333",
        "--layout-accent": "#60FF00",
        "--layout-accent-hover": "#98fe5b",
        "--layout-text": "#fff",
        "--layout-headers": "#60FF00",
        "--form-field-border": "rgba(255,255,255,.2)",
        "--form-field-bgr": "#333",
        "--form-placeholder": "#fff",
        "--form-placeholder-disabled": "rgba(255,255,255,.8)",
        "--form-field-border-disabled": "rgba(255,255,255,.5)",
        "--form-field-bgr-disabled": "rgba(255,255,255,.4)",
        "--form-accent": "#60FF00",
        "--code": "#dcdcdc",
        "--code-background": "#2f2f2f",
        "--hint-error": "#ce4144",
        "--hint-error-light": "#763136",
        "--hint-alert": "#cd9300",
        "--hint-alert-light": "#745b0e",
        "--hint-ok": "#76ab24",
        "--hint-ok-light": "#476927",
        "--hint-text-color": "#fff",
        "--label": "#F8E71C",
        "--label-text": "rgba(0,0,0,.85)",
        "--layout-footer-bgr": "#333333",
        "--layout-footer-text": "#fff",
        "--layout-footer-border": "#333333",
        "--menu-item-selected-border": "#60FF00",
        "--menu-group-hover": "rgba(255,255,255,0.9)",
        "--menu-alert-bgr": "#ce4144",
        "--menu-alert": "#fff",
        "--menu-item-hover-bgr": "#31690d",
        "--menu-item-hover-border": "#31690d"
    },
    raspberry: {
        "--menu-bgr": "#ffffff",
        "--menu-border-color": "#f1ccc1",
        "--menu-item": "#999999",
        "--menu-item-hover": "#db004a",
        "--menu-item-selected": "#db004a",
        "--menu-item-selected-bgr": "#f5e8e4",
        "--menu-group": "#c8c8c8",
        "--button-bgr": "#ffffff",
        "--button-border": "#8E8E8E",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8E8E8E",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(219, 0, 74, 0.05)",
        "--button-accent-bgr": "#a6e97a",
        "--button-accent-border": "#a6e97a",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#74c544",
        "--button-accent-hover-border": "#74c544",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#333333",
        "--button-accent-active-border": "#333333",
        "--button-accent-active-text": "#a6e97a",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#8e8e8e",
        "--button-danger-text": "#333333",
        "--button-danger-hover-bgr": "#db004a",
        "--button-danger-hover-border": "#db004a",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#db004a",
        "--table-borders": "#f1ccc1",
        "--table-raw-hover": "rgba(219, 0, 74, 0.05)",
        "--cards-bgr": "#ffffff",
        "--cards-border": "#f1ccc1",
        "--cards-hover-bgr": "#ffffff",
        "--cards-hover-border": "#f1ccc1",
        "--cards-notification": "#a6e97a",
        "--cards-notification-text": "rgba(0,0,0,.5)",
        "--layout-bgr": "#f5e8e4",
        "--layout-secondary-bgr": "#fff",
        "--layout-accent": "#db004a",
        "--layout-accent-hover": "#d40037",
        "--layout-text": "#333333",
        "--layout-headers": "#666",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#f5e8e4",
        "--form-field-border": "#eaafa7",
        "--form-field-bgr": "#ffffff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#db004a",
        "--code": "#333333",
        "--code-background": "#fff",
        "--hint-error": "#db004a",
        "--hint-error-light": "#efbccf",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#00c197",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#a6e97a",
        "--label-text": "rgba(0,0,0,.5)",
        "--menu-item-hover-bgr": "#fff",
        "--menu-item-hover-border": "#fff",
        "--menu-item-selected-border": "#f5e8e4",
        "--menu-alert": "rgba(0,0,0,.5)",
        "--menu-alert-bgr": "#a6e97a",
        "--menu-group-hover": "#8a8a8a"
    },
    baltic: {
        "--menu-bgr": "#fff",
        "--menu-border-color": "#d5d7d2",
        "--menu-item": "#999999",
        "--menu-item-hover": "#333333",
        "--menu-item-selected": "#8ca3a3",
        "--menu-item-selected-bgr": "#eeefe7",
        "--menu-group": "#c2c2c2",
        "--button-bgr": "#ffffff",
        "--button-border": "#8E8E8E",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8E8E8E",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(140, 163, 163, 0.05)",
        "--button-accent-bgr": "#8ca3a3",
        "--button-accent-border": "#8ca3a3",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#6a8d8d",
        "--button-accent-hover-border": "#6a8d8d",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#333333",
        "--button-accent-active-border": "#333333",
        "--button-accent-active-text": "#ffffff",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#8f6d7d",
        "--button-danger-text": "#8f6d7d",
        "--button-danger-hover-bgr": "#8f6d7d",
        "--button-danger-hover-border": "#8f6d7d",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#ffffff",
        "--table-borders": "rgba(0,0,0,.12)",
        "--table-raw-hover": "rgba(140, 163, 163, 0.05)",
        "--cards-bgr": "#ffffff",
        "--cards-border": "#eeefe7",
        "--cards-hover-bgr": "#ffffff",
        "--cards-hover-border": "#eeefe7",
        "--cards-notification": "#8f6d7d",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#eeefe7",
        "--layout-secondary-bgr": "#fff",
        "--layout-accent": "#8ca3a3",
        "--layout-accent-hover": "#6a8d8d",
        "--layout-text": "#333333",
        "--layout-headers": "#666",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#eeefe7",
        "--form-field-border": "#aaa",
        "--form-field-bgr": "#ffffff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#8ca3a3",
        "--code": "#333333",
        "--code-background": "#fff",
        "--hint-error": "#ff525b",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#00c197",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#8f6d7d",
        "--label-text": "#fff",
        "--menu-item-hover-bgr": "#fff",
        "--menu-item-hover-border": "#fff",
        "--menu-item-selected-border": "#eeefe7",
        "--menu-group-hover": "#919191",
        "--menu-alert": "#ffffff",
        "--menu-alert-bgr": "#8f6d7d"
    },
    rossoCorsa: {
        "--menu-bgr": "#f4173d",
        "--menu-border-color": "#f198a9",
        "--menu-item": "#fff",
        "--menu-item-hover": "#fff400",
        "--menu-item-selected": "rgba(0,0,0,0.56)",
        "--menu-group": "rgba(255,255,255,0.65)",
        "--button-bgr": "#ffffff",
        "--button-border": "#8e8e8e",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8e8e8e",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(5, 142, 252, 0.05)",
        "--button-accent-bgr": "#00c48a",
        "--button-accent-border": "#00c48a",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#02a372",
        "--button-accent-hover-border": "#02a372",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#434343",
        "--button-accent-active-border": "#434343",
        "--button-accent-active-text": "#ffffff",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#f4173d",
        "--button-danger-text": "#f4173d",
        "--button-danger-hover-bgr": "#f4173d",
        "--button-danger-hover-border": "#f4173d",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#434343",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#f4173d",
        "--table-borders": "rgba(0, 0, 0, 0.12)",
        "--table-raw-hover": "rgba(5, 142, 252, 0.05)",
        "--cards-bgr": "#f2f2f2",
        "--cards-border": "#aaaaaa",
        "--cards-hover-bgr": "#f2f2f2",
        "--cards-hover-border": "#aaaaaa",
        "--cards-notification": "#fff400",
        "--cards-notification-text": "rgba(0,0,0,0.56)",
        "--layout-bgr": "#ffffff",
        "--layout-secondary-bgr": "#f2f2f2",
        "--layout-accent": "#f4173d",
        "--layout-accent-hover": "#c0112f",
        "--layout-text": "#333333",
        "--layout-headers": "#f4173d",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#c7c7c7",
        "--form-field-border": "#aaaaaa",
        "--form-field-bgr": "#f2f2f2",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#f4173d",
        "--code": "#333333",
        "--code-background": "#f2f2f2",
        "--hint-error": "#f4173d",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#aacb0e",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#00c48a",
        "--label-text": "#ffffff",
        "--menu-item-hover-bgr": "#f4173d",
        "--menu-item-hover-border": "#f4173d",
        "--menu-item-selected-border": "#fff400",
        "--menu-item-selected-bgr": "#fff400",
        "--menu-group-hover": "rgba(255,255,255,0.75)",
        "--menu-alert": "rgba(0,0,0,0.56)",
        "--menu-alert-bgr": "#fff400"
    },
    bondiBeach: {
        "--menu-bgr": "#0095b5",
        "--menu-border-color": "#52bbd2",
        "--menu-item": "#fce5db",
        "--menu-item-hover": "#e08542",
        "--menu-item-selected": "#fff",
        "--menu-group": "#b1e6f2",
        "--button-bgr": "#ffffff",
        "--button-border": "#8e8e8e",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8e8e8e",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(5, 142, 252, 0.05)",
        "--button-accent-bgr": "#aacb0e",
        "--button-accent-border": "#aacb0e",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#8eab03",
        "--button-accent-hover-border": "#8eab03",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#333333",
        "--button-accent-active-border": "#333333",
        "--button-accent-active-text": "#ffffff",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#8e8e8e",
        "--button-danger-text": "#333333",
        "--button-danger-hover-bgr": "#e08542",
        "--button-danger-hover-border": "#e08542",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#ffffff",
        "--table-borders": "rgba(0, 0, 0, 0.12)",
        "--table-raw-hover": "rgba(0,149,181,0.12)",
        "--cards-bgr": "#ffffff",
        "--cards-border": "#0095b5",
        "--cards-hover-bgr": "#ffffff",
        "--cards-hover-border": "#0095b5",
        "--cards-notification": "#e08542",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#fce5db",
        "--layout-secondary-bgr": "#ffffff",
        "--layout-accent": "#aacb0e",
        "--layout-accent-hover": "#8eab03",
        "--layout-text": "#333333",
        "--layout-headers": "#333333",
        "--layout-footer-bgr": "#0095b5",
        "--layout-footer-text": "#fff",
        "--layout-footer-border": "#0095b5",
        "--form-field-border": "#aaaaaa",
        "--form-field-bgr": "#ffffff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#aacb0e",
        "--code": "#333333",
        "--code-background": "#fff",
        "--hint-error": "#e08542",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#aacb0e",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#e08542",
        "--label-text": "#fff",
        "--menu-item-hover-bgr": "#0095b5",
        "--menu-item-hover-border": "#0095b5",
        "--menu-item-selected-bgr": "#aacb0e",
        "--menu-item-selected-border": "#aacb0e",
        "--menu-group-hover": "#ddf4fa",
        "--menu-alert": "#fff",
        "--menu-alert-bgr": "#e08542"
    },
    contrastBlue: {
        "--menu-bgr": "#0066FF",
        "--menu-border-color": "#78a9f3",
        "--menu-item": "rgba(255,255,255,0.81)",
        "--menu-item-hover": "#ffffff",
        "--menu-item-selected": "#fff",
        "--menu-group": "rgba(255,255,255,0.65)",
        "--button-bgr": "#ffffff",
        "--button-border": "#8e8e8e",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8e8e8e",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(5, 142, 252, 0.05)",
        "--button-accent-bgr": "#0066FF",
        "--button-accent-border": "#0066FF",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#0e4696",
        "--button-accent-hover-border": "#0e4696",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#434343",
        "--button-accent-active-border": "#434343",
        "--button-accent-active-text": "#ffffff",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#e24053",
        "--button-danger-text": "#e24053",
        "--button-danger-hover-bgr": "#e24053",
        "--button-danger-hover-border": "#e24053",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#434343",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#f4173d",
        "--table-borders": "rgba(0, 0, 0, 0.12)",
        "--table-raw-hover": "rgba(5, 142, 252, 0.05)",
        "--cards-bgr": "#fff",
        "--cards-border": "#aaaaaa",
        "--cards-hover-bgr": "#fff",
        "--cards-hover-border": "#aaaaaa",
        "--cards-notification": "#e24053",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#ffffff",
        "--layout-secondary-bgr": "#fff",
        "--layout-accent": "#0066FF",
        "--layout-accent-hover": "#0e4696",
        "--layout-text": "#333333",
        "--layout-headers": "#0066FF",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#c7c7c7",
        "--form-field-border": "#b1b1b1",
        "--form-field-bgr": "#fff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#0066FF",
        "--code": "#333333",
        "--code-background": "#f2f2f2",
        "--hint-error": "#f4173d",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#aacb0e",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#00c48a",
        "--label-text": "#ffffff",
        "--menu-item-hover-bgr": "#297efe",
        "--menu-item-hover-border": "#78a9f3",
        "--menu-item-selected-border": "#052c69",
        "--menu-item-selected-bgr": "#083f98",
        "--menu-group-hover": "rgba(255,255,255,0.75)",
        "--menu-alert": "#fff",
        "--menu-alert-bgr": "#e24053"
    },
    contrastDark: {
        "--menu-bgr": "#222",
        "--menu-border-color": "#4f4f4f",
        "--menu-item": "rgba(255,255,255,0.69)",
        "--menu-item-hover": "#ffffff",
        "--menu-item-selected": "#111",
        "--menu-group": "rgba(255,255,255,0.65)",
        "--button-bgr": "#ffffff",
        "--button-border": "#8e8e8e",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8e8e8e",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#111",
        "--button-dropdown-hover-bgr": "rgba(5, 142, 252, 0.05)",
        "--button-accent-bgr": "#7ed321",
        "--button-accent-border": "#7ed321",
        "--button-accent-text": "#111",
        "--button-accent-hover-bgr": "#569610",
        "--button-accent-hover-border": "#569610",
        "--button-accent-hover-text": "#111",
        "--button-accent-active-bgr": "#333",
        "--button-accent-active-border": "#333",
        "--button-accent-active-text": "#7ed321",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#e24053",
        "--button-danger-text": "#e24053",
        "--button-danger-hover-bgr": "#e24053",
        "--button-danger-hover-border": "#e24053",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#434343",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#f4173d",
        "--table-borders": "rgba(0, 0, 0, 0.12)",
        "--table-raw-hover": "rgba(42,42,42,0.06)",
        "--cards-bgr": "#fff",
        "--cards-border": "#aaaaaa",
        "--cards-hover-bgr": "#fff",
        "--cards-hover-border": "#aaaaaa",
        "--cards-notification": "#e24053",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#ffffff",
        "--layout-secondary-bgr": "#fff",
        "--layout-accent": "#7ed321",
        "--layout-accent-hover": "#569610",
        "--layout-text": "#333333",
        "--layout-headers": "#666",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#c7c7c7",
        "--form-field-border": "#b1b1b1",
        "--form-field-bgr": "#fff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#7ed321",
        "--code": "#333333",
        "--code-background": "#f2f2f2",
        "--hint-error": "#f4173d",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#aacb0e",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "rgba(126,211,33,0.49)",
        "--label-text": "rgba(0,0,0,0.61)",
        "--menu-item-hover-bgr": "rgba(126,211,33,0.5)",
        "--menu-item-hover-border": "rgba(126,211,33,0.87)",
        "--menu-item-selected-border": "#052c69",
        "--menu-item-selected-bgr": "#7ed321",
        "--menu-group-hover": "rgba(255,255,255,0.75)",
        "--menu-alert": "#fff",
        "--menu-alert-bgr": "#e24053"
    },
    contrastPurple: {
        "--menu-bgr": "#A051FF",
        "--menu-border-color": "#b77cfb",
        "--menu-item": "rgba(255,255,255,0.81)",
        "--menu-item-hover": "#ffffff",
        "--menu-item-selected": "#fff",
        "--menu-group": "rgba(255,255,255,0.65)",
        "--button-bgr": "#ffffff",
        "--button-border": "#8e8e8e",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8e8e8e",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(5, 142, 252, 0.05)",
        "--button-accent-bgr": "#A051FF",
        "--button-accent-border": "#A051FF",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#671dc1",
        "--button-accent-hover-border": "#671dc1",
        "--button-accent-hover-text": "#fff",
        "--button-accent-active-bgr": "#434343",
        "--button-accent-active-border": "#434343",
        "--button-accent-active-text": "#A051FF",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#e24053",
        "--button-danger-text": "#e24053",
        "--button-danger-hover-bgr": "#e24053",
        "--button-danger-hover-border": "#e24053",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#434343",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#f4173d",
        "--table-borders": "rgba(0, 0, 0, 0.12)",
        "--table-raw-hover": "rgba(5, 142, 252, 0.05)",
        "--cards-bgr": "#fff",
        "--cards-border": "#aaaaaa",
        "--cards-hover-bgr": "#fff",
        "--cards-hover-border": "#aaaaaa",
        "--cards-notification": "#e24053",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#ffffff",
        "--layout-secondary-bgr": "#fff",
        "--layout-accent": "#A051FF",
        "--layout-accent-hover": "#671dc1",
        "--layout-text": "#333333",
        "--layout-headers": "#A051FF",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#c7c7c7",
        "--form-field-border": "#b1b1b1",
        "--form-field-bgr": "#fff",
        "--form-placeholder": "#333333",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#A051FF",
        "--code": "#333333",
        "--code-background": "#f2f2f2",
        "--hint-error": "#f4173d",
        "--hint-error-light": "#ffd6d8",
        "--hint-alert": "#eca910",
        "--hint-alert-light": "#f9dfa4",
        "--hint-ok": "#aacb0e",
        "--hint-ok-light": "#d6f8e5",
        "--hint-text-color": "#333333",
        "--label": "#8dd014",
        "--label-text": "rgba(0,0,0,0.68)",
        "--menu-item-hover-bgr": "#b77cfb",
        "--menu-item-hover-border": "#d8b4fe",
        "--menu-item-selected-border": "#7713f8",
        "--menu-item-selected-bgr": "#7713f8",
        "--menu-group-hover": "rgba(255,255,255,0.75)",
        "--menu-alert": "rgba(0,0,0,0.68)",
        "--menu-alert-bgr": "#8dd014"
    },
    peachFuzz: {
        "--menu-bgr": "#FFBF99",
        "--menu-border-color": "#fda689",
        "--menu-item": "rgba(255,255,255,0.87)",
        "--menu-item-hover": "#ffffff",
        "--menu-item-selected": "#fff",
        "--menu-item-selected-bgr": "#f16e45",
        "--menu-group": "rgba(0,0,0,0.36)",
        "--button-bgr": "#ffffff",
        "--button-border": "#8E8E8E",
        "--button-text": "#333333",
        "--button-hover-bgr": "#ffffff",
        "--button-hover-border": "#8E8E8E",
        "--button-hover-text": "#333333",
        "--button-active-bgr": "#8e8e8e",
        "--button-active-border": "#333333",
        "--button-active-text": "#ffffff",
        "--button-dropdown-hover-bgr": "rgba(140, 163, 163, 0.05)",
        "--button-accent-bgr": "#FFBF99",
        "--button-accent-border": "#f39761",
        "--button-accent-text": "#ffffff",
        "--button-accent-hover-bgr": "#f39761",
        "--button-accent-hover-border": "#d7552c",
        "--button-accent-hover-text": "#ffffff",
        "--button-accent-active-bgr": "#d7552c",
        "--button-accent-active-border": "#b53912",
        "--button-accent-active-text": "#ffffff",
        "--button-danger-bgr": "#ffffff",
        "--button-danger-border": "#ff0000",
        "--button-danger-text": "#ff0000",
        "--button-danger-hover-bgr": "#ff0000",
        "--button-danger-hover-border": "#cc0606",
        "--button-danger-hover-text": "#ffffff",
        "--button-danger-active-bgr": "#333333",
        "--button-danger-active-border": "#333333",
        "--button-danger-active-text": "#ff0000",
        "--table-borders": "#FFBF99",
        "--table-raw-hover": "rgba(255,191,153,0.35)",
        "--cards-bgr": "#ffffff",
        "--cards-border": "#FFBF99",
        "--cards-hover-bgr": "#ffffff",
        "--cards-hover-border": "#FFBF99",
        "--cards-notification": "#d7552c",
        "--cards-notification-text": "#fff",
        "--layout-bgr": "#FFF5EE",
        "--layout-secondary-bgr": "#fff",
        "--layout-accent": "#FF9472",
        "--layout-accent-hover": "#f16e45",
        "--layout-text": "#333333",
        "--layout-headers": "#666",
        "--layout-footer-bgr": "#fff",
        "--layout-footer-text": "#333",
        "--layout-footer-border": "#eeefe7",
        "--form-field-border": "#aaa",
        "--form-field-bgr": "#ffffff",
        "--form-placeholder": "#444",
        "--form-placeholder-disabled": "#999999",
        "--form-field-border-disabled": "#bbbbbb",
        "--form-field-bgr-disabled": "#cccccc",
        "--form-accent": "#FFBF99",
        "--code": "#333333",
        "--code-background": "#fff",
        "--hint-error": "#ff525b",
        "--hint-error-light": "#ffd3d3",
        "--hint-alert": "#fea670",
        "--hint-alert-light": "#ffd5b9",
        "--hint-ok": "#8be54e",
        "--hint-ok-light": "#e2fbc3",
        "--hint-text-color": "#333333",
        "--label": "#FFBF99",
        "--label-text": "#fff",
        "--menu-item-hover-bgr": "#faad80",
        "--menu-item-hover-border": "#f39761",
        "--menu-item-selected-border": "#d7552c",
        "--menu-group-hover": "rgba(0,0,0,0.52)",
        "--menu-alert": "#ffffff",
        "--menu-alert-bgr": "#d7552c"
    },
}

const customThemeColorNames = {
    "Layout": {
        // Layout
        '--layout-bgr': "Layout background color",
        '--layout-headers': "Headers color",
        '--layout-text': "Text color",
        '--layout-accent': "Accent color",
        '--layout-accent-hover': "Accent hover color",
        '--layout-footer-bgr': "Footer color",
        '--layout-footer-text': "Footer text color",
        '--layout-footer-border': "Footer border color",
    },
    "Main menu": {
        '--menu-bgr': "Background color",
        '--menu-border-color': "Border color",
        '--menu-item': "Item color",
        '--menu-item-hover': "Hovered item color",
        '--menu-item-hover-bgr': "Hovered item background color",
        '--menu-item-hover-border': "Hovered item border color",
        '--menu-item-selected': "Selected item color",
        '--menu-item-selected-bgr': "Selected item background color",
        '--menu-item-selected-border': "Selected item border color",
        '--menu-group': "Subheader (group) color",
        '--menu-group-hover': "Hovered subheader (group) color",
        '--menu-alert': "Alert message color",
        '--menu-alert-bgr': "Alert message background color",
    },
    
    "Table, Cards, Kanban": {
        '--layout-secondary-bgr': "Table and Object popup background",

        // Table
        '--cards-border': "Cards/Table border color",
        '--table-borders': "Table inner borders color",
        '--table-raw-hover': "Table hover row color",

        // Cards
        '--cards-bgr': "Cards background color",
        '--cards-hover-bgr': "Cards hover background color",
        '--cards-hover-border': "Cards hover border color",
        '--cards-notification': "Cards label (counter)",
        '--cards-notification-text': "Cards label text color",
    },
    "Buttons": {
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

        //'--button-dropdown-hover-bgr': "Button | Dropdown | Hover color",

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
    },
    "Form and Inputs": {
        // Forms
        '--form-field-border': "Form fields border color",
        '--form-field-bgr': "Form fields background color",
        '--form-placeholder': "Form field text color",
        '--form-placeholder-disabled': "Form disabled field color",
        '--form-field-border-disabled': "Form disabled field border color",
        '--form-field-bgr-disabled': "Form disabled field background",
        '--form-accent': "Form accent color",
    },
    "Other": {
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
    },
}

export function SetTheme({ themeName }) {
    useEffect(() => {
        setTheme(themeName)
    }, [themeName])

    const setTheme = ( theme ) => {
        document.documentElement.style.setProperty('--headers-font-weight', theme.headersFontWeight || 700)
        document.documentElement.style.setProperty('--headers-font-weight-h2', theme.headersFontWeightH2 || 700)
        document.documentElement.style.setProperty('--headers-font-weight-h3', theme.headersFontWeightH3 || 700)
        document.documentElement.style.setProperty('--text-font-weight', theme.bodyFontWeight || 400)
        document.documentElement.style.setProperty('--headers-font-family', "'" + theme.headersFont + "'" + ', sans-serif')
        document.documentElement.style.setProperty('--headers-font-family-h2', "'" + theme.headersFontH2 + "'" + ', sans-serif')
        document.documentElement.style.setProperty('--headers-font-family-h3', "'" + theme.headersFontH3 + "'" + ', sans-serif')
        document.documentElement.style.setProperty('--main-font-family', "'" + theme.fontText + "'" + ', sans-serif')
        document.documentElement.style.setProperty('--border-radius', theme.radius + 'px')
        document.documentElement.style.setProperty('--text-font-size', theme.textSize + 'px')
        document.documentElement.style.setProperty('--h1-font-size', theme.h1size + 'px')
        document.documentElement.style.setProperty('--h2-font-size', theme.h2size + 'px')
        document.documentElement.style.setProperty('--h3-font-size', theme.h3size + 'px')
        document.documentElement.style.setProperty('--text-font-style', theme.textStyle)
        document.documentElement.style.setProperty('--h1-font-style', theme.h1Style || "normal")
        document.documentElement.style.setProperty('--h2-font-style', theme.h2Style || "normal")
        document.documentElement.style.setProperty('--h3-font-style', theme.h3Style || "normal")
        if (theme.colorScheme === 'custom') {
            for (const param in customThemeColors.classic) {
                document.documentElement.style.setProperty(param,
                    (theme.customThemeColors && theme.customThemeColors[param]) || customThemeColors.classic[param])
            }
        } else {
            for (const param in customThemeColors[theme.colorScheme]) {
                document.documentElement.style.setProperty(param, customThemeColors[theme.colorScheme][param])
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
                image: 'https://api.directual.com/fileUploaded/directual-site/1b276877-3d1c-4611-8f3a-83105e055912.svg'
            },
            {
                value: 'white',
                label: 'Snow White',
                image: 'https://api.directual.com/fileUploaded/directual-site/4cedc730-dedf-4e92-a78d-4ccaf9ec8765.svg'
            },
            {
                value: 'tiffany',
                label: 'Tiffany Blue',
                image: 'https://api.directual.com/fileUploaded/directual-site/88fb07b4-8c0c-4e5d-bafa-904e65a6ed38.svg'
            },
            {
                value: 'darkMint',
                label: 'Denim-Mint',
                image: 'https://api.directual.com/fileUploaded/directual-site/d2e22bf7-aa03-4670-8045-cc595b0c28f5.svg'
            },
            {
                value: 'warmNight',
                label: 'Warm Night',
                image: 'https://api.directual.com/fileUploaded/directual-site/e2f17c86-ea10-4d36-aadc-94641cea2287.svg'
            },
            {
                value: 'hacker',
                label: 'Hacker Style',
                image: 'https://api.directual.com/fileUploaded/directual-site/e06df81a-2acc-4efa-bf31-fa5455fde077.svg'
            },

            {
                value: 'rossoCorsa',
                label: 'Rosso Corsa',
                image: 'https://api.directual.com/fileUploaded/directual-site/caea2b95-7038-4702-8697-47c62bd2c9fb.svg'
            },
            {
                value: 'contrastBlue',
                label: 'Contrast Blue',
                image: 'https://api.directual.com/fileUploaded/directual-site/4f8e1e78-aa56-44c3-b542-1c093e3b068e.svg'
            },
            {
                value: 'contrastDark',
                label: 'Contrast Dark',
                image: 'https://api.directual.com/fileUploaded/directual-site/6daf5fa9-ceed-4394-ae92-c5911271c172.svg'
            },
            {
                value: 'contrastPurple',
                label: 'Contrast Purple',
                image: 'https://api.directual.com/fileUploaded/directual-site/69a7e11b-4b3a-4a58-bf67-d91abdc45f26.svg'
            },
            {
                value: 'bondiBeach',
                label: 'Bondi Beach',
                image: 'https://api.directual.com/fileUploaded/directual-site/c93d7c65-f8cd-4afb-915f-137ce681a40e.svg'
            },
            {
                value: 'raspberry',
                label: 'Raspberry',
                image: 'https://api.directual.com/fileUploaded/directual-site/59baa1d1-91b3-42a5-9de9-513ed2593ead.svg'
            },

            {
                value: 'baltic',
                label: 'Baltic',
                image: 'https://api.alfa.directual.com/fileUploaded/directual-site/44fbcd36-9525-45d1-ab10-32f57562b8a3.svg'
            },
            {
                value: 'peachFuzz',
                label: 'Peach Fuzz',
                image: 'https://api.directual.com/fileUploaded/directual-site/a1e49709-f975-4123-99af-785326e914fa.svg'
            },
            {
                value: 'custom',
                label: 'Customise scheme',
                image: 'https://api.directual.com/fileUploaded/directual-site/78ac1208-9770-4dad-a268-d330d64da0e8.svg'
            },
        ]

    const userOptions = options // (props.themes && options.filter(option => props.themes.indexOf(option.value) != -1)) || options

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
        { key: 'Open Sans', value: 'Open Sans' },
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
        { key: 'Lato', value: 'Lato' },
        { key: 'Fira Sans', value: 'Fira Sans' },
        { key: 'Gabriela', value: 'Gabriela' },
        { key: 'Orelega One', value: 'Orelega One' },
        { key: 'Philosopher', value: 'Philosopher' },
        { key: 'Poppins', value: 'Poppins' },
        { key: 'Chakra Petch', value: 'Chakra Petch' },
        { key: 'Comfortaa', value: 'Comfortaa' },
        { key: 'Kanit', value: 'Kanit' },
        { key: 'Noto Serif JP', value: 'すべての (Noto Serif)' },
        { key: 'Amatic SC', value: 'Amatic SC' },
        { key: 'Arimo', value: 'Arimo' },
        { key: 'Yanone Kaffeesatz', value: 'Yanone Kaffeesatz' },
    ]
    const fontWeights = [
        { key: '900', value: 'Black 900' },
        { key: '700', value: 'Bold 700' },
        { key: '400', value: 'Regular 400' },
        { key: '300', value: 'Light 300' },
    ]

    const parseJson = json => {
        if (!json) return null
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
                rows='auto' defaultValue={stringifyJson(_.merge({ ...customThemeColors.darkMint }, selectedColorScheme.customThemeColors))} />}
    </div>

    const myNewCustomTheme = <div>
        {Object.keys(customThemeColorNames).map(colorGroup => <div>
            <GroupOfColors
                colorGroup={colorGroup}
            >
                <div className={styles.colorSection}>
                    <div className={styles.horInputs}>
                        {Object.keys(customThemeColorNames[colorGroup]).map(color => <Input
                            type='colour'
                            label={customThemeColorNames[colorGroup][color]}
                            className={styles.input}
                            tip={<code>{color}</code>}
                            width={290}
                            defaultValue={_.get(selectedColorScheme, `customThemeColors.${color}`)}
                            onChange={value => {
                                let correctedValue = !value ? '' : (!value[0].match(/[0-9]|[A-z]/gm) || value[0] == 'r') ? value : '#' + value
                                const copyCS = { ...selectedColorScheme }
                                _.set(copyCS, `customThemeColors.${color}`, correctedValue)
                                console.log(copyCS)
                                setSelectedColorScheme(copyCS)
                            }}
                        />)}
                    </div>
                    <div className={styles.colorThemePreview}>
                        <Preview
                            colorGroup={colorGroup}
                            colors={_.get(selectedColorScheme, "customThemeColors") || {}} />
                    </div>
                </div>
            </GroupOfColors>

        </div >)
        }
    </div >

    return (
        <div className={styles.themeSettings}>
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
            {selectedColorScheme.colorScheme == 'custom' && myNewCustomTheme}
        </div>
    )
}

function Preview(props) {

    const { colors, colorGroup, selectedColorScheme } = props

    let preview = <div>Preview {colorGroup}</div>

    switch (props.colorGroup) {
        case 'Main menu':
            preview = <PreviewMenu colors={colors} />;
            break;
        case 'Layout':
            preview = <PreviewLayout colors={colors} />;
            break;
        case 'Buttons':
            preview = <PreviewButtons colors={colors} />;
            break;
        case 'Form and Inputs':
            preview = <PreviewForm colors={colors} />;
            break;
        case 'Table, Cards, Kanban':
            preview = <PreviewTable colors={colors} />;
            break;
        case 'Other':
            preview = <PreviewOther colors={colors} />;
            break;
        default:
            preview = <div>unknown preview</div>
    }
    return <div style={{
        backgroundColor: colors["--layout-bgr"],
    }}>{preview}</div>
}

function PreviewOther({ colors }) {
    return <div className={styles.previewWrapper}>
        <pre style={{
            color: colors["--code"],
            backgroundColor: colors["--code-background"],
            borderRadius: 8,
            padding: 12,
            marginBottom: 18
        }}>
            <code>
                {`code block:
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');`}
            </code>
        </pre>
        <div className={styles.previewHint} style={{
            color: colors["--hint-text-color"],
            backgroundColor: colors["--hint-alert-light"],
            borderColor: colors["--hint-alert"]
        }}>
            <div className={styles.hintTitle}>Alert hint</div>
            <div className={styles.hintText}>Lorem ipsum dolor</div>
        </div>
        <div className={styles.previewHint} style={{
            color: colors["--hint-text-color"],
            backgroundColor: colors["--hint-ok-light"],
            borderColor: colors["--hint-ok"]
        }}>
            <div className={styles.hintTitle}>OK hint</div>
            <div className={styles.hintText}>Lorem ipsum dolor</div>
        </div>
        <div className={styles.previewHint} style={{
            color: colors["--hint-text-color"],
            backgroundColor: colors["--hint-error-light"],
            borderColor: colors["--hint-error"],
        }}>
            <div className={styles.hintTitle}>Error hint</div>
            <div className={styles.hintText}>Lorem ipsum dolor</div>
        </div>

        <div className={styles.previewTags}>
            <div className={styles.previewTag} style={{
                color: colors["--label-text"],
                backgroundColor: colors["--label"],
            }}>Tag 1</div>
            <div className={styles.previewTag} style={{
                color: colors["--label-text"],
                backgroundColor: colors["--label"],
            }}>Tag 2</div>
            <div className={styles.previewTag} style={{
                color: colors["--label-text"],
                backgroundColor: colors["--label"],
            }}>Tag 3</div>
        </div>
    </div>
}

function PreviewTable({ colors }) {
    return <div className={styles.previewWrapper} style={{color: colors["--layout-text"]}}>
        <div className={styles.previewTableBorder} style={{
            borderColor: colors["--cards-border"],
        }}>
            <table className={styles.previewTable} style={{
                backgroundColor: colors["--layout-secondary-bgr"],
            }}>
                <thead>
                    <tr >
                        <td>Header 1</td>
                        <td>Header 2</td>
                        <td>Header 3</td>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{
                        borderColor: colors["--table-borders"],
                    }}>
                        <td>Regular row</td>
                        <td>a</td>
                        <td align='right'>2</td>
                    </tr>
                    <tr style={{
                        backgroundColor: colors["--table-raw-hover"],
                        borderColor: colors["--table-borders"],
                    }}>
                        <td>Hovered row</td>
                        <td>b</td>
                        <td align='right'>2</td>
                    </tr>
                    <tr style={{
                        borderColor: colors["--table-borders"],
                    }}>
                        <td>Regular row</td>
                        <td>c</td>
                        <td align='right'>2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className={styles.previewPopup} style={{
            backgroundColor: colors["--layout-secondary-bgr"],
            borderColor: colors["--cards-border"],
        }}>
            <h3 style={{
                color: colors["--layout-headers"]
            }}>Object popup</h3>
            <div className={`icon icon-close ${styles.previewClose}`} />
            <p style={{
                color: colors["--layout-text"]
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad <a style={{
                    color: colors["--layout-accent"]
                }}>regular link</a>, quis nostrud exercitation <a style={{
                    color: colors["--layout-accent-hover"]
                }}>hovered link</a> ullamco laboris nisi ut
                nulla pariatur</p>
        </div>

        <div className={styles.previewCards}>
            <div className={styles.previewPopup} style={{
                backgroundColor: colors["--cards-bgr"],
                borderColor: colors["--cards-border"],
            }}>
                <h3 style={{
                    color: colors["--layout-headers"]
                }}>Card</h3>
                <div className={styles.previewTags}>
                    <div className={styles.previewTag} style={{
                        color: colors["--layout-accent"],
                        border: `solid 1px ${colors["--layout-accent"]}`
                    }}>Tag 1</div>
                    <div className={styles.previewTag} style={{
                        color: colors["--layout-accent"],
                        border: `solid 1px ${colors["--layout-accent"]}`
                    }}>Tag 2</div>
                    <div className={styles.previewTag} style={{
                        color: colors["--layout-accent"],
                        border: `solid 1px ${colors["--layout-accent"]}`
                    }}>Tag 3</div>
                </div>
                <div className={`${styles.previewCardAlert}`} style={{
                    color: colors["--cards-notification-text"],
                    backgroundColor: colors["--cards-notification"]
                }}>12</div>
                <p style={{
                    color: colors["--layout-text"]
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
            </div>
            <div className={styles.previewPopup} style={{
                backgroundColor: colors["--cards-hover-bgr"],
                borderColor: colors["--cards-hover-border"],
                borderWidth: 2
            }}>
                <h3 style={{
                    color: colors["--layout-headers"]
                }}>Hovered card</h3>
                <div className={styles.previewTags}>
                    <div className={styles.previewTag} style={{
                        color: colors["--layout-accent"],
                        border: `solid 1px ${colors["--layout-accent"]}`
                    }}>Tag 1</div>
                    <div className={styles.previewTag} style={{
                        color: colors["--layout-accent"],
                        border: `solid 1px ${colors["--layout-accent"]}`
                    }}>Tag 2</div>
                    <div className={styles.previewTag} style={{
                        color: colors["--layout-accent"],
                        border: `solid 1px ${colors["--layout-accent"]}`
                    }}>Tag 3</div>
                </div>
                <div className={`${styles.previewCardAlert}`} style={{
                    color: colors["--cards-notification-text"],
                    backgroundColor: colors["--cards-notification"]
                }}>12</div>
                <p style={{
                    color: colors["--layout-text"]
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
}

function PreviewForm({ colors }) {
    return <div className={styles.previewWrapper}>
        <div className={styles.inputBattery}>
            <div className={styles.inputBatteryWrapper}>
                <div className={styles.labelpreview} style={{
                    color: colors["--form-placeholder"]
                }}>Field label</div>
                <input className={styles.inputpreview} value='Regular input' style={{
                    color: colors["--form-placeholder"],
                    borderColor: colors["--form-field-border"],
                    backgroundColor: colors["--form-field-bgr"],
                }} />
            </div>
            <div className={styles.inputBatteryWrapper}>
                <div className={styles.labelpreview} style={{
                    color: colors["--form-placeholder"]
                }}>Field label</div>
                <input className={styles.inputpreview} value='Hovered input' style={{
                    color: colors["--form-placeholder"],
                    borderColor: colors["--form-field-border"],
                    backgroundColor: colors["--form-field-bgr"],
                    borderWidth: 2
                }} />
            </div>
            <div className={styles.inputBatteryWrapper}>
                <div className={styles.labelpreview} style={{
                    color: colors["--form-placeholder"]
                }}>Field label</div>
                <input className={styles.inputpreview} value='Active input' style={{
                    color: colors["--form-placeholder"],
                    borderColor: colors["--form-placeholder"],
                    backgroundColor: colors["--form-field-bgr"],
                    borderWidth: 2
                }} />
            </div>
            <div className={styles.inputBatteryWrapper}>
                <div className={styles.labelpreview} style={{
                    color: colors["--form-placeholder"]
                }}>Field label</div>
                <input className={styles.inputpreview} value='Focused input' style={{
                    color: colors["--form-placeholder"],
                    borderColor: colors["--form-accent"],
                    backgroundColor: colors["--form-field-bgr"],
                    borderWidth: 2
                }} />
            </div>
        </div>
        {/* <Input placeholder='hello' label='hello' nomargin/> */}
    </div>
}

function PreviewButtons({ colors }) {
    return <div className={styles.previewWrapper}>
        <div className={styles.buttonBattery}>
            <div className={`${styles.button}`} style={{
                color: colors["--button-text"],
                backgroundColor: colors["--button-bgr"],
                borderColor: colors["--button-border"]
            }}>
                Regular button
            </div>
            <div className={`${styles.button}`} style={{
                color: colors["--button-hover-text"],
                backgroundColor: colors["--button-hover-bgr"],
                borderColor: colors["--button-hover-border"],
                borderWidth: 2
            }}>
                Hovered button
            </div>
            <div className={`${styles.button}`} style={{
                color: colors["--button-active-text"],
                backgroundColor: colors["--button-active-bgr"],
                borderColor: colors["--button-active-border"],
                borderWidth: 2
            }}>
                Active button
            </div>
        </div>
        {/* ================ */}
        <div className={styles.buttonBattery}>
            <div className={`${styles.button}`} style={{
                color: colors["--button-accent-text"],
                backgroundColor: colors["--button-accent-bgr"],
                borderColor: colors["--button-accent-border"]
            }}>
                Accent button
            </div>
            <div className={`${styles.button}`} style={{
                color: colors["--button-accent-hover-text"],
                backgroundColor: colors["--button-accent-hover-bgr"],
                borderColor: colors["--button-accent-hover-border"],
                borderWidth: 2
            }}>
                Hovered button
            </div>
            <div className={`${styles.button}`} style={{
                color: colors["--button-accent-active-text"],
                backgroundColor: colors["--button-accent-active-bgr"],
                borderColor: colors["--button-accent-active-border"],
                borderWidth: 2
            }}>
                Active button
            </div>
        </div>
        {/* ================ */}
        <div className={styles.buttonBattery}>
            <div className={`${styles.button}`} style={{
                color: colors["--button-danger-text"],
                backgroundColor: colors["--button-danger-bgr"],
                borderColor: colors["--button-danger-border"]
            }}>
                Danger button
            </div>
            <div className={`${styles.button}`} style={{
                color: colors["--button-danger-hover-text"],
                backgroundColor: colors["--button-danger-hover-bgr"],
                borderColor: colors["--button-danger-hover-border"],
                borderWidth: 2
            }}>
                Hovered button
            </div>
            <div className={`${styles.button}`} style={{
                color: colors["--button-danger-active-text"],
                backgroundColor: colors["--button-danger-active-bgr"],
                borderColor: colors["--button-danger-active-border"],
                borderWidth: 2
            }}>
                Active button
            </div>
        </div>
        {/* <ActionPanel
            width={400}
            alignCenter
            border
            column
            margin={{ top: 6, bottom: 24 }}>
            <Button accent>Accent button</Button>
            <Button danger>Danger button</Button>
            <Button>Regular button</Button>
            <Button icon="play">Icon button</Button>
            <Button disabled>Disabled button</Button>
        </ActionPanel> */}
    </div >
}

function PreviewMenu({ colors }) {
    return <div className={styles.previewWrapper}>
        <div className={styles.mmPreview}
            style={{
                backgroundColor: colors["--menu-bgr"],
                borderColor: colors["--menu-border-color"]
            }}
        >
            <div className={styles.menuItem}
                style={{
                    color: colors["--menu-item"]
                }}
            >
                <div className='icon icon-academy'>Regular menu item</div>
            </div>
            <div className={styles.menuItem}
                style={{
                    color: colors["--menu-item-hover"],
                    backgroundColor: colors["--menu-item-hover-bgr"],
                    border: `solid 1px ${colors["--menu-item-hover-border"]}`
                }}
            >
                <div className='icon icon-actions'>Hovered menu item</div>
            </div>
            <div className={styles.menuItem}
                style={{
                    color: colors["--menu-item-selected"],
                    backgroundColor: colors["--menu-item-selected-bgr"],
                    border: `solid 1px ${colors["--menu-item-selected-border"]}`
                }}>
                <div className='icon icon-bubble'>Selected menu item</div>
            </div>
            <div className={styles.menuGroup}
                style={{
                    borderBottom: `solid 1px ${colors["--menu-border-color"]}`
                }}>
                <div className={styles.menuGroutTitle}
                    style={{
                        color: colors["--menu-group"],
                    }}
                >Menu group</div>
                <div className={styles.menuItem} style={{
                    color: colors["--menu-item"]
                }}>
                    <div className='icon icon-bell'>Menu item</div>
                </div>
                <div className={styles.menuItem} style={{
                    color: colors["--menu-item"]
                }}>
                    <div className='icon icon-bookmark'>Menu item
                    </div>
                    <div className={styles.menuLabel} style={{
                        color: colors["--menu-alert"],
                        backgroundColor: colors["--menu-alert-bgr"],
                    }}>12</div>
                </div>
            </div>
            <div className={styles.menuItem} style={{
                color: colors["--menu-item"]
            }}>
                <div className='icon icon-babai'>Menu item
                </div>
            </div>
        </div>
    </div >
}

function PreviewLayout({ colors }) {
    return <div className={styles.previewWrapper}>
        <div className={styles.layoutPreview}>
            <h2 style={{
                color: colors["--layout-headers"]
            }}>Header text</h2>
            <p style={{
                color: colors["--layout-text"]
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad <a style={{
                    color: colors["--layout-accent"]
                }}>regular link</a>, quis nostrud exercitation <a style={{
                    color: colors["--layout-accent-hover"]
                }}>hovered link</a> ullamco laboris nisi ut
                nulla pariatur</p>
            <div className={styles.footerPreview} style={{
                color: colors["--layout-footer-text"],
                backgroundColor: colors["--layout-footer-bgr"],
                borderTop: `solid 1px ${colors["--layout-footer-border"]}`
            }}>
                Footer
            </div>
        </div>
        <div className={styles.previewTabs}>
            <div className={styles.previewTab} style={{
                borderBottom: `solid 3px ${colors["--layout-accent"]}`, color: colors["--layout-text"]
            }}>Tab 1</div>
            <div style={{opacity: 0.6, color: colors["--layout-text"]}} className={styles.previewTab}>Tab 2</div>
            <div style={{opacity: 0.6, color: colors["--layout-text"]}} className={styles.previewTab}>Tab 3</div>
        </div>
    </div >
}

function GroupOfColors(props) {
    const [hidden, setHidden] = useState(false)
    return <div>
        <FormSection title={props.colorGroup} hide defaultValue={false} onHide={setHidden} />
        {!hidden && <div>
            {props.children}
        </div>}
    </div>
}
