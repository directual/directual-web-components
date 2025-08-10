import FpsCards2 from '../components/fps/viewobjects/cards2/FpsCards2'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Cards2',
  component: FpsCards2,
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

let exampleTable = {
    "sl": "newRoadMap",
    "pageSize": "12",
    "headerField": null,
    "params": {
        "comp_ID": "5DJeoB",
        "cards_layout": "grid",
        "flex_layout__width": 251,
        "flex_layout__gap": 23,
        "general": {
            "showObjCount": true,
            "allowPagination": true
        },
        "cards_title": "<div style=\"color:red\">Backlog</a>",
        "grid_layout__gap": 15,
        "card_layout_type": "regular",
        "card_border_radius": 12,
        "html_type_content": "Привет нахуй",
        "card_border": 0,
        "card_min_height": 120,
        "card_padding": 0,
        "filteringOn": true,
        "filterParams": {
            "dev_status": {
                "active": true,
                "dataType": "link",
                "format": "",
                "formatOptions": {},
                "name": "Development status",
                "textsearch": "endpoint",
                "endpoint": "dd"
            },
            "title": {
                "active": true,
                "dataType": "string",
                "format": "",
                "formatOptions": {},
                "name": "Feature title"
            },
            "feature_id": {
                "active": true,
                "dataType": "string",
                "format": "",
                "formatOptions": {},
                "name": "Inner ID"
            },
            "isSorting": true,
            "isFiltering": true,
            "filterFields": {
                "feature_id": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Inner ID"
                },
                "feature_type": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Feature type",
                    "textsearch": "endpoint",
                    "endpoint": "ddTypes"
                },
                "title": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Feature title"
                },
                "dev_status": {
                    "active": true,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Development status",
                    "textsearch": "endpoint",
                    "endpoint": "ddDevStats"
                }
            }
        },
        "card_type_dir": {
            "body": "<div style=\"border:solid 2px #{{color}}; padding:15px; border-radius: 12px; position: relative\">\n  <span style=\"position:absolute; bottom:6px; right: 6px; color:#{{color}}; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; font-weight: bold\">\n  {{feature_type}}\n  </span>\n  <span style=\"position:absolute; top:6px; right: 6px; background-color:#FDD663; color: rgba(0,0,0,.6); border-radius:20px;font-size: 12px; font-weight: bold; padding: 2px 6px;\">\n {{votes}}\n  </span>\n<code style=\"margin-top:-4px\">{{feature_id}}</code><br />\n<b>{{title}}</b><br />\n<div style=\"display:flex; flex-wrap:wrap; font-size: 14px; gap: 6px; margin-top:5px\">\n{{#tags}}\n   <div style=\"background-color: {{color}}; color: {{color_text}}; padding: 1px 6px; border-radius: 4px\">\n     {{id}}\n</div>\n{{/tags}}\n</div>\n</div>",
            "image_position": "no_image"
        },
        "routing": "redirect",
        "routing_where": "/roadmap/{{feature_id}}"
    },
    "tableTitle": null,
    "actions": null,
    "headers": [
        {
            "sysName": "color",
            "dataType": "string",
            "name": "Card color",
            "id": "61881621017200362",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 9,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "color",
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_added",
            "dataType": "date",
            "name": "Date added",
            "id": "68351620832123660",
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
                "dateFormat": "D MMMM, Y",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_updated",
            "dataType": "date",
            "name": "Date updated",
            "id": "74581670507990970",
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
                "dateFormat": "D MMMM, Y",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "description",
            "dataType": "string",
            "name": "Feature description",
            "id": "77031620832091108",
            "link": "",
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
            "format": "markdown",
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "dev_status",
            "dataType": "link",
            "name": "Development status",
            "id": "85621620832330584",
            "link": "development_status",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 8,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feature_id",
            "dataType": "string",
            "name": "Inner ID",
            "id": "23601621342083348",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 11,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "feature_type",
            "dataType": "link",
            "name": "Feature type",
            "id": "55371621030232780",
            "link": "feature_type",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 10,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "progress",
            "dataType": "json",
            "name": "Progress",
            "id": "68751622642385874",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 16,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "slider",
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "unitName": "%",
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
                "range": {
                    "min": 0,
                    "max": 100,
                    "step": 5
                },
                "customOptionType": "textarea",
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "tags",
            "dataType": "arrayLink",
            "name": "Tags",
            "id": "67851621409605492",
            "link": "tags",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 15,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "title",
            "dataType": "string",
            "name": "Feature title",
            "id": "79031620832091734",
            "link": null,
            "group": "0",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "user_id",
            "dataType": "link",
            "name": "Who suggested",
            "id": "59421620832153105",
            "link": "WebUser",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "votes",
            "dataType": "number",
            "name": "Number of upvotes",
            "id": "68061620832170304",
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
            "format": "positiveNum",
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "votes_ids",
            "dataType": "arrayLink",
            "name": "Who upvoted",
            "id": "14001620832180875",
            "link": "WebUser",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "progress_value",
            "dataType": "decimal",
            "name": "",
            "id": "96111752753166071",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 17,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "release_date",
            "dataType": "date",
            "name": "Release date",
            "id": "71651621345011532",
            "link": "",
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
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
                "dateFormat": "D MMMM, Y",
                "timeFormat": "",
                "isUTC": "false"
            },
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "votes": 17,
            "description": "Option to restrict any access to files on Directual for non-authorised users",
            "tags": [
                {
                    "color": "#0BBAB5",
                    "color_text": "rgba(0,0,0,.5)",
                    "id": "database"
                }
            ],
            "feature_id": "PLT-177",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519010000,
            "feature_type": "feature",
            "id": "3874bd01-38af-4d0c-a04f-5eb999733d4f",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1625253351000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "id": "dave@tomorrowready.com"
                },
                {
                    "firstName": "Mathew",
                    "lastName": "Tusa",
                    "id": "mobileactionim@gmail.com"
                },
                {
                    "lastName": "H",
                    "firstName": "Alejandro",
                    "id": "digitalgebo@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Vladimir",
                    "lastName": "Stepanenko",
                    "id": "vgstepanenko@gmail.com"
                },
                {
                    "firstName": "A",
                    "lastName": "A",
                    "id": "admin@agdigitals.com"
                },
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "lastName": "Pearson",
                    "firstName": "Lloyd",
                    "id": "lloydpearson@packagecues.com"
                },
                {
                    "lastName": "N",
                    "firstName": "Kamil",
                    "id": "kamil@leverall.com"
                },
                {
                    "firstName": "titouan",
                    "lastName": "albouy",
                    "id": "titouan@akatek.io"
                },
                {
                    "firstName": "VISHAL",
                    "lastName": "SETHI",
                    "id": "vs301991@gmail.com"
                },
                {
                    "firstName": "Elise",
                    "lastName": "Boonstra-Legerstee",
                    "id": "elise.legerstee@gmail.com"
                },
                {
                    "firstName": "Thomas",
                    "lastName": "Omaley",
                    "id": "thomasomaley1964@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "id": "lindamacdonalde@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Restrict access to files ",
            "progress_value": 0
        },
        {
            "votes": 15,
            "description": "from the table row",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-107",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1674056358000,
            "feature_type": "feature",
            "id": "bcfb59c9-235d-4d4a-96d9-07c73ec20124",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621374197000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "lastName": "Nazarov",
                    "firstName": "Oleg",
                    "id": "olegnazarov@hotmail.com"
                },
                {
                    "id": "mf.alexander@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Vladimir",
                    "lastName": "Stepanenko",
                    "id": "vgstepanenko@gmail.com"
                },
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "id": "hamelmesfin@gmail.com"
                },
                {
                    "id": "av.volgin@gmail.com"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "pavel@goncharov.me"
                },
                {
                    "lastName": "Khokhlov",
                    "firstName": "Alexey",
                    "id": "alexhohlov89@gmail.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "id": "lykovmaxim@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "lastName": "Титов",
                    "firstName": "Олег",
                    "id": "easylife9525@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Actions in Table",
            "progress_value": 0
        },
        {
            "votes": 12,
            "description": "As of today, arrayLink is displayed as a simple list. It would be great to have:\n\n- Comments\n- ✅ Sorted list (in prod)\n- Cards\n- ✅ Table (in prod)\n- ✅ Shopping cart (in prod)\n- Calendar",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-114",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519010000,
            "feature_type": "feature",
            "id": "db3ce173-737a-4b9b-9872-f9c5d090f015",
            "progress": "{\"firstValue\":40}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621374947000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "lastName": "Reyes",
                    "firstName": "Cathy",
                    "id": "iamcathyreyes@yahoo.com"
                },
                {
                    "firstName": "Vladimir",
                    "lastName": "Stepanenko",
                    "id": "vgstepanenko@gmail.com"
                },
                {
                    "firstName": "Do",
                    "lastName": "Do",
                    "id": "dodo@inboxbear.com"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "pavel@goncharov.me"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "firstName": "Efim",
                    "lastName": "Maisak",
                    "id": "coldnaked@gmail.com"
                },
                {
                    "id": "kolgtim@gmail.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "firstName": "Renato",
                    "lastName": "Pinto",
                    "id": "renato.casa.corre@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Sophisticated view for arrayLinks on object cards",
            "progress_value": 40
        },
        {
            "votes": 11,
            "description": "When a structure becomes big with hundreds of parameters it usually makes it difficult to manage and to find in scenario parameter we need. Usually a lot of parameters with time become unused. The easiest way to fix this problem but not to broke old scenarios and other structures, connected with our unused parameters is to allow user to hide it both in structures and scenarios, something like adding them to archive from which we can drop them back any time we want.   ",
            "tags": [
                {
                    "color": "#0BBAB5",
                    "color_text": "rgba(0,0,0,.5)",
                    "id": "database"
                }
            ],
            "feature_id": "PLT-281",
            "color": "57bf97",
            "user_id": {
                "firstName": "Artem",
                "lastName": "Laptev",
                "id": "artemlaptev7@gmail.com"
            },
            "date_updated": 1670519011000,
            "feature_type": "feature",
            "id": "4dee093a-d6b6-461c-997c-7bce76b93027",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1637408122000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Joses",
                    "lastName": "Saumaitoga",
                    "id": "josesjjs@tpg.com.au"
                },
                {
                    "lastName": "Nichols",
                    "firstName": "Joanne",
                    "id": "jonichols@me.com"
                },
                {
                    "lastName": "O'Hara",
                    "firstName": "Andrew",
                    "id": "andrewohara111@gmail.com"
                },
                {
                    "firstName": "Anton",
                    "lastName": "Sidorov",
                    "id": "a@preencipium.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "id": "sergey.azarov@gmail.com"
                },
                {
                    "id": "lindamacdonalde@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "hide unused fields",
            "progress_value": 0
        },
        {
            "votes": 11,
            "description": "Add \"not in array\" filter in condition cube and in api filter section. Ideally add 2 new options: \n1. object is NOT in array\n2. array does NOT contain all\n2. array does NOT contain any",
            "tags": [
                {
                    "color_text": "rgba(0,0,0,.5)",
                    "color": "#F28B82",
                    "id": "scenarios"
                },
                {
                    "color_text": "rgba(0,0,0,.5)",
                    "color": "#FDD663",
                    "id": "api-builder"
                }
            ],
            "feature_id": "PLT-120",
            "color": "57bf97",
            "user_id": {
                "lastName": "Dolgov",
                "firstName": "Nikita",
                "id": "n.dolgov@directual.com"
            },
            "date_updated": 1692696268000,
            "feature_type": "feature",
            "id": "7d8635da-2738-44cf-b4b7-1d509611f8ed",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621377697000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "lastName": "Ermolaev",
                    "firstName": "Timur",
                    "id": "ermolaev@code-word.ru"
                },
                {
                    "firstName": "Anton",
                    "lastName": "Sidorov",
                    "id": "a@preencipium.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "id": "drammichd@gmail.com"
                },
                {
                    "id": "kolgtim@gmail.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "lastName": "Титов",
                    "firstName": "Олег",
                    "id": "easylife9525@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                },
                {
                    "lastName": "Dolgov",
                    "firstName": "Nikita",
                    "id": "n.dolgov@directual.com"
                }
            ],
            "title": "Add NOT-filters for arrays",
            "progress_value": 0
        },
        {
            "votes": 11,
            "description": "With auto-logging-in",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-266",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1710500343000,
            "feature_type": "feature",
            "id": "c8012055-0d2a-41ac-b7d0-35e2b34aec53",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1634772726000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "lastName": "Pearson",
                    "firstName": "Lloyd",
                    "id": "lloydpearson@packagecues.com"
                },
                {
                    "lastName": "N",
                    "firstName": "Kamil",
                    "id": "kamil@leverall.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "firstName": "Renato",
                    "lastName": "Pinto",
                    "id": "renato.casa.corre@gmail.com"
                },
                {
                    "lastName": "Mihailov",
                    "firstName": "Mike",
                    "id": "edueduedoo@gmail.com"
                },
                {
                    "lastName": "Титов",
                    "firstName": "Олег",
                    "id": "easylife9525@gmail.com"
                },
                {
                    "id": "ilan@ezcell.ca"
                },
                {
                    "id": "lindamacdonalde@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "\"Magic link\" to app",
            "progress_value": 0
        },
        {
            "votes": 11,
            "description": "- Custom fields\n- Edit Sign in page\n- If there is only one sign in method, show the button in the menu\n- Sync scenario under the hood",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-321",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1679934103000,
            "feature_type": "feature",
            "id": "3b69de70-1c09-4d37-ac59-a11d071996c1",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1653668903000,
            "votes_ids": [
                {
                    "firstName": "Anton",
                    "lastName": "Romaniuk",
                    "id": "eddress@yandex.ru"
                },
                {
                    "lastName": "Online",
                    "firstName": "Bisapco",
                    "id": "atr.service.msk@gmail.com"
                },
                {
                    "id": "zhgenty@gmail.com"
                },
                {
                    "lastName": "D",
                    "firstName": "Vadim",
                    "id": "logicunit@gmail.com"
                },
                {
                    "lastName": "Khokhlov",
                    "firstName": "Alexey",
                    "id": "alexhohlov89@gmail.com"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "office@ingros.ru"
                },
                {
                    "id": "mrjackfeliciano@gmail.com"
                },
                {
                    "id": "viktor.iwan@doxadigital.com"
                },
                {
                    "lastName": "Титов",
                    "firstName": "Олег",
                    "id": "easylife9525@gmail.com"
                },
                {
                    "firstName": "Mark",
                    "lastName": "Vokes",
                    "id": "mark@concept2commerce.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Refactor Sign Up",
            "progress_value": 0
        },
        {
            "votes": 10,
            "description": "Two-step import of CSV/XLS\n\n### Step 1\nFields aliases, with quick structure editing.\n\n### Step 2\nImport itself\n\nP.S. Webflow has similar mechanism of CSV import.\n\nPlus:\n- import from Airtable\n- import from Google Sheets\n- import from popular CRMs\n- Listeners on SQL databases",
            "tags": [
                {
                    "color": "#0BBAB5",
                    "color_text": "rgba(0,0,0,.5)",
                    "id": "database"
                }
            ],
            "feature_id": "PLT-102",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1731529807000,
            "feature_type": "feature",
            "id": "b5ca7520-f1d3-48da-af26-0cdacab94757",
            "progress": "{\"firstValue\":40}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621373725000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "lastName": "Nichols",
                    "firstName": "Joanne",
                    "id": "jonichols@me.com"
                },
                {
                    "lastName": "Pearson",
                    "firstName": "Lloyd",
                    "id": "lloydpearson@packagecues.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "firstName": "Elise",
                    "lastName": "Boonstra-Legerstee",
                    "id": "elise.legerstee@gmail.com"
                },
                {
                    "firstName": "Renato",
                    "lastName": "Pinto",
                    "id": "renato.casa.corre@gmail.com"
                },
                {
                    "lastName": "Grimalsky",
                    "firstName": "Slava",
                    "id": "itareo@gmail.com"
                },
                {
                    "id": "lindamacdonalde@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Import updating",
            "progress_value": 40
        },
        {
            "votes": 10,
            "description": "Copy pages in Web-pages",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-215",
            "color": "57bf97",
            "user_id": {
                "firstName": "Vladimir",
                "lastName": "Stepanenko",
                "id": "vgstepanenko@gmail.com"
            },
            "date_updated": 1670519011000,
            "feature_type": "feature",
            "id": "67b93ec9-cff1-4870-8d92-42a4a53e60d9",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1628176984000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "Joses",
                    "lastName": "Saumaitoga",
                    "id": "josesjjs@tpg.com.au"
                },
                {
                    "lastName": "Nichols",
                    "firstName": "Joanne",
                    "id": "jonichols@me.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "office@ingros.ru"
                },
                {
                    "id": "victorblan@gmail.com"
                },
                {
                    "id": "lykovmaxim@gmail.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Copy page on portal",
            "progress_value": 0
        },
        {
            "votes": 10,
            "description": "- XML sitemap\n- robots.txt\n- canonical URLs\n- Schema.org Open Graph\n- 404\n- htaccess\n- Meta: Title, description, Keywords, Content-Type\n- Alt for pictures\n\n[SEO checklist](https://dminhvu.com/nextjs-seo)",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-304",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1711715915000,
            "feature_type": "feature",
            "id": "014091fa-909b-4657-b309-5be994ec1e4c",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1643554566000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "lastName": "Online",
                    "firstName": "Bisapco",
                    "id": "atr.service.msk@gmail.com"
                },
                {
                    "firstName": "Dimitry",
                    "lastName": "Novozhilov",
                    "id": "novozhilov@code-word.ru"
                },
                {
                    "firstName": "Joses",
                    "lastName": "Saumaitoga",
                    "id": "josesjjs@tpg.com.au"
                },
                {
                    "lastName": "Goncharov",
                    "firstName": "Pavel",
                    "id": "pavel@goncharov.me"
                },
                {
                    "lastName": "N",
                    "firstName": "Kamil",
                    "id": "kamil@leverall.com"
                },
                {
                    "firstName": "Otto",
                    "lastName": "Baumann",
                    "id": "ob@it-setup.dk"
                },
                {
                    "id": "sergey.azarov@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "SEO-related features",
            "progress_value": 0
        },
        {
            "votes": 9,
            "description": "Add a setting in \"Sent text message\" mode to choose the keyboard layout: vertical or horizontal",
            "tags": [
                {
                    "color_text": "rgba(0,0,0,.5)",
                    "color": "#F28B82",
                    "id": "scenarios"
                }
            ],
            "feature_id": "PLT-228",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519011000,
            "feature_type": "feature",
            "id": "5cd1b1d3-2e29-4df5-94e9-c1aedb16043a",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1629374375000,
            "votes_ids": [
                {
                    "lastName": "Leonov",
                    "firstName": "Alexey",
                    "id": "alex@yolki24.ru"
                },
                {
                    "firstName": "Joses",
                    "lastName": "Saumaitoga",
                    "id": "josesjjs@tpg.com.au"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "id": "lykovmaxim@gmail.com"
                },
                {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                {
                    "id": "sergey.azarov@gmail.com"
                },
                {
                    "firstName": "Thomas",
                    "lastName": "Omaley",
                    "id": "thomasomaley1964@gmail.com"
                },
                {
                    "firstName": "Hao",
                    "lastName": "Ngo",
                    "id": "hao.ngolv@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Telegram step – vertical/horizontal keyboard",
            "progress_value": 0
        },
        {
            "votes": 7,
            "description": "Fast import from Airtable",
            "feature_id": "PLT-182",
            "color": "57bf97",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519010000,
            "feature_type": "feature",
            "id": "e54e9618-65ed-4c6b-ae65-028efa41de25",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1626367475000,
            "votes_ids": [
                {
                    "firstName": "Roman",
                    "lastName": "Tkachev",
                    "id": "tkachev.rb@gmail.com"
                },
                {
                    "id": "subrtt@gmail.com"
                },
                {
                    "firstName": "Do",
                    "lastName": "Do",
                    "id": "dodo@inboxbear.com"
                },
                {
                    "firstName": "Ken",
                    "lastName": "Lyle",
                    "id": "kenlyle@gmail.com"
                },
                {
                    "firstName": "Thomas",
                    "lastName": "Omaley",
                    "id": "thomasomaley1964@gmail.com"
                },
                {
                    "id": "trustpropsonline@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Import from Airtable",
            "progress_value": 0
        }
    ],
    "totalPages": 6,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "color",
            1385610
        ],
        [
            "date_added",
            1385610
        ],
        [
            "date_updated",
            1385610
        ],
        [
            "description",
            1385610
        ],
        [
            "dev_status.status",
            1385613
        ],
        [
            "feature_id",
            1385610
        ],
        [
            "feature_type",
            1385610
        ],
        [
            "id",
            1385610
        ],
        [
            "progress",
            1385610
        ],
        [
            "tags.id",
            1386924
        ],
        [
            "tags.color_text",
            1386924
        ],
        [
            "tags.color",
            1386924
        ],
        [
            "title",
            1385610
        ],
        [
            "user_id.firstName",
            1385542
        ],
        [
            "user_id.id",
            1385542
        ],
        [
            "user_id.lastName",
            1385542
        ],
        [
            "votes",
            1385610
        ],
        [
            "votes_ids.firstName",
            1385542
        ],
        [
            "votes_ids.id",
            1385542
        ],
        [
            "votes_ids.lastName",
            1385542
        ],
        [
            "progress_value",
            1385610
        ],
        [
            "release_date",
            1385610
        ]
    ],
    "writeFields": [],
    "structures": {
        "1385542": {
            "id": 1385542,
            "dateCreated": "2021-05-14T21:02:45Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 6829,
            "name": "App users",
            "sysName": "WebUser",
            "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_counter\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"26481752759056266\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Roles\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_registered\",\"dataType\":\"date\",\"name\":\"Date registered on Dev\",\"id\":\"14451621029358812\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"code\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"51351621027822811\",\"link\":null,\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isEmailConfirmed\",\"dataType\":\"boolean\",\"name\":\"Email confirmed\",\"id\":\"60111621027825496\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"balance\",\"dataType\":\"decimal\",\"name\":\"Account balance\",\"id\":\"81481754134113259\",\"link\":\"\",\"group\":\"1754134105862\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"transaction_ids\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"63381754134242079\",\"link\":\"transactions\",\"group\":\"1754134105862\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0},{\"name\":\"System fields\",\"id\":-1776115286,\"order\":1},{\"name\":\"Email confirmation\",\"id\":1621027815164,\"order\":2},{\"name\":\"BILLING\",\"id\":1754134105862,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-08-02T20:51:02Z",
            "createBy": 0,
            "changedBy": 1,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
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
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "folderId": null
        },
        "1385610": {
            "id": 1385610,
            "dateCreated": "2021-05-12T15:06:56Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 6829,
            "name": "Feature requests and Bug reports",
            "sysName": "Features",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"votes_ids\",\"name\":\"Who upvoted\",\"dataType\":\"arrayLink\",\"id\":\"14001620832180875\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"feature_id\",\"name\":\"Inner ID\",\"dataType\":\"string\",\"id\":\"23601621342083348\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"subscriber_ids\",\"name\":\"Subscribers\",\"dataType\":\"arrayLink\",\"id\":\"26751621348189191\",\"link\":\"WebUser\",\"group\":\"1621348185318\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Request status\",\"dataType\":\"link\",\"id\":\"40251620832303364\",\"link\":\"request_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"release_id\",\"name\":\"Release\",\"dataType\":\"link\",\"id\":\"40791621408746909\",\"link\":\"Releases\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"feature_type\",\"name\":\"Feature type\",\"dataType\":\"link\",\"id\":\"55371621030232780\",\"link\":\"feature_type\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"name\":\"Who suggested\",\"dataType\":\"link\",\"id\":\"59421620832153105\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"screenshots\",\"name\":\"Screenshots or Screencast\",\"dataType\":\"file\",\"id\":\"61091637158867177\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"name\":\"Card color\",\"dataType\":\"string\",\"id\":\"61881621017200362\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tags\",\"name\":\"Tags\",\"dataType\":\"arrayLink\",\"id\":\"67851621409605492\",\"link\":\"tags\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"votes\",\"name\":\"Number of upvotes\",\"dataType\":\"number\",\"id\":\"68061620832170304\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_added\",\"name\":\"Date added\",\"dataType\":\"date\",\"id\":\"68351620832123660\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"progress\",\"name\":\"Progress\",\"dataType\":\"json\",\"id\":\"68751622642385874\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"slider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"%\",\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":0,\"max\":100,\"step\":5},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"release_date\",\"name\":\"Release date\",\"dataType\":\"date\",\"id\":\"71651621345011532\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"decline_reason\",\"name\":\"Reason of decline\",\"dataType\":\"string\",\"id\":\"73671621342083940\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_updated\",\"name\":\"Date updated\",\"dataType\":\"date\",\"id\":\"74581670507990970\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Feature description\",\"dataType\":\"string\",\"id\":\"77031620832091108\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"Feature title\",\"dataType\":\"string\",\"id\":\"79031620832091734\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dev_status\",\"name\":\"Development status\",\"dataType\":\"link\",\"id\":\"85621620832330584\",\"link\":\"development_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"progress_value\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"96111752753166071\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Subscriptions\",\"id\":1621348185318,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"feature_id\"},{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-07-17T11:52:59Z",
            "createBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33625685
        },
        "1385613": {
            "id": 1385613,
            "dateCreated": "2021-05-12T15:14:45Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 6829,
            "name": "development_status",
            "sysName": "development_status",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"23221620832490508\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-05-12T15:14:59Z",
            "createBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33625685
        },
        "1386924": {
            "id": 1386924,
            "dateCreated": "2021-05-19T07:32:38Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 6829,
            "name": "tags",
            "sysName": "tags",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"36801751108901500\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color_text\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"42251751109783628\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"id\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-06-28T11:23:11Z",
            "createBy": 1,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            "folderId": 33625685
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [],
    "quickSearch": null,
    "httpParams": {
        "status": "planned"
    },
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "Backlog",
    "response": false
}

let authExample = {
  "isAuth": false,
  "custom_labels": "{\n   \"foo\": \"hello brave new world!\",\n   \"bar\": \"foobar\"\n}",
  "role": "admin,god",
  "lastName": "Watson",
  "firstName": "David",
  "token": "1a9f10d0-d45f-4bf2-9e7e-d6ce2e752d03",
  "notifications_counter": "",
  "nid": 18924,
  "user": "david@directual.com",
  //"userpic": "https://api.directual.com/fileUploaded/basic-template/efdd480a-d36a-4a01-ac82-baf871ffd2fd.jpg"
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    data: exampleTable,
    auth: authExample,
    locale: 'ENG',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
    debug: true // в сторибуке всегда включаем дебаг режим
  },
};
