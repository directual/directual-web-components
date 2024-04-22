import 'mapbox-gl/dist/mapbox-gl.css'
import FpsForm from '../components/fps/dataentry/form/FpsForm'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Old Form',
  component: FpsForm,
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
    "sl": "form1",
    "formName": "",
    "formDesc": "",
    "formButton": "Отправить данные",
    "placeholder": "false",
    "maxWidth": "",
    "formButtonResubmit": null,
    "params": {
        "result": {
            "resultTitleField": "result_title",
            "resultMessageField": "result_text",
            "isSuccessField": "result"
        },
        "useEditing": true,
        "auth": {
            "isPerson": false
        },
        "data": {
            "readFields": [
                {
                    "fieldSysName": "account",
                    "fetch": [],
                    "sysName": "account",
                    "name": "№ расчётного счета",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "additional_ageement",
                    "fetch": [],
                    "sysName": "additional_ageement",
                    "name": "Доп соглашение о частичной компенсации",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "adress_double",
                    "fetch": [],
                    "sysName": "adress_double",
                    "name": "Адрес проживания совпадает с адресом прописки",
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
                            "Да",
                            "Нет"
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "agree_personal",
                    "fetch": [],
                    "sysName": "agree_personal",
                    "name": "Согласен на обработку персональных данных",
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
                            "Согласен",
                            "Не согласен"
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "app",
                    "fetch": [],
                    "sysName": "app",
                    "name": "Квартира",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "app1",
                    "fetch": [],
                    "sysName": "app1",
                    "name": "Квартира",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "article",
                    "fetch": [],
                    "sysName": "article",
                    "name": "Артикул, модель ",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "bank",
                    "fetch": [],
                    "sysName": "bank",
                    "name": "Наименование банка",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "bik",
                    "fetch": [],
                    "sysName": "bik",
                    "name": "БИК банка",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "card",
                    "fetch": [],
                    "sysName": "card",
                    "name": "Номер банковской карты",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "check_photo",
                    "fetch": [],
                    "sysName": "check_photo",
                    "name": "Фото чека",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "city",
                    "fetch": [],
                    "sysName": "city",
                    "name": "Город",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "city1",
                    "fetch": [],
                    "sysName": "city1",
                    "name": "Город",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "code_issued",
                    "fetch": [],
                    "sysName": "code_issued",
                    "name": "Код подразделения",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "correspondent_account",
                    "fetch": [],
                    "sysName": "correspondent_account",
                    "name": "№ счета корреспондента",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "cost_metod",
                    "fetch": [],
                    "sysName": "cost_metod",
                    "name": "Способ оплаты",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "date_of_birth",
                    "fetch": [],
                    "sysName": "date_of_birth",
                    "name": "Дата рождения",
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
                    "fieldSysName": "date_of_defect",
                    "fetch": [],
                    "sysName": "date_of_defect",
                    "name": "Дата обнаружения неисправности",
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
                    "fieldSysName": "date_of_sale",
                    "fetch": [],
                    "sysName": "date_of_sale",
                    "name": "Дата продажи",
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
                    "fieldSysName": "defect",
                    "fetch": [],
                    "sysName": "defect",
                    "name": "Описание неисправности",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "destruction_photo",
                    "fetch": [],
                    "sysName": "destruction_photo",
                    "name": "Фото разрушения товара",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "email",
                    "fetch": [],
                    "sysName": "email",
                    "name": "E-mail",
                    "dataType": "string",
                    "format": "email",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "fio",
                    "fetch": [],
                    "sysName": "fio",
                    "name": "ФИО",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "fio_f",
                    "fetch": [],
                    "sysName": "fio_f",
                    "name": "Фамилия",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "fio_i",
                    "fetch": [],
                    "sysName": "fio_i",
                    "name": "Имя",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "fio_o",
                    "fetch": [],
                    "sysName": "fio_o",
                    "name": "Отчество",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form1",
                    "fetch": [],
                    "sysName": "form1",
                    "name": "form1",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form2",
                    "fetch": [],
                    "sysName": "form2",
                    "name": "form2",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form3",
                    "fetch": [],
                    "sysName": "form3",
                    "name": "form3",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form4",
                    "fetch": [],
                    "sysName": "form4",
                    "name": "form4",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form5",
                    "fetch": [],
                    "sysName": "form5",
                    "name": "form5",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form6",
                    "fetch": [],
                    "sysName": "form6",
                    "name": "form6",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form7",
                    "fetch": [],
                    "sysName": "form7",
                    "name": "form7",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form8",
                    "fetch": [],
                    "sysName": "form8",
                    "name": "form8",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "house",
                    "fetch": [],
                    "sysName": "house",
                    "name": "Дом",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "house1",
                    "fetch": [],
                    "sysName": "house1",
                    "name": "Дом",
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
                    "fieldSysName": "issued_by",
                    "fetch": [],
                    "sysName": "issued_by",
                    "name": "Кем выдан",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "marride_return_doc",
                    "fetch": [],
                    "sysName": "marride_return_doc",
                    "name": "Накладная на возврат брака",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "name",
                    "fetch": [],
                    "sysName": "name",
                    "name": "Имя владельца карты",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "phone",
                    "fetch": [],
                    "sysName": "phone",
                    "name": "Номер телефона",
                    "dataType": "string",
                    "format": "phone",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "phone_cont",
                    "fetch": [],
                    "sysName": "phone_cont",
                    "name": "Контактный номер телефона",
                    "dataType": "string",
                    "format": "phone",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "pick_up_point",
                    "fetch": [],
                    "sysName": "pick_up_point",
                    "name": "Адрес пункта выдачи заказов",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "place_of_sale",
                    "fetch": [],
                    "sysName": "place_of_sale",
                    "name": "Где был куплен товар",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "postcode",
                    "fetch": [],
                    "sysName": "postcode",
                    "name": "Почтовый индекс",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "postcode1",
                    "fetch": [],
                    "sysName": "postcode1",
                    "name": "Почтовый индекс",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "product_cost",
                    "fetch": [],
                    "sysName": "product_cost",
                    "name": "Стоимость товара",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "product_name",
                    "fetch": [],
                    "sysName": "product_name",
                    "name": "Наименование товара",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "product_photo",
                    "fetch": [],
                    "sysName": "product_photo",
                    "name": "Фото товара",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "result",
                    "fetch": [],
                    "sysName": "result",
                    "name": "result",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "result_text",
                    "fetch": [],
                    "sysName": "result_text",
                    "name": "result_text",
                    "dataType": "string",
                    "format": "html",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "result_title",
                    "fetch": [],
                    "sysName": "result_title",
                    "name": "result_title",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "return_request_doc",
                    "fetch": [],
                    "sysName": "return_request_doc",
                    "name": "Заявление на возврат денег",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "serial",
                    "fetch": [],
                    "sysName": "serial",
                    "name": "Серийный номер",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "serial_number",
                    "fetch": [],
                    "sysName": "serial_number",
                    "name": "Серия и номер паспорта",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "street",
                    "fetch": [],
                    "sysName": "street",
                    "name": "Улица",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "street1",
                    "fetch": [],
                    "sysName": "street1",
                    "name": "Улица",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "url",
                    "fetch": [],
                    "sysName": "url",
                    "name": "url",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "when_issued",
                    "fetch": [],
                    "sysName": "when_issued",
                    "name": "Когда выдан",
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
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "account",
                    "fetch": [],
                    "sysName": "account",
                    "name": "№ расчётного счета",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "additional_ageement",
                    "fetch": [],
                    "sysName": "additional_ageement",
                    "name": "Доп соглашение о частичной компенсации",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "adress_double",
                    "fetch": [],
                    "sysName": "adress_double",
                    "name": "Адрес проживания совпадает с адресом прописки",
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
                            "Да",
                            "Нет"
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "agree_personal",
                    "fetch": [],
                    "sysName": "agree_personal",
                    "name": "Согласен на обработку персональных данных",
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
                            "Согласен",
                            "Не согласен"
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "app",
                    "fetch": [],
                    "sysName": "app",
                    "name": "Квартира",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "app1",
                    "fetch": [],
                    "sysName": "app1",
                    "name": "Квартира",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "article",
                    "fetch": [],
                    "sysName": "article",
                    "name": "Артикул, модель ",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "bank",
                    "fetch": [],
                    "sysName": "bank",
                    "name": "Наименование банка",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "bik",
                    "fetch": [],
                    "sysName": "bik",
                    "name": "БИК банка",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "card",
                    "fetch": [],
                    "sysName": "card",
                    "name": "Номер банковской карты",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "check_photo",
                    "fetch": [],
                    "sysName": "check_photo",
                    "name": "Фото чека",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "city",
                    "fetch": [],
                    "sysName": "city",
                    "name": "Город",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "city1",
                    "fetch": [],
                    "sysName": "city1",
                    "name": "Город",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "code_issued",
                    "fetch": [],
                    "sysName": "code_issued",
                    "name": "Код подразделения",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "correspondent_account",
                    "fetch": [],
                    "sysName": "correspondent_account",
                    "name": "№ счета корреспондента",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "cost_metod",
                    "fetch": [],
                    "sysName": "cost_metod",
                    "name": "Способ оплаты",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "date_of_birth",
                    "fetch": [],
                    "sysName": "date_of_birth",
                    "name": "Дата рождения",
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
                    "fieldSysName": "date_of_defect",
                    "fetch": [],
                    "sysName": "date_of_defect",
                    "name": "Дата обнаружения неисправности",
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
                    "fieldSysName": "date_of_sale",
                    "fetch": [],
                    "sysName": "date_of_sale",
                    "name": "Дата продажи",
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
                    "fieldSysName": "defect",
                    "fetch": [],
                    "sysName": "defect",
                    "name": "Описание неисправности",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "destruction_photo",
                    "fetch": [],
                    "sysName": "destruction_photo",
                    "name": "Фото разрушения товара",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "fio",
                    "fetch": [],
                    "sysName": "fio",
                    "name": "ФИО",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "fio_f",
                    "fetch": [],
                    "sysName": "fio_f",
                    "name": "Фамилия",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "fio_i",
                    "fetch": [],
                    "sysName": "fio_i",
                    "name": "Имя",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "fio_o",
                    "fetch": [],
                    "sysName": "fio_o",
                    "name": "Отчество",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "form_current",
                    "fetch": [],
                    "sysName": "form_current",
                    "name": "form_current",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "house",
                    "fetch": [],
                    "sysName": "house",
                    "name": "Дом",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "house1",
                    "fetch": [],
                    "sysName": "house1",
                    "name": "Дом",
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
                    "fieldSysName": "issued_by",
                    "fetch": [],
                    "sysName": "issued_by",
                    "name": "Кем выдан",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "marride_return_doc",
                    "fetch": [],
                    "sysName": "marride_return_doc",
                    "name": "Накладная на возврат брака",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "name",
                    "fetch": [],
                    "sysName": "name",
                    "name": "Имя владельца карты",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "phone",
                    "fetch": [],
                    "sysName": "phone",
                    "name": "Номер телефона",
                    "dataType": "string",
                    "format": "phone",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "phone_cont",
                    "fetch": [],
                    "sysName": "phone_cont",
                    "name": "Контактный номер телефона",
                    "dataType": "string",
                    "format": "phone",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "pick_up_point",
                    "fetch": [],
                    "sysName": "pick_up_point",
                    "name": "Адрес пункта выдачи заказов",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "place_of_sale",
                    "fetch": [],
                    "sysName": "place_of_sale",
                    "name": "Где был куплен товар",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "postcode",
                    "fetch": [],
                    "sysName": "postcode",
                    "name": "Почтовый индекс",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "postcode1",
                    "fetch": [],
                    "sysName": "postcode1",
                    "name": "Почтовый индекс",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "product_cost",
                    "fetch": [],
                    "sysName": "product_cost",
                    "name": "Стоимость товара",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "product_name",
                    "fetch": [],
                    "sysName": "product_name",
                    "name": "Наименование товара",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "product_photo",
                    "fetch": [],
                    "sysName": "product_photo",
                    "name": "Фото товара",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "return_request_doc",
                    "fetch": [],
                    "sysName": "return_request_doc",
                    "name": "Заявление на возврат денег",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "serial",
                    "fetch": [],
                    "sysName": "serial",
                    "name": "Серийный номер",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "serial_number",
                    "fetch": [],
                    "sysName": "serial_number",
                    "name": "Серия и номер паспорта",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "street",
                    "fetch": [],
                    "sysName": "street",
                    "name": "Улица",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "street1",
                    "fetch": [],
                    "sysName": "street1",
                    "name": "Улица",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "url",
                    "fetch": [],
                    "sysName": "url",
                    "name": "url",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "when_issued",
                    "fetch": [],
                    "sysName": "when_issued",
                    "name": "Когда выдан",
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
                }
            ],
            "fields": {
                "account": {
                    "id": "account",
                    "content": "№ расчётного счета",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "additional_ageement": {
                    "id": "additional_ageement",
                    "content": "Доп соглашение о частичной компенсации",
                    "type": "field",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "adress_double": {
                    "id": "adress_double",
                    "content": "Адрес проживания совпадает с адресом прописки",
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
                            "Да",
                            "Нет"
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "agree_personal": {
                    "id": "agree_personal",
                    "content": "Согласен на обработку персональных данных",
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
                            "Согласен",
                            "Не согласен"
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
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "app": {
                    "id": "app",
                    "content": "Квартира",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "app1": {
                    "id": "app1",
                    "content": "Квартира",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "article": {
                    "id": "article",
                    "content": "Артикул, модель ",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "bank": {
                    "id": "bank",
                    "content": "Наименование банка",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "bik": {
                    "id": "bik",
                    "content": "БИК банка",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "card": {
                    "id": "card",
                    "content": "Номер банковской карты",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "check_photo": {
                    "id": "check_photo",
                    "content": "Фото чека",
                    "type": "field",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "city": {
                    "id": "city",
                    "content": "Город",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "city1": {
                    "id": "city1",
                    "content": "Город",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "code_issued": {
                    "id": "code_issued",
                    "content": "Код подразделения",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "correspondent_account": {
                    "id": "correspondent_account",
                    "content": "№ счета корреспондента",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "cost_metod": {
                    "id": "cost_metod",
                    "content": "Способ оплаты",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "date_of_birth": {
                    "id": "date_of_birth",
                    "content": "Дата рождения",
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
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "date_of_defect": {
                    "id": "date_of_defect",
                    "content": "Дата обнаружения неисправности",
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
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "date_of_sale": {
                    "id": "date_of_sale",
                    "content": "Дата продажи",
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
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "defect": {
                    "id": "defect",
                    "content": "Описание неисправности",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "destruction_photo": {
                    "id": "destruction_photo",
                    "content": "Фото разрушения товара",
                    "type": "field",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "email": {
                    "id": "email",
                    "content": "E-mail",
                    "type": "field",
                    "dataType": "string",
                    "format": "email",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "fio": {
                    "id": "fio",
                    "content": "ФИО",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "fio_f": {
                    "id": "fio_f",
                    "content": "Фамилия",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "fio_i": {
                    "id": "fio_i",
                    "content": "Имя",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "fio_o": {
                    "id": "fio_o",
                    "content": "Отчество",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "form1": {
                    "id": "form1",
                    "content": "form1",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "form2": {
                    "id": "form2",
                    "content": "form2",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "form3": {
                    "id": "form3",
                    "content": "form3",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "form4": {
                    "id": "form4",
                    "content": "form4",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "form5": {
                    "id": "form5",
                    "content": "form5",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "form6": {
                    "id": "form6",
                    "content": "form6",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "form7": {
                    "id": "form7",
                    "content": "form7",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "form8": {
                    "id": "form8",
                    "content": "form8",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "house": {
                    "id": "house",
                    "content": "Дом",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "house1": {
                    "id": "house1",
                    "content": "Дом",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
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
                    "link": ""
                },
                "issued_by": {
                    "id": "issued_by",
                    "content": "Кем выдан",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "marride_return_doc": {
                    "id": "marride_return_doc",
                    "content": "Накладная на возврат брака",
                    "type": "field",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "name": {
                    "id": "name",
                    "content": "Имя владельца карты",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "phone": {
                    "id": "phone",
                    "content": "Номер телефона",
                    "type": "field",
                    "dataType": "string",
                    "format": "phone",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "phone_cont": {
                    "id": "phone_cont",
                    "content": "Контактный номер телефона",
                    "type": "field",
                    "dataType": "string",
                    "format": "phone",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "pick_up_point": {
                    "id": "pick_up_point",
                    "content": "Адрес пункта выдачи заказов",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "place_of_sale": {
                    "id": "place_of_sale",
                    "content": "Где был куплен товар",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "postcode": {
                    "id": "postcode",
                    "content": "Почтовый индекс",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "postcode1": {
                    "id": "postcode1",
                    "content": "Почтовый индекс",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "product_cost": {
                    "id": "product_cost",
                    "content": "Стоимость товара",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "product_name": {
                    "id": "product_name",
                    "content": "Наименование товара",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "product_photo": {
                    "id": "product_photo",
                    "content": "Фото товара",
                    "type": "field",
                    "dataType": "file",
                    "format": "multipleImages",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "result": {
                    "id": "result",
                    "content": "result",
                    "type": "field",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "result_text": {
                    "id": "result_text",
                    "content": "result_text",
                    "type": "field",
                    "dataType": "string",
                    "format": "html",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "result_title": {
                    "id": "result_title",
                    "content": "result_title",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null
                },
                "return_request_doc": {
                    "id": "return_request_doc",
                    "content": "Заявление на возврат денег",
                    "type": "field",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "serial": {
                    "id": "serial",
                    "content": "Серийный номер",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "serial_number": {
                    "id": "serial_number",
                    "content": "Серия и номер паспорта",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "street": {
                    "id": "street",
                    "content": "Улица",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "street1": {
                    "id": "street1",
                    "content": "Улица",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "url": {
                    "id": "url",
                    "content": "url",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "when_issued": {
                    "id": "when_issued",
                    "content": "Когда выдан",
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
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "form_current": {
                    "id": "form_current",
                    "content": "form_current",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "link": ""
                }
            },
            "fieldParams": {
                "account": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "additional_ageement": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "adress_double": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "article": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Например: 52590 Dark Agent GM-590L"
                },
                "bank": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bik": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "card": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "check_photo": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Необходимо сфотографировать или сделать скриншот чека"
                },
                "city": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "city1": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "code_issued": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "correspondent_account": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "cost_metod": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Например: \"Наличные, карта, безналичные\""
                },
                "date_of_birth": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": false
                },
                "date_of_defect": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Необходимо указать дату, когда была обнаружена неисправность"
                },
                "date_of_sale": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "deal": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "defect": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Например: \"Не работает колесо прокрутки\""
                },
                "destruction_photo": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "email": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "fio": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false,
                    "descriptionFlag": false,
                    "description": "Введите полностью, например: \"Иванов Иван Иванович\" (строго, как в паспорте)"
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "issued_by": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "marride_return_doc": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "name": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "phone": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Только цифры без пробелов: 8ХХХХХХХХХХ"
                },
                "place_of_sale": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Например: \"ozon.ru\""
                },
                "postcode": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "product_cost": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Здесь нужно указать стоимость товара, которая указана в чеке"
                },
                "product_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Например: \"Проводная игровая мышь\""
                },
                "product_photo": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Необходимо сфотографировать неисправный товар и приложить его фото"
                },
                "result": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "result_text": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "result_title": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "return_request_doc": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "serial": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false,
                    "descriptionFlag": true,
                    "description": "Например: \"12345\" (если у товара нет серийного номера оставьте поле  пустым)"
                },
                "serial_number": {
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
                "street": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "street1": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "url": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "when_issued": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": false
                },
                "answer": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "request": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "form_current": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": "form1",
                    "disableEditing": true
                },
                "form1": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "form2": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "form3": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "form4": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "form5": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "form6": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "form7": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "form8": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "agree_personal": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "app": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "app1": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "fio_f": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Введите полностью, как в паспорте, например: \"Иванов\""
                },
                "fio_i": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Введите полностью, как в паспорте, например: \"Иван\""
                },
                "fio_o": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Введите полностью, как в паспорте, например: \"Иванович\""
                },
                "house": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "house1": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "postcode1": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "phone_cont": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "pick_up_point": {
                    "include": false,
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
                        "form_current",
                        "account",
                        "additional_ageement",
                        "adress_double",
                        "bank",
                        "bik",
                        "card",
                        "city",
                        "city1",
                        "code_issued",
                        "correspondent_account",
                        "date_of_birth",
                        "issued_by",
                        "name",
                        "postcode",
                        "result_text",
                        "result_title",
                        "serial_number",
                        "street",
                        "street1",
                        "url"
                    ]
                },
                "11101661346202665": {
                    "id": "11101661346202665",
                    "title": "Контактные данные",
                    "fieldIds": [
                        "fio",
                        "fio_f",
                        "fio_i",
                        "fio_o",
                        "phone",
                        "form1",
                        "form2",
                        "form3",
                        "form4",
                        "form5",
                        "form6",
                        "form7",
                        "form8"
                    ],
                    "display": true,
                    "cond": [
                        {
                            "id": "29321661489626124",
                            "field": "email",
                            "value": "isNotNull"
                        },
                        {
                            "id": "96901661492910899",
                            "field": "form1",
                            "value": "null"
                        },
                        {
                            "id": "80461661713700820",
                            "field": "agree_personal",
                            "value": "true"
                        }
                    ]
                },
                "22031661346249869": {
                    "id": "22031661346249869",
                    "title": "Данные о купленном товаре",
                    "fieldIds": [
                        "product_name",
                        "article",
                        "serial",
                        "product_cost",
                        "date_of_sale",
                        "cost_metod",
                        "place_of_sale",
                        "check_photo"
                    ],
                    "display": true,
                    "cond": [
                        {
                            "id": "72981661489934430",
                            "field": "email",
                            "value": "isNotNull"
                        },
                        {
                            "id": "13671661492958820",
                            "field": "form1",
                            "value": "null"
                        },
                        {
                            "id": "84081661713744363",
                            "field": "agree_personal",
                            "value": "true"
                        }
                    ]
                },
                "43061661346306393": {
                    "id": "43061661346306393",
                    "title": "Данные о неисправности",
                    "fieldIds": [
                        "defect",
                        "product_photo",
                        "date_of_defect"
                    ],
                    "display": true,
                    "cond": [
                        {
                            "id": "55871661489946418",
                            "field": "email",
                            "value": "isNotNull"
                        },
                        {
                            "id": "22441661492978853",
                            "field": "form1",
                            "value": "null"
                        },
                        {
                            "id": "84101661713753989",
                            "field": "agree_personal",
                            "value": "true"
                        }
                    ]
                },
                "99471661489995797": {
                    "id": "99471661489995797",
                    "title": "Ошибка! Данная форма уже не актуальна, т.к. она была заполнена ранее.",
                    "fieldIds": [
                        "result"
                    ],
                    "display": true,
                    "cond": [
                        {
                            "id": "72741661493009644",
                            "field": "form1",
                            "value": "isNotNull"
                        }
                    ]
                },
                "55591661493030241": {
                    "id": "55591661493030241",
                    "title": "Ошибка! URL не верный.",
                    "fieldIds": [
                        "when_issued"
                    ],
                    "display": true,
                    "cond": [
                        {
                            "id": "12931661493065372",
                            "field": "email",
                            "value": "null"
                        }
                    ]
                },
                "98321661713594834": {
                    "id": "98321661713594834",
                    "title": "Персональные данные",
                    "fieldIds": [
                        "email",
                        "agree_personal",
                        "destruction_photo",
                        "marride_return_doc",
                        "return_request_doc",
                        "app",
                        "app1",
                        "house",
                        "house1",
                        "postcode1"
                    ],
                    "display": true,
                    "cond": [
                        {
                            "id": "96771661713640085",
                            "field": "email",
                            "value": "isNotNull"
                        },
                        {
                            "id": "66801661713650178",
                            "field": "form1",
                            "value": "null"
                        }
                    ]
                },
                "45701668987684585": {
                    "id": "45701668987684585",
                    "title": "Данная форма предназначена для выполнения проверки, подлежит ли данный товар гарантийному обслуживанию или нет.                                                                                                                                    ",
                    "fieldIds": [
                        "id",
                        "phone_cont",
                        "pick_up_point"
                    ],
                    "display": true,
                    "cond": [
                        {
                            "id": "15951668987753972",
                            "field": "email",
                            "value": "isNotNull"
                        },
                        {
                            "id": "88941668987765826",
                            "field": "form1",
                            "value": "null"
                        }
                    ]
                }
            },
            "columnOrder": [
                "45701668987684585",
                "98321661713594834",
                "11101661346202665",
                "22031661346249869",
                "43061661346306393",
                "99471661489995797",
                "55591661493030241",
                "tab-1"
            ]
        },
        "fields": {
            "account": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "additional_ageement": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "adress_double": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "article": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Например: 52590 Dark Agent GM-590L"
            },
            "bank": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "bik": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "card": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "check_photo": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Необходимо сфотографировать или сделать скриншот чека"
            },
            "city": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "city1": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "code_issued": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "correspondent_account": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "cost_metod": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Например: \"Наличные, карта, безналичные\""
            },
            "date_of_birth": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "disableEditing": false
            },
            "date_of_defect": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "disableEditing": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Необходимо указать дату, когда была обнаружена неисправность"
            },
            "date_of_sale": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true
            },
            "deal": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "defect": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Например: \"Не работает колесо прокрутки\""
            },
            "destruction_photo": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "email": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "fio": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": false,
                "descriptionFlag": false,
                "description": "Введите полностью, например: \"Иванов Иван Иванович\" (строго, как в паспорте)"
            },
            "id": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "issued_by": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "marride_return_doc": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "name": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "phone": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Только цифры без пробелов: 8ХХХХХХХХХХ"
            },
            "place_of_sale": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Например: \"ozon.ru\""
            },
            "postcode": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "product_cost": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Здесь нужно указать стоимость товара, которая указана в чеке"
            },
            "product_name": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Например: \"Проводная игровая мышь\""
            },
            "product_photo": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Необходимо сфотографировать неисправный товар и приложить его фото"
            },
            "result": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "result_text": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "result_title": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "return_request_doc": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "serial": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": false,
                "descriptionFlag": true,
                "description": "Например: \"12345\" (если у товара нет серийного номера оставьте поле  пустым)"
            },
            "serial_number": {
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
            "street": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "street1": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "type": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "url": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "when_issued": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "disableEditing": false
            },
            "answer": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "request": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "form_current": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "defaultValueOn": true,
                "defaultValue": "form1",
                "disableEditing": true
            },
            "form1": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "form2": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "form3": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "form4": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "form5": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "form6": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "form7": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "form8": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "agree_personal": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true
            },
            "app": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "app1": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "fio_f": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Введите полностью, как в паспорте, например: \"Иванов\""
            },
            "fio_i": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Введите полностью, как в паспорте, например: \"Иван\""
            },
            "fio_o": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "descriptionFlag": true,
                "description": "Введите полностью, как в паспорте, например: \"Иванович\""
            },
            "house": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "house1": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "postcode1": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "phone_cont": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "pick_up_point": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "resultScreen": {
            "resubmitButtonLabel": "Повторить"
        }
    },
    "fileds": [
        {
            "sysName": "account",
            "name": "№ расчётного счета",
            "dataType": "string",
            "id": "80011661292569514",
            "link": "",
            "group": "1661292139239",
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
            "sysName": "additional_ageement",
            "name": "Доп соглашение о частичной компенсации",
            "dataType": "file",
            "id": "17211661292401956",
            "link": "",
            "group": "1661292121210",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "adress_double",
            "name": "Адрес проживания совпадает с адресом прописки",
            "dataType": "boolean",
            "id": "77141661293247477",
            "link": "",
            "group": "1661292204211",
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
                    "Да",
                    "Нет"
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
                "timeFormat": " HH:mm",
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
            "sysName": "agree_personal",
            "name": "Согласен на обработку персональных данных",
            "dataType": "boolean",
            "id": "77831661712824779",
            "link": "",
            "group": "1661291334898",
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
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "dateLocale": "en-gb",
                "booleanOptions": [
                    "Согласен",
                    "Не согласен"
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
                "timeFormat": " HH:mm",
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
            "sysName": "app",
            "name": "Квартира",
            "dataType": "string",
            "id": "65731662679608674",
            "link": "",
            "group": "1661292178025",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "app1",
            "name": "Квартира",
            "dataType": "string",
            "id": "24151662679751218",
            "link": "",
            "group": "1661292204211",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 5,
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
            "sysName": "article",
            "name": "Артикул, модель ",
            "dataType": "string",
            "id": "21111661291558040",
            "link": null,
            "group": "1661291502060",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "bank",
            "name": "Наименование банка",
            "dataType": "string",
            "id": "47581661292743415",
            "link": null,
            "group": "1661292139239",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "bik",
            "name": "БИК банка",
            "dataType": "string",
            "id": "85151661292784770",
            "link": "",
            "group": "1661292139239",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "card",
            "name": "Номер банковской карты",
            "dataType": "string",
            "id": "49131661292804443",
            "link": "",
            "group": "1661292139239",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "check_photo",
            "name": "Фото чека",
            "dataType": "file",
            "id": "43731661291941226",
            "link": "",
            "group": "1661291502060",
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
            "format": "multipleImages",
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
            "sysName": "city",
            "name": "Город",
            "dataType": "string",
            "id": "39441661293149299",
            "link": null,
            "group": "1661292178025",
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
            "sysName": "city1",
            "name": "Город",
            "dataType": "string",
            "id": "77891661293198436",
            "link": null,
            "group": "1661292204211",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "code_issued",
            "name": "Код подразделения",
            "dataType": "string",
            "id": "45021661293010980",
            "link": null,
            "group": "1661292155985",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "correspondent_account",
            "name": "№ счета корреспондента",
            "dataType": "string",
            "id": "18511661292604872",
            "link": "",
            "group": "1661292139239",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cost_metod",
            "name": "Способ оплаты",
            "dataType": "string",
            "id": "51191661291883102",
            "link": null,
            "group": "1661291502060",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 16,
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
            "sysName": "date_of_birth",
            "name": "Дата рождения",
            "dataType": "date",
            "id": "49741661293040538",
            "link": "",
            "group": "1661292155985",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_of_defect",
            "name": "Дата обнаружения неисправности",
            "dataType": "date",
            "id": "32941661291732968",
            "link": "",
            "group": "1661291502060",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "date_of_sale",
            "name": "Дата продажи",
            "dataType": "date",
            "id": "68181661291683163",
            "link": "",
            "group": "1661291502060",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "defect",
            "name": "Описание неисправности",
            "dataType": "string",
            "id": "23751661291594811",
            "link": null,
            "group": "1661291502060",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "destruction_photo",
            "name": "Фото разрушения товара",
            "dataType": "file",
            "id": "45881661292051407",
            "link": "",
            "group": "1661291502060",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 7,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "multipleImages",
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
            "sysName": "fio",
            "name": "ФИО",
            "dataType": "string",
            "id": "75681661291353616",
            "link": null,
            "group": "1661291334898",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "fio_f",
            "name": "Фамилия",
            "dataType": "string",
            "id": "90651662679420337",
            "link": "",
            "group": "1661291334898",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 5,
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
            "sysName": "fio_i",
            "name": "Имя",
            "dataType": "string",
            "id": "38511662679422132",
            "link": "",
            "group": "1661291334898",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 6,
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
            "sysName": "fio_o",
            "name": "Отчество",
            "dataType": "string",
            "id": "31281662679423075",
            "link": "",
            "group": "1661291334898",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 7,
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
            "sysName": "form_current",
            "name": "form_current",
            "dataType": "string",
            "id": "15511661349424839",
            "link": "",
            "group": "1661349307894",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 8,
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
            "sysName": "house",
            "name": "Дом",
            "dataType": "string",
            "id": "18071662679585526",
            "link": "",
            "group": "1661292178025",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "house1",
            "name": "Дом",
            "dataType": "string",
            "id": "61091662679721845",
            "link": "",
            "group": "1661292204211",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "issued_by",
            "name": "Кем выдан",
            "dataType": "string",
            "id": "15751661292925715",
            "link": null,
            "group": "1661292155985",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "marride_return_doc",
            "name": "Накладная на возврат брака",
            "dataType": "file",
            "id": "11891661292334695",
            "link": "",
            "group": "1661292121210",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "name",
            "name": "Имя владельца карты",
            "dataType": "string",
            "id": "86581661292831845",
            "link": null,
            "group": "1661292139239",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "phone",
            "name": "Номер телефона",
            "dataType": "string",
            "id": "69491661291358733",
            "link": "",
            "group": "1661291334898",
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
            "format": "phone",
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
            "sysName": "phone_cont",
            "name": "Контактный номер телефона",
            "dataType": "string",
            "id": "10671675187602404",
            "link": "",
            "group": "1661292204211",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 7,
            "linkIndexFieldSysName": [],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": "phone",
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
            "sysName": "pick_up_point",
            "name": "Адрес пункта выдачи заказов",
            "dataType": "string",
            "id": "30661698520230034",
            "link": "",
            "group": "1698520218837",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "place_of_sale",
            "name": "Где был куплен товар",
            "dataType": "string",
            "id": "93991661296879730",
            "link": null,
            "group": "1661291502060",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "postcode",
            "name": "Почтовый индекс",
            "dataType": "number",
            "id": "74851661293320842",
            "link": "",
            "group": "1661292178025",
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
            "sysName": "postcode1",
            "name": "Почтовый индекс",
            "dataType": "number",
            "id": "62301662679691391",
            "link": "",
            "group": "1661292204211",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 6,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "positiveNum",
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
            "sysName": "product_cost",
            "name": "Стоимость товара",
            "dataType": "number",
            "id": "99551661291780083",
            "link": "",
            "group": "1661291502060",
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
            "sysName": "product_name",
            "name": "Наименование товара",
            "dataType": "string",
            "id": "54801661291359634",
            "link": null,
            "group": "1661291502060",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "product_photo",
            "name": "Фото товара",
            "dataType": "file",
            "id": "28551661291642718",
            "link": "",
            "group": "1661291502060",
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
            "format": "multipleImages",
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
            "sysName": "return_request_doc",
            "name": "Заявление на возврат денег",
            "dataType": "file",
            "id": "15281661292230532",
            "link": "",
            "group": "1661292121210",
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
            "sysName": "serial",
            "name": "Серийный номер",
            "dataType": "string",
            "id": "78461661291576340",
            "link": null,
            "group": "1661291502060",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "serial_number",
            "name": "Серия и номер паспорта",
            "dataType": "string",
            "id": "27641661292891712",
            "link": null,
            "group": "1661292155985",
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
            "sysName": "street",
            "name": "Улица",
            "dataType": "string",
            "id": "44731661293171964",
            "link": null,
            "group": "1661292178025",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "street1",
            "name": "Улица",
            "dataType": "string",
            "id": "13781661293208963",
            "link": null,
            "group": "1661292204211",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "url",
            "name": "url",
            "dataType": "string",
            "id": "47951661272718629",
            "link": null,
            "group": "1661271805495",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "when_issued",
            "name": "Когда выдан",
            "dataType": "date",
            "id": "34831661292963528",
            "link": "",
            "group": "1661292155985",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "indexExists": false,
            "array": false
        }
    ],
    "error": null,
    "isSuccessWrite": false,
    "response": null,
    "data": [
        {
            "fio_i": "Всеволод",
            "defect": "Сломан левый подлокотник",
            "result_text": "Чек который Вы приложили не содержит QR-кода!\nПожалуйста, загрузите другой чек и попробуйте снова.",
            "date_of_sale": 1704931200000,
            "email": "zhidkovve@yandex.ru",
            "product_cost": 8714,
            "url": "https://megaplan.defender.ru/api/v3/deal",
            "result": false,
            "article": "Diablo с газлифтом Defender класса 4",
            "place_of_sale": "яндекс маркет",
            "fio": "Жидков Всеволод Евгеньевич",
            "fio_f": "Жидков",
            "agree_personal": true,
            "id": "d2cad69a-1e48-4b24-a864-459363d34414",
            "product_name": "Игровое компьютерное кресло ",
            "product_photo": [
                "https://api.directual.com/fileUploaded/defender/web/735999f5-18e1-4732-8307-438903922df4.jpg",
                "https://api.directual.com/fileUploaded/defender/web/dc7ac3d8-029e-4433-b655-0b68d8c93c54.jpg",
                "https://api.directual.com/fileUploaded/defender/web/d217bf49-a75e-4bf2-a6b9-bbe8b10824a0.jpg"
            ],
            "date_of_defect": 1713398400000,
            "adress_double": false,
            "result_title": "Ошибка чтения QR-кода",
            "fio_o": "Евгеньевич",
            "cost_metod": "безналичные",
            "phone": "89525290143"
        }
    ],
    "httpParams": {},
    "comment": null
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
