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
    "sl": "newRoadMap_changelog",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "comp_ID": "VgB4zK",
        "cards_layout": "grid",
        "card_layout_type": "custom",
        "html_type_content": "{{#tags}}{{id}}{{/tags}}",
        "paraTemplateEngine": "api"
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
            "votes": 5,
            "description": "Quick search in linked fields in actions",
            "tags": [],
            "feature_id": "PLT-159",
            "color": "57bf97",
            "user_id": {
                "firstName": "Max",
                "lastName": "Lykov",
                "id": "mxf@mail.ru"
            },
            "date_updated": 1699261903000,
            "feature_type": "feature",
            "id": "bcb02da3-3cf4-4331-835a-2bf7cc084cc7",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1622125946000,
            "votes_ids": [
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
                    "lastName": "O'Hara",
                    "firstName": "Andrew",
                    "id": "andrewohara111@gmail.com"
                },
                {
                    "firstName": "Max",
                    "lastName": "Lykov",
                    "id": "mxf@mail.ru"
                },
                {
                    "lastName": "Bogomazova",
                    "firstName": "Oksana",
                    "id": "oksana.bogomazova@gmail.com"
                }
            ],
            "title": "Dropdowns in actions for link fields",
            "progress_value": 0
        },
        {
            "votes": 3,
            "description": "[This](https://readme.directual.com/template-system/basics-of-template-system/advanced-templating-techniques#nesting-arrays-of-linked-objects) is not working now with Context vars\n",
            "tags": [
                {
                    "color_text": "rgba(0,0,0,.5)",
                    "color": "#F28B82",
                    "id": "scenarios"
                }
            ],
            "feature_id": "PLT-143",
            "color": "ec6161",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1670519010000,
            "feature_type": "bug",
            "id": "a5fb3c59-8d06-4324-b4f1-927299c550c2",
            "progress": "{\"firstValue\":0}",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621519312000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                },
                {
                    "firstName": "Anton",
                    "lastName": "Sidorov",
                    "id": "a@preencipium.com"
                }
            ],
            "title": "Templating of arrayLink with ContextVar",
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
            "votes": 2,
            "description": "We are trying to identify the circumstances of that bug.",
            "tags": [
                {
                    "color": "#00A8F0",
                    "color_text": "rgba(255,255,255,.8)",
                    "id": "web-pages"
                }
            ],
            "feature_id": "PLT-106",
            "color": "ec6161",
            "user_id": {
                "lastName": "Ershov",
                "firstName": "Pavel",
                "id": "pavel@directual.com"
            },
            "date_updated": 1707839435000,
            "feature_type": "bug",
            "id": "5de816e0-8874-4bdc-bed1-6679fe701dac",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1621374091000,
            "votes_ids": [
                {
                    "firstName": "Do",
                    "lastName": "Do",
                    "id": "dodo@inboxbear.com"
                },
                {
                    "firstName": "JOHNLY",
                    "lastName": "NARAG",
                    "id": "johnly_s_narag@yahoo.com"
                }
            ],
            "title": "Actions are vanishing",
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
            "votes": 1,
            "description": "When applying snapshot, all objects in structures loose their create and update dates",
            "tags": [
                {
                    "color_text": "rgba(0,0,0,.5)",
                    "color": "#FAB0E4",
                    "id": "app life cycle management"
                }
            ],
            "feature_id": "PLT-157",
            "color": "ec6161",
            "user_id": {
                "lastName": "Dolgov",
                "firstName": "Nikita",
                "id": "n.dolgov@directual.com"
            },
            "date_updated": 1670519010000,
            "feature_type": "bug",
            "id": "3598dd81-5ff0-419d-ae71-82fa8a92d28c",
            "dev_status": {
                "status": "Backlog"
            },
            "date_added": 1622113092000,
            "votes_ids": [
                {
                    "firstName": "Egor",
                    "lastName": "Baev",
                    "id": "artosiris@gmail.com"
                }
            ],
            "title": "When applying snapshot, all objects in structures loose their create and update dates",
            "progress_value": 0
        }
    ],
    "totalPages": 7,
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
            "networkID": 6829,
            "id": 1385542,
            "dateCreated": "2021-05-14T21:02:45Z",
            "hidden": false,
            "dateHidden": null,
            "name": "App users",
            "sysName": "WebUser",
            "jsonObject": "[{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_registered\",\"dataType\":\"date\",\"name\":\"Date registered on Dev\",\"id\":\"14451621029358812\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_counter\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"26481752759056266\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"code\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"51351621027822811\",\"link\":null,\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Roles\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isEmailConfirmed\",\"dataType\":\"boolean\",\"name\":\"Email confirmed\",\"id\":\"60111621027825496\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0},{\"id\":-1776115286,\"name\":\"System fields\",\"order\":1},{\"id\":1621027815164,\"name\":\"Email confirmation\",\"order\":2}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-07-21T22:26:49Z",
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
            "networkID": 6829,
            "id": 1385610,
            "dateCreated": "2021-05-12T15:06:56Z",
            "hidden": false,
            "dateHidden": null,
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
            "networkID": 6829,
            "id": 1385613,
            "dateCreated": "2021-05-12T15:14:45Z",
            "hidden": false,
            "dateHidden": null,
            "name": "development_status",
            "sysName": "development_status",
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"23221620832490508\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
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
            "networkID": 6829,
            "id": 1386924,
            "dateCreated": "2021-05-19T07:32:38Z",
            "hidden": false,
            "dateHidden": null,
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
    "comment": null,
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
