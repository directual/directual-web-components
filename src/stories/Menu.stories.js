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
                "id": "item__1721143022795",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            },
            {
                "id": "group_1716722068419",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1716721988716",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1716721992941",
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
            "sideMenuSize": "resizeble"
        },
        "item__1704799994598": {
            "linkToPage": "/home",
            "name": "Home",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "forward"
        },
        "item__1716721988716": {
            "linkToPage": "/terms-of-use",
            "name": "Terms of Use",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "bookmark"
        },
        "item__1716721992941": {
            "linkToPage": "/privacy-policy",
            "name": "Privacy Policy",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "lock"
        },
        "group_1716722068419": {
            "name": "Legal"
        },
        "item__1721143022795": {
            "name": "хуй пизда джигурда",
            "linkToType": "customHTML",
            "codeItem": "<h1>Бей свиней — спасай Россию!</h1>"
        }
    }
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

