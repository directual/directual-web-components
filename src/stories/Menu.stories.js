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
    "empl_who_delegated_ids": "",
    "isAuth": true,
    "custom_labels": "",
    "role": "test,admin,recruiter",
    "employee_ids": "0ЛЗК-00529",
    "who_delegated_ids": "",
    "lastName": "Kalina",
    "firstName": "Aleksandra",
    "token": "013e5d5a-a847-444e-807f-15805f73b200",
    "whom_delegate_ids": "",
    "empl_whom_delegate_ids": "",
    "notifications_counter": "",
    "nid": 33745,
    //"user": "aleksandra.kalina@lamoda.ru",
    "userpic": "https://api.directual.com/fileUploaded/basic-template/5fe98a71-196e-4f0d-98cb-be3ee8968fbf.jpg"
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
                "id": "group_1716239898032",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1743372226840",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1716222463256",
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
                "id": "group_1725431889250",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1725431914950",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1725432036492",
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
                "id": "group_1732102409314",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1732102492781",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1732102514078",
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
                "id": "group_1734708007217",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1734707855839",
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
                "id": "group_1751272301159",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1751272339777",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1751272298592",
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
                "id": "group_1741855302140",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1741855300554",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1741855408559",
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
                "id": "group_1727166279851",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1735291372721",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1727166371485",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1721377387857",
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
                "id": "group_1747674240562",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1747674386928",
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
                "id": "group_1733765365884",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1733765353064",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1733765454816",
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
                "id": "group_1748258892162",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1754572987865",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1748258917831",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1748258913262",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1751615877817",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1748265139500",
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
            "largeLogoURL": "https://api.directual.com/fileUploaded/directual-site/plugins/18fdd448-2e04-4bb1-aa0c-446aba873628.logo_hr",
            "smallLogoURL": "",
            "menuWidth": 215,
            "logoOption": "ai",
            "generatedLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><div></div><svg width=\"187\" height=\"52\" viewBox=\"0 0 94 26\"><linearGradient id=\"grad10\" x1=\"10%\" y1=\"10%\" x2=\"90%\" y2=\"10%\"><stop offset=\"0%\" stop-color=\"#dd3e54\"></stop><stop offset=\"100%\" stop-color=\"#6be585\"></stop></linearGradient><text letter-spacing=\"0\" fill=\"#8e8e8e\" font-size=\"17\" x=\"0\" y=\"23\">Lamoda HR</text></svg></div>",
            "generatedSmallLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><div></div><svg width=\"52\" height=\"52\" viewBox=\"0 0 26 26\"><linearGradient id=\"grad10\" x1=\"10%\" y1=\"10%\" x2=\"90%\" y2=\"10%\"><stop offset=\"0%\" stop-color=\"#dd3e54\"></stop><stop offset=\"100%\" stop-color=\"#6be585\"></stop></linearGradient></svg></div>",
            "logoGenerationSettings": {
                "logoTitle": "Lamoda HR",
                "logoColor": "#8e8e8e",
                "logoSubtitleColor": "rgba(0,0,0,.8)",
                "signColor": "#058efc",
                "signColorGrad1": "#dd3e54",
                "signColorGrad2": "#6be585",
                "signFillType": "solid",
                "signGradDirection": "hor",
                "signSize": 30,
                "logoTextSize": 17,
                "scaleSign": 1.1555555555555554,
                "moveSign": 0,
                "moveHorSign": 0,
                "lineSpacing": 1.2,
                "titleLetterSpacing": 0,
                "subtitleLetterSpacing": 0,
                "titleY": 23,
                "subtitleY": 13,
                "logoSubtitleSize": 6
            }
        },
        "item__1704799994598": {
            "linkToPage": "/home",
            "name": "Главная страница",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "forward"
        },
        "item__1716222463256": {
            "linkToType": "internal",
            "linkToPage": "/job-offers-list",
            "name": "Список заявок",
            "linkToURL": "https://pldev.directual.app/job-offers/list",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter,budget_owner,agreement,teamlead,hrbp,cnb,hrd,shr,hr_admin,jo_all_requests,ipt,orgdev"
        },
        "item__1716222487928": {
            "linkToPage": "/onboarding",
            "name": "Onboarding",
            "permissions": "roles",
            "specifyRoles": "on_admin,on_hr"
        },
        "group_1716239898032": {
            "name": "Офферы",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter,budget_owner,agreement,teamlead,hrbp,cnb,hrd,shr,hr_admin,jo_all_requests,ipt,orgdev",
            "hideByDefault": true
        },
        "item__1716239948642": {
            "name": "Создать N-4 и ниже",
            "linkToPage": "/job-offers-n-4",
            "linkToType": "internal",
            "linkToURL": "https://pldev.directual.app/job-offers",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter"
        },
        "item__1717090780109": {
            "linkToType": "internal",
            "linkToPage": "/job-offers-n-3",
            "name": "Создать N-3",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter"
        },
        "item__1717090797643": {
            "linkToPage": "/job-offers-n-2",
            "name": "Создать N-2",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter"
        },
        "item__1717090808873": {
            "linkToPage": "/job-offers-n-1",
            "name": "N-1",
            "permissions": "roles",
            "specifyRoles": "jo_admin"
        },
        "group_1717090873754": {
            "name": "Новый оффер"
        },
        "item__1721377387857": {
            "linkToPage": "/onboarding",
            "name": "Логи, шаблоны",
            "permissions": "roles",
            "specifyRoles": "admin,onboarding"
        },
        "group_1725431889250": {
            "name": "Переводы",
            "permissions": "roles",
            "specifyRoles": "admin,agreement,teamlead,hrbp,cnb,budget_owner,hr_admin,shr,st_all_requests,orgdev",
            "hideByDefault": true
        },
        "item__1725431914950": {
            "linkToPage": "/staff-transfer",
            "name": "Создать заявку",
            "permissions": "roles",
            "specifyRoles": "admin,agreement,teamlead,hrbp"
        },
        "item__1725432036492": {
            "linkToPage": "/all-transfers",
            "name": "Список заявок",
            "permissions": "roles",
            "specifyRoles": "admin,agreement,teamlead,hrbp,cnb,budget_owner,hr_admin,shr,st_all_requests,orgdev"
        },
        "group_1727166279851": {
            "name": "Онбординг",
            "permissions": "roles",
            "specifyRoles": "admin,onboarding",
            "hideByDefault": true
        },
        "item__1727166371485": {
            "name": "Новички",
            "permissions": "roles",
            "specifyRoles": "admin,onboarding",
            "linkToPage": "/onboarding-list"
        },
        "group_1732102409314": {
            "name": "Подбор",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter,budget_owner,agreement,teamlead,hrbp,cnb,shr,hg_all_requests,orgdev",
            "hideByDefault": true
        },
        "item__1732102492781": {
            "name": "Создать заявку",
            "linkToPage": "/hiring",
            "permissions": "roles",
            "specifyRoles": "admin,agreement,teamlead,hrbp"
        },
        "item__1732102514078": {
            "name": "Список заявок",
            "linkToPage": "/hiring-list",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter,budget_owner,agreement,teamlead,hrbp,cnb,shr,hr_admin,hg_all_requests,orgdev"
        },
        "group_1733765365884": {
            "name": "Стоп лист",
            "permissions": "roles",
            "specifyRoles": "admin,bl_reader,bl_writer",
            "hideByDefault": true
        },
        "item__1733765353064": {
            "linkToPage": "/black-list-create",
            "name": "Добавить",
            "permissions": "roles",
            "specifyRoles": "admin,bl_writer"
        },
        "item__1733765454816": {
            "linkToPage": "/black-list",
            "name": "Список",
            "permissions": "roles",
            "specifyRoles": "admin,bl_reader,bl_writer"
        },
        "item__1734707832958": {
            "name": "Оформление",
            "permissions": "roles",
            "specifyRoles": "admin"
        },
        "item__1734707855839": {
            "linkToPage": "/staffing",
            "name": "Список заявок",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter,hr_admin,tnd,hrbp,sf_all_requests,ipt"
        },
        "group_1734708007217": {
            "name": "Оформление",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter,hr_admin,tnd,hrbp,sf_all_requests,ipt",
            "hideByDefault": true
        },
        "item__1735291372721": {
            "linkToPage": "/opsonbording",
            "name": "OPS онбординг",
            "permissions": "roles",
            "specifyRoles": "g_directual_onboarding_lme,admin"
        },
        "item__1737489028818": {
            "linkToType": "internal",
            "linkToPage": "/tech-work",
            "name": "Технические работы",
            "addLabel": "no_label",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "actions"
        },
        "item__1737489094182": {
            "linkToPage": "/tech-work",
            "name": "Технические работы",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "actions"
        },
        "group_1741855302140": {
            "name": "Стажеры",
            "permissions": "roles",
            "specifyRoles": "admin,agreement,teamlead,hrbp,cnb,hip,ipt,orgdev",
            "hideByDefault": true
        },
        "item__1741855300554": {
            "name": "Создать заявку",
            "permissions": "roles",
            "specifyRoles": "admin,agreement,teamlead,hrbp",
            "linkToPage": "/interns-hiring"
        },
        "item__1741855408559": {
            "name": "Список заявок",
            "permissions": "roles",
            "specifyRoles": "admin,agreement,teamlead,hrbp,cnb,hip,ipt,orgdev",
            "linkToPage": "/interns-hiring-list"
        },
        "item__1743372226840": {
            "linkToPage": "/job-offers",
            "name": "Создать заявку",
            "permissions": "roles",
            "specifyRoles": "admin,recruiter,ipt"
        },
        "group_1747674240562": {
            "name": "Обходной лист",
            "permissions": "roles",
            "specifyRoles": "admin,tl_admin_service,tl_admin_office,tl_payroll,tl_legal,tl_it_storage,tl_security,tl_all_requests",
            "hideByDefault": true
        },
        "item__1747674386928": {
            "linkToPage": "/clearance",
            "name": "Обходной лист",
            "permissions": "roles",
            "specifyRoles": "admin,tl_admin_service,tl_admin_office,tl_payroll,tl_legal,tl_it_storage,tl_security,tl_all_requests"
        },
        "group_1748258892162": {
            "permissions": "roles",
            "specifyRoles": "test",
            "name": "ГПХ",
            "hideByDefault": true
        },
        "item__1748258917831": {
            "permissions": "roles",
            "specifyRoles": "test",
            "linkToPage": "/gph-agreement",
            "name": "Согласования ГПХ"
        },
        "item__1748258913262": {
            "permissions": "roles",
            "specifyRoles": "test",
            "linkToPage": "/gph-list",
            "name": "Договоры ГПХ"
        },
        "item__1748265139500": {
            "linkToPage": "/gph-tarifs",
            "name": "Тарифы ГПХ",
            "permissions": "roles",
            "specifyRoles": "test"
        },
        "group_1751272301159": {
            "name": "Орг изменения",
            "hideByDefault": true,
            "permissions": "roles",
            "specifyRoles": "admin,hrbp,orgdev,cnb,agreement,shr,hr_admin,t_hr_admin_tech,t_hr_admin_non_tech,t_hr_admin_cc,t_hr_admin_retail,t_hr_admin_ops,oc_all_requests"
        },
        "item__1751272339777": {
            "linkToPage": "/org-changes",
            "name": "Создать заявку",
            "permissions": "roles",
            "specifyRoles": "admin,hrbp"
        },
        "item__1751272298592": {
            "linkToPage": "/org-changes-list",
            "name": "Список заявок",
            "permissions": "roles",
            "specifyRoles": "admin,hrbp,orgdev,cnb,agreement,shr,hr_admin,t_hr_admin_tech,t_hr_admin_non_tech,t_hr_admin_cc,t_hr_admin_retail,t_hr_admin_ops,oc_all_requests"
        },
        "item__1751615877817": {
            "linkToPage": "/gph-contractors",
            "name": "Исполнители ГПХ",
            "permissions": "roles",
            "specifyRoles": "test"
        },
        "item__1754572987865": {
            "name": "Создать заявку",
            "linkToType": "external",
            "linkToPage": "/gph-agreement",
            "linkToURL": "gph-agreement/create_agreement/",
            "permissions": "roles",
            "specifyRoles": "test",
            "codeItem": "https://lamoda-hr-pre-prod.directual.app/gph-agreement/create_agreement"
        }
    },
    "mobileMenuOption": "side_right",
    "mobileMenu": {
        "id": "rootMobileMenu",
        "icon": "folder",
        "name": "Mobile menu (tabs)",
        "isFolder": true,
        "children": [
            {
                "id": "item__1717090691762",
                "name": "New page",
                "children": [],
                "isFolder": false,
                "icon": "application"
            }
        ]
    },
    "homePageDefault": "/home",
    "homePageAuth": "/home"
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

