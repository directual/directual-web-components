import React, { useEffect, useState, useRef } from 'react'
import {
    FpsCards, FpsForm, MainMenu, NewMainMenu, FpsTable, FpsTheme,
    FpsWrapper, ContentWrapper, SignIn, Media, CodeSnippet, Chart,
    Dnd, Profile, TabsPane, Stopwatch, Button, SignUp, RestorePass, FpsKanban, FpsChart, NewMobileTabs
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from 'react-router-dom'

//pages:
import ButtonsPage from './pages/buttons'
import InputsPage from './pages/inputs'
import IconsPage from './pages/icons'
import TypoPage from './pages/typo'
import WhatIsIt from './pages/wtf'
import LayoutPage from './pages/layout'
import PlatformPage from './pages/platform'


const newMenuEexample = {
    "mainMenu": {
        "id": "rootMenu",
        "icon": "folder",
        "name": "Main menu",
        "isFolder": true,
        "children": [
            {
                "id": "group_1699967261238",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1699966605560",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1699966611883",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1699966620076",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1699966629619",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    }
                ],
                "isFolder": true,
                "icon": "folder"
            },
            {
                "id": "item__1699967278240",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699967279686",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699967280997",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699967282230",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699967283620",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699967285090",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699967286486",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699967287802",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699967289329",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "group_1699967291905",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1699967290586",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1699967293366",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    }
                ],
                "isFolder": true,
                "icon": "folder"
            },
            {
                "id": "item__1699970170936",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            }
        ]
    },
    "mobileMenuOption": "side_right",
    "mobileMenu": {
        "id": "rootMobileMenu",
        "icon": "folder",
        "name": "Mobile menu (tabs)",
        "isFolder": true,
        "children": [
            {
                "id": "item__1699616429571",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699617677112",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699617695042",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1699879618452",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            }
        ]
    },
    "menuConfig": {
        "item__1697885764944": {
            "linkToPage": "/profile",
            "name": "Profile",
            "iconType": "custom_icon",
            "menuRemixIcon": {
                "Content": "M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z",
                "Category": "Business",
                "id": "customer-service-line"
            },
            "menuRemixIconSize": 30,
            "addLabel": "add_label",
            "menuLabel": "counter",
            "menuIconCustom": "https://api.directual.com/fileUploaded/directual-site/e/home.svg",
            "menuCustomIconSize": 22,
            "menuIconCustomSelected": "https://api.directual.com/fileUploaded/directual-site/e/home1.svg"
        },
        "item__1697889115436": {
            "linkToPage": "/all-users",
            "name": "All Users",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "user"
        },
        "item__1697889123670": {
            "linkToPage": "/home",
            "name": "Home",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Content": "M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19Z",
                "Category": "Buildings",
                "id": "home-line"
            }
        },
        "group_1697889131112": {
            "name": "Administrator pages",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Content": "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 12.792C10.117 12.4062 9.5 11.5252 9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5C14.5 11.5252 13.883 12.4062 13 12.792V16H11V12.792Z",
                "Category": "Others",
                "id": "door-lock-line"
            },
            "hideByDefault": true
        },
        "group_1697889573211": {
            "name": "Hey there"
        },
        "item__1697889581068": {
            "linkToPage": "/profile",
            "name": "Profile",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Content": "M12 17C14.2091 17 16 15.2091 16 13H14C14 14.1046 13.1046 15 12 15 10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17ZM6.5 2C4.01472 2 2 4.01472 2 6.5 2 7.85729 2.60121 9.07332 3.54934 9.89751 3.19384 10.8656 3 11.911 3 13 3 17.9706 7.02944 22 12 22 16.9706 22 21 17.9706 21 13 21 11.911 20.8062 10.8656 20.4507 9.89751 21.3988 9.07332 22 7.85729 22 6.5 22 4.01472 19.9853 2 17.5 2 15.8737 2 14.4505 2.8624 13.6601 4.15297 13.1215 4.05246 12.5665 4 12 4 11.4335 4 10.8785 4.05246 10.3399 4.15297 9.5495 2.8624 8.12635 2 6.5 2ZM4 6.5C4 5.11929 5.11929 4 6.5 4 7.58033 4 8.50304 4.68577 8.8517 5.64896L9.1696 6.52718 10.0675 6.26991C10.6801 6.09435 11.3282 6 12 6 12.6718 6 13.3199 6.09435 13.9325 6.26991L14.8304 6.52718 15.1483 5.64896C15.497 4.68577 16.4197 4 17.5 4 18.8807 4 20 5.11929 20 6.5 20 7.43301 19.4894 8.24804 18.7275 8.67859L17.9141 9.13832 18.3176 9.98107C18.7547 10.8939 19 11.9169 19 13 19 16.866 15.866 20 12 20 8.13401 20 5 16.866 5 13 5 11.9169 5.24529 10.8939 5.6824 9.98107L6.08595 9.13832 5.27248 8.6786C4.51064 8.24805 4 7.43301 4 6.5Z",
                "Category": "User & Faces",
                "id": "bear-smile-line"
            }
        },
        "item__1697889582464": {
            "linkToType": "external",
            "linkToURL": "https://directual.com",
            "linkToURLNewWindow": true,
            "name": "Documentation",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Content": "M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM10 4H6C5.44772 4 5 4.44772 5 5V15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H17V12L13.5 10L10 12V4Z",
                "Category": "Document",
                "id": "book-mark-line"
            },
            "menuRemixIconColor": "#bd10e0",
            "menuRemixIconColorSelected": "#7ed321",
            "menuRemixIconSize": 32
        },
        "rootMenu": {
            "logoOption": "ai",
            "logoGenerationSettings": {
                "signSize": 23.6,
                "logoTextSize": 12,
                "scaleSign": 1.2,
                "moveSign": -1,
                "moveHorSign": -1.7,
                "lineSpacing": 0.83,
                "titleLetterSpacing": 0.4,
                "subtitleLetterSpacing": 1,
                "titleY": 3,
                "subtitleY": 25.1,
                "logoSubtitleSize": 6
            },
            "logoTitle": "NATIONAL\nGEOGRAPHIC",
            "googleFont": {
                "id": "Arya",
                "subsets": [
                    "devanagari",
                    "latin",
                    "latin-ext"
                ],
                "category": "sans-serif",
                "family": "Arya",
                "variants": [
                    "regular",
                    "700"
                ],
                "selectedStyle": "regular"
            },
            "addSign": true,
            "remixIcon": {
                "Category": "Logos",
                "Content": "M21.6634 9.98693L21.6354 9.91531L18.9164 2.82092C18.8612 2.68178 18.7634 2.56365 18.6371 2.48339C18.5098 2.40304 18.3607 2.36419 18.2104 2.37219C18.0601 2.38019 17.9159 2.43464 17.7979 2.52804C17.6809 2.62181 17.5966 2.75012 17.5569 2.89466L15.7187 8.52049H8.28157L6.44336 2.89466C6.40366 2.75012 6.31934 2.62181 6.20241 2.52804C6.08487 2.43402 5.94083 2.37915 5.79052 2.37114C5.64021 2.36313 5.49116 2.40238 5.36429 2.48339C5.2374 2.56332 5.13921 2.68153 5.08388 2.82092L2.36183 9.92462L2.33379 9.99524C1.94304 11.0184 1.895 12.1407 2.19691 13.1934C2.49882 14.2462 3.13436 15.1725 4.00794 15.833L4.01832 15.8402L4.04221 15.8589L8.18917 18.9632L10.2393 20.5159L11.4856 21.4599C11.6319 21.5705 11.8104 21.6304 11.9939 21.6304C12.1774 21.6304 12.3559 21.5705 12.5023 21.4599L13.7486 20.5159L15.7997 18.9632L19.9706 15.8402L19.9819 15.8319C20.8585 15.1721 21.4966 14.245 21.7999 13.1906C22.1033 12.1362 22.0553 11.0117 21.6634 9.98693Z",
                "id": "gitlab-fill"
            },
            "signColor": "#e35079",
            "generatedLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Arya:wght@400;700&amp;display=swap\" rel=\"stylesheet\"><svg width=\"190\" height=\"51\" viewBox=\"0 0 95 26\"><radialGradient id=\"grad_rad0\"><stop offset=\"20%\" stop-color=\"#f12711\"></stop><stop offset=\"100%\" stop-color=\"#f5af19\"></stop></radialGradient><path transform=\"scale(1.2) translate(-1.7, -1)\" fill=\"url(#grad_rad0)\" d=\"M21.6634 9.98693L21.6354 9.91531L18.9164 2.82092C18.8612 2.68178 18.7634 2.56365 18.6371 2.48339C18.5098 2.40304 18.3607 2.36419 18.2104 2.37219C18.0601 2.38019 17.9159 2.43464 17.7979 2.52804C17.6809 2.62181 17.5966 2.75012 17.5569 2.89466L15.7187 8.52049H8.28157L6.44336 2.89466C6.40366 2.75012 6.31934 2.62181 6.20241 2.52804C6.08487 2.43402 5.94083 2.37915 5.79052 2.37114C5.64021 2.36313 5.49116 2.40238 5.36429 2.48339C5.2374 2.56332 5.13921 2.68153 5.08388 2.82092L2.36183 9.92462L2.33379 9.99524C1.94304 11.0184 1.895 12.1407 2.19691 13.1934C2.49882 14.2462 3.13436 15.1725 4.00794 15.833L4.01832 15.8402L4.04221 15.8589L8.18917 18.9632L10.2393 20.5159L11.4856 21.4599C11.6319 21.5705 11.8104 21.6304 11.9939 21.6304C12.1774 21.6304 12.3559 21.5705 12.5023 21.4599L13.7486 20.5159L15.7997 18.9632L19.9706 15.8402L19.9819 15.8319C20.8585 15.1721 21.4966 14.245 21.7999 13.1906C22.1033 12.1362 22.0553 11.0117 21.6634 9.98693Z\"></path><text font-family=\"Arya\" font-weight=\"400\" font-style=\"normal\" letter-spacing=\"0.4\" font-size=\"12\" fill=\"rgba(0,0,0,.8)\" x=\"28.32\" y=\"3\"><tspan x=\"28.32\" dy=\"0.83em\">NATIONAL</tspan><tspan x=\"28.32\" dy=\"0.83em\">GEOGRAPHIC</tspan></text></svg></div>",
            "largeLogoURL": "",
            "sideMenuSize": "resizeble",
            "smallLogoURL": "",
            "logoHeight": 51,
            "menuWidth": 260,
            "menuPadding": 22,
            "menuMargin": 5,
            "menuCompactWidth": 80,
            "logoWidth": 190,
            "logoPosition": "left",
            "generatedSmallLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Arya:wght@400;700&amp;display=swap\" rel=\"stylesheet\"><svg width=\"51\" height=\"51\" viewBox=\"0 0 26 26\"><radialGradient id=\"grad_rad0\"><stop offset=\"20%\" stop-color=\"#f12711\"></stop><stop offset=\"100%\" stop-color=\"#f5af19\"></stop></radialGradient><path transform=\"scale(1.2) translate(-1.7, -1)\" fill=\"url(#grad_rad0)\" d=\"M21.6634 9.98693L21.6354 9.91531L18.9164 2.82092C18.8612 2.68178 18.7634 2.56365 18.6371 2.48339C18.5098 2.40304 18.3607 2.36419 18.2104 2.37219C18.0601 2.38019 17.9159 2.43464 17.7979 2.52804C17.6809 2.62181 17.5966 2.75012 17.5569 2.89466L15.7187 8.52049H8.28157L6.44336 2.89466C6.40366 2.75012 6.31934 2.62181 6.20241 2.52804C6.08487 2.43402 5.94083 2.37915 5.79052 2.37114C5.64021 2.36313 5.49116 2.40238 5.36429 2.48339C5.2374 2.56332 5.13921 2.68153 5.08388 2.82092L2.36183 9.92462L2.33379 9.99524C1.94304 11.0184 1.895 12.1407 2.19691 13.1934C2.49882 14.2462 3.13436 15.1725 4.00794 15.833L4.01832 15.8402L4.04221 15.8589L8.18917 18.9632L10.2393 20.5159L11.4856 21.4599C11.6319 21.5705 11.8104 21.6304 11.9939 21.6304C12.1774 21.6304 12.3559 21.5705 12.5023 21.4599L13.7486 20.5159L15.7997 18.9632L19.9706 15.8402L19.9819 15.8319C20.8585 15.1721 21.4966 14.245 21.7999 13.1906C22.1033 12.1362 22.0553 11.0117 21.6634 9.98693Z\"></path></svg></div>",
            "menuPosition": "side",
            "dontHideGroups": false,
            "sideMenuAlign": "center",
            "signFillType": "radial-gradient",
            "signColorGrad1": "#f12711",
            "signColorGrad2": "#f5af19",
            "logoSubtitle": "",
            "logoSubtitleColor": "rgba(0,0,0,0.37)",
            "signGradDirection": "diag",
            "horMenuGroupArrowSize": "medium",
            "horMenuGroupArrow": "left",
            "horMenuMargin": 20,
            "menuBorderWidth": 3,
            "menuLogoMargin": 24
        },
        "item__1697890651425": {
            "linkToPage": "/restore-password",
            "name": "Restore password",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Content": "M12 21.9966C6.47715 21.9966 2 17.5194 2 11.9966C2 6.47373 6.47715 1.99658 12 1.99658C17.5228 1.99658 22 6.47373 22 11.9966C22 17.5194 17.5228 21.9966 12 21.9966ZM12 19.9966C16.4183 19.9966 20 16.4149 20 11.9966C20 7.5783 16.4183 3.99658 12 3.99658C7.58172 3.99658 4 7.5783 4 11.9966C4 16.4149 7.58172 19.9966 12 19.9966ZM12 17.9966V5.99658C15.3137 5.99658 18 8.68287 18 11.9966C18 15.3103 15.3137 17.9966 12 17.9966Z",
                "Category": "Design",
                "id": "contrast-line"
            },
            "menuRemixIconColor": "#7ed321",
            "menuRemixIconColorSelected": "#d0021b",
            "menuRemixIconSize": 17
        },
        "item__1699013073887": {
            "linkToPage": "/profile",
            "name": "Profile",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Content": "M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM13.2 12L16 8H13.6L12 10.2857L10.4 8H8L10.8 12L8 16H10.4L12 13.7143L13.6 16H16L13.2 12Z",
                "Category": "Document",
                "id": "file-excel-fill"
            }
        },
        "item__1699013069819": {
            "linkToPage": "/restore-password",
            "name": "Restore password",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "delete"
        },
        "rootMobileMenu": {
            "showMobileHeader": false,
            "mobileHeaderLogo": "small",
            "mobileHeaderLogoPosition": "center",
            "mobileMenuSide": "right",
            "mobileMenuPadding": 6,
            "sideMenuPadding": 12,
            "menuSideHideLogo": false,
            "tabsPlacement": "top"
        },
        "item__1699616429571": {
            "linkToPage": "/profile",
            "name": "",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "academy",
            "linkToType": "external",
            "linkToURL": "/system-icons"
        },
        "item__1699617677112": {
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Category": "Editor",
                "Content": "M18.5 10L22.9 21H20.745L19.544 18H15.454L14.255 21H12.101L16.5 10H18.5ZM10 2V4H16V6L14.0322 6.0006C13.2425 8.36616 11.9988 10.5057 10.4115 12.301C11.1344 12.9457 11.917 13.5176 12.7475 14.0079L11.9969 15.8855C10.9237 15.2781 9.91944 14.5524 8.99961 13.7249C7.21403 15.332 5.10914 16.5553 2.79891 17.2734L2.26257 15.3442C4.2385 14.7203 6.04543 13.6737 7.59042 12.3021C6.46277 11.0281 5.50873 9.57985 4.76742 8.00028L7.00684 8.00037C7.57018 9.03885 8.23979 10.0033 8.99967 10.877C10.2283 9.46508 11.2205 7.81616 11.9095 6.00101L2 6V4H8V2H10ZM17.5 12.8852L16.253 16H18.745L17.5 12.8852Z",
                "id": "translate-2"
            },
            "linkToPage": "/all-users",
            "name": "All Users",
            "menuRemixIconSize": 40
        },
        "item__1699617695042": {
            "linkToPage": "/home",
            "name": "Home",
            "iconType": "custom_icon",
            "menuIconCustom": "https://api.directual.com/fileUploaded/directual-site/e/stamp_D.png",
            "menuCustomIconSize": 53,
            "addLabel": "add_label",
            "menuLabel": "foo",
            "menuIconCustomSelected": "https://api.directual.com/fileUploaded/directual-site/e/ebanet.jpeg"
        },
        "item__1699879618452": {
            "linkToPage": "/all-users",
            "name": "All Users",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Content": "M11 11V5.82843L9.17157 7.65685L7.75736 6.24264L12 2L16.2426 6.24264L14.8284 7.65685L13 5.82843V11H18.1716L16.3431 9.17157L17.7574 7.75736L22 12L17.7574 16.2426L16.3431 14.8284L18.1716 13H13V18.1716L14.8284 16.3431L16.2426 17.7574L12 22L7.75736 17.7574L9.17157 16.3431L11 18.1716V13H5.82843L7.65685 14.8284L6.24264 16.2426L2 12L6.24264 7.75736L7.65685 9.17157L5.82843 11H11Z",
                "Category": "Arrows",
                "id": "drag-move-2-line"
            },
            "menuRemixIconColor": "#a01717",
            "menuRemixIconColorSelected": "#338196",
            "menuRemixIconSize": 60
        },
        "item__1699966605560": {
            "linkToPage": "/home",
            "name": "Home",
            "iconType": "no_icon"
        },
        "item__1699966611883": {
            "linkToPage": "/profile",
            "name": "Profile",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "actions"
        },
        "item__1699966620076": {
            "linkToPage": "/profile",
            "name": "Profile",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Category": "Arrows",
                "Content": "M12.0001 19.1643L18.2072 12.9572L16.793 11.543L12.0001 16.3359L7.20718 11.543L5.79297 12.9572L12.0001 19.1643ZM12.0001 13.5144L18.2072 7.30728L16.793 5.89307L12.0001 10.686L7.20718 5.89307L5.79297 7.30728L12.0001 13.5144Z",
                "id": "arrow-down-double-fill"
            },
            "menuRemixIconColorSelected": "#058efc"
        },
        "item__1699966629619": {
            "linkToPage": "/all-users",
            "name": "All Users",
            "iconType": "custom_icon",
            "menuIconCustom": "https://api.directual.com/fileUploaded/directual-site/e/ebanet.jpeg"
        }
    }
}

function MainMenuWrapper(props) {
    let location = useLocation()
    const { currentBP } = props

    const [logoUrl, setlogoUrl] = useState('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')

    useEffect(() => {

        if (props.themeName.colorScheme === 'darkMint' || props.themeName.colorScheme === 'warmNight' || props.themeName.colorScheme === 'hacker') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/b652c768-32eb-4309-bc7f-974863107528.svg')
        }
        if (props.themeName.colorScheme === 'classic' || props.themeName.colorScheme === 'tiffany' || props.themeName.colorScheme === 'white') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')
        }
    }, [props.themeName])

    if (props.mobileTabs && currentBP == 'mobile') { return <NewMobileTabs 
        theme='ural'
        mainMenu={newMenuEexample.mainMenu}
        mobileMenuOption={newMenuEexample.mobileMenuOption}
        menuConfig={newMenuEexample.menuConfig}
        mobileMenu={newMenuEexample.mobileMenu}
        currentRoute={location.pathname || '/'}
        custom_labels={{
            "counter": "0",
            "foo": "3"
        }}
        currentBP={currentBP}
        /> }

    return <NewMainMenu
        title='directual-design'
        theme='ural'
        compactState
        currentBP={currentBP}
        handleRoute={href => e => {}}
        //horizontal={props.horizontal}
        mainMenu={newMenuEexample.mainMenu}
        mobileMenuOption={newMenuEexample.mobileMenuOption}
        menuConfig={newMenuEexample.menuConfig}
        mobileMenu={newMenuEexample.mobileMenu}
        currentRoute={location.pathname || '/'}
        custom_labels={{
            "counter": "0",
            "foo": "3"
        }}
    />

    return (
        <MainMenu
            title='directual-design'
            showUserButtons={true}
            loggedIn={true}
            logoSize={{
                height: 52,
                width: 187
            }}
            handleRoute={href => e => console.log(href)}
            horizontal={props.horizontal}
            logoutText='Выйти'
            mobileLeftSide={props.mobileLeftSide}
            //loggedIn={false}
            logInButton={{ name: "Sign in", route: "/profile", icon: "logoutAlt", link: <Link to="/profile">Sign in</Link> }}
            profileButton={{ name: "Profile", route: "/profile", icon: "user", link: <Link to="/profile">Profile</Link> }}
            logoUrl={logoUrl}
            userName={'Pavel Ershov'}
            logOutButton
            currentRoute={location.pathname || '/'}
            menu={[
                { name: "What?", group: null, route: "/", icon: "info", link: <Link to="/">What is it?</Link> },
                { name: "Components", subheader: true },
                { name: "Sign In / Sign Up / Profile", group: 'Components', route: "/profile", icon: "user", link: <Link to="/profile">Sign in, Sign up, Profile</Link> },
                { name: "Form", route: "/form", group: 'Components', icon: "edit", link: <Link to="/form">Form</Link> },
                { name: "Theme management", group: 'Components', route: "/theme", icon: "styles", link: <Link to="/theme">Theme management</Link> },
                { name: "Cards", group: 'Components', route: "/cards", icon: "cards", link: <Link to="/cards">Cards view</Link> },
                { name: "Table", group: 'Components', route: "/table", icon: "database" },
                { name: "Kanban", group: 'Components', route: "/kanban", icon: "kanban" },
                { name: "Chart", group: 'Components', route: "/chart", icon: "chart" },
                { name: "Comments (soon)", group: 'Components', route: "/comments", icon: "version", hidden: true },
                { name: "Design system", subheader: true },
                { name: "Typography", route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
                { name: "Directual Icons", route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
                { name: "Buttons", route: "/system-button", icon: "done", link: <Link to="/system-button">Action panel, Buttons</Link> },
                { name: "Data entry", route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> },
                { name: "Media", route: "/system-media", icon: "play", link: <Link to="/system-media">Media</Link> },
                { name: "Layout", route: "/system-layout", icon: "dashboard", link: <Link to="/system-layout">Layout</Link> },
                { name: "Platform", group: 'Design system', route: "/platform", icon: "babai", link: <Link to="/platform">Platform</Link> },
            ]}

        />)
}

const App = (props) => {
    let exampleDataHtml = {
        html: '<b>test</b>'
    }

    let cardActions = {
        "sl": "vpnKey",
        "pageSize": "4",
        "headerField": null,
        "params": {
            "cardListLayout": "looseGrid",
            "cardHeaderComment": "user",
            "deleteField": "",
            "cardBodyText": "paid_up_to",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "country",
                        "fetch": [],
                        "sysName": "country",
                        "name": "Страна",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "servers"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "idVPN",
                        "fetch": [],
                        "sysName": "idVPN",
                        "name": "ID VPN",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "paid_up_to",
                        "fetch": [],
                        "sysName": "paid_up_to",
                        "name": "Оплачен до",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD.MM.Y",
                            "timeFormat": "",
                            "isUTC": "true"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "servserVPN",
                        "fetch": [],
                        "sysName": "servserVPN",
                        "name": "Какой VPN",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "servers"
                    },
                    {
                        "fieldSysName": "ss_key",
                        "fetch": [],
                        "sysName": "ss_key",
                        "name": "Ключ для подключения к VPN",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [],
                        "sysName": "status",
                        "name": "Статус",
                        "dataType": "array",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "user",
                        "fetch": [],
                        "sysName": "user",
                        "name": "Пользователь",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "country": {
                        "id": "country",
                        "content": "Страна",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "servers",
                        "actions": []
                    },
                    "id": {
                        "id": "id",
                        "content": "id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "idVPN": {
                        "id": "idVPN",
                        "content": "ID VPN",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "paid_up_to": {
                        "id": "paid_up_to",
                        "content": "Оплачен до",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD.MM.Y",
                            "timeFormat": "",
                            "isUTC": "true"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "servserVPN": {
                        "id": "servserVPN",
                        "content": "Какой VPN",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "servers",
                        "actions": []
                    },
                    "ss_key": {
                        "id": "ss_key",
                        "content": "Ключ для подключения к VPN",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "status": {
                        "id": "status",
                        "content": "Статус",
                        "type": "field",
                        "dataType": "array",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "user": {
                        "id": "user",
                        "content": "Пользователь",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "action__71551694689685262": {
                        "id": "action__71551694689685262",
                        "content": "Отмена подписки",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "email": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paid_up_to": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ss_key": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "status": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "tariff": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": false
                    },
                    "country": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id": {
                        "include": false,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "idVPN": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "servserVPN": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "user": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "paid_up_to",
                            "ss_key",
                            "status",
                            "country",
                            "id",
                            "idVPN",
                            "servserVPN",
                            "user",
                            "action__71551694689685262"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "email": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paid_up_to": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ss_key": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tariff": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": false
                },
                "country": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "idVPN": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "servserVPN": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "user": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "cardHeaderStyle": "p",
            "cardColor": "status",
            "cardColorOption": "none",
            "cardLayoutType": "default",
            "actions": [
                {
                    "sysName": "cancel_paymentnut_lk",
                    "id": "71551694689685262",
                    "name": "Отмена подписки",
                    "displayAs": "button",
                    "buttonIcon": "ban",
                    "conditionals": [
                        {
                            "id": "74461694690822939",
                            "target": "field",
                            "value": "Оплачен",
                            "field": "status"
                        }
                    ],
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "id",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "country",
                                "fetch": [],
                                "sysName": "country",
                                "name": "",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "email",
                                "fetch": [],
                                "sysName": "email",
                                "name": "",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "id",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "11471694689740746",
                            "target": "country",
                            "type": "objectField",
                            "value": "country"
                        },
                        {
                            "id": "55631694689756718",
                            "target": "email",
                            "type": "objectField",
                            "value": "user"
                        }
                    ],
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "Запрос на отмену подписки отправлен, вам придет письмо",
                    "resultButton": "Подписка отменяется"
                }
            ]
        },
        "tableTitle": "Ключи для VPN",
        "actions": null,
        "headers": [
            {
                "sysName": "country",
                "dataType": "link",
                "name": "Страна",
                "id": "15411673282156887",
                "link": "servers",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 8,
                "linkIndexFieldSysName": [
                    "country"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": true,
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "idVPN",
                "dataType": "string",
                "name": "ID VPN",
                "id": "85101673281869481",
                "link": null,
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 6,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "paid_up_to",
                "dataType": "date",
                "name": "Оплачен до",
                "id": "60121673281813015",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "ru",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
                        "wed": true
                    },
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD.MM.Y",
                    "timeFormat": "",
                    "isUTC": "true"
                },
                "groupName": null,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "servserVPN",
                "dataType": "link",
                "name": "Какой VPN",
                "id": "72501673281886265",
                "link": "servers",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 7,
                "linkIndexFieldSysName": [
                    "country"
                ],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": true,
                "array": false
            },
            {
                "sysName": "ss_key",
                "dataType": "string",
                "name": "Ключ для подключения к VPN",
                "id": "48521673281776493",
                "link": null,
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "status",
                "dataType": "array",
                "name": "Статус",
                "id": "67281673281863015",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 5,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": true
            },
            {
                "sysName": "user",
                "dataType": "link",
                "name": "Пользователь",
                "id": "20071673281951832",
                "link": "WebUser",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [
                    "servserVPN.country",
                    "id"
                ],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": true,
                "array": false
            }
        ],
        "data": [
            {
                "idVPN": "213",
                "country": "Netherlands",
                "id": "7b0669f7-9497-4971-bc3c-8c57622833ab",
                "ss_key": "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3TlZ6aDV3S2c0elJlZzVZb0NRNFI5@51.15.102.5:32243/?outline=1",
                "status": [
                    "Оплачен"
                ],
                "paid_up_to": 1699976745175,
                "servserVPN": "ab3a8a64-41a4-4f69-be7f-5e851e032e4d",
                "user": "test13@bubuvpn.com"
            },
            {
                "idVPN": "1",
                "country": "Turkey",
                "id": "a6952aaa-c988-4125-b562-c5235bee545c",
                "ss_key": "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpjUmtZSW1pNmpwcW9tbUtYNnNKeDdi@185.123.100.29:1337/?outline=1",
                "status": [
                    "Оплачен"
                ],
                "paid_up_to": 1697298706534,
                "servserVPN": "ea9a6be4-12d6-450c-8cbd-140f642a9a6e",
                "user": "test13@bubuvpn.com"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "country",
                99165310
            ],
            [
                "id",
                99165310
            ],
            [
                "idVPN",
                99165310
            ],
            [
                "paid_up_to",
                99165310
            ],
            [
                "servserVPN",
                99165310
            ],
            [
                "ss_key",
                99165310
            ],
            [
                "status",
                99165310
            ],
            [
                "user",
                99165310
            ]
        ],
        "writeFields": [],
        "structures": {
            "99165310": {
                "networkID": 14030,
                "id": 99165310,
                "dateCreated": "2023-01-11T14:20:41Z",
                "hidden": false,
                "dateHidden": null,
                "name": "vpn_key",
                "sysName": "vpn_key",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"date\",\"name\":\"Дата создания\",\"id\":\"44761675095209850\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Пользователь\",\"id\":\"20071673281951832\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"servserVPN.country\",\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ss_key\",\"dataType\":\"string\",\"name\":\"Ключ для подключения к VPN\",\"id\":\"48521673281776493\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"paid_up_to\",\"dataType\":\"date\",\"name\":\"Оплачен до\",\"id\":\"60121673281813015\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"array\",\"name\":\"Статус\",\"id\":\"67281673281863015\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":true},{\"sysName\":\"idVPN\",\"dataType\":\"string\",\"name\":\"ID VPN\",\"id\":\"85101673281869481\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"servserVPN\",\"dataType\":\"link\",\"name\":\"Какой VPN\",\"id\":\"72501673281886265\",\"link\":\"servers\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[\"country\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"link\",\"name\":\"Страна\",\"id\":\"15411673282156887\",\"link\":\"servers\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[\"country\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"accessUrl\",\"dataType\":\"string\",\"name\":\"Ответ от сервера\",\"id\":\"10391673448202267\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"type_purchase\",\"dataType\":\"string\",\"name\":\"Тип покупки\",\"id\":\"47341675520436360\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"new\",\"label\":\"Новый\"},{\"value\":\"add\",\"label\":\"Дополнительный\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
                "jsonGroupSettings": "[]",
                "jsonViewIdSettings": "[{\"sysName\":\"status\"},{\"sysName\":\"country\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-06-27T09:49:52Z",
                "createBy": 14363,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": null
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let newCardActions = {
        "sl": "cart",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "",
            "deleteField": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "Cart_price",
                        "fetch": [],
                        "sysName": "Cart_price",
                        "name": "",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "goods",
                        "fetch": [
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "finalPrice",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "float",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "good",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "image",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "name",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "price",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "good_in_cart_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "image",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "quantity",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "status",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "status_name",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            }
                        ],
                        "sysName": "goods",
                        "name": "",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goods_in_cart"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [],
                        "sysName": "status",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "goods",
                        "fetch": [],
                        "sysName": "goods",
                        "name": "",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goods_in_cart"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "Cart_price": {
                        "id": "Cart_price",
                        "content": "",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "goods": {
                        "id": "goods",
                        "content": "",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "goods_in_cart",
                        "actions": []
                    },
                    "id": {
                        "id": "id",
                        "content": "id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "status": {
                        "id": "status",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "title": {
                        "id": "title",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "action__86391636363685240": {
                        "content": "upload files",
                        "id": "action__86391636363685240",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "Cart_price": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "goods": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "veiwOption": "table",
                        "cartView": {
                            "image": true,
                            "imageField": "image",
                            "deleteOn": true,
                            "quantity": true,
                            "price": true,
                            "title": true,
                            "priceUnits": "$",
                            "titleField": "good",
                            "priceField": "finalPrice",
                            "quantityField": "quantity",
                            "status": true,
                            "statusField": "status"
                        },
                        "configureLinkedCard": {
                            "fields": {
                                "finalPrice": {
                                    "id": "finalPrice",
                                    "content": "Price",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "good": {
                                    "id": "good",
                                    "content": "Good",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "good_in_cart_name": {
                                    "id": "good_in_cart_name",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "image": {
                                    "id": "image",
                                    "content": "Image",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": "image",
                                    "formatOptions": {}
                                },
                                "quantity": {
                                    "id": "quantity",
                                    "content": "Count",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "status": {
                                    "id": "status",
                                    "content": "Status",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "date": {
                                    "id": "date",
                                    "content": "дата",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "date",
                                    "format": null,
                                    "formatOptions": {
                                        "customOptionLabel": "My option",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "dateLocale": "en-gb",
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "validWeekDays": {
                                            "mon": true,
                                            "thu": true,
                                            "tue": true,
                                            "sun": true,
                                            "fri": true,
                                            "sat": true,
                                            "wed": true
                                        },
                                        "customOptionPlaceholder": "Describe your option",
                                        "range": {},
                                        "customOptionType": "textarea",
                                        "dateFormat": "MMMM, D",
                                        "timeFormat": "",
                                        "isUTC": "false"
                                    }
                                },
                                "float": {
                                    "id": "float",
                                    "content": "флот",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "decimal",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "finalPrice": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "good": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "good_in_cart_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "image": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "quantity": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "status": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "date": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "float": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                null,
                                "finalPrice",
                                "good",
                                "good_in_cart_name",
                                "image",
                                "quantity",
                                "status",
                                null,
                                "date",
                                "float"
                            ]
                        },
                        "sortArrayLink": true,
                        "sortByField": "date",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1637692612736",
                                    "field": "image"
                                },
                                {
                                    "id": "1637692606467",
                                    "field": "good",
                                    "itogo": true
                                },
                                {
                                    "id": "1637692625970",
                                    "field": "status"
                                },
                                {
                                    "id": "1637692623073",
                                    "field": "quantity",
                                    "itogo": true
                                }
                            ],
                            "itogo": true,
                            "deleteOn": true
                        },
                        "sortDirection": "asc"
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "title": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "Cart_price",
                            "goods",
                            "id",
                            "status",
                            "title",
                            "action__86391636363685240"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "actions",
                        "id": "86391636363685240",
                        "name": "upload files",
                        "displayAs": "form",
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "id",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "files",
                                    "fetch": [],
                                    "sysName": "files",
                                    "name": "",
                                    "dataType": "file",
                                    "format": "multipleImages",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "76621636363698934",
                                "field": {
                                    "fieldSysName": "files",
                                    "fetch": [],
                                    "sysName": "files",
                                    "name": "",
                                    "dataType": "file",
                                    "format": "multipleImages",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "Cart_price": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "goods": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "veiwOption": "table",
                    "cartView": {
                        "image": true,
                        "imageField": "image",
                        "deleteOn": true,
                        "quantity": true,
                        "price": true,
                        "title": true,
                        "priceUnits": "$",
                        "titleField": "good",
                        "priceField": "finalPrice",
                        "quantityField": "quantity",
                        "status": true,
                        "statusField": "status"
                    },
                    "configureLinkedCard": {
                        "fields": {
                            "finalPrice": {
                                "id": "finalPrice",
                                "content": "Price",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": null
                            },
                            "good": {
                                "id": "good",
                                "content": "Good",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "good_in_cart_name": {
                                "id": "good_in_cart_name",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "image": {
                                "id": "image",
                                "content": "Image",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "image",
                                "formatOptions": {}
                            },
                            "quantity": {
                                "id": "quantity",
                                "content": "Count",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": null
                            },
                            "status": {
                                "id": "status",
                                "content": "Status",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "date": {
                                "id": "date",
                                "content": "дата",
                                "type": "field",
                                "read": true,
                                "dataType": "date",
                                "format": null,
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "dateLocale": "en-gb",
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "validWeekDays": {
                                        "mon": true,
                                        "thu": true,
                                        "tue": true,
                                        "sun": true,
                                        "fri": true,
                                        "sat": true,
                                        "wed": true
                                    },
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {},
                                    "customOptionType": "textarea",
                                    "dateFormat": "MMMM, D",
                                    "timeFormat": "",
                                    "isUTC": "false"
                                }
                            },
                            "float": {
                                "id": "float",
                                "content": "флот",
                                "type": "field",
                                "read": true,
                                "dataType": "decimal",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "finalPrice": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "good": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "good_in_cart_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "image": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "quantity": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "status": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "date": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "float": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            null,
                            "finalPrice",
                            "good",
                            "good_in_cart_name",
                            "image",
                            "quantity",
                            "status",
                            null,
                            "date",
                            "float"
                        ]
                    },
                    "sortArrayLink": true,
                    "sortByField": "date",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1637692612736",
                                "field": "image"
                            },
                            {
                                "id": "1637692606467",
                                "field": "good",
                                "itogo": true
                            },
                            {
                                "id": "1637692625970",
                                "field": "status"
                            },
                            {
                                "id": "1637692623073",
                                "field": "quantity",
                                "itogo": true
                            }
                        ],
                        "itogo": true,
                        "deleteOn": true
                    },
                    "sortDirection": "asc"
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "actions": [
                {
                    "sysName": "actions",
                    "id": "86391636363685240",
                    "name": "upload files",
                    "displayAs": "form",
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "id",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "files",
                                "fetch": [],
                                "sysName": "files",
                                "name": "",
                                "dataType": "file",
                                "format": "multipleImages",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "76621636363698934",
                            "field": {
                                "fieldSysName": "files",
                                "fetch": [],
                                "sysName": "files",
                                "name": "",
                                "dataType": "file",
                                "format": "multipleImages",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ]
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "Cart_price",
                "name": "",
                "dataType": "number",
                "id": "99631632654931535",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "goods",
                "name": "",
                "dataType": "arrayLink",
                "id": "53151632654863628",
                "link": "goods_in_cart",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "status",
                "name": "",
                "dataType": "string",
                "id": "84351632654929010",
                "link": null,
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "title",
                "name": "",
                "dataType": "string",
                "id": "25911632662259172",
                "link": null,
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "title": "Cart",
                "status": "new",
                "goods": [
                    {
                        "quantity": 2,
                        "image": "https://api.directual.com/fileUploaded/dev/ccb4f331-25a3-4f0d-969f-04b946c8f1d3.jpg",
                        "good": {
                            "price": 10,
                            "name": "apples",
                            "id": "1"
                        },
                        "good_in_cart_name": "good 3",
                        "id": "1",
                        "date": 1636837200000,
                        "status": {
                            "status_name": "NEW",
                            "id": "1"
                        },
                        "finalPrice": 99
                    },
                    {
                        "quantity": 4,
                        "float": -10.34,
                        "image": "https://api.directual.com/fileUploaded/cart/7e71ae85-66e9-4e44-9ddc-add69a90c998.jpg",
                        "good": {
                            "price": 15,
                            "name": "oranges",
                            "id": "3"
                        },
                        "good_in_cart_name": "good 1",
                        "id": "3",
                        "date": 1637787600000,
                        "status": {
                            "status_name": "OLD",
                            "id": "2"
                        },
                        "finalPrice": 400
                    },
                    {
                        "float": 1.5,
                        "image": "https://api.directual.com/fileUploaded/dev/20d4260f-5ea6-4f8b-93ba-73c7d179a86d.jpg",
                        "good": {
                            "price": 20,
                            "name": "bananas",
                            "id": "2"
                        },
                        "good_in_cart_name": "good 2",
                        "id": "2",
                        "date": 1637182800000,
                        "finalPrice": 120
                    }
                ],
                "id": "1"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "Cart_price",
                99031305
            ],
            [
                "goods.date",
                99031304
            ],
            [
                "goods.finalPrice",
                99031304
            ],
            [
                "goods.float",
                99031304
            ],
            [
                "goods.good.id",
                99031302
            ],
            [
                "goods.good.image",
                99031302
            ],
            [
                "goods.good.name",
                99031302
            ],
            [
                "goods.good.price",
                99031302
            ],
            [
                "goods.good_in_cart_name",
                99031304
            ],
            [
                "goods.image",
                99031304
            ],
            [
                "goods.quantity",
                99031304
            ],
            [
                "goods.status.id",
                99035858
            ],
            [
                "goods.status.status_name",
                99035858
            ],
            [
                "id",
                99031305
            ],
            [
                "status",
                99031305
            ],
            [
                "title",
                99031305
            ]
        ],
        "writeFields": [
            "goods",
            "id"
        ],
        "structures": {
            "99031302": {
                "networkID": 9877,
                "sysName": "goods",
                "name": "goods",
                "id": 99031302,
                "dateCreated": "2021-09-26T11:09:07Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"name\":\"ЫМя\",\"dataType\":\"string\",\"id\":\"39841632654618610\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price\",\"name\":\"ЦЕНА\",\"dataType\":\"number\",\"id\":\"16831632654619092\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image\",\"name\":\"Картинк\",\"dataType\":\"file\",\"id\":\"61001632654724498\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"date\",\"name\":\"ДАта\",\"dataType\":\"date\",\"id\":\"97981637703750787\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM, D\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-23T21:42:54Z",
                "createBy": 21,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            },
            "99031304": {
                "networkID": 9877,
                "sysName": "goods_in_cart",
                "name": "goods in cart",
                "id": 99031304,
                "dateCreated": "2021-09-26T11:14:05Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"cart_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"27951632654884383\",\"link\":\"cart\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"good\",\"name\":\"Good\",\"dataType\":\"link\",\"id\":\"56301632654884854\",\"link\":\"goods\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"quantity\",\"name\":\"Count\",\"dataType\":\"number\",\"id\":\"10581632654902116\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"finalPrice\",\"name\":\"Price\",\"dataType\":\"number\",\"id\":\"41241632654906714\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"good_in_cart_name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"40521632944512531\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image\",\"name\":\"Image\",\"dataType\":\"file\",\"id\":\"86301632946954729\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"status\",\"name\":\"Status\",\"dataType\":\"link\",\"id\":\"43591633889912266\",\"link\":\"status\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"date\",\"name\":\"дата\",\"dataType\":\"date\",\"id\":\"53411637703823836\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM, D\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"float\",\"name\":\"флот\",\"dataType\":\"decimal\",\"id\":\"83931637706413383\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"good\"},{\"sysName\":\"quantity\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-23T22:58:50Z",
                "createBy": 21,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            },
            "99031305": {
                "networkID": 9877,
                "sysName": "cart",
                "name": "cart",
                "id": 99031305,
                "dateCreated": "2021-09-26T11:14:14Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"25911632662259172\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"goods\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"53151632654863628\",\"link\":\"goods_in_cart\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"84351632654929010\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"Cart_price\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"99631632654931535\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"goods\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-29T20:04:55Z",
                "createBy": 21,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            },
            "99035858": {
                "networkID": 9877,
                "sysName": "status",
                "name": "status",
                "id": 99035858,
                "dateCreated": "2021-10-10T18:18:54Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"status_name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"53361633889940475\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"status_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-10T18:19:07Z",
                "createBy": 21,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "goods",
                "name": "",
                "dataType": "arrayLink",
                "id": "53151632654863628",
                "link": "goods_in_cart",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "quickSearch": "false"
    }

    let kanbanData = {
        "sl": "getKanban",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardHeaderComment": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "arrival_date",
                        "fetch": [],
                        "sysName": "arrival_date",
                        "name": "Date of Arrival",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "back_wheel_part",
                        "fetch": [],
                        "sysName": "back_wheel_part",
                        "name": "Back Wheel Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bicycle_part",
                        "fetch": [],
                        "sysName": "bicycle_part",
                        "name": "Choose Bicycle Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "biycle_problem_message",
                        "fetch": [],
                        "sysName": "biycle_problem_message",
                        "name": "Problem Message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "choose_wheel",
                        "fetch": [],
                        "sysName": "choose_wheel",
                        "name": "Choose Wheel",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "client",
                        "fetch": [],
                        "sysName": "client",
                        "name": "Client",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "date_created",
                        "fetch": [],
                        "sysName": "date_created",
                        "name": "Date Created",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "front_wheel_part",
                        "fetch": [],
                        "sysName": "front_wheel_part",
                        "name": "Front Wheel Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "max_arrival_time",
                        "fetch": [],
                        "sysName": "max_arrival_time",
                        "name": "Latest arrival time",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "message",
                        "fetch": [],
                        "sysName": "message",
                        "name": "Message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "min_arrival_time",
                        "fetch": [],
                        "sysName": "min_arrival_time",
                        "name": "Earliest arrival time",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_method",
                        "fetch": [],
                        "sysName": "payment_method",
                        "name": "Payment Method",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "status",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "status",
                        "name": "Status",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "kanban_columns"
                    },
                    {
                        "fieldSysName": "time_interval",
                        "fetch": [],
                        "sysName": "time_interval",
                        "name": "Time Interval",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "uploads_images_array_link",
                        "fetch": [],
                        "sysName": "uploads_images_array_link",
                        "name": "Images",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "appointments_images"
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Weight",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "@dateChanged",
                        "fetch": [],
                        "sysName": "@dateChanged",
                        "name": "date changed",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "@dateCreated",
                        "fetch": [],
                        "sysName": "@dateCreated",
                        "name": "date created",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "@who",
                        "fetch": [],
                        "sysName": "@who",
                        "name": "who changed",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "arrival_date",
                        "fetch": [],
                        "sysName": "arrival_date",
                        "name": "Date of Arrival",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "back_wheel_part",
                        "fetch": [],
                        "sysName": "back_wheel_part",
                        "name": "Back Wheel Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bicycle_part",
                        "fetch": [],
                        "sysName": "bicycle_part",
                        "name": "Choose Bicycle Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "biycle_problem_message",
                        "fetch": [],
                        "sysName": "biycle_problem_message",
                        "name": "Problem Message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "choose_wheel",
                        "fetch": [],
                        "sysName": "choose_wheel",
                        "name": "Choose Wheel",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "client",
                        "fetch": [],
                        "sysName": "client",
                        "name": "Client",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "date_created",
                        "fetch": [],
                        "sysName": "date_created",
                        "name": "Date Created",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "front_wheel_part",
                        "fetch": [],
                        "sysName": "front_wheel_part",
                        "name": "Front Wheel Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "max_arrival_time",
                        "fetch": [],
                        "sysName": "max_arrival_time",
                        "name": "Latest arrival time",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "message",
                        "fetch": [],
                        "sysName": "message",
                        "name": "Message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "min_arrival_time",
                        "fetch": [],
                        "sysName": "min_arrival_time",
                        "name": "Earliest arrival time",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_method",
                        "fetch": [],
                        "sysName": "payment_method",
                        "name": "Payment Method",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [],
                        "sysName": "status",
                        "name": "Status",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "kanban_columns"
                    },
                    {
                        "fieldSysName": "time_interval",
                        "fetch": [],
                        "sysName": "time_interval",
                        "name": "Time Interval",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "uploads_images_array_link",
                        "fetch": [],
                        "sysName": "uploads_images_array_link",
                        "name": "Images",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "appointments_images"
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Weight",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "arrival_date": {
                        "id": "arrival_date",
                        "content": "Date of Arrival",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "back_wheel_part": {
                        "id": "back_wheel_part",
                        "content": "Back Wheel Part",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bicycle_part": {
                        "id": "bicycle_part",
                        "content": "Choose Bicycle Part",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "biycle_problem_message": {
                        "id": "biycle_problem_message",
                        "content": "Problem Message",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "choose_wheel": {
                        "id": "choose_wheel",
                        "content": "Choose Wheel",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "client": {
                        "id": "client",
                        "content": "Client",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "date_created": {
                        "id": "date_created",
                        "content": "Date Created",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "front_wheel_part": {
                        "id": "front_wheel_part",
                        "content": "Front Wheel Part",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "id": {
                        "id": "id",
                        "content": "id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "max_arrival_time": {
                        "id": "max_arrival_time",
                        "content": "Latest arrival time",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "message": {
                        "id": "message",
                        "content": "Message",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "min_arrival_time": {
                        "id": "min_arrival_time",
                        "content": "Earliest arrival time",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "payment_method": {
                        "id": "payment_method",
                        "content": "Payment Method",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "status": {
                        "id": "status",
                        "content": "Status",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "kanban_columns",
                        "actions": []
                    },
                    "time_interval": {
                        "id": "time_interval",
                        "content": "Time Interval",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "uploads_images_array_link": {
                        "id": "uploads_images_array_link",
                        "content": "Images",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "appointments_images",
                        "actions": []
                    },
                    "weight": {
                        "id": "weight",
                        "content": "Weight",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "@dateChanged": {
                        "id": "@dateChanged",
                        "content": "date changed",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "",
                        "actions": []
                    },
                    "@dateCreated": {
                        "id": "@dateCreated",
                        "content": "date created",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "",
                        "actions": []
                    },
                    "@who": {
                        "id": "@who",
                        "content": "who changed",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "",
                        "actions": []
                    },
                    "action__46951693334766477": {
                        "id": "action__46951693334766477",
                        "content": "New action",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "arrival_date": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "back_wheel_part": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bicycle_part": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "biycle_problem_message": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "choose_wheel": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "client": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "date_created": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "front_wheel_part": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id": {
                        "include": false,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "max_arrival_time": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "message": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "min_arrival_time": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "payment_method": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "status": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "time_interval": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "uploads_images_array_link": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "weight": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@dateChanged": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@dateCreated": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@who": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "arrival_date",
                            "back_wheel_part",
                            "bicycle_part",
                            "biycle_problem_message",
                            "choose_wheel",
                            "client",
                            "date_created",
                            "front_wheel_part",
                            "id",
                            "max_arrival_time",
                            "message",
                            "min_arrival_time",
                            "payment_method",
                            "status",
                            "time_interval",
                            "uploads_images_array_link",
                            "weight",
                            "@dateChanged",
                            "@dateCreated",
                            "@who",
                            "action__46951693334766477"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "arrival_date": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "back_wheel_part": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bicycle_part": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "biycle_problem_message": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "choose_wheel": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "client": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_created": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "front_wheel_part": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "max_arrival_time": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "message": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "min_arrival_time": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_method": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "time_interval": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "uploads_images_array_link": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "weight": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@dateChanged": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@dateCreated": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@who": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "kanbanParams": {
                "columnField": "status",
                "columnsStruct": "kanban_columns",
                "columns": [
                    {
                        "id": "1",
                        "name": "To Do"
                    },
                    {
                        "id": "2",
                        "name": "In Progress"
                    },
                    {
                        "id": "3",
                        "name": "Completed"
                    }
                ],
                "columnsVisibility": {},
                "sortField": "weight",
                "userIDfield": null
            },
            "actions": [
                {
                    "sysName": "",
                    "id": "46951693334766477",
                    "name": "New action"
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "arrival_date",
                "dataType": "string",
                "name": "Date of Arrival",
                "id": "16131692638537162",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "back_wheel_part",
                "dataType": "string",
                "name": "Back Wheel Part",
                "id": "92211692638522018",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "bicycle_part",
                "dataType": "string",
                "name": "Choose Bicycle Part",
                "id": "67561692638644338",
                "link": "",
                "group": "1692638633142",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "biycle_problem_message",
                "dataType": "string",
                "name": "Problem Message",
                "id": "62471692638653105",
                "link": "",
                "group": "1692638633142",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "choose_wheel",
                "dataType": "string",
                "name": "Choose Wheel",
                "id": "58441692638381014",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "client",
                "dataType": "link",
                "name": "Client",
                "id": "88971692557371477",
                "link": "WebUser",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [
                    "role"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "date_created",
                "dataType": "date",
                "name": "Date Created",
                "id": "62221692977312800",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
                        "wed": true
                    },
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "front_wheel_part",
                "dataType": "string",
                "name": "Front Wheel Part",
                "id": "43731692638513352",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "max_arrival_time",
                "dataType": "string",
                "name": "Latest arrival time",
                "id": "77471692638668493",
                "link": "",
                "group": "1692638633142",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "message",
                "dataType": "string",
                "name": "Message",
                "id": "44951692638527107",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "min_arrival_time",
                "dataType": "string",
                "name": "Earliest arrival time",
                "id": "50521692638659436",
                "link": "",
                "group": "1692638633142",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "payment_method",
                "dataType": "string",
                "name": "Payment Method",
                "id": "14281692638467603",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "status",
                "dataType": "link",
                "name": "Status",
                "id": "80061693332942643",
                "link": "kanban_columns",
                "group": "1693332936503",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "time_interval",
                "dataType": "string",
                "name": "Time Interval",
                "id": "19021692638553575",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "uploads_images_array_link",
                "dataType": "arrayLink",
                "name": "Images",
                "id": "18281692638740800",
                "link": "appointments_images",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "weight",
                "dataType": "decimal",
                "name": "Weight",
                "id": "31311693332958118",
                "link": "",
                "group": "1693332936503",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "data": [
            {
                "uploads_images_array_link": [
                    "1ef8322f-d6fd-4e66-8b4b-77ee91450e57"
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "10:00",
                "biycle_problem_message": "Our Electric Cargo bike needs to have its brakes and gears cleaned and adjusted. The pads on the hydraulic brakes needs replacing. If possible the hydralic arm between the front and rear part of the bike needs welding.",
                "payment_method": "MobilePay",
                "id": "bf75b49b-cc95-4402-a004-9cd9b449a05d",
                "client": "kasper_rud@hotmail.com",
                "arrival_date": "24-08-2023",
                "max_arrival_time": "14:30"
            },
            {
                "time_interval": "8,12",
                "uploads_images_array_link": [
                    "0ba17b88-b3b8-4b10-b645-c57c08695208"
                ],
                "back_wheel_part": "Slange på baghjul - 450 kr.",
                "payment_method": "MobilePay",
                "id": "37b29869-e7f9-4a99-8d6f-a3799662f821",
                "client": "j.dalby@hotmail.com",
                "arrival_date": "22-08-2023",
                "choose_wheel": "Baghjul",
                "message": "Cyklen står i forhaven MBK Comanche"
            },
            {
                "uploads_images_array_link": [
                    ""
                ],
                "bicycle_part": "Gear og kæde",
                "min_arrival_time": "09:00",
                "biycle_problem_message": "Mine cykel gear bliver ved med at hoppe ud af det gear man er i så den kan kun kører i 1, mangler luft i hjulene ",
                "payment_method": "Kontant",
                "id": "574be768-5f62-400c-8e85-ac37b342032b",
                "client": "amalie.lodberg@icloud.com",
                "arrival_date": "22-08-2023",
                "max_arrival_time": "10:00"
            },
            {
                "uploads_images_array_link": [
                    "7bf84d48-0404-4134-970e-c4f3a258ffc1",
                    "21fc7c6d-63e6-43ae-957c-617dec891b26"
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "10:00",
                "biycle_problem_message": "Både hjul, bremser og kæde skal tjekkes igennem. Dæk er helt flade. Det er to specialdesignet cargo cykler. Billederne er inden de blev brugt",
                "payment_method": "MobilePay",
                "id": "4be37981-4c64-43fe-8cc9-8906bc87e585",
                "client": "amalie.norgaard@wmglobal.com",
                "arrival_date": "28-08-2023",
                "max_arrival_time": "15:00"
            },
            {
                "uploads_images_array_link": [
                    ""
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "10:30",
                "biycle_problem_message": "Jeg kan ikke skrue mit styr fast efter jeg forsøgte at hæve styret. Kilen der normalt skal komme med op på frempinden sidder fast i bunden og er rusten. Resten af udstyret virker fuldkommen intakt. ",
                "payment_method": "MobilePay",
                "id": "ab66fe13-216a-412a-abb3-128533ba9df8",
                "client": "michellaholstkontakt@gmail.com",
                "arrival_date": "23-08-2023",
                "max_arrival_time": "15:00"
            },
            {
                "uploads_images_array_link": [
                    ""
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "12:00",
                "biycle_problem_message": "Sco elcykel trækker ikke køre i hug har fået nyt batteri",
                "payment_method": "MobilePay",
                "id": "1e361e1e-4dc5-43e3-98db-c222e54b243e",
                "client": "reimannsren@gmail.com",
                "arrival_date": "24-08-2023",
                "max_arrival_time": "12:00"
            },
            {
                "uploads_images_array_link": [
                    ""
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "17:15",
                "biycle_problem_message": "Forhjulet er muligvis punkteret og så binder batteriet så jeg ikke kan få det ud og det er sket før. ",
                "payment_method": "MobilePay",
                "id": "d4052ac9-6d72-4677-a2c2-487d8e6089bc",
                "client": "rikke_harms@hotmail.com",
                "arrival_date": "23-08-2023",
                "max_arrival_time": "20:00"
            },
            {
                "time_interval": "0",
                "uploads_images_array_link": [
                    ""
                ],
                "back_wheel_part": "Dæk og slange på baghjul - 750 kr.",
                "id": "7a37a716-b796-4b95-a841-ff0803ab3bec",
                "client": "kattenpuk@hotmail.com",
                "arrival_date": "01-09-2023",
                "choose_wheel": "Baghjul"
            },
            {
                "time_interval": "0",
                "uploads_images_array_link": [
                    ""
                ],
                "front_wheel_part": "Dæk og slange på forhjul - 750 kr.",
                "id": "f77dc505-8283-4899-92c4-512c4b2cd202",
                "client": "alextasha1370@gmail.com",
                "arrival_date": "26-08-2023",
                "choose_wheel": "Forhjul"
            },
            {
                "time_interval": "8,12",
                "uploads_images_array_link": [
                    ""
                ],
                "back_wheel_part": "Slange på baghjul - 450 kr.",
                "payment_method": "MobilePay",
                "id": "71b39b3c-75ad-4d78-bd19-4d722e0c4fb0",
                "client": "sanne.johansen@icloud.com",
                "arrival_date": "24-08-2023",
                "choose_wheel": "Baghjul"
            }
        ],
        "totalPages": 7,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "arrival_date",
                99243887
            ],
            [
                "back_wheel_part",
                99243887
            ],
            [
                "bicycle_part",
                99243887
            ],
            [
                "biycle_problem_message",
                99243887
            ],
            [
                "choose_wheel",
                99243887
            ],
            [
                "client",
                99243887
            ],
            [
                "date_created",
                99243887
            ],
            [
                "front_wheel_part",
                99243887
            ],
            [
                "id",
                99243887
            ],
            [
                "max_arrival_time",
                99243887
            ],
            [
                "message",
                99243887
            ],
            [
                "min_arrival_time",
                99243887
            ],
            [
                "payment_method",
                99243887
            ],
            [
                "status.id",
                99245426
            ],
            [
                "status.status",
                99245426
            ],
            [
                "time_interval",
                99243887
            ],
            [
                "uploads_images_array_link",
                99243887
            ],
            [
                "weight",
                99243887
            ]
        ],
        "writeFields": [
            "@dateChanged",
            "@dateCreated",
            "@who",
            "arrival_date",
            "back_wheel_part",
            "bicycle_part",
            "biycle_problem_message",
            "choose_wheel",
            "client",
            "date_created",
            "front_wheel_part",
            "id",
            "max_arrival_time",
            "message",
            "min_arrival_time",
            "payment_method",
            "status",
            "time_interval",
            "uploads_images_array_link",
            "weight"
        ],
        "structures": {
            "99243887": {
                "networkID": 18213,
                "sysName": "appointments",
                "name": "appointments (FORM)",
                "id": 99243887,
                "dateCreated": "2023-08-20T18:45:20Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"payment_method\",\"name\":\"Payment Method\",\"dataType\":\"string\",\"id\":\"14281692638467603\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"arrival_date\",\"name\":\"Date of Arrival\",\"dataType\":\"string\",\"id\":\"16131692638537162\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"uploads_images_array_link\",\"name\":\"Images\",\"dataType\":\"arrayLink\",\"id\":\"18281692638740800\",\"link\":\"appointments_images\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"time_interval\",\"name\":\"Time Interval\",\"dataType\":\"string\",\"id\":\"19021692638553575\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"weight\",\"name\":\"Weight\",\"dataType\":\"decimal\",\"id\":\"31311693332958118\",\"link\":\"\",\"group\":\"1693332936503\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"front_wheel_part\",\"name\":\"Front Wheel Part\",\"dataType\":\"string\",\"id\":\"43731692638513352\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"message\",\"name\":\"Message\",\"dataType\":\"string\",\"id\":\"44951692638527107\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"min_arrival_time\",\"name\":\"Earliest arrival time\",\"dataType\":\"string\",\"id\":\"50521692638659436\",\"link\":\"\",\"group\":\"1692638633142\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"choose_wheel\",\"name\":\"Choose Wheel\",\"dataType\":\"string\",\"id\":\"58441692638381014\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"date_created\",\"name\":\"Date Created\",\"dataType\":\"date\",\"id\":\"62221692977312800\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"biycle_problem_message\",\"name\":\"Problem Message\",\"dataType\":\"string\",\"id\":\"62471692638653105\",\"link\":\"\",\"group\":\"1692638633142\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"bicycle_part\",\"name\":\"Choose Bicycle Part\",\"dataType\":\"string\",\"id\":\"67561692638644338\",\"link\":\"\",\"group\":\"1692638633142\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"max_arrival_time\",\"name\":\"Latest arrival time\",\"dataType\":\"string\",\"id\":\"77471692638668493\",\"link\":\"\",\"group\":\"1692638633142\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"status\",\"name\":\"Status\",\"dataType\":\"link\",\"id\":\"80061693332942643\",\"link\":\"kanban_columns\",\"group\":\"1693332936503\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"client\",\"name\":\"Client\",\"dataType\":\"link\",\"id\":\"88971692557371477\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"role\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true},{\"sysName\":\"back_wheel_part\",\"name\":\"Back Wheel Part\",\"dataType\":\"string\",\"id\":\"92211692638522018\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"id\":1692638412820,\"name\":\"Wheel service\",\"order\":0},{\"id\":1692638633142,\"name\":\"Repair or overhaul\",\"order\":1},{\"id\":1693332936503,\"name\":\"Kanban\",\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"client\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-08-29T18:16:31Z",
                "createBy": 8272,
                "changedBy": 8272,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33770298
            },
            "99245426": {
                "networkID": 18213,
                "sysName": "kanban_columns",
                "name": "Kanban Columns",
                "id": 99245426,
                "dateCreated": "2023-08-29T18:12:17Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"39921693332754786\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-08-29T18:12:48Z",
                "createBy": 8272,
                "changedBy": 8272,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33770298
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "@dateChanged",
                "dataType": "string",
                "name": "@dateChanged",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "@dateCreated",
                "dataType": "string",
                "name": "@dateCreated",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "@who",
                "dataType": "string",
                "name": "@who",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "arrival_date",
                "dataType": "string",
                "name": "Date of Arrival",
                "id": "16131692638537162",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "back_wheel_part",
                "dataType": "string",
                "name": "Back Wheel Part",
                "id": "92211692638522018",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "bicycle_part",
                "dataType": "string",
                "name": "Choose Bicycle Part",
                "id": "67561692638644338",
                "link": "",
                "group": "1692638633142",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "biycle_problem_message",
                "dataType": "string",
                "name": "Problem Message",
                "id": "62471692638653105",
                "link": "",
                "group": "1692638633142",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "choose_wheel",
                "dataType": "string",
                "name": "Choose Wheel",
                "id": "58441692638381014",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "client",
                "dataType": "link",
                "name": "Client",
                "id": "88971692557371477",
                "link": "WebUser",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [
                    "role"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "date_created",
                "dataType": "date",
                "name": "Date Created",
                "id": "62221692977312800",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
                        "wed": true
                    },
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "front_wheel_part",
                "dataType": "string",
                "name": "Front Wheel Part",
                "id": "43731692638513352",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "max_arrival_time",
                "dataType": "string",
                "name": "Latest arrival time",
                "id": "77471692638668493",
                "link": "",
                "group": "1692638633142",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "message",
                "dataType": "string",
                "name": "Message",
                "id": "44951692638527107",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "min_arrival_time",
                "dataType": "string",
                "name": "Earliest arrival time",
                "id": "50521692638659436",
                "link": "",
                "group": "1692638633142",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "payment_method",
                "dataType": "string",
                "name": "Payment Method",
                "id": "14281692638467603",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "status",
                "dataType": "link",
                "name": "Status",
                "id": "80061693332942643",
                "link": "kanban_columns",
                "group": "1693332936503",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "time_interval",
                "dataType": "string",
                "name": "Time Interval",
                "id": "19021692638553575",
                "link": "",
                "group": "1692638412820",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "uploads_images_array_link",
                "dataType": "arrayLink",
                "name": "Images",
                "id": "18281692638740800",
                "link": "appointments_images",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "weight",
                "dataType": "decimal",
                "name": "Weight",
                "id": "31311693332958118",
                "link": "",
                "group": "1693332936503",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "quickSearch": null,
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let exampleTable = {
        "sl": "getEmailsInCampaignByID",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "",
            "deleteField": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "delay_days",
                        "fetch": [],
                        "sysName": "delay_days",
                        "name": "Delay in days",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "template_id",
                        "fetch": [
                            {
                                "fieldSysName": "subject",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "template",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "template_id",
                        "name": "Template",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "email_templates"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "delay_days",
                        "fetch": [],
                        "sysName": "delay_days",
                        "name": "Delay in days",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "template_id",
                        "fetch": [],
                        "sysName": "template_id",
                        "name": "Template",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "email_templates"
                    }
                ],
                "fields": {
                    "delay_days": {
                        "id": "delay_days",
                        "content": "Delay in days",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "id": {
                        "id": "id",
                        "content": "id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "template_id": {
                        "id": "template_id",
                        "content": "Template",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "email_templates",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "delay_days": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id": {
                        "include": false,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "template_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "subject": {
                                    "id": "subject",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "template": {
                                    "id": "template",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": "html",
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "subject": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "template": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "subject",
                                "template"
                            ]
                        }
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "delay_days",
                            "id",
                            "template_id"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "delay_days": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "template_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "subject": {
                                "id": "subject",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "template": {
                                "id": "template",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "html",
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "subject": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "template": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "subject",
                            "template"
                        ]
                    },
                    "searchData": [
                        {
                            "key": "5d01dc8e-cb94-48e9-b035-bdcac18a9594",
                            "value": "Webinar 31.08"
                        }
                    ]
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "delay_days",
                        "fetch": [],
                        "sysName": "delay_days",
                        "name": "Delay in days",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "template_id",
                        "fetch": [
                            {
                                "fieldSysName": "subject",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "template",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "template_id",
                        "name": "Template",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "email_templates"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "delay_days": {
                        "id": "delay_days",
                        "content": "Delay in days",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "id": {
                        "id": "id",
                        "content": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "template_id": {
                        "id": "template_id",
                        "content": "Template",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "email_templates"
                    }
                },
                "fieldParams": {
                    "delay_days": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "template_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "template_id",
                    "delay_days",
                    "id"
                ]
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "delay_days",
                "dataType": "number",
                "name": "Delay in days",
                "id": "42521693314278292",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": "positiveNum",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "template_id",
                "dataType": "link",
                "name": "Template",
                "id": "16781693314269942",
                "link": "email_templates",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            }
        ],
        "data": [
            {
                "template_id": {
                    "template": "<!DOCTYPE html>\n<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title></title><!--[if !mso]><!--><style type=\"text/css\">\n        @import url('https://fonts.googleapis.com/css?family=Inter:400,600');\n    </style><!--<![endif]--><style type=\"text/css\" rel=\"stylesheet\" media=\"all\">\n        @media only screen and (max-width: 640px) {\n\n            .ms-header {\n                display: none !important;\n            }\n            .ms-content {\n                width: 100% !important;\n                border-radius: 0;\n            }\n            .ms-content-body {\n                padding: 30px !important;\n            }\n            .ms-footer {\n                width: 100% !important;\n            }\n            .mobile-wide {\n                width: 100% !important;\n            }\n            .info-lg {\n                padding: 30px;\n            }\n        }\n    </style><!--[if mso]>\n    <style type=\"text/css\">\n    body { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td * { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td p { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td a { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td span { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td div { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td ul li { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td ol li { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td blockquote { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    th * { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    </style>\n    <![endif]--></head><body style=\"font-family:'Inter', Helvetica, Arial, sans-serif; width: 100% !important; height: 100%; margin: 0; padding: 0; -webkit-text-size-adjust: none; background-color: #f4f7fa; color: #4a5566;\">\n\n<div class=\"preheader\" style=\"display:none !important;visibility:hidden;mso-hide:all;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;\"></div>\n\n<table class=\"ms-body\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;background-color:#f4f7fa;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;\"><tr><td align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;\">\n\n            <table class=\"ms-container\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;\"><tr><td align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;\">\n\n                        <table class=\"ms-header\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\"><tr><td height=\"40\" style=\"font-size:0px;line-height:0px;word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;\">\n                                </td>\n                            </tr></table></td>\n                </tr><tr><td align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;\">\n                <img width=\"60\" src=\"https://api.directual.com/fileUploaded/directual-site/80725ee3-98b3-4183-9687-e52498ca1e71.png\"></td></tr><tr height=\"30\"><td></td></tr><tr><td align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;\">\n\n                        <table class=\"ms-content\" width=\"640\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;width:640px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#FFFFFF;border-radius:6px;box-shadow:0 3px 6px 0 rgba(0,0,0,.05);\"><tr><td class=\"ms-content-body\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;padding-top:40px;padding-bottom:40px;padding-right:50px;padding-left:50px;\">\n\n\n                                    <h1 style=\"margin-top:0;color:#111111;font-size:24px;line-height:36px;font-weight:600;margin-bottom:24px;\">Hi, {$name}!</h1>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        <a href=\"https://www.directual.com/nocode-workshops\">\n                                            <img style=\"max-width:100%\" src=\"https://api.directual.com/fileUploaded/directual-site/web/39e0fe21-b2a1-481e-ad23-bbd64275ce94.webp\" />\n                                        </a>\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        At Directual, we are constantly looking for new ways to make the lives of our app builders easier and more fun! Now, you can create no-code apps in Directual with a single prompt. It’s pure <i>space magic</i>.\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        Join our webinar \"Building no-code apps with the power of AI\" on <b>August 10th, 19:00 CET</b>.\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        It's not just a webinar, though. Think of it more like a master class in building no-code apps, an insider's guide to the latest features on our platform, and a showcase of our brand-new AI integration..\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        You'll get to:\n                                    </p>\n                                    <ul>\n                                        <li style=\"color:#4a5566;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                            Discover how to build AI-powered apps with simple text prompts\n                                        </li>\n                                        <li style=\"color:#4a5566;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                            Explore new dimensions in no-code app development\n                                        </li>\n                                        <li style=\"color:#4a5566;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                            Learn about our newest plugins and how they can supercharge your app-building process\n                                        </li>\n                                        <li style=\"color:#4a5566;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                            Get your questions answered in a live Q&A\n                                        </li>\n                                    </ul>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        So, are you ready to step into the future of app development? Tie your laces tight, because this ride is going to be spectacular!\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        <a href=\"https://www.directual.com/nocode-workshops\" style=\"color:#058efc\">Register for the webinar here</a>\n                                    </p>\n                                    </td>\n                                        </tr></table><!--table width=\"100%\" style=\"border-collapse:collapse;\" >\n                                        <tr>\n                                            <td height=\"20\" style=\"font-size:0px;line-height:0px;word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;\" >\n                                                &nbsp;\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td height=\"20\" style=\"font-size:0px;line-height:0px;border-top-width:1px;border-top-style:solid;border-top-color:#e2e8f0;word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;\" >\n                                                &nbsp;\n                                            </td>\n                                        </tr>\n                                    </table--></td>\n                            </tr></table></td>\n                </tr><tr><td align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;\">\n\n                        <table class=\"ms-footer\" width=\"640\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;width:640px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;\"><tr><td class=\"ms-content-body\" align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;padding-top:40px;padding-bottom:40px;padding-right:50px;padding-left:50px;\">\n                                    <p class=\"small\" style=\"margin-top:0px;margin-bottom:5px;margin-right:0;margin-left:0;color:#96a2b3;font-size:14px;line-height:21px;\">Let people create!</p>\n                                    <img width=\"200\" src=\"https://api.directual.com/fileUploaded/directual-site/c5182e8d-b19d-41fc-9861-3f54aab38849.png\"><table width=\"200\" style=\"margin-top:10px\"><tr><td align=\"center\">\n                                                <a href=\"https://www.facebook.com/directualcom\" target=\"_blank\"><img width=\"30\" src=\"https://api.directual.com/fileUploaded/directual-site/96452a58-fcd5-4413-91b8-18c7f3c6f54e.png\"></a>\n                                            </td>\n                                            <td align=\"center\">\n                                                <a href=\"https://discord.gg/wVMSrH7kXK\" target=\"_blank\"><img width=\"30\" src=\"https://api.directual.com/fileUploaded/directual-site/b621ab5a-448e-40d0-b60b-d896dfb5ffc7.png\"></a>\n                                            </td>\n                                            <td align=\"center\">\n                                                <a href=\"https://twitter.com/directual\" target=\"_blank\"><img width=\"30\" src=\"https://api.directual.com/fileUploaded/directual-site/e55ae759-1d01-48d4-98be-b924a9b92793.png\"></a>\n                                            </td>\n                                        </tr></table><p class=\"small\" style=\"margin-top:20px;margin-right:0;margin-left:0;color:#96a2b3;font-size:14px;line-height:21px;\">© 2023 Directual. All rights reserved.</p>\n                                        <p style=\"margin-bottom:20px\"><a style=\"opacity:0.8;text-decoration:none;font-size:12px;color:#058efc\" href=\"https://directual-site.directual.app/embed/650c5611-8321-4ad0-bccd-0a21527fce3f/{{user_id.subscription_settings}}\" target=\"_blank\">Subscription settings</a></p>\n                                </td>\n                            </tr>\n                            </table></td>\n                </tr></table></td>\n    </tr></table></body></html>",
                    "subject": "Webinar 31.08",
                    "id": "5d01dc8e-cb94-48e9-b035-bdcac18a9594"
                },
                "delay_days": "",
                "id": "3c732c7b-46d6-4126-9d59-e5ef3e4e110d"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "delay_days",
                99245396
            ],
            [
                "id",
                99245396
            ],
            [
                "template_id.id",
                99245395
            ],
            [
                "template_id.subject",
                99245395
            ],
            [
                "template_id.template",
                99245395
            ]
        ],
        "writeFields": [
            "delay_days",
            "id",
            "template_id"
        ],
        "structures": {
            "99245395": {
                "id": 99245395,
                "dateCreated": "2023-08-29T12:38:30Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "Email templates",
                "sysName": "email_templates",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"subject\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"46261693312833516\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"template\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"82131693312723943\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"subject\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-08-29T12:41:03Z",
                "createBy": 1,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "array": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "json": false
                },
                "objectIDSysName": "id",
                "folderId": 33770779
            },
            "99245396": {
                "id": 99245396,
                "dateCreated": "2023-08-29T13:04:22Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "Emails in the campaign",
                "sysName": "emails_in_the_campaign",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"template_id\",\"name\":\"Template\",\"dataType\":\"link\",\"id\":\"16781693314269942\",\"link\":\"email_templates\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"delay_days\",\"name\":\"Delay in days\",\"dataType\":\"number\",\"id\":\"42521693314278292\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"campaign_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"73431693314924064\",\"link\":\"email_campaigns\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"template_id\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-08-29T13:37:54Z",
                "createBy": 1,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "array": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "json": false
                },
                "objectIDSysName": "id",
                "folderId": 33770779
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "delay_days",
                "dataType": "number",
                "name": "Delay in days",
                "id": "42521693314278292",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": "positiveNum",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "template_id",
                "dataType": "link",
                "name": "Template",
                "id": "16781693314269942",
                "link": "email_templates",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            }
        ],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let authExample = {
        isAuth: true,
        role: "admin",
        token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        user: "puzyrcult"
    }

    let exampleForm = {
        "sl": "editClient",
        "formName": "",
        "formDesc": "",
        "formButton": "",
        "placeholder": "",
        "maxWidth": "",
        "formButtonResubmit": null,
        "params": {
            "result": {
                "resultTitleField": null,
                "resultMessageField": null,
                "isSuccessField": null
            },
            "useEditing": true,
            "editObject": "url",
            "auth": {
                "isPerson": false
            }
        },
        "fileds": [
            {
                "sysName": "address",
                "dataType": "string",
                "name": "Address",
                "id": "99561692639142683",
                "link": "",
                "group": "-502807437",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "client_tag",
                "dataType": "link",
                "name": "Client Tag",
                "id": "40291696233077937",
                "link": "tags",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 8,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "firstName",
                "dataType": "string",
                "name": "First name",
                "id": "5",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "Username (login)",
                "id": "13",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "lastName",
                "dataType": "string",
                "name": "Last name",
                "id": "4",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "phone",
                "dataType": "string",
                "name": "Phone",
                "id": "10",
                "link": "",
                "group": "-502807437",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 8,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": "Contacts",
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "post_number",
                "dataType": "string",
                "name": "Post",
                "id": "89351692639178868",
                "link": "",
                "group": "-502807437",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "userpic",
                "dataType": "file",
                "name": "User pic",
                "id": "1",
                "link": "",
                "group": "-502807437",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 13,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": "image",
                "formatOptions": {},
                "groupName": "Contacts",
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [],
        "httpParams": {}
    }

    const parseJson = json => {
        if (!json) return {}
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

    const exampleUser = {
        profilePicture: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        firstName: 'Jack',
        lastName: 'Russel',
        email: 'puzyrcult',
        role: 'admin',
        socialGoogle: 'jack@directual.com'
    }

    const chartData1 = {
        "sl": "charts",
        "pageSize": "15",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "",
            "deleteField": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "chart_type": "bar",
            "show_grid": true,
            "chart_strokeDasharray": "3 3",
            "x_axis": "day",
            "x_axis_format": "MMM DD",
            "chart_lines": [
                {
                    "id": "46351688806958485",
                    "color": "#7ed321",
                    "line_data": "tea_cups",
                    "line_label": "🫖 Tea cups",
                    "line_stackedID": "a",
                    "line_dot": true,
                    "line_width": 3
                },
                {
                    "id": "20401688806976761",
                    "color": "#4581eb",
                    "line_data": "coffee_cups",
                    "line_label": "☕️ Coffee cups",
                    "line_stackedID": "a",
                    "line_dot": true,
                    "line_width": 3
                },
                {
                    "id": "98841688806995895",
                    "color": "#d13f50",
                    "line_data": "whiskey_glasses",
                    "line_label": "🥃 Whiskey glasses",
                    "line_dot": true,
                    "line_width": 3
                }
            ],
            "paging_is_on": true,
            "show_legend": true,
            "show_tooltip": true,
            "filter_lines": true
        },
        "tableTitle": "Bar chart",
        "actions": null,
        "headers": [
            {
                "sysName": "coffee_cups",
                "name": "",
                "dataType": "number",
                "id": "27881688757041175",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "day",
                "name": "",
                "dataType": "string",
                "id": "36551688757035272",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "tea_cups",
                "name": "",
                "dataType": "number",
                "id": "64901688757048476",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "whiskey_glasses",
                "name": "",
                "dataType": "number",
                "id": "17731688757054436",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "coffee_cups": 676,
                "tea_cups": 25,
                "whiskey_glasses": 292,
                "day": "2023-06-06",
                "day_formatted": "Jun 06",
                "🫖 Tea cups": 25,
                "☕️ Coffee cups": 676,
                "🥃 Whiskey glasses": 292
            },
            {
                "coffee_cups": 795,
                "tea_cups": 919,
                "whiskey_glasses": 415,
                "day": "2023-06-05",
                "day_formatted": "Jun 05",
                "🫖 Tea cups": 919,
                "☕️ Coffee cups": 795,
                "🥃 Whiskey glasses": 415
            },
            {
                "coffee_cups": 648,
                "tea_cups": 184,
                "whiskey_glasses": 306,
                "day": "2023-06-04",
                "day_formatted": "Jun 04",
                "🫖 Tea cups": 184,
                "☕️ Coffee cups": 648,
                "🥃 Whiskey glasses": 306
            },
            {
                "coffee_cups": 131,
                "tea_cups": 266,
                "whiskey_glasses": 214,
                "day": "2023-06-03",
                "day_formatted": "Jun 03",
                "🫖 Tea cups": 266,
                "☕️ Coffee cups": 131,
                "🥃 Whiskey glasses": 214
            },
            {
                "coffee_cups": 297,
                "tea_cups": 887,
                "whiskey_glasses": 399,
                "day": "2023-06-02",
                "day_formatted": "Jun 02",
                "🫖 Tea cups": 887,
                "☕️ Coffee cups": 297,
                "🥃 Whiskey glasses": 399
            },
            {
                "coffee_cups": 607,
                "tea_cups": 243,
                "whiskey_glasses": 224,
                "day": "2023-06-01",
                "day_formatted": "Jun 01",
                "🫖 Tea cups": 243,
                "☕️ Coffee cups": 607,
                "🥃 Whiskey glasses": 224
            },
            {
                "coffee_cups": 341,
                "tea_cups": 60,
                "whiskey_glasses": 487,
                "day": "2023-05-31",
                "day_formatted": "May 31",
                "🫖 Tea cups": 60,
                "☕️ Coffee cups": 341,
                "🥃 Whiskey glasses": 487
            },
            {
                "coffee_cups": 657,
                "tea_cups": 112,
                "whiskey_glasses": 221,
                "day": "2023-05-30",
                "day_formatted": "May 30",
                "🫖 Tea cups": 112,
                "☕️ Coffee cups": 657,
                "🥃 Whiskey glasses": 221
            },
            {
                "coffee_cups": 572,
                "tea_cups": 600,
                "whiskey_glasses": 266,
                "day": "2023-05-29",
                "day_formatted": "May 29",
                "🫖 Tea cups": 600,
                "☕️ Coffee cups": 572,
                "🥃 Whiskey glasses": 266
            },
            {
                "coffee_cups": 501,
                "tea_cups": 886,
                "whiskey_glasses": 99,
                "day": "2023-05-28",
                "day_formatted": "May 28",
                "🫖 Tea cups": 886,
                "☕️ Coffee cups": 501,
                "🥃 Whiskey glasses": 99
            },
            {
                "coffee_cups": 36,
                "tea_cups": 951,
                "whiskey_glasses": 138,
                "day": "2023-05-27",
                "day_formatted": "May 27",
                "🫖 Tea cups": 951,
                "☕️ Coffee cups": 36,
                "🥃 Whiskey glasses": 138
            },
            {
                "coffee_cups": 608,
                "tea_cups": 638,
                "whiskey_glasses": 26,
                "day": "2023-05-26",
                "day_formatted": "May 26",
                "🫖 Tea cups": 638,
                "☕️ Coffee cups": 608,
                "🥃 Whiskey glasses": 26
            },
            {
                "coffee_cups": 100,
                "tea_cups": 774,
                "whiskey_glasses": 16,
                "day": "2023-05-25",
                "day_formatted": "May 25",
                "🫖 Tea cups": 774,
                "☕️ Coffee cups": 100,
                "🥃 Whiskey glasses": 16
            },
            {
                "coffee_cups": 627,
                "tea_cups": 480,
                "whiskey_glasses": 232,
                "day": "2023-05-24",
                "day_formatted": "May 24",
                "🫖 Tea cups": 480,
                "☕️ Coffee cups": 627,
                "🥃 Whiskey glasses": 232
            },
            {
                "coffee_cups": 651,
                "tea_cups": 76,
                "whiskey_glasses": 440,
                "day": "2023-05-23",
                "day_formatted": "May 23",
                "🫖 Tea cups": 76,
                "☕️ Coffee cups": 651,
                "🥃 Whiskey glasses": 440
            }
        ],
        "totalPages": 5,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "coffee_cups",
                99232716
            ],
            [
                "day",
                99232716
            ],
            [
                "tea_cups",
                99232716
            ],
            [
                "whiskey_glasses",
                99232716
            ]
        ],
        "writeFields": [],
        "structures": {
            "99232716": {
                "networkID": 17743,
                "sysName": "daily_beverage_consumption",
                "name": "Daily beverage consumption",
                "id": 99232716,
                "dateCreated": "2023-07-07T19:04:56Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"whiskey_glasses\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"17731688757054436\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"coffee_cups\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"27881688757041175\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"day\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"36551688757035272\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tea_cups\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"64901688757048476\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"day\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-07-07T19:11:30Z",
                "createBy": 21,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    const chartData = {
        "sl": "dashboardMonthlyFin",
        "pageSize": "12",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "",
            "deleteField": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "chart_type": "bar",
            "chart_lines": [
                {
                    "id": "92861690919195721",
                    "color": "#3FCA52",
                    "line_data": "balance___sum",
                    "line_stackedID": "A"
                }
            ],
            "x_axis": "period",
            "show_grid": true,
            "chart_strokeDasharray": "3 3",
            "show_legend": true,
            "show_tooltip": true,
            "x_axis_format": "MMM",
            "lines_from_data": "from_data",
            "line_labels": "type",
            "filter_lines": true
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "balance___sum",
                "name": "sum(balance)",
                "dataType": "decimal",
                "id": "1",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "id": "5",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "id___count",
                "name": "count(id)",
                "dataType": "number",
                "id": "2",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "period",
                "name": "period",
                "dataType": "string",
                "id": "3",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "type",
                "name": "type",
                "dataType": "link",
                "id": "4",
                "link": "transaction_types",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "balance___sum": 507.37,
                "id___count": 5,
                "id": "64c95cd519b12a4adbe42d95",
                "type": "paddle_payment",
                "period": "2023-08",
                "paddle_payment": 507.37,
                "period_formatted": "Aug"
            },
            {
                "balance___sum": 885.16,
                "id___count": 14,
                "id": "64c95cd519b12a4adbe42d97",
                "type": "tinkoff",
                "period": "2023-08",
                "tinkoff": 885.16,
                "period_formatted": "Aug"
            },
            {
                "balance___sum": 2264.8,
                "id___count": 66,
                "id": "64c95cd519b12a4adbe42d9a",
                "type": "tinkoff",
                "period": "2023-07",
                "tinkoff": 2264.8,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 2162.28,
                "id___count": 34,
                "id": "64c95cd519b12a4adbe42db5",
                "type": "paddle_payment",
                "period": "2023-07",
                "paddle_payment": 2162.28,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 1103.22,
                "id___count": 4,
                "id": "64c95cd519b12a4adbe42df2",
                "type": "bank_payment",
                "period": "2023-07",
                "bank_payment": 1103.22,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 1589.43,
                "id___count": 31,
                "id": "64c95cd519b12a4adbe42d9f",
                "type": "paddle_payment",
                "period": "2023-06",
                "paddle_payment": 1589.43,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 2462.77,
                "id___count": 68,
                "id": "64c95cd519b12a4adbe42da0",
                "type": "tinkoff",
                "period": "2023-06",
                "tinkoff": 2462.77,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 4615.135,
                "id___count": 9,
                "id": "64c95cd519b12a4adbe42e3b",
                "type": "bank_payment",
                "period": "2023-06",
                "bank_payment": 4615.135,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 2269.15,
                "id___count": 69,
                "id": "64c95cd519b12a4adbe42da2",
                "type": "tinkoff",
                "period": "2023-05",
                "tinkoff": 2269.15,
                "period_formatted": "May"
            },
            {
                "balance___sum": 3485.11,
                "id___count": 53,
                "id": "64c95cd519b12a4adbe42daa",
                "type": "paddle_payment",
                "period": "2023-05",
                "paddle_payment": 3485.11,
                "period_formatted": "May"
            },
            {
                "balance___sum": 2587.37,
                "id___count": 4,
                "id": "64c95cd519b12a4adbe42dcf",
                "type": "bank_payment",
                "period": "2023-05",
                "bank_payment": 2587.37,
                "period_formatted": "May"
            },
            {
                "balance___sum": 2438,
                "id___count": 3,
                "id": "64c95cd519b12a4adbe42da9",
                "type": "bank_payment",
                "period": "2023-04",
                "bank_payment": 2438,
                "period_formatted": "Apr"
            }
        ],
        "totalPages": 5,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "balance___sum",
                99155789
            ],
            [
                "id",
                99155789
            ],
            [
                "id___count",
                99155789
            ],
            [
                "period",
                99155789
            ],
            [
                "type",
                99155789
            ]
        ],
        "writeFields": [],
        "structures": {
            "99155789": {
                "networkID": 1822,
                "sysName": "report_554374085_for_struct_appwallet",
                "name": "Report [Full report]",
                "id": 99155789,
                "dateCreated": "2022-12-07T09:39:25Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"balance___sum\",\"name\":\"sum(balance)\",\"dataType\":\"decimal\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id___count\",\"name\":\"count(id)\",\"dataType\":\"number\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"period\",\"name\":\"period\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"name\":\"type\",\"dataType\":\"link\",\"id\":\"4\",\"link\":\"transaction_types\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"_report_ts\",\"name\":\"report create time\",\"dataType\":\"date\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bool\",\"name\":\"Ще не вмерла?\",\"dataType\":\"boolean\",\"id\":\"81091670421684945\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Скоро\",\"Очень скоро\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-07T14:06:41Z",
                "createBy": null,
                "changedBy": 3527,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "5",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": 33576258
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let basicTheme = {
        colorScheme: localStorage.getItem('dd-theme-color') || 'classic',
        radius: localStorage.getItem('dd-theme-radius') || 25,
        headersFont: localStorage.getItem('dd-theme-headersFont') || 'Montserrat',
        fontText: localStorage.getItem('dd-theme-fontText') || 'Lato',
        headersFontWeight: localStorage.getItem('dd-theme-headersFontWeight') || '700',
        bodyFontWeight: localStorage.getItem('dd-theme-bodyFontWeight') || '400',
        customThemeColors: parseJson(localStorage.getItem('dd-theme-customThemeColors')),
        desktopMenu: localStorage.getItem('dd-desktop-menu') || 'left',
        mobileMenu: localStorage.getItem('dd-mobile-menu') || 'right',
    }

    const [currentTheme, setCurrentTheme] = useState(basicTheme)

    const brakePoints = {
        mobile: { from: 0, to: 768 },
        desktop: { from: 769, to: 10000 },
    }

    const layoutRef = useRef(null);
    const [currentBP, setCurrentBP] = useState('desktop')
    const [layoutWidth, setLayoutWidth] = useState(brakePoints[currentBP].display)

    // Calculating layout width:
    useEffect(() => {
        if (layoutRef.current && layoutRef.current.offsetWidth != layoutWidth) {
            setLayoutWidth(layoutRef.current.offsetWidth)
        }
    })
    useEffect(() => {
        if (layoutWidth <= brakePoints.mobile.to) {
            setCurrentBP('mobile')
        }
        if (layoutWidth >= brakePoints.desktop.from) {
            setCurrentBP('desktop')
        }
    }, [layoutWidth])

    useEffect(() => {
        const resizeListener = () => {
            if (layoutRef.current && layoutRef.current.offsetWidth !== layoutWidth) {
                setLayoutWidth(layoutRef.current.offsetWidth);
            }
        }
        window.addEventListener("resize", resizeListener);
        return () => { window.removeEventListener('resize', resizeListener); };
    }, []);
    // =========================

    useEffect(() => {
        localStorage.setItem('dd-theme-color', currentTheme.colorScheme)
        localStorage.setItem('dd-desktop-menu', currentTheme.desktopMenu)
        localStorage.setItem('dd-mobile-menu', currentTheme.mobileMenu)
        localStorage.setItem('dd-theme-radius', currentTheme.radius)
        localStorage.setItem('dd-theme-headersFont', currentTheme.headersFont)
        localStorage.setItem('dd-theme-fontText', currentTheme.fontText)
        localStorage.setItem('dd-theme-headersFontWeight', currentTheme.headersFontWeight)
        localStorage.setItem('dd-theme-bodyFontWeight', currentTheme.bodyFontWeight)
        localStorage.setItem('dd-theme-customThemeColors', JSON.stringify(currentTheme.customThemeColors))
    }, [currentTheme])


    const exampleTabs = [
        { key: '1', title: 'Table', content: <FpsTable data={exampleTable} auth={authExample} locale='FRA' /> },
        // { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
    ]

    return <Router>
        <div style={{ width: '100%', position: 'absolute', height: 0 }} ref={layoutRef}></div>
        <FpsWrapper
            horizontal = {false || currentBP == 'mobile'}
            //showMobileTabs
            mobileTabsPlace = 'bottom' // 'top'
            mobileLeftSide={currentTheme.mobileMenu == 'left'}
            whiteLabel={false}
            locale='ESP'
            themeName={currentTheme}
            mainMenu={
                <MainMenuWrapper
                    themeName={currentTheme}
                    currentBP={currentBP}
                />
            }
            mobileTabs={
                <MainMenuWrapper
                    themeName={currentTheme}
                    mobileTabs
                    currentBP={currentBP}
                />
            }
            components={<React.Fragment>
                <Switch>
                    <Route exact path="/table">
                        <TabsPane tabs={exampleTabs} hideSingleTab currentTabKey={1} fixedScroll={false} />
                    </Route>
                    <Route exact path="/">
                        <WhatIsIt />
                    </Route>
                    <Route exact path="/form">
                        <FpsForm locale='ESP' data={exampleForm} auth={authExample} />
                    </Route>
                    <Route exact path="/kanban">
                        <FpsKanban locale='ESP' data={kanbanData} auth={authExample} />
                    </Route>
                    <Route exact path="/chart">
                        <FpsChart data={chartData} />
                        <FpsChart data={chartData1} />
                    </Route>
                    <Route exact path="/profile">
                        <Profile
                            width={600}
                            user={exampleUser}
                        />
                        <SignIn
                            header='Sign in!'
                            width={400}
                            //googleAuth={<Button socialGoogle onClick={()=>alert('Google!')}>Sign In with Google</Button>}
                            facebookAuth={<Button socialFacebook onClick={() => alert('Facebook!')}>Sign In with Facebook</Button>}
                            onSignIn={value => console.log(value)}
                            userNameFormat='phone'
                        />
                        <SignUp
                            header='Sign Up!'
                            width={400}
                            googleAuth={<Button socialGoogle onClick={() => alert('Google!')}>Sign Up with Google</Button>}
                            facebookAuth={<Button socialFacebook onClick={() => alert('Facebook!')}>Sign Up with Facebook</Button>}
                            userNameFormat='phone'
                            onSignUp={value => console.log(value)}
                        />
                        <RestorePass
                            header='Reset password'
                            width={400}
                            userNameFormat='phone'
                            onRestore={value => console.log(value)}
                        />

                    </Route>
                    <Route exact path="/cards">
                        <FpsCards locale="ESP" data={cardActions} auth={authExample} currentBP='mobile' />
                    </Route>
                    <Route exact path="/theme">
                        <h1>Theme management</h1>
                        <FpsTheme
                            onChange={value => { setCurrentTheme(value) }}
                            defaultValue={currentTheme}
                            themes={['classic', 'white', 'tiffany', 'darkMint', 'warmNight', 'hacker', 'raspberry', 'baltic', 'custom']} />
                    </Route>

                    <Route exact path="/system-typography">
                        <h1>Typography</h1>
                        <TypoPage />
                    </Route>
                    <Route exact path="/system-button">
                        <ButtonsPage />
                    </Route>
                    <Route exact path="/system-icons">
                        <IconsPage />
                    </Route>
                    <Route exact path="/system-data-entry">
                        <InputsPage />
                    </Route>
                    <Route exact path="/system-dnd">
                        <Dnd />
                    </Route>
                    <Route exact path="/system-layout">
                        <LayoutPage />
                    </Route>
                    <Route exact path="/platform">
                        <PlatformPage />
                    </Route>
                    <Route exact path="/system-media">
                        <h1>Media</h1>
                        <h2>Youtube</h2>
                        {/* <CodeSnippet code="<Media type='video' source='https://www.youtube.com/watch?v=JAwEWLP-G_M' width='550' height='300'/>" /> */}
                        <Media type='video' source="https://www.youtube.com/watch?v=JAwEWLP-G_M" width='550' height='300' />
                        {/* <Stopwatch timer min={60} direction='reverse' sec={0} /> */}
                    </Route>

                </Switch>
            </React.Fragment>}
        >
        </FpsWrapper>
    </Router>
}

export default App