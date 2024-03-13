import React from 'react'
import { FpsLayout } from '../components/fps/layout/fpsLayout/fpsLayout';
import 'mapbox-gl/dist/mapbox-gl.css'
import { FpsWrapper } from '../components/fps/wrapper/wrapper'
import { NewMainMenu, NewMobileTabs } from '../components/fps/mainmenu/mainmenu'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
    title: 'FPS/Layout/Main manu',
    component: FpsWrapper,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'left',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    },
};

const authExample = {
    "isAuth": true,
    "custom_labels": "{\n   \"foo\": \"hello brave new world!\",\n   \"bar\": \"foobar\"\n}",
    "role": "admin",
    "lastName": "Watson",
    "firstName": "David",
    "token": "1a9f10d0-d45f-4bf2-9e7e-d6ce2e752d03",
    "notifications_counter": "",
    "nid": 18924,
    "user": "david@directual.com",
    //"userpic": "https://api.directual.com/fileUploaded/basic-template/efdd480a-d36a-4a01-ac82-baf871ffd2fd.jpg"
}

const newMenuEexample = {
    "mainMenu": {
        "id": "rootMenu",
        "icon": "folder",
        "name": "Main menu",
        "isFolder": true,
        "children": [
            {
                "id": "item__1704799994598",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "item__1707826040345",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "group_1707653333144",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1707653331298",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1707653365455",
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
                "id": "group_1707654895643",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1707653292378",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1707653320492",
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
                "id": "group_1707653451497",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1707653449834",
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
                "id": "item__1710337600511",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            }
        ]
    },
    "menuConfig": {
        "rootMenu": {
            "sideMenuSize": "resizeble",
            "logoOption": "ai",
            "generatedLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Anton&amp;display=swap\" rel=\"stylesheet\"><svg width=\"220\" height=\"52\" viewBox=\"0 0 110 26\"><linearGradient id=\"grad10\" x1=\"10%\" y1=\"10%\" x2=\"90%\" y2=\"90%\"><stop offset=\"0%\" stop-color=\"#fdc830\"></stop><stop offset=\"100%\" stop-color=\"#f37335\"></stop></linearGradient><path transform=\"scale(1) translate(1.3, 0.5)\" fill=\"url(#grad10)\" d=\"M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14V16H13V14H11ZM8.56731 8.81346L10.5288 9.20577C10.6656 8.51823 11.2723 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5C13.5 10.3284 12.8284 11 12 11H11V13H12C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.302 6 8.88637 7.20919 8.56731 8.81346Z\"></path><text font-family=\"Anton\" font-weight=\"400\" font-style=\"normal\" letter-spacing=\"0\" fill=\"rgba(255,255,255,0.8)\" font-size=\"15.7\" x=\"28.1\" y=\"19.1\">ServiceDesk</text></svg></div>",
            "generatedSmallLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Anton&amp;display=swap\" rel=\"stylesheet\"><svg width=\"52\" height=\"52\" viewBox=\"0 0 26 26\"><linearGradient id=\"grad10\" x1=\"10%\" y1=\"10%\" x2=\"90%\" y2=\"90%\"><stop offset=\"0%\" stop-color=\"#fdc830\"></stop><stop offset=\"100%\" stop-color=\"#f37335\"></stop></linearGradient><path transform=\"scale(1) translate(1.3, 0.5)\" fill=\"url(#grad10)\" d=\"M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14V16H13V14H11ZM8.56731 8.81346L10.5288 9.20577C10.6656 8.51823 11.2723 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5C13.5 10.3284 12.8284 11 12 11H11V13H12C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.302 6 8.88637 7.20919 8.56731 8.81346Z\"></path></svg></div>",
            "logoGenerationSettings": {
                "logoTitle": "ServiceDesk",
                "logoColor": "rgba(255,255,255,0.8)",
                "googleFont": {
                    "id": "Anton",
                    "subsets": [
                        "latin",
                        "latin-ext",
                        "vietnamese"
                    ],
                    "category": "sans-serif",
                    "family": "Anton",
                    "variants": [
                        "regular"
                    ],
                    "selectedStyle": "regular"
                },
                "logoSubtitleColor": "rgba(0,0,0,.8)",
                "signColor": "#058efc",
                "signColorGrad1": "#fdc830",
                "signColorGrad2": "#f37335",
                "signFillType": "linear-gradient",
                "signGradDirection": "diag",
                "addSign": true,
                "signSize": 28.1,
                "logoTextSize": 15.7,
                "scaleSign": 1,
                "moveSign": 0.5,
                "moveHorSign": 1.3,
                "lineSpacing": 1.2,
                "titleLetterSpacing": 0,
                "subtitleLetterSpacing": 0,
                "titleY": 19.1,
                "subtitleY": 13,
                "logoSubtitleSize": 6,
                "remixIcon": {
                    "Category": "Communication",
                    "Content": "M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14V16H13V14H11ZM8.56731 8.81346L10.5288 9.20577C10.6656 8.51823 11.2723 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5C13.5 10.3284 12.8284 11 12 11H11V13H12C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.302 6 8.88637 7.20919 8.56731 8.81346Z",
                    "id": "questionnaire-fill"
                }
            },
            "menuBorderWidth": 3,
            "menuWidth": 244,
            "logoWidth": 220,
            "menuPosition": "side"
        },
        "item__1704799994598": {
            "linkToPage": "/dashboard",
            "name": "Dashboard",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "chart",
            "permissions": "all_registered"
        },
        "item__1707653292378": {
            "name": "All Tickets",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "database",
            "linkToPage": "/all-tickets"
        },
        "item__1707653320492": {
            "iconType": "directual_icon",
            "menuDirectualIconSet": "user",
            "name": "Managers"
        },
        "group_1707653333144": {
            "name": "Client's pages"
        },
        "item__1707653331298": {
            "name": "Raise ticket",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "plus",
            "linkToPage": "/raise-ticket"
        },
        "item__1707653365455": {
            "name": "Check ticket status",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "bellActive",
            "linkToPage": "/check-status"
        },
        "group_1707653451497": {
            "name": "About"
        },
        "item__1707653449834": {
            "name": "About this app",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "info",
            "linkToPage": "/about"
        },
        "group_1707654895643": {
            "name": "Admin pages",
            "permissions": "roles",
            "specifyRoles": "admin"
        },
        "item__1707654908648": {
            "iconType": "directual_icon",
            "menuDirectualIconSet": "actions",
            "name": "Process requests"
        },
        "item__1707826040345": {
            "name": "My work",
            "permissions": "all_registered",
            "linkToPage": "/my-work",
            "iconType": "no_icon",
            "menuDirectualIconSet": "actions"
        },
        "rootMobileMenu": {
            "showMobileHeader": false,
            "mobileHeaderLogoPosition": "center"
        },
        "item__1710337600511": {
            "name": "test"
        }
    },
    "homePageDefault": "/raise-ticket",
    "homePageAuth": "/dashboard"
}

const leftSidedMenu = <NewMainMenu
    title='directual-design'
    theme='ural'
    //oldLogoUrl="https://api.directual.com/fileUploaded/dev/48294569-8ce6-4d95-822a-af2eecdd8462.png"
    compactState
    locale='ENG'
    //currentBP={currentBP}
    handleRoute={href => e => {
        console.log('route => ' + href)
        //handleRoute(href);
    }}
    //horizontal={props.horizontal}
    logOut={e => console.log('log out!')}
    auth={authExample}
    mainMenu={newMenuEexample.mainMenu}
    mobileMenuOption={newMenuEexample.mobileMenuOption}
    menuConfig={newMenuEexample.menuConfig}
    mobileMenu={newMenuEexample.mobileMenu}
    //currentRoute={location.pathname || '/'}
    custom_labels={{
        "counter": "0",
        "foo": "hello brave new world, how are you?!"
    }}
/>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LeftSided = {
    args: {
        mainMenu: leftSidedMenu,
        horizontal: false,
        showMobileTabs: false,
        mobileLeftSide: false,
        //theme: basicTheme
    },
};

