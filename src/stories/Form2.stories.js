import 'mapbox-gl/dist/mapbox-gl.css'
import FpsForm2 from '../components/fps/dataentry/form/FpsForm2'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Multistep Form',
  component: FpsForm2,
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

let exampleForm = {
    "sl": "fpsform2",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "steps": [
            {
                "id": "step_one",
                "sysName": "default",
                "elements": [
                    {
                        "id": "elmnt_1713599636424",
                        "type": "input",
                        "_input_fields": [
                            {
                                "id": "17135996381740.002302331314242141012402",
                                "_field": "colour",
                                "_field_link_type": "radio",
                                "_field_link_radio_layout": "horizontal",
                                "_field_arrayLink_endpoint": "getGenders"
                            },
                            {
                                "id": "17137878484500.033242010244001343241032",
                                "_field": "phone"
                            },
                            {
                                "id": "17137885266220.02002130211223414100002",
                                "_field": "email"
                            }
                        ],
                        "_input_fields_in_a_row": 3
                    },
                    {
                        "id": "elmnt_1713795806148",
                        "type": "hint",
                        "hintTitle": "Внимание!",
                        "_conditionalView": true,
                        "_conditionalView_field": "FormState.message",
                        "_conditionalView_operator": "isNotNull",
                        "hintText": "{{FormState.message}}"
                    },
                    {
                        "id": "elmnt_1713858134856",
                        "type": "submit",
                        "submitLabel": "Поехали, блять",
                        "submitIcon": "babai"
                    }
                ],
                "CSSclass": "hello_ebta",
                "SecionGap": 0,
                "sectionGap": null
            },
            {
                "id": "step_submitted",
                "sysName": "submitted",
                "elements": [
                    {
                        "id": "elmnt_1712052683797",
                        "type": "hint",
                        "hintColor": "ok",
                        "hintTitle": "Успех",
                        "hintText": "Ваша заявка отправлена"
                    },
                    {
                        "id": "elmnt_1713853140968",
                        "type": "redirect",
                        "redirect_delay": 3,
                        "redirect_url": "../{{email}}",
                        "redirect_urlRaw": true
                    }
                ]
            }
        ],
        "actions": [
            {
                "id": "action_1712579859993",
                "name": "еби хохлов спасай Россию",
                "endpoint": "postAction",
                "mapping": [
                    {
                        "id": "mapping_1712596178548",
                        "value": "FormState.step",
                        "field": "payload"
                    },
                    {
                        "id": "mapping_1713529734054",
                        "field": "payload2",
                        "value": "colour"
                    }
                ],
                "resetModel": false,
                "actionType": "endpoint"
            },
            {
                "id": "action_1713856550278",
                "name": "submit",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1713856557259",
                        "field": "FormState.step",
                        "value": "submitted"
                    }
                ]
            },
            {
                "id": "action_1713856583239",
                "name": "reset model",
                "actionType": "state",
                "stateMapping": [
                    {
                        "id": "stateMapping1713856588412",
                        "field": "FormState.message",
                        "value": "хуй пизда джигурда"
                    }
                ],
                "resetModel": true
            }
        ],
        "hideHint": true,
        "form_title": "",
        "form_description": "",
        "form_maxWidth": 500,
        "state": {
            "step": "default",
            "message": ""
        },
        "general": {
            "edittingOn": false,
            "showState": true,
            "showModel": true
        },
        "hideActionsHint": true
    },
    "tableTitle": null,
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
            "json": false,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        }
    ],
    "data": [
        {
            "id": "cfeba119-ae93-4367-9e61-1f6bf44ee879"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99305059
        ]
    ],
    "writeFields": [
        "colour",
        "phone",
        "email"
    ],
    "structures": {
        "99305059": {
            "networkID": 20570,
            "sysName": "form",
            "name": "form",
            "id": 99305059,
            "dateCreated": "2024-04-09T12:33:05Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"strng2\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"10601712667070319\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"number\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"13951713448448008\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"radio\",\"name\":\"radio gaga\",\"dataType\":\"json\",\"id\":\"14221713448588826\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option!\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOption\":true,\"customOptionPlaceholder\":\"aaaa\",\"range\":{},\"customOptionType\":\"number\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"1\",\"label\":\"2\"},{\"value\":\"3\",\"label\":\"4\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"html\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"15411713448342176\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"slider\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"15591713448678409\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"slider\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"mkd\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"18161713448334064\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"22871713448474147\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"array\",\"name\":\"\",\"dataType\":\"array\",\"id\":\"24081713448468108\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"range\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"30641713448702454\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":37,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"pos\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"37921713448453906\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"range2\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"38791713448708658\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":38,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"\",\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"max\":100,\"min\":-100,\"step\":2},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"decimal\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"39881713448462277\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"bool_false\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"41271712862400127\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Ебануть по Киеву 🇺🇦\",\"Ебануть по Лондону 🇬🇧\"],\"hideStandardBooleanIcons\":true,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"string\",\"name\":\"Строка\",\"dataType\":\"string\",\"id\":\"47481712665998001\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"Gender\",\"name\":\"Кого читаем?\",\"dataType\":\"link\",\"id\":\"50871713599548844\",\"link\":\"genders\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":39,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"arrayLink\",\"name\":\"Много ссылог\",\"dataType\":\"arrayLink\",\"id\":\"52411712666018687\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"youtube\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"53921713448440318\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"youTube\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"date2\",\"name\":\"date 2\",\"dataType\":\"date\",\"id\":\"57791713448476983\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ko\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM D,\",\"timeFormat\":\" hh:mm a\",\"isUTC\":\"true\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"oper\",\"name\":\"\",\"dataType\":\"operator\",\"id\":\"60161713448504823\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"file\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"66671713448518549\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"chb2\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"70791713448567478\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOption\":true,\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"aa\",\"label\":\"bb\"},{\"value\":\"cc\",\"label\":\"dd\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"email\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"76631713448401631\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"image\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"77251713448536448\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"rad\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"77331713448582086\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"pwd\",\"name\":\"pass\",\"dataType\":\"string\",\"id\":\"77671713448415916\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"password\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"user\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"78561712733801638\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"bool_true\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"81281712862392526\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"link\",\"name\":\"Писатели\",\"dataType\":\"link\",\"id\":\"82041712666002528\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"linkType\":true},{\"sysName\":\"urlParam\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"82231712733793473\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"images\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"83011713448542937\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"chb\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"84901713448560435\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"weblink\",\"name\":\"web link\",\"dataType\":\"string\",\"id\":\"89161713448428967\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"phone\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"90381713448410310\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"geo2\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"90391713448296348\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"geo\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"mapToken\":\"pk.eyJ1IjoiZGlyZWN0dWFsMTIzIiwiYSI6ImNscXkxZmZvOTBrNW4ya21pOXRyM2FqY2QifQ.ECQA2moC4r6-Zb0eAtTXpw\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"colour\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"97561713448423014\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"geo\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"98071713448287709\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"geo\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"files\",\"name\":\"FILES\",\"dataType\":\"file\",\"id\":\"98531713448528908\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"slider2\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"98791713448686057\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":36,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"slider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"aa\",\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":10,\"max\":1000,\"step\":1},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false},{\"sysName\":\"json\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"99441713448552801\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"linkType\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-20T07:52:51Z",
            "createBy": 21,
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
                "json": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
        {
            "sysName": "colour",
            "dataType": "string",
            "name": "",
            "id": "97561713448423014",
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
            "format": "color",
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "phone",
            "dataType": "string",
            "name": "",
            "id": "90381713448410310",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "phone",
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        },
        {
            "sysName": "email",
            "dataType": "string",
            "name": "",
            "id": "76631713448401631",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "email",
            "formatOptions": {},
            "groupName": null,
            "json": false,
            "linkOrArrayLinkType": false,
            "typeVariable": {},
            "arrayLink": false,
            "indexExists": false,
            "linkType": false,
            "array": false
        }
    ],
    "quickSearch": null,
    "httpParams": null,
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": "Мультишаговая форма"
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
    data: exampleForm,
    auth: authExample,
    locale: 'ESP',
    onChange: value => console.log(value),
  },
};
