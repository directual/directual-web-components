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
                "id": "item__1710783478405",
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
            "menuWidth": 251,
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
            "iconType": "directual_icon",
            "menuDirectualIconSet": "actions"
        },
        "rootMobileMenu": {
            "showMobileHeader": false,
            "mobileHeaderLogoPosition": "center"
        },
        "item__1710337600511": {
            "name": "test"
        },
        "item__1710783478405": {
            "name": "Dashboard",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "Content": "M 7.1570591,2.5948394 C 5.0196697,2.5291884 2.1155431,3.921414 1.0083197,7.3442003 c -1.68719785,5.2156757 1.5408214,8.5718227 1.5408214,8.5718227 0,0 -1.601e-4,0.03102 0.028091,0.07724 0.028251,0.04622 0.020764,0.06142 0.033607,0.0948 a 8.4745176,8.4745176 0 0 0 2.6909202,3.682522 c 1.8720952,1.412418 6.4973877,2.496469 4.5045945,-0.806022 a 19.090776,19.090776 0 0 0 2.3704162,-0.454923 9.4683469,9.4683469 0 0 0 1.540822,1.209785 c 3.595246,2.249597 7.328828,1.199371 3.502459,-0.924393 a 7.0954822,7.0954822 0 0 1 -1.725399,-1.36126 l 0.0948,-0.03611 a 7.7606036,7.7606036 0 0 0 4.032116,-0.05116 4.2141464,4.2141464 0 0 1 -0.09781,1.330162 c -0.701073,2.984055 2.010652,1.933728 2.508851,-1.027214 a 5.9372983,5.9372983 0 0 0 0.02307,-1.615053 4.3990451,4.3990451 0 0 0 1.515242,-2.61719 0.05649678,0.05649678 0 0 0 0,-0.02006 3.828941,3.828941 0 0 0 0.04364,-0.572792 v -0.0617 C 23.848249,7.7755314 21.203013,4.9813034 21.203012,4.9813034 20.08335,5.6669682 19.405548,7.1105676 19.056295,8.1763005 A 7.7400591,7.7400591 0 0 0 17.494909,8.0142939 7.5834091,7.5834091 0 0 0 15.158097,8.3864587 C 14.426208,7.3926295 13.188191,6.0574503 11.593444,5.638861 c 0,0 -0.726775,1.7434785 -0.598373,4.65306 A 11.101618,11.101618 0 0 0 7.5131761,9.863079 C 5.5383598,9.9170075 4.2670186,10.810685 3.496609,11.917508 2.7903997,9.0490141 4.76522,7.107978 6.0646445,7.0001203 7.9059238,6.846038 10.476387,6.0036203 9.5159435,3.8156559 9.1857873,3.0635468 8.2766448,2.6292284 7.1570591,2.5948394 Z M 20.926645,11.200768 c 0.80529,0.04623 1.477021,0.80161 1.534802,1.76703 0.06163,1.029781 -0.595404,1.905703 -1.471103,1.959631 -0.874639,0.05225 -1.636239,-0.738238 -1.697813,-1.767029 -0.06163,-1.029781 0.595906,-1.905201 1.471605,-1.95913 0.05473,-0.0033 0.108823,-0.0036 0.162509,-5.23e-4 z m -5.999774,0.35762 c 0.875699,-0.05136 1.63612,0.736746 1.700321,1.766527 0.0642,1.029781 -0.595966,1.905703 -1.469098,1.959632 -0.875699,0.05393 -1.635618,-0.737308 -1.699819,-1.764522 -0.0642,-1.027213 0.592897,-1.910277 1.468596,-1.961637 z m 5.930056,0.357619 c -0.01638,4.6e-5 -0.03262,4.79e-4 -0.04915,0.0015 -0.534151,0.03082 -0.934825,0.565129 -0.896305,1.191729 0.03852,0.6266 0.513608,1.106743 1.027215,1.073358 0.513607,-0.03339 0.932317,-0.567195 0.893797,-1.191227 -0.03732,-0.604531 -0.467752,-1.076808 -0.975553,-1.075365 z m -5.836764,0.357116 c -0.01646,5.2e-5 -0.03304,4.8e-4 -0.04965,0.0015 -0.531584,0.03339 -0.932318,0.567697 -0.893797,1.191729 0.03852,0.624033 0.513607,1.106743 1.027213,1.073359 0.513608,-0.03339 0.932318,-0.565129 0.893798,-1.191729 -0.03732,-0.607019 -0.467423,-1.076455 -0.977559,-1.074863 z",
                "Category": "Cats",
                "id": "cat-45"
            },
            "menuRemixIconColor": "#e72039",
            "menuRemixIconColorSelected": "#4a90e2",
            "menuRemixIconColorHover": "#7ed321",
            "linkToPage": "/dashboard"
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

