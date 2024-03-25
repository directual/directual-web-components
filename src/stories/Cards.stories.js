import 'mapbox-gl/dist/mapbox-gl.css'
import FpsCards from '../components/fps/viewobjects/cards/FpsCards'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Cards',
  component: FpsCards,
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
    "sl": "manageItems",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "cardListLayout": "grid",
        "cardHeaderComment": "country_id",
        "deleteField": "",
        "cardBodyText": "description",
        "cardImage": true,
        "cardImageField": "image",
        "cardImageType": "cover",
        "cardImageSize": 100,
        "objectView": {},
        "data": {
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
                },
                {
                    "fieldSysName": "title",
                    "fetch": [],
                    "sysName": "title",
                    "name": "Item title",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "isHidden",
                    "fetch": [],
                    "sysName": "isHidden",
                    "name": "hidden",
                    "dataType": "boolean",
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
                            "❌ Hidden",
                            "Not hidden"
                        ],
                        "hideStandardBooleanIcons": true,
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "price",
                    "fetch": [],
                    "sysName": "price",
                    "name": "Price, per pound, $",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Description",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "image",
                    "fetch": [],
                    "sysName": "image",
                    "name": "Photo",
                    "dataType": "file",
                    "format": "image",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "country_id",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "country",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "country_id",
                    "name": "Producing country",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "countries"
                }
            ],
            "writeFields": [
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
                    "fieldSysName": "isHidden",
                    "fetch": [],
                    "sysName": "isHidden",
                    "name": "hidden",
                    "dataType": "boolean",
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
                            "❌ Hidden",
                            "Not hidden"
                        ],
                        "hideStandardBooleanIcons": true,
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "price",
                    "fetch": [],
                    "sysName": "price",
                    "name": "Price, per pound, $",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Description",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "image",
                    "fetch": [],
                    "sysName": "image",
                    "name": "Photo",
                    "dataType": "file",
                    "format": "image",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "title",
                    "fetch": [],
                    "sysName": "title",
                    "name": "Item title",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "country_id",
                    "fetch": [],
                    "sysName": "country_id",
                    "name": "Producing country",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "countries"
                }
            ],
            "fields": {
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
                "title": {
                    "id": "title",
                    "content": "Item title",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "isHidden": {
                    "id": "isHidden",
                    "content": "hidden",
                    "type": "field",
                    "dataType": "boolean",
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
                            "❌ Hidden",
                            "Not hidden"
                        ],
                        "hideStandardBooleanIcons": true,
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "price": {
                    "id": "price",
                    "content": "Price, per pound, $",
                    "type": "field",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "description": {
                    "id": "description",
                    "content": "Description",
                    "type": "field",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "image": {
                    "id": "image",
                    "content": "Photo",
                    "type": "field",
                    "dataType": "file",
                    "format": "image",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "country_id": {
                    "id": "country_id",
                    "content": "Producing country",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "countries",
                    "actions": []
                },
                "action__12161707383175503": {
                    "id": "action__12161707383175503",
                    "content": "Out of Stock (hide item)",
                    "type": "action",
                    "actions": []
                }
            },
            "fieldParams": {
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "title": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isHidden": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "price": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "description": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "image": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "country_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "allCountrues"
                }
            },
            "columns": {
                "tab-1": {
                    "id": "tab-1",
                    "title": "New section",
                    "fieldIds": [
                        "id",
                        "image",
                        "title",
                        "isHidden",
                        "description",
                        "price",
                        "country_id",
                        "action__12161707383175503"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": []
        },
        "fields": {
            "id": {
                "include": false,
                "disableEditing": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "title": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "isHidden": {
                "include": false,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "price": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "description": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "image": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "country_id": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "quickSearchSL": "allCountrues",
                "searchData": [
                    {
                        "key": "AF",
                        "value": "Afghanistan"
                    },
                    {
                        "key": "AX",
                        "value": "Åland Islands"
                    },
                    {
                        "key": "AL",
                        "value": "Albania"
                    },
                    {
                        "key": "DZ",
                        "value": "Algeria"
                    },
                    {
                        "key": "AS",
                        "value": "American Samoa"
                    },
                    {
                        "key": "AD",
                        "value": "Andorra"
                    },
                    {
                        "key": "AO",
                        "value": "Angola"
                    },
                    {
                        "key": "AI",
                        "value": "Anguilla"
                    },
                    {
                        "key": "AQ",
                        "value": "Antarctica"
                    },
                    {
                        "key": "AG",
                        "value": "Antigua and Barbuda"
                    },
                    {
                        "key": "AR",
                        "value": "Argentina"
                    },
                    {
                        "key": "AM",
                        "value": "Armenia"
                    },
                    {
                        "key": "AW",
                        "value": "Aruba"
                    },
                    {
                        "key": "AU",
                        "value": "Australia"
                    },
                    {
                        "key": "AT",
                        "value": "Austria"
                    },
                    {
                        "key": "AZ",
                        "value": "Azerbaijan"
                    },
                    {
                        "key": "BS",
                        "value": "Bahamas"
                    },
                    {
                        "key": "BH",
                        "value": "Bahrain"
                    },
                    {
                        "key": "BD",
                        "value": "Bangladesh"
                    },
                    {
                        "key": "BB",
                        "value": "Barbados"
                    },
                    {
                        "key": "BY",
                        "value": "Belarus"
                    },
                    {
                        "key": "BE",
                        "value": "Belgium"
                    },
                    {
                        "key": "BZ",
                        "value": "Belize"
                    },
                    {
                        "key": "BJ",
                        "value": "Benin"
                    },
                    {
                        "key": "BM",
                        "value": "Bermuda"
                    },
                    {
                        "key": "BT",
                        "value": "Bhutan"
                    },
                    {
                        "key": "BO",
                        "value": "Bolivia, Plurinational State of"
                    },
                    {
                        "key": "BQ",
                        "value": "Bonaire, Sint Eustatius and Saba"
                    },
                    {
                        "key": "BA",
                        "value": "Bosnia and Herzegovina"
                    },
                    {
                        "key": "BW",
                        "value": "Botswana"
                    },
                    {
                        "key": "BV",
                        "value": "Bouvet Island"
                    },
                    {
                        "key": "BR",
                        "value": "Brazil"
                    },
                    {
                        "key": "IO",
                        "value": "British Indian Ocean Territory"
                    },
                    {
                        "key": "BN",
                        "value": "Brunei Darussalam"
                    },
                    {
                        "key": "BG",
                        "value": "Bulgaria"
                    },
                    {
                        "key": "BF",
                        "value": "Burkina Faso"
                    },
                    {
                        "key": "BI",
                        "value": "Burundi"
                    },
                    {
                        "key": "KH",
                        "value": "Cambodia"
                    },
                    {
                        "key": "CM",
                        "value": "Cameroon"
                    },
                    {
                        "key": "CA",
                        "value": "Canada"
                    },
                    {
                        "key": "CV",
                        "value": "Cape Verde"
                    },
                    {
                        "key": "KY",
                        "value": "Cayman Islands"
                    },
                    {
                        "key": "CF",
                        "value": "Central African Republic"
                    },
                    {
                        "key": "TD",
                        "value": "Chad"
                    },
                    {
                        "key": "CL",
                        "value": "Chile"
                    },
                    {
                        "key": "CN",
                        "value": "China"
                    },
                    {
                        "key": "CX",
                        "value": "Christmas Island"
                    },
                    {
                        "key": "CC",
                        "value": "Cocos (Keeling) Islands"
                    },
                    {
                        "key": "CO",
                        "value": "Colombia"
                    },
                    {
                        "key": "KM",
                        "value": "Comoros"
                    },
                    {
                        "key": "CG",
                        "value": "Congo"
                    },
                    {
                        "key": "CD",
                        "value": "Congo, the Democratic Republic of the"
                    },
                    {
                        "key": "CK",
                        "value": "Cook Islands"
                    },
                    {
                        "key": "CR",
                        "value": "Costa Rica"
                    },
                    {
                        "key": "CI",
                        "value": "Côte d'Ivoire"
                    },
                    {
                        "key": "HR",
                        "value": "Croatia"
                    },
                    {
                        "key": "CU",
                        "value": "Cuba"
                    },
                    {
                        "key": "CW",
                        "value": "Curaçao"
                    },
                    {
                        "key": "CY",
                        "value": "Cyprus"
                    },
                    {
                        "key": "CZ",
                        "value": "Czech Republic"
                    },
                    {
                        "key": "DK",
                        "value": "Denmark"
                    },
                    {
                        "key": "DJ",
                        "value": "Djibouti"
                    },
                    {
                        "key": "DM",
                        "value": "Dominica"
                    },
                    {
                        "key": "DO",
                        "value": "Dominican Republic"
                    },
                    {
                        "key": "EC",
                        "value": "Ecuador"
                    },
                    {
                        "key": "EG",
                        "value": "Egypt"
                    },
                    {
                        "key": "SV",
                        "value": "El Salvador"
                    },
                    {
                        "key": "GQ",
                        "value": "Equatorial Guinea"
                    },
                    {
                        "key": "ER",
                        "value": "Eritrea"
                    },
                    {
                        "key": "EE",
                        "value": "Estonia"
                    },
                    {
                        "key": "ET",
                        "value": "Ethiopia"
                    },
                    {
                        "key": "FK",
                        "value": "Falkland Islands (Malvinas)"
                    },
                    {
                        "key": "FO",
                        "value": "Faroe Islands"
                    },
                    {
                        "key": "FJ",
                        "value": "Fiji"
                    },
                    {
                        "key": "FI",
                        "value": "Finland"
                    },
                    {
                        "key": "FR",
                        "value": "France"
                    },
                    {
                        "key": "GF",
                        "value": "French Guiana"
                    },
                    {
                        "key": "PF",
                        "value": "French Polynesia"
                    },
                    {
                        "key": "TF",
                        "value": "French Southern Territories"
                    },
                    {
                        "key": "GA",
                        "value": "Gabon"
                    },
                    {
                        "key": "GM",
                        "value": "Gambia"
                    },
                    {
                        "key": "GE",
                        "value": "Georgia"
                    },
                    {
                        "key": "DE",
                        "value": "Germany"
                    },
                    {
                        "key": "GH",
                        "value": "Ghana"
                    },
                    {
                        "key": "GI",
                        "value": "Gibraltar"
                    },
                    {
                        "key": "GR",
                        "value": "Greece"
                    },
                    {
                        "key": "GL",
                        "value": "Greenland"
                    },
                    {
                        "key": "GD",
                        "value": "Grenada"
                    },
                    {
                        "key": "GP",
                        "value": "Guadeloupe"
                    },
                    {
                        "key": "GU",
                        "value": "Guam"
                    },
                    {
                        "key": "GT",
                        "value": "Guatemala"
                    },
                    {
                        "key": "GG",
                        "value": "Guernsey"
                    },
                    {
                        "key": "GN",
                        "value": "Guinea"
                    },
                    {
                        "key": "GW",
                        "value": "Guinea-Bissau"
                    },
                    {
                        "key": "GY",
                        "value": "Guyana"
                    },
                    {
                        "key": "HT",
                        "value": "Haiti"
                    },
                    {
                        "key": "HM",
                        "value": "Heard Island and McDonald Islands"
                    },
                    {
                        "key": "VA",
                        "value": "Holy See (Vatican City State)"
                    },
                    {
                        "key": "HN",
                        "value": "Honduras"
                    },
                    {
                        "key": "HK",
                        "value": "Hong Kong"
                    },
                    {
                        "key": "HU",
                        "value": "Hungary"
                    },
                    {
                        "key": "IS",
                        "value": "Iceland"
                    },
                    {
                        "key": "IN",
                        "value": "India"
                    },
                    {
                        "key": "ID",
                        "value": "Indonesia"
                    },
                    {
                        "key": "IR",
                        "value": "Iran, Islamic Republic of"
                    },
                    {
                        "key": "IQ",
                        "value": "Iraq"
                    },
                    {
                        "key": "IE",
                        "value": "Ireland"
                    },
                    {
                        "key": "IM",
                        "value": "Isle of Man"
                    },
                    {
                        "key": "IL",
                        "value": "Israel"
                    },
                    {
                        "key": "IT",
                        "value": "Italy"
                    },
                    {
                        "key": "JM",
                        "value": "Jamaica"
                    },
                    {
                        "key": "JP",
                        "value": "Japan"
                    },
                    {
                        "key": "JE",
                        "value": "Jersey"
                    },
                    {
                        "key": "JO",
                        "value": "Jordan"
                    },
                    {
                        "key": "KZ",
                        "value": "Kazakhstan"
                    },
                    {
                        "key": "KE",
                        "value": "Kenya"
                    },
                    {
                        "key": "KI",
                        "value": "Kiribati"
                    },
                    {
                        "key": "KP",
                        "value": "Korea, Democratic People's Republic of"
                    },
                    {
                        "key": "KR",
                        "value": "Korea, Republic of"
                    },
                    {
                        "key": "KW",
                        "value": "Kuwait"
                    },
                    {
                        "key": "KG",
                        "value": "Kyrgyzstan"
                    },
                    {
                        "key": "LA",
                        "value": "Lao People's Democratic Republic"
                    },
                    {
                        "key": "LV",
                        "value": "Latvia"
                    },
                    {
                        "key": "LB",
                        "value": "Lebanon"
                    },
                    {
                        "key": "LS",
                        "value": "Lesotho"
                    },
                    {
                        "key": "LR",
                        "value": "Liberia"
                    },
                    {
                        "key": "LY",
                        "value": "Libya"
                    },
                    {
                        "key": "LI",
                        "value": "Liechtenstein"
                    },
                    {
                        "key": "LT",
                        "value": "Lithuania"
                    },
                    {
                        "key": "LU",
                        "value": "Luxembourg"
                    },
                    {
                        "key": "MO",
                        "value": "Macao"
                    },
                    {
                        "key": "MK",
                        "value": "Macedonia, the Former Yugoslav Republic of"
                    },
                    {
                        "key": "MG",
                        "value": "Madagascar"
                    },
                    {
                        "key": "MW",
                        "value": "Malawi"
                    },
                    {
                        "key": "MY",
                        "value": "Malaysia"
                    },
                    {
                        "key": "MV",
                        "value": "Maldives"
                    },
                    {
                        "key": "ML",
                        "value": "Mali"
                    },
                    {
                        "key": "MT",
                        "value": "Malta"
                    },
                    {
                        "key": "MH",
                        "value": "Marshall Islands"
                    },
                    {
                        "key": "MQ",
                        "value": "Martinique"
                    },
                    {
                        "key": "MR",
                        "value": "Mauritania"
                    },
                    {
                        "key": "MU",
                        "value": "Mauritius"
                    },
                    {
                        "key": "YT",
                        "value": "Mayotte"
                    },
                    {
                        "key": "MX",
                        "value": "Mexico"
                    },
                    {
                        "key": "FM",
                        "value": "Micronesia, Federated States of"
                    },
                    {
                        "key": "MD",
                        "value": "Moldova, Republic of"
                    },
                    {
                        "key": "MC",
                        "value": "Monaco"
                    },
                    {
                        "key": "MN",
                        "value": "Mongolia"
                    },
                    {
                        "key": "ME",
                        "value": "Montenegro"
                    },
                    {
                        "key": "MS",
                        "value": "Montserrat"
                    },
                    {
                        "key": "MA",
                        "value": "Morocco"
                    },
                    {
                        "key": "MZ",
                        "value": "Mozambique"
                    },
                    {
                        "key": "MM",
                        "value": "Myanmar"
                    },
                    {
                        "key": "NA",
                        "value": "Namibia"
                    },
                    {
                        "key": "NR",
                        "value": "Nauru"
                    },
                    {
                        "key": "NP",
                        "value": "Nepal"
                    },
                    {
                        "key": "NL",
                        "value": "Netherlands"
                    },
                    {
                        "key": "NC",
                        "value": "New Caledonia"
                    },
                    {
                        "key": "NZ",
                        "value": "New Zealand"
                    },
                    {
                        "key": "NI",
                        "value": "Nicaragua"
                    },
                    {
                        "key": "NE",
                        "value": "Niger"
                    },
                    {
                        "key": "NG",
                        "value": "Nigeria"
                    },
                    {
                        "key": "NU",
                        "value": "Niue"
                    },
                    {
                        "key": "NF",
                        "value": "Norfolk Island"
                    },
                    {
                        "key": "MP",
                        "value": "Northern Mariana Islands"
                    },
                    {
                        "key": "NO",
                        "value": "Norway"
                    },
                    {
                        "key": "OM",
                        "value": "Oman"
                    },
                    {
                        "key": "PK",
                        "value": "Pakistan"
                    },
                    {
                        "key": "PW",
                        "value": "Palau"
                    },
                    {
                        "key": "PS",
                        "value": "Palestine, State of"
                    },
                    {
                        "key": "PA",
                        "value": "Panama"
                    },
                    {
                        "key": "PG",
                        "value": "Papua New Guinea"
                    },
                    {
                        "key": "PY",
                        "value": "Paraguay"
                    },
                    {
                        "key": "PE",
                        "value": "Peru"
                    },
                    {
                        "key": "PH",
                        "value": "Philippines"
                    },
                    {
                        "key": "PN",
                        "value": "Pitcairn"
                    },
                    {
                        "key": "PL",
                        "value": "Poland"
                    },
                    {
                        "key": "PT",
                        "value": "Portugal"
                    },
                    {
                        "key": "PR",
                        "value": "Puerto Rico"
                    },
                    {
                        "key": "QA",
                        "value": "Qatar"
                    },
                    {
                        "key": "RE",
                        "value": "Réunion"
                    },
                    {
                        "key": "RO",
                        "value": "Romania"
                    },
                    {
                        "key": "RU",
                        "value": "Russian Federation"
                    },
                    {
                        "key": "RW",
                        "value": "Rwanda"
                    },
                    {
                        "key": "BL",
                        "value": "Saint Barthélemy"
                    },
                    {
                        "key": "SH",
                        "value": "Saint Helena, Ascension and Tristan da Cunha"
                    },
                    {
                        "key": "KN",
                        "value": "Saint Kitts and Nevis"
                    },
                    {
                        "key": "LC",
                        "value": "Saint Lucia"
                    },
                    {
                        "key": "MF",
                        "value": "Saint Martin (French part)"
                    },
                    {
                        "key": "PM",
                        "value": "Saint Pierre and Miquelon"
                    },
                    {
                        "key": "VC",
                        "value": "Saint Vincent and the Grenadines"
                    },
                    {
                        "key": "WS",
                        "value": "Samoa"
                    },
                    {
                        "key": "SM",
                        "value": "San Marino"
                    },
                    {
                        "key": "ST",
                        "value": "Sao Tome and Principe"
                    },
                    {
                        "key": "SA",
                        "value": "Saudi Arabia"
                    },
                    {
                        "key": "SN",
                        "value": "Senegal"
                    },
                    {
                        "key": "RS",
                        "value": "Serbia"
                    },
                    {
                        "key": "SC",
                        "value": "Seychelles"
                    },
                    {
                        "key": "SL",
                        "value": "Sierra Leone"
                    },
                    {
                        "key": "SG",
                        "value": "Singapore"
                    },
                    {
                        "key": "SX",
                        "value": "Sint Maarten (Dutch part)"
                    },
                    {
                        "key": "SK",
                        "value": "Slovakia"
                    },
                    {
                        "key": "SI",
                        "value": "Slovenia"
                    },
                    {
                        "key": "SB",
                        "value": "Solomon Islands"
                    },
                    {
                        "key": "SO",
                        "value": "Somalia"
                    },
                    {
                        "key": "ZA",
                        "value": "South Africa"
                    },
                    {
                        "key": "GS",
                        "value": "South Georgia and the South Sandwich Islands"
                    },
                    {
                        "key": "SS",
                        "value": "South Sudan"
                    },
                    {
                        "key": "ES",
                        "value": "Spain"
                    },
                    {
                        "key": "LK",
                        "value": "Sri Lanka"
                    },
                    {
                        "key": "SD",
                        "value": "Sudan"
                    },
                    {
                        "key": "SR",
                        "value": "Suriname"
                    },
                    {
                        "key": "SJ",
                        "value": "Svalbard and Jan Mayen"
                    },
                    {
                        "key": "SZ",
                        "value": "Swaziland"
                    },
                    {
                        "key": "SE",
                        "value": "Sweden"
                    },
                    {
                        "key": "CH",
                        "value": "Switzerland"
                    },
                    {
                        "key": "SY",
                        "value": "Syrian Arab Republic"
                    },
                    {
                        "key": "TW",
                        "value": "Taiwan, Province of China"
                    },
                    {
                        "key": "TJ",
                        "value": "Tajikistan"
                    },
                    {
                        "key": "TZ",
                        "value": "Tanzania, United Republic of"
                    },
                    {
                        "key": "TH",
                        "value": "Thailand"
                    },
                    {
                        "key": "TL",
                        "value": "Timor-Leste"
                    },
                    {
                        "key": "TG",
                        "value": "Togo"
                    },
                    {
                        "key": "TK",
                        "value": "Tokelau"
                    },
                    {
                        "key": "TO",
                        "value": "Tonga"
                    },
                    {
                        "key": "TT",
                        "value": "Trinidad and Tobago"
                    },
                    {
                        "key": "TN",
                        "value": "Tunisia"
                    },
                    {
                        "key": "TR",
                        "value": "Turkey"
                    },
                    {
                        "key": "TM",
                        "value": "Turkmenistan"
                    },
                    {
                        "key": "TC",
                        "value": "Turks and Caicos Islands"
                    },
                    {
                        "key": "TV",
                        "value": "Tuvalu"
                    },
                    {
                        "key": "UG",
                        "value": "Uganda"
                    },
                    {
                        "key": "UA",
                        "value": "404 (not found)"
                    },
                    {
                        "key": "AE",
                        "value": "United Arab Emirates"
                    },
                    {
                        "key": "GB",
                        "value": "United Kingdom"
                    },
                    {
                        "key": "US",
                        "value": "United States"
                    },
                    {
                        "key": "UM",
                        "value": "United States Minor Outlying Islands"
                    },
                    {
                        "key": "UY",
                        "value": "Uruguay"
                    },
                    {
                        "key": "UZ",
                        "value": "Uzbekistan"
                    },
                    {
                        "key": "VU",
                        "value": "Vanuatu"
                    },
                    {
                        "key": "VE",
                        "value": "Venezuela, Bolivarian Republic of"
                    },
                    {
                        "key": "VN",
                        "value": "Viet Nam"
                    },
                    {
                        "key": "VG",
                        "value": "Virgin Islands, British"
                    },
                    {
                        "key": "VI",
                        "value": "Virgin Islands, U.S."
                    },
                    {
                        "key": "WF",
                        "value": "Wallis and Futuna"
                    },
                    {
                        "key": "EH",
                        "value": "Western Sahara"
                    },
                    {
                        "key": "YE",
                        "value": "Yemen"
                    },
                    {
                        "key": "ZM",
                        "value": "Zambia"
                    },
                    {
                        "key": "ZW",
                        "value": "Zimbabwe"
                    },
                    {
                        "key": "Undefined",
                        "value": "👽 Nowhere"
                    }
                ]
            }
        },
        "cardCoverHeight": 100,
        "cardBodyTextLength": 120,
        "filterParams": {
            "isSorting": true,
            "isFiltering": true,
            "filterFields": {
                "title": {
                    "active": true,
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "name": "Item title"
                },
                "country_id": {
                    "active": false,
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "name": "Producing country",
                    "textsearch": "fulltext"
                },
                "price": {
                    "active": true,
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "name": "Price, per pound, $"
                }
            }
        },
        "actions": [
            {
                "sysName": "",
                "id": "12161707383175503",
                "name": "Out of Stock (hide item)",
                "displayAs": "button",
                "buttonIcon": "hide",
                "dropdown": true,
                "formMapping": [
                    {
                        "id": "77131707383205298",
                        "target": "id",
                        "type": "objectField",
                        "value": "id"
                    },
                    {
                        "id": "85161707383210853",
                        "target": "isHidden",
                        "type": "const",
                        "value": "true"
                    }
                ]
            }
        ]
    },
    "tableTitle": "",
    "actions": null,
    "headers": [
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "title",
            "dataType": "string",
            "name": "Item title",
            "id": "21351707312297364",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "isHidden",
            "dataType": "boolean",
            "name": "hidden",
            "id": "45921707312355434",
            "link": "",
            "group": "1707312358289",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "❌ Hidden",
                    "Not hidden"
                ],
                "hideStandardBooleanIcons": true,
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
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "price",
            "dataType": "decimal",
            "name": "Price, per pound, $",
            "id": "71351707312332607",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "description",
            "dataType": "string",
            "name": "Description",
            "id": "48911707312316532",
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
            "format": "markdown",
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "image",
            "dataType": "file",
            "name": "Photo",
            "id": "33781707312304756",
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
            "format": "image",
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "country_id",
            "dataType": "link",
            "name": "Producing country",
            "id": "18281707329973702",
            "link": "countries",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        }
    ],
    "data": [
        {
            "image": "https://api.directual.com/fileUploaded/new-crm/web/903efd7d-b29d-49d1-af08-39dc278cbb96.jpeg",
            "description": "Strawberry, a vibrant fruit bursting with sweetness, delights the senses with its juicy red flesh and floral aroma. Whether eaten fresh or incorporated into various dishes, its irresistible flavor and nutritional benefits make it a cherished treat.",
            "price": 11,
            "id": "f21f7b41-499b-4d2b-8510-66ff25087451",
            "title": "Strawberry",
            "country_id": {
                "id": "RU"
            },
            "isHidden": ""
        },
        {
            "image": "https://api.directual.com/fileUploaded/new-crm/web/3c366218-30af-45ea-83db-eb281b7e55b4.jpeg",
            "description": "Bananas, a beloved fruit with a cheerful yellow peel, bring joy with their creamy texture and sweet flavor. Versatile and nutritious, they're delightful eaten on their own, blended into smoothies, or sliced atop cereal. With each bite, bananas offer a burst of energy and a dose of potassium, making them a favorite snack for health and happiness.",
            "price": 5,
            "id": "bc2a3247-0c22-4b99-9dd2-d8c815d3cb13",
            "title": "Bananas",
            "country_id": {
                "id": "CG"
            },
            "isHidden": ""
        },
        {
            "image": "https://api.directual.com/fileUploaded/new-crm/web/efafb50f-79f8-43b1-ae80-ecff9b62ff97.jpeg",
            "description": "Lemons, vibrant orbs of citrus sunshine, infuse dishes with their tangy zest and refreshing aroma. From adding a splash of brightness to savory recipes to lending their tartness to sweet treats, lemons elevate any dish they grace. With their invigorating flavor and rich vitamin C content, these citrus gems are both a culinary staple and a healthful delight.",
            "price": 8,
            "id": "3154b8de-750a-4285-bada-ecb5a07cdb38",
            "title": "Lemons",
            "country_id": {
                "id": "IT"
            },
            "isHidden": ""
        },
        {
            "image": "https://api.directual.com/fileUploaded/new-crm/web/d46fc342-4db6-40f7-a926-7ec69679f19c.jpeg",
            "description": "Cherries, tiny jewels of sweetness, paint the palate with bursts of vibrant flavor and a hint of tartness. Whether enjoyed freshly plucked from the tree or incorporated into desserts, their deep red hue and succulent flesh offer a tantalizing treat. Cherries, with their juicy goodness and antioxidant-rich profile, embody the essence of summer's bounty, bringing joy with each delightful bite.",
            "price": 14,
            "id": "a19e27eb-f350-4080-b08b-795c951a4c27",
            "title": "Cherry",
            "country_id": {
                "id": "TR"
            },
            "isHidden": ""
        },
        {
            "image": "https://api.directual.com/fileUploaded/new-crm/web/d1154690-d978-4686-b75e-8d4ed34c6bee.jpeg",
            "description": "Grapes, clusters of nature's candy, delight with their juicy orbs bursting with sweetness. Whether savored as a snack or pressed into a refreshing glass of wine, their versatility knows no bounds. With each bite, grapes offer a symphony of flavors, from floral notes to hints of tanginess, making them a beloved fruit for all occasions. Packed with vitamins and antioxidants, grapes not only satisfy the palate but also nourish the body, embodying the essence of natural goodness.",
            "price": 5,
            "id": "644653eb-b3d7-40f0-bdc1-9cce7cd10d29",
            "title": "Grapes",
            "country_id": {
                "id": "FR"
            },
            "isHidden": ""
        },
        {
            "image": "https://api.directual.com/fileUploaded/new-crm/web/6b00b827-0cdb-469f-b964-736b3bfed036.jpeg",
            "description": "Potatoes, humble earthy treasures, offer endless culinary possibilities with their versatile nature. Whether roasted to crispy perfection, mashed into creamy goodness, or sliced into golden fries, their comforting presence graces tables around the world. With each bite, potatoes impart a hearty warmth and satisfying texture, evoking memories of home-cooked meals and shared gatherings. Beyond their delicious taste, potatoes provide essential nutrients and energy, making them a staple ingredient in countless cuisines. In their simplicity and abundance, potatoes stand as a testament to the enduring appeal of wholesome comfort food.",
            "price": 2,
            "id": "098bd901-42f8-4423-bd81-0cb5189b96fe",
            "title": "Potato",
            "country_id": {
                "id": "BY"
            },
            "isHidden": ""
        },
        {
            "image": "https://api.directual.com/fileUploaded/new-crm/web/c8a121e6-71c3-405c-8215-57805bb9ba7f.jpeg",
            "description": "Oranges, radiant spheres of sunshine, brighten both the palate and the spirit with their juicy sweetness. Whether peeled and enjoyed in segments or transformed into freshly squeezed juice, their vibrant flavor invigorates the senses. With each succulent bite, oranges offer a refreshing burst of vitamin C and a hint of tanginess, revitalizing the body and uplifting the soul. From breakfast tables to afternoon snacks, oranges epitomize the essence of zestful indulgence, adding a burst of sunshine to every moment.",
            "price": 8,
            "id": "3e508d9a-a3a8-432a-8e64-7e19642727f3",
            "title": "Oranges",
            "country_id": {
                "id": "ES"
            },
            "isHidden": ""
        },
        {
            "image": "https://api.directual.com/fileUploaded/new-crm/web/05cc260d-eecc-4b22-a97a-fb4a5c29706c.jpeg",
            "description": "Kiwis, petite emerald gems, delight with their vibrant green flesh and tangy-sweet flavor. Whether enjoyed sliced and savored on their own or added to fruit salads for a burst of freshness, their versatility knows no bounds. With each juicy bite, kiwis offer a symphony of tropical notes and a refreshing tartness, awakening the palate with their distinctive taste. Packed with vitamin C and other essential nutrients, kiwis not only tantalize the taste buds but also nourish the body, embodying the essence of wholesome indulgence.",
            "price": 16,
            "isHidden": "",
            "id": "14f5b2ec-02bd-405f-8ccd-8bd995d71707",
            "title": "Kiwi",
            "country_id": {
                "id": "AU"
            }
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99298853
        ],
        [
            "title",
            99298853
        ],
        [
            "isHidden",
            99298853
        ],
        [
            "price",
            99298853
        ],
        [
            "description",
            99298853
        ],
        [
            "image",
            99298853
        ],
        [
            "country_id.id",
            99298859
        ],
        [
            "country_id.country",
            99298859
        ]
    ],
    "writeFields": [
        "id",
        "isHidden",
        "price",
        "description",
        "image",
        "title",
        "country_id"
    ],
    "structures": {
        "99298853": {
            "networkID": 20362,
            "sysName": "items",
            "name": "Items",
            "id": 99298853,
            "dateCreated": "2024-02-07T13:24:38Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"Item title\",\"dataType\":\"string\",\"id\":\"21351707312297364\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"image\",\"name\":\"Photo\",\"dataType\":\"file\",\"id\":\"33781707312304756\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"48911707312316532\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"price\",\"name\":\"Price, per pound, $\",\"dataType\":\"decimal\",\"id\":\"71351707312332607\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"price_text\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"79901707330555238\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"country_id\",\"name\":\"Producing country\",\"dataType\":\"link\",\"id\":\"18281707329973702\",\"link\":\"countries\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isHidden\",\"name\":\"hidden\",\"dataType\":\"boolean\",\"id\":\"45921707312355434\",\"link\":\"\",\"group\":\"1707312358289\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"❌ Hidden\",\"Not hidden\"],\"hideStandardBooleanIcons\":true,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1707312358289,\"name\":\"Administration\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"title\"},{\"sysName\":\"price_text\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-02-07T18:29:36Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33797142
        },
        "99298859": {
            "networkID": 20362,
            "sysName": "countries",
            "name": "countries",
            "id": 99298859,
            "dateCreated": "2024-02-07T18:18:26Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Name\",\"name\":\"Country\",\"dataType\":\"string\",\"id\":\"35581708093955587\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"Name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-02-16T14:33:16Z",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33797143
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "isHidden",
            "dataType": "boolean",
            "name": "hidden",
            "id": "45921707312355434",
            "link": "",
            "group": "1707312358289",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "❌ Hidden",
                    "Not hidden"
                ],
                "hideStandardBooleanIcons": true,
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
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "price",
            "dataType": "decimal",
            "name": "Price, per pound, $",
            "id": "71351707312332607",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "description",
            "dataType": "string",
            "name": "Description",
            "id": "48911707312316532",
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
            "format": "markdown",
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "image",
            "dataType": "file",
            "name": "Photo",
            "id": "33781707312304756",
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
            "format": "image",
            "formatOptions": null,
            "groupName": null,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "title",
            "dataType": "string",
            "name": "Item title",
            "id": "21351707312297364",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "country_id",
            "dataType": "link",
            "name": "Producing country",
            "id": "18281707329973702",
            "link": "countries",
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
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "typeVariable": {},
            "json": false,
            "array": false
        }
    ],
    "quickSearch": "false",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": null
}

let authExample = {
  "isAuth": false,
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    data: exampleTable,
    auth: authExample,
    locale: 'ENG',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
  },
};
