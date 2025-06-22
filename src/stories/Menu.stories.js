import React from 'react'
import { FpsLayout } from '../components/fps/layout/fpsLayout/fpsLayout';
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
    "role": "god,confirmed",
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
                "id": "group_1702032834666",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1702032623640",
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
                "id": "group_1702032845969",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1702035114482",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1702035125602",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1702035160342",
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
                "id": "group_1702232022219",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1741942279184",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1702232038943",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1702232037741",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1702232036526",
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
            "logoOption": "upload",
            "addSign": true,
            "remixIcon": {
                "Content": "M12 17C14.2091 17 16 15.2091 16 13H14C14 14.1046 13.1046 15 12 15 10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17ZM6.5 2C4.01472 2 2 4.01472 2 6.5 2 7.85729 2.60121 9.07332 3.54934 9.89751 3.19384 10.8656 3 11.911 3 13 3 17.9706 7.02944 22 12 22 16.9706 22 21 17.9706 21 13 21 11.911 20.8062 10.8656 20.4507 9.89751 21.3988 9.07332 22 7.85729 22 6.5 22 4.01472 19.9853 2 17.5 2 15.8737 2 14.4505 2.8624 13.6601 4.15297 13.1215 4.05246 12.5665 4 12 4 11.4335 4 10.8785 4.05246 10.3399 4.15297 9.5495 2.8624 8.12635 2 6.5 2ZM4 6.5C4 5.11929 5.11929 4 6.5 4 7.58033 4 8.50304 4.68577 8.8517 5.64896L9.1696 6.52718 10.0675 6.26991C10.6801 6.09435 11.3282 6 12 6 12.6718 6 13.3199 6.09435 13.9325 6.26991L14.8304 6.52718 15.1483 5.64896C15.497 4.68577 16.4197 4 17.5 4 18.8807 4 20 5.11929 20 6.5 20 7.43301 19.4894 8.24804 18.7275 8.67859L17.9141 9.13832 18.3176 9.98107C18.7547 10.8939 19 11.9169 19 13 19 16.866 15.866 20 12 20 8.13401 20 5 16.866 5 13 5 11.9169 5.24529 10.8939 5.6824 9.98107L6.08595 9.13832 5.27248 8.6786C4.51064 8.24805 4 7.43301 4 6.5Z",
                "Category": "User & Faces",
                "id": "bear-smile-line"
            },
            "googleFont": {
                "id": "ABeeZee",
                "subsets": [
                    "latin",
                    "latin-ext"
                ],
                "category": "sans-serif",
                "family": "ABeeZee",
                "variants": [
                    "regular",
                    "italic"
                ],
                "selectedStyle": "regular"
            },
            "sideMenuSize": "resizeble",
            "generatedLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><div></div><svg width=\"187\" height=\"52\" viewBox=\"0 0 94 26\"><linearGradient id=\"grad10\" x1=\"10%\" y1=\"10%\" x2=\"90%\" y2=\"10%\"><stop offset=\"0%\" stop-color=\"#dd3e54\"></stop><stop offset=\"100%\" stop-color=\"#6be585\"></stop></linearGradient><text letter-spacing=\"0\" fill=\"rgba(0,0,0,.8)\" font-size=\"30\" x=\"0\" y=\"23\">Directual Dev</text></svg></div>",
            "generatedSmallLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><div></div><svg width=\"52\" height=\"52\" viewBox=\"0 0 26 26\"><linearGradient id=\"grad10\" x1=\"10%\" y1=\"10%\" x2=\"90%\" y2=\"10%\"><stop offset=\"0%\" stop-color=\"#dd3e54\"></stop><stop offset=\"100%\" stop-color=\"#6be585\"></stop></linearGradient></svg></div>",
            "logoGenerationSettings": {
                "logoColor": "rgba(0,0,0,.8)",
                "logoSubtitleColor": "rgba(0,0,0,.8)",
                "signColor": "#058efc",
                "signColorGrad1": "#dd3e54",
                "signColorGrad2": "#6be585",
                "signFillType": "solid",
                "signGradDirection": "hor",
                "signSize": 30,
                "logoTextSize": 30,
                "scaleSign": 1.1555555555555554,
                "moveSign": 0,
                "moveHorSign": 0,
                "lineSpacing": 1.2,
                "titleLetterSpacing": 0,
                "subtitleLetterSpacing": 0,
                "titleY": 23,
                "subtitleY": 13,
                "logoSubtitleSize": 6
            },
            "menuCompactWidth": 60,
            "menuPadding": 15,
            "menuLogoMargin": 20,
            "menuBorderWidth": 3,
            "smallLogoURL": "https://api.directual.com/fileUploaded/directual-site/e/dev.png",
            "menuWidth": 237,
            "logoWidth": 190,
            "menuPosition": "top",
            "horMenuGroupArrow": "right"
        },
        "item__1702032623640": {
            "linkToPage": "/open-pipeline",
            "name": "Public Roadmap",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "kanban",
            "linkToType": "internal"
        },
        "group_1702032834666": {
            "name": "Public pages",
            "iconType": "directual_icon",
            "menuFeatherIcon": {
                "svg": "<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>",
                "id": "sliders-feather"
            },
            "menuRemixIconColor": "#e11010",
            "menuRemixIconSize": 51,
            "menuRemixIconStroke": 2,
            "menuLucideIcon": {
                "svg": "<path d=\"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\" />",
                "Category": "Weather",
                "id": "thermometer"
            },
            "menuRemixIcon": {
                "svg": "<path d=\"M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z\" />",
                "Category": "Weather",
                "Content": "M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z",
                "id": "moon-fill"
            },
            "menuDirectualIconSet": "actions"
        },
        "group_1702032845969": {
            "name": "My pages",
            "permissions": "all_registered",
            "iconType": "remix_icon",
            "menuRemixIcon": {
                "svg": "<path d=\"M 10.902344 4.0703125 C 10.817383 4.0785156 10.736719 4.1242188 10.699219 4.1992188 L 9.8007812 5.8007812 C 9.6007814 6.1007809 9.2007808 6.3007812 8.8007812 6.3007812 C 7.4007827 6.2007814 6.2996087 6.3000002 5.5996094 6.5 C 5.2996097 6.5999999 4.8996091 6.4992185 4.5996094 6.1992188 L 3.5996094 5.1992188 C 3.5996094 4.9992189 3.3007812 5.1007815 3.3007812 5.3007812 L 3.1992188 6.9003906 C 3.1992188 7.2003903 3.0007811 7.4000001 2.8007812 7.5 C 2.2007818 7.8999996 1.2996097 8.9996105 1.5996094 10.099609 C 1.6996093 10.599609 1.9996095 10.999219 2.0996094 11.199219 C 2.3996091 11.499218 2.7000003 11.69961 3 12.099609 C 3.4999995 12.899609 3.100781 13.900391 2.8007812 14.400391 C 2.000782 15.800389 2.1003909 16.899611 2.4003906 18.099609 C 2.8003902 19.499608 4.7003913 19.900391 5.4003906 19.900391 C 5.8003902 19.900391 16.000002 20.000391 17.5 19.900391 C 18.999999 19.800391 20.400392 19.200778 21.900391 15.800781 C 23.400389 12.400785 21.699217 8.5992178 19.699219 7.6992188 C 17.699221 6.7992196 16.1 8.7000018 16.5 10.5 C 16.9 12.299998 18.700782 12.099611 19.300781 14.099609 C 20.000781 16.499607 19.399218 17.300001 18.699219 18 C 18.399219 18.3 17.800781 18.300781 17.800781 18.300781 C 18.000781 17.600782 18.300781 17.099216 17.800781 14.699219 C 17.300782 12.299221 14.699609 10.699609 14.099609 10.099609 C 13.39961 9.49961 12.799609 8.8999996 12.599609 8.5 C 12.39961 8.2000003 11.599218 5.6003894 11.199219 4.4003906 C 11.199219 4.1503909 11.043945 4.0566406 10.902344 4.0703125 z M 8.5 7.6992188 C 9.2999992 7.6992188 10 8.3992195 10 9.1992188 C 10 9.999218 9.3999991 10.699219 8.5 10.699219 C 7.7000008 10.699219 7 9.9992179 7 9.1992188 C 7 8.3992195 7.7000008 7.6992188 8.5 7.6992188 z M 8.5 8.0996094 C 7.9000006 8.0996094 7.4003906 8.5992194 7.4003906 9.1992188 C 7.4003906 9.7992181 7.9000006 10.300781 8.5 10.300781 C 9.0999994 10.300781 9.5996094 9.7992181 9.5996094 9.1992188 C 9.5996094 8.5992194 9.0999994 8.0996094 8.5 8.0996094 z M 3.1992188 8.4003906 C 3.7992182 8.4003906 4.1992188 8.8003912 4.1992188 9.4003906 C 4.1992188 9.9003901 3.6992182 10.400391 3.1992188 10.400391 C 2.6992193 10.400391 2.1992188 10.00039 2.1992188 9.4003906 C 2.1992188 8.9003911 2.5992193 8.4003906 3.1992188 8.4003906 z M 3.1992188 8.6992188 A 0.69999999 0.69999999 0 0 0 2.5 9.4003906 A 0.69999999 0.69999999 0 0 0 3.1992188 10.099609 A 0.69999999 0.69999999 0 0 0 3.9003906 9.4003906 A 0.69999999 0.69999999 0 0 0 3.1992188 8.6992188 z M 5.3242188 10.074219 C 5.6242184 10.074219 5.9003906 10.150781 5.9003906 10.300781 C 5.8003907 10.700781 5.600781 10.9 5.3007812 11 C 5.5007811 11.3 5.8007822 11.800781 6.8007812 11.800781 C 7.000781 11.800781 7 11.800391 7 11.900391 C 7 12.000391 7.0003905 12 6.9003906 12 C 5.9003916 11.9 5.4992185 11.599218 5.1992188 11.199219 C 5.0992189 11.499218 4.7999997 11.9 4.5 12 C 4.4000001 12 4.4003906 12.000391 4.4003906 11.900391 C 4.4003906 11.800391 4.4000001 11.800781 4.5 11.800781 C 4.7999997 11.700781 4.9996095 11.3 5.0996094 11 C 4.8996096 10.9 4.4996095 10.500781 4.5996094 10.300781 C 4.6996093 10.150781 5.0242191 10.074219 5.3242188 10.074219 z\" />",
                "Category": "Cats",
                "Content": "M 10.902344 4.0703125 C 10.817383 4.0785156 10.736719 4.1242188 10.699219 4.1992188 L 9.8007812 5.8007812 C 9.6007814 6.1007809 9.2007808 6.3007812 8.8007812 6.3007812 C 7.4007827 6.2007814 6.2996087 6.3000002 5.5996094 6.5 C 5.2996097 6.5999999 4.8996091 6.4992185 4.5996094 6.1992188 L 3.5996094 5.1992188 C 3.5996094 4.9992189 3.3007812 5.1007815 3.3007812 5.3007812 L 3.1992188 6.9003906 C 3.1992188 7.2003903 3.0007811 7.4000001 2.8007812 7.5 C 2.2007818 7.8999996 1.2996097 8.9996105 1.5996094 10.099609 C 1.6996093 10.599609 1.9996095 10.999219 2.0996094 11.199219 C 2.3996091 11.499218 2.7000003 11.69961 3 12.099609 C 3.4999995 12.899609 3.100781 13.900391 2.8007812 14.400391 C 2.000782 15.800389 2.1003909 16.899611 2.4003906 18.099609 C 2.8003902 19.499608 4.7003913 19.900391 5.4003906 19.900391 C 5.8003902 19.900391 16.000002 20.000391 17.5 19.900391 C 18.999999 19.800391 20.400392 19.200778 21.900391 15.800781 C 23.400389 12.400785 21.699217 8.5992178 19.699219 7.6992188 C 17.699221 6.7992196 16.1 8.7000018 16.5 10.5 C 16.9 12.299998 18.700782 12.099611 19.300781 14.099609 C 20.000781 16.499607 19.399218 17.300001 18.699219 18 C 18.399219 18.3 17.800781 18.300781 17.800781 18.300781 C 18.000781 17.600782 18.300781 17.099216 17.800781 14.699219 C 17.300782 12.299221 14.699609 10.699609 14.099609 10.099609 C 13.39961 9.49961 12.799609 8.8999996 12.599609 8.5 C 12.39961 8.2000003 11.599218 5.6003894 11.199219 4.4003906 C 11.199219 4.1503909 11.043945 4.0566406 10.902344 4.0703125 z M 8.5 7.6992188 C 9.2999992 7.6992188 10 8.3992195 10 9.1992188 C 10 9.999218 9.3999991 10.699219 8.5 10.699219 C 7.7000008 10.699219 7 9.9992179 7 9.1992188 C 7 8.3992195 7.7000008 7.6992188 8.5 7.6992188 z M 8.5 8.0996094 C 7.9000006 8.0996094 7.4003906 8.5992194 7.4003906 9.1992188 C 7.4003906 9.7992181 7.9000006 10.300781 8.5 10.300781 C 9.0999994 10.300781 9.5996094 9.7992181 9.5996094 9.1992188 C 9.5996094 8.5992194 9.0999994 8.0996094 8.5 8.0996094 z M 3.1992188 8.4003906 C 3.7992182 8.4003906 4.1992188 8.8003912 4.1992188 9.4003906 C 4.1992188 9.9003901 3.6992182 10.400391 3.1992188 10.400391 C 2.6992193 10.400391 2.1992188 10.00039 2.1992188 9.4003906 C 2.1992188 8.9003911 2.5992193 8.4003906 3.1992188 8.4003906 z M 3.1992188 8.6992188 A 0.69999999 0.69999999 0 0 0 2.5 9.4003906 A 0.69999999 0.69999999 0 0 0 3.1992188 10.099609 A 0.69999999 0.69999999 0 0 0 3.9003906 9.4003906 A 0.69999999 0.69999999 0 0 0 3.1992188 8.6992188 z M 5.3242188 10.074219 C 5.6242184 10.074219 5.9003906 10.150781 5.9003906 10.300781 C 5.8003907 10.700781 5.600781 10.9 5.3007812 11 C 5.5007811 11.3 5.8007822 11.800781 6.8007812 11.800781 C 7.000781 11.800781 7 11.800391 7 11.900391 C 7 12.000391 7.0003905 12 6.9003906 12 C 5.9003916 11.9 5.4992185 11.599218 5.1992188 11.199219 C 5.0992189 11.499218 4.7999997 11.9 4.5 12 C 4.4000001 12 4.4003906 12.000391 4.4003906 11.900391 C 4.4003906 11.800391 4.4000001 11.800781 4.5 11.800781 C 4.7999997 11.700781 4.9996095 11.3 5.0996094 11 C 4.8996096 10.9 4.4996095 10.500781 4.5996094 10.300781 C 4.6996093 10.150781 5.0242191 10.074219 5.3242188 10.074219 z",
                "id": "cat-2"
            },
            "menuRemixIconSize": 33
        },
        "item__1702035114482": {
            "linkToPage": "/new-feature",
            "name": "Suggest a Feature",
            "permissions": "all_registered",
            "specifyRoles": "",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "idea"
        },
        "item__1702035125602": {
            "linkToPage": "/feature-requests",
            "name": "Vote for the Features",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "arrowUp"
        },
        "item__1702035160342": {
            "linkToPage": "/my-subscriptions",
            "name": "Features I watch",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "view"
        },
        "group_1702232022219": {
            "name": "Admin pages",
            "permissions": "roles",
            "specifyRoles": "god",
            "iconType": "feather_icon",
            "menuFeatherIcon": {
                "svg": "<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>",
                "id": "github-feather"
            },
            "menuRemixIconColor": "#bd10e0",
            "menuRemixIconColorSelected": "#7ed321",
            "menuRemixIconColorHover": "#d0021b",
            "menuRemixIconSize": 51,
            "menuRemixIconStroke": 0.6
        },
        "item__1702232036526": {
            "linkToPage": "/users",
            "name": "Users",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "user"
        },
        "item__1702232037741": {
            "linkToPage": "/manage-releases",
            "name": "Manage Releases",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "arrowRightMany"
        },
        "item__1702232038943": {
            "linkToPage": "/new-requests",
            "name": "Manage Features",
            "iconType": "remix_icon",
            "menuDirectualIconSet": "edit",
            "menuRemixIcon": {
                "Content": "M1 11C6.52285 11 11 6.52285 11 1H13C13 6.52285 17.4772 11 23 11V13C17.4772 13 13 17.4772 13 23H11C11 17.4772 6.52285 13 1 13V11ZM5.80342 12C8.56895 13.2093 10.7907 15.431 12 18.1966C13.2093 15.431 15.431 13.2093 18.1966 12C15.431 10.7907 13.2093 8.56895 12 5.80342C10.7907 8.56895 8.56895 10.7907 5.80342 12Z",
                "svg": "<path d=\"M1 11C6.52285 11 11 6.52285 11 1H13C13 6.52285 17.4772 11 23 11V13C17.4772 13 13 17.4772 13 23H11C11 17.4772 6.52285 13 1 13V11ZM5.80342 12C8.56895 13.2093 10.7907 15.431 12 18.1966C13.2093 15.431 15.431 13.2093 18.1966 12C15.431 10.7907 13.2093 8.56895 12 5.80342C10.7907 8.56895 8.56895 10.7907 5.80342 12Z\" />",
                "Category": "Weather",
                "id": "shining-line"
            },
            "menuRemixIconColor": "#d0021b"
        },
        "rootMobileMenu": {
            "showMobileHeader": true,
            "mobileHeaderLogoPosition": "center",
            "mobileMenuPadding": 5,
            "showMobileAuthBlock": true
        },
        "item__1741942279184": {
            "linkToPage": "/roadmap",
            "name": "new-roadmap",
            "iconType": "lucide_icon",
            "menuDirectualIconSet": "bug",
            "menuLucideIcon": {
                "Category": "Weather",
                "svg": "<path d=\"M12 2v2\" />\n  <path d=\"m4.93 4.93 1.41 1.41\" />\n  <path d=\"M20 12h2\" />\n  <path d=\"m19.07 4.93-1.41 1.41\" />\n  <path d=\"M15.947 12.65a4 4 0 0 0-5.925-4.128\" />\n  <path d=\"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z\" />",
                "id": "cloud-sun"
            },
            "menuRemixIconStroke": 2.5,
            "menuRemixIconSize": 57,
            "menuRemixIconColor": "#d22121",
            "menuRemixIconColorSelected": "#53ab3e",
            "menuRemixIconColorHover": "#bd10e0"
        },
        "item__1750586527666": {
            "iconType": "lucide_icon",
            "linkToPage": "/open-pipeline",
            "name": "Public Roadmap",
            "menuLucideIcon": {
                "svg": "<path d=\"M10 2v8\" />\n  <path d=\"M12.8 21.6A2 2 0 1 0 14 18H2\" />\n  <path d=\"M17.5 10a2.5 2.5 0 1 1 2 4H2\" />\n  <path d=\"m6 6 4 4 4-4\" />",
                "Category": "Weather",
                "id": "wind-arrow-down"
            },
            "menuRemixIconColor": "#9013fe",
            "menuRemixIconColorSelected": "#f8e71c",
            "menuRemixIconSize": 40,
            "menuRemixIconStroke": 0.7
        }
    },
    "homePageDefault": "/open-pipeline",
    "homePageAuth": "/open-pipeline",
    "mobileMenuOption": "tabs_bottom",
    "mobileMenu": {
        "id": "rootMobileMenu",
        "icon": "folder",
        "name": "Mobile menu (tabs)",
        "isFolder": true,
        "children": [
            {
                "id": "item__1750586527666",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            }
        ]
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
        showMobileTabs: true,
        mobileLeftSide: false,
        //theme: basicTheme
    },
};

