import React, { useState } from 'react'
import { Input, InputGroup, Button, StructureField } from 'directual-web-components-v2'
import moment from 'moment'

export default function PlatformPage() {

  const testFields = [
    {
      "structName": "WebUser",
      "fields": [
        {
          "sysName": "jobs_selected",
          "name": "Количество подходящих вакансий",
          "dataType": "number",
          "link": "",
          "dataSubType": 'positiveNum'
        },
        {
          "sysName": "jobs_new",
          "name": "Количество вакансий, ожидающих оплату",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "jobs_active",
          "name": "Количество активных вакансий",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "CV_update_date",
          "name": "Дата обновления резюме",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "_salary_to",
          "name": "",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "_salary_from",
          "name": "",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "Facebook_lonk",
          "name": "Facebook",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "Instagram_link",
          "name": "Instagram",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "CV_file",
          "name": "Резюме",
          "dataType": "file",
          "link": ""
        },
        {
          "sysName": "employer_description",
          "name": "Описание компании",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "employer_website",
          "name": "Сайт компании",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "employer_city_id",
          "name": "Город(а) компании",
          "dataType": "arrayLink",
          "link": "cities"
        },
        {
          "sysName": "employer_name",
          "name": "Название компании",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "TG_username",
          "name": "Telegram",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "salary_text",
          "name": "Ожидания по доходу",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "salary_raw",
          "name": "Ожидания по доходу ",
          "dataType": "json",
          "link": ""
        },
        {
          "sysName": "city",
          "name": "Город",
          "dataType": "link",
          "link": "cities"
        },
        {
          "sysName": "52_functions",
          "name": "Функции для категории 52",
          "dataType": "arrayLink",
          "link": "functions52"
        },
        {
          "sysName": "22_functions",
          "name": "Функции для категории 22",
          "dataType": "arrayLink",
          "link": "functions22"
        },
        {
          "sysName": "type",
          "name": "Категория вакансий",
          "dataType": "link",
          "link": "Type2252"
        },
        {
          "sysName": "image",
          "name": "image",
          "dataType": "file",
          "link": ""
        },
        {
          "sysName": "TG_user_id",
          "name": "TG_user",
          "dataType": "link",
          "link": "TUser"
        },
        {
          "sysName": "id",
          "name": "Username (login)",
          "dataType": "id",
          "link": ""
        },
        {
          "sysName": "password",
          "name": "Password (hash)",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "dateCreated",
          "name": "dateCreated",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "phone",
          "name": "Телефон",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "email",
          "name": "Email",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "dateLastActivity",
          "name": "dateLastActivity",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "isAuthorization",
          "name": "isAuthorization",
          "dataType": "boolean",
          "link": ""
        },
        {
          "sysName": "role",
          "name": "Роли",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "firstName",
          "name": "Имя",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "lastName",
          "name": "Фамилия",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "gender",
          "name": "Пол",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "isBlocked",
          "name": "Block user",
          "dataType": "boolean",
          "link": ""
        },
        {
          "sysName": "@who",
          "name": "who changed",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@dateCreated",
          "name": "date created",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "@dateChanged",
          "name": "date changed",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "ContextVar",
          "name": "Context Variables (3)",
          "dataType": "link",
          "link": "ContextVars",
          "vars": "context"
        }
      ]
    },
    {
      "structName": "cities",
      "fields": [
        {
          "sysName": "delete",
          "name": "Delete",
          "dataType": "boolean",
          "link": ""
        },
        {
          "sysName": "name",
          "name": "City name",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "id",
          "name": "id",
          "dataType": "id",
          "link": ""
        },
        {
          "sysName": "@who",
          "name": "who changed",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@dateCreated",
          "name": "date created",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "@dateChanged",
          "name": "date changed",
          "dataType": "date",
          "link": ""
        }
      ]
    },
    {
      "structName": "Type2252",
      "fields": [
        {
          "sysName": "type",
          "name": "Тип работы",
          "dataType": "string",
          "link": null
        },
        {
          "sysName": "id",
          "name": "id",
          "dataType": "id",
          "link": ""
        },
        {
          "sysName": "@who",
          "name": "who changed",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@dateCreated",
          "name": "date created",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "@dateChanged",
          "name": "date changed",
          "dataType": "date",
          "link": ""
        }
      ]
    },
    {
      "structName": "TUser",
      "fields": [
        {
          "sysName": "userpic",
          "name": "userpic",
          "dataType": "file",
          "link": ""
        },
        {
          "sysName": "userpic_id",
          "name": "Userspic_id",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "phone",
          "name": "Phone",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "WebUser_id",
          "name": "App user",
          "dataType": "link",
          "link": "WebUser"
        },
        {
          "sysName": "id",
          "name": "id",
          "dataType": "id",
          "link": ""
        },
        {
          "sysName": "Id",
          "name": "Id",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "botId",
          "name": "botId",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "botName",
          "name": "botName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "firstName",
          "name": "firstName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "lastName",
          "name": "lastName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "userName",
          "name": "userName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "lastChatKey",
          "name": "lastChatKey",
          "dataType": "link",
          "link": "TChat"
        },
        {
          "sysName": "lastMessageKey",
          "name": "lastMessageKey",
          "dataType": "link",
          "link": "TMessageIn"
        },
        {
          "sysName": "@who",
          "name": "who changed",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@dateCreated",
          "name": "date created",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "@dateChanged",
          "name": "date changed",
          "dataType": "date",
          "link": ""
        }
      ]
    },
    {
      "structName": "TChat",
      "fields": [
        {
          "sysName": "subcontext",
          "name": "subcontext",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "is_wizard",
          "name": "Стартовый визард?",
          "dataType": "boolean",
          "link": ""
        },
        {
          "sysName": "id",
          "name": "id",
          "dataType": "id",
          "link": ""
        },
        {
          "sysName": "chatId",
          "name": "chatId",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "key",
          "name": "key",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "Id",
          "name": "Id",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "botId",
          "name": "botId",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "botName",
          "name": "botName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "type",
          "name": "type",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "title",
          "name": "title",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "firstName",
          "name": "firstName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "lastName",
          "name": "lastName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "userName",
          "name": "userName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "lastMessageKey",
          "name": "lastMessageKey",
          "dataType": "link",
          "link": "TMessageIn"
        },
        {
          "sysName": "context",
          "name": "context",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@who",
          "name": "who changed",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@dateCreated",
          "name": "date created",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "@dateChanged",
          "name": "date changed",
          "dataType": "date",
          "link": ""
        }
      ]
    },
    {
      "structName": "TMessageIn",
      "fields": [
        {
          "sysName": "alink",
          "name": "",
          "dataType": "arrayLink",
          "link": "TMessageIn"
        },
        {
          "sysName": "string",
          "name": "",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "number",
          "name": "",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "file_type",
          "name": "File type",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "file_name",
          "name": "File name",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "file_id",
          "name": "File id",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "photo_id",
          "name": "Photo id",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "phone_number",
          "name": "Phone (requesting  contact)",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "API_response",
          "name": "API response (pro-mode step)",
          "dataType": "json",
          "link": ""
        },
        {
          "sysName": "id",
          "name": "id",
          "dataType": "id",
          "link": ""
        },
        {
          "sysName": "key",
          "name": "key",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "messageId",
          "name": "messageId",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "userId",
          "name": "userId",
          "dataType": "link",
          "link": "TUser"
        },
        {
          "sysName": "botId",
          "name": "botId",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "botName",
          "name": "botName",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "fromId",
          "name": "fromId",
          "dataType": "link",
          "link": "TUser"
        },
        {
          "sysName": "date",
          "name": "date",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "chatKey",
          "name": "chatKey",
          "dataType": "link",
          "link": "TChat"
        },
        {
          "sysName": "text",
          "name": "text",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "longitude",
          "name": "longitude",
          "dataType": "decimal",
          "link": ""
        },
        {
          "sysName": "latitude",
          "name": "latitude",
          "dataType": "decimal",
          "link": ""
        },
        {
          "sysName": "fileUrl",
          "name": "fileUrl",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@who",
          "name": "who changed",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@dateCreated",
          "name": "date created",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "@dateChanged",
          "name": "date changed",
          "dataType": "date",
          "link": ""
        }
      ]
    },
    {
      "structName": "ContextVars",
      "fields": [
        {
          "sysName": "contextLink",
          "name": "contextLink",
          "dataType": "link",
          "link": "Jobs"
        },
        {
          "sysName": "contextJson",
          "name": "",
          "dataType": "json",
          "link": ""
        },
        {
          "sysName": "contextString",
          "name": "",
          "dataType": "string",
          "link": ""
        }
      ]
    },
    {
      "structName": "Jobs",
      "fields": [
        {
          "sysName": "alfa_order_i_middle",
          "name": "alfa_order_i_middle",
          "dataType": "string",
          "link": null
        },
        {
          "sysName": "payment_link_middle",
          "name": "Оплатить размещение по тарифу Middle",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "tariff",
          "name": "Тариф",
          "dataType": "string",
          "link": null
        },
        {
          "sysName": "api_response",
          "name": "api_response",
          "dataType": "json",
          "link": ""
        },
        {
          "sysName": "alfa_order_id",
          "name": "alfa_order_id",
          "dataType": "string",
          "link": null
        },
        {
          "sysName": "candidates_quantity",
          "name": "Количество подходящих профилей кандидатов",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "candidates_ids",
          "name": "Подходящие кандидаты",
          "dataType": "arrayLink",
          "link": "WebUser"
        },
        {
          "sysName": "salary_text",
          "name": "Зарплатная вилка",
          "dataType": "string",
          "link": null
        },
        {
          "sysName": "payment_link",
          "name": "Оплатить размещение по тарифу Small",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "user_editor_id",
          "name": "Кто внес изменение",
          "dataType": "link",
          "link": "WebUser"
        },
        {
          "sysName": "date_created",
          "name": "Дата размещения вакансии",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "responds_declined_ids",
          "name": "🚫 Отклоненные отклики",
          "dataType": "arrayLink",
          "link": "Responds"
        },
        {
          "sysName": "responds_approved_ids",
          "name": "✅ Одобренные отклики",
          "dataType": "arrayLink",
          "link": "Responds"
        },
        {
          "sysName": "responds_new_ids",
          "name": "🙋‍♂️ Новые отклики",
          "dataType": "arrayLink",
          "link": "Responds"
        },
        {
          "sysName": "job_status_message",
          "name": "Статус вакансии",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "job_status",
          "name": "Статус (техническое поле)",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "responds_new",
          "name": "Новых откликов",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "responds_total",
          "name": "Всего откликов",
          "dataType": "number",
          "link": ""
        },
        {
          "sysName": "company_description",
          "name": "Описание компании работодателя",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "connect_instructions",
          "name": "Инструкции для связи кандидату",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "connect_type",
          "name": "Способ связи с кандидатом",
          "dataType": "boolean",
          "link": ""
        },
        {
          "sysName": "company_city_ids",
          "name": "Город(а) работодателя",
          "dataType": "arrayLink",
          "link": "cities"
        },
        {
          "sysName": "company_website",
          "name": "Сайт работодателя",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "company_in_profile",
          "name": "Работодатель",
          "dataType": "boolean",
          "link": ""
        },
        {
          "sysName": "company_name",
          "name": "Название компании работодателя",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "job_description",
          "name": "Описание вакансии",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "functions_52",
          "name": "Функции для вакансий 5/2",
          "dataType": "arrayLink",
          "link": "functions52"
        },
        {
          "sysName": "functions_22",
          "name": "Функции  для вакансий 2/2",
          "dataType": "arrayLink",
          "link": "functions22"
        },
        {
          "sysName": "salary",
          "name": "Зарплатная вилка",
          "dataType": "json",
          "link": ""
        },
        {
          "sysName": "type",
          "name": "Категория вакансии",
          "dataType": "link",
          "link": "Type2252"
        },
        {
          "sysName": "job_name",
          "name": "Название вакансии",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "user_id",
          "name": "Пользователь, разместивший вакансию",
          "dataType": "link",
          "link": "WebUser"
        },
        {
          "sysName": "id",
          "name": "id",
          "dataType": "id",
          "link": ""
        },
        {
          "sysName": "@who",
          "name": "who changed",
          "dataType": "string",
          "link": ""
        },
        {
          "sysName": "@dateCreated",
          "name": "date created",
          "dataType": "date",
          "link": ""
        },
        {
          "sysName": "@dateChanged",
          "name": "date changed",
          "dataType": "date",
          "link": ""
        }
      ]
    },
    {
      "structName": "GlobalVars",
      "fields": [
        {
          "sysName": "jobPrice",
          "name": "",
          "dataType": "string"
        },
        {
          "sysName": "luxaryJobPrice",
          "name": "",
          "dataType": "string"
        },
        {
          "sysName": "brandJobPrice",
          "name": "",
          "dataType": "string"
        },
        {
          "sysName": "largeJobPrice",
          "name": "",
          "dataType": "string"
        }
      ]
    },
    {
      "structName": "ContextVars",
      "fields": [
        {
          "sysName": "contextLink",
          "name": "contextLink",
          "dataType": "link",
          "link": "Jobs"
        },
        {
          "sysName": "contextJson",
          "name": "",
          "dataType": "json",
          "link": ""
        },
        {
          "sysName": "contextString",
          "name": "",
          "dataType": "string",
          "link": ""
        }
      ]
    }
  ]

  const defaultFunctions = [
    {
        "structName": "_defaultTemplFunc",
        "fields": [
            {
                "sysName": "#escape",
                "name": "Escaping special characters (open tag)",
                "dataType": "",
                "link": "",
                "dataSubType": ""
            },
            {
                "sysName": "/escape",
                "name": "Escaping special characters (close tag)",
                "dataType": "",
                "link": "",
                "dataSubType": ""
            },
            {
                "sysName": "#stripNewLine",
                "name": "Removing line breaks (open tag)",
                "dataType": "",
                "link": "",
                "dataSubType": ""
            },
            {
                "sysName": "/stripNewLine",
                "name": "Removing line breaks (close tag)",
                "dataType": "",
                "link": "",
                "dataSubType": ""
            },
            {
                "sysName": "#encodeURIComponent",
                "name": "Encoding URI (open tag)",
                "dataType": "",
                "link": "",
                "dataSubType": ""
            },
            {
                "sysName": "^encodeURIComponent",
                "name": "Encoding URI (close tag)",
                "dataType": "",
                "link": "",
                "dataSubType": ""
            },

            // {
            //     "sysName": "22_functions",
            //     "name": "Функции для категории 22",
            //     "dataType": "arrayLink",
            //     "link": "functions22"
            // },

        ]
    },
]

  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

  // formatOptions:
  const [testDefValue, setTestDefValue] = useState(null)
  const [dateFormat, setDateFormat] = useState('D MMMM, Y')
  const [timeFormat, setTimeFormat] = useState('HH:mm, Z')
  const [dateLocale, setDateLocale] = useState('ru')
  const [isUTC, setIsUTC] = useState('false')
  const [validWeekDays, setValidWeekDays] = useState({ mon: true, tue: true, wed: true, thu: true, fri: true, sat: false, sun: false })
  const [allowPast, setAllowPast] = useState({ past: true })
  const [timeConstraints, setTimeConstraints] = useState({
    hours: {
      min: 9,
      max: 15,
      step: 2
    },
    minutes: {
      min: 0,
      max: 60,
      step: 20
    }
  })

  const [num, setNum] = useState()
  const [dec, setDec] = useState()

  return (
    <div>
      <h1>Platform</h1>
      <Input type='number'
        label='num'
        defaultValue={num}
        //debug
        onChange={value => {
          console.log('number')
          console.log(value)
          setNum(value)
        }}
      />

      <Input type='number'
        label='pos num'
        defaultValue={num}
        positive
        onChange={value => {
          console.log('number')
          console.log(value)
          setNum(value)
        }}
      />

      <Input type='decimal'
        label='dec'
        defaultValue={dec}
        onChange={value => {
          console.log('decimal')
          console.log(value)
          setDec(value)
        }}
      />


      <h2>Inline structure field input </h2>
      <p>Оджажды в
      суровую  зимнюю пору я из лесу вышел был сильный мороз.
      Гляжу, поднимается медленно в гору
      Лошадка, везущая хворосту воз.
      И шествуя важно, в спокойствии чинном,
      Лошадку ведет под уздцы мужичок
      В больших сапогах, в полушубке овчинном,
      В больших рукавицах… а сам с ноготок!
          «Здорово <StructureField
          inline
          //autofocus
          defaultValue=''
          fields={defaultFunctions}
          hideSysFields
          structSysName='_defaultTemplFunc'
          onChangeExtended={(value, struct, type) => { }}
          onChange={e => { }}
          placeholder='Select field'
        /> парнище!» — «Ступай себе мимо!»
          — «Уж больно ты  грозен, как я погляжу!
          Откуда дровишки?» — «Из лесу, вестимо;
          Отец, слышишь, рубит, а я отвожу».
          (В лесу раздавался топор дровосека.)
          «А что, у отца-то большая семья?»
          — «Семья-то большая, да два человека
          Всего мужиков-то: отец мой да я…»
          — «Так вот оно что! А как звать тебя?» — «Власом».
          — «А кой тебе годик?» — «Шестой миновал…
          Ну, мертвая!» — крикнул малюточка басом,
          Рванул под уздцы и быстрей зашагал.</p>
      <br /><br /><hr /><br /><br />

      <InputGroup width={400}>
        <Input
          label='Date format'
          placeholder='Hide date'
          code
          defaultValue={dateFormat}
          onChange={setDateFormat}
        />
        <Input
          label='Time format'
          placeholder='Hide time'
          code
          defaultValue={timeFormat}
          onChange={setTimeFormat}
        />
      </InputGroup>
      <Input
        width={400}
        label='Date locale'
        type='select'
        defaultValue={dateLocale}
        onChange={setDateLocale}
        options={[
          { key: 'en-gb', value: 'English (en-gb)' },
          { key: 'en-us', value: 'English (en-us)' },
          { key: 'es', value: 'Spanish (es)' },
          { key: 'fr', value: 'French (fr)' },
          { key: 'de', value: 'Deutsche (de)' },
          { key: 'ru', value: 'Russian (ru)' },
        ]}
      />
      <Input
        type='json'
        rows='auto'
        width={400}
        defaultValue={typeof timeConstraints == 'object' ? JSON.stringify(timeConstraints) : timeConstraints}
        onChange={setTimeConstraints}
        label='timeConstraints' />
      <Input
        label='Available week days'
        type='checkboxGroup'
        //debug
        width={350}
        horizontal
        horWidth={80}
        defaultValue={validWeekDays}
        onChange={setValidWeekDays}
        options={weekDays.map(day => { return { value: day, label: day } })}
      />
      {/* <Input
        label='Allowing users to choose day in the past'
        type='checkboxGroup'
        //debug
        width={350}
        defaultValue={allowPast}
        onChange={setAllowPast}
        options={[{ value: 'past', label: 'Choosing the past'}]}
      /> */}
      <Input type='radio'
        label='Time zone'
        onChange={setIsUTC}
        defaultValue={isUTC}
        options={[
          { value: 'true', label: "Use UTC (+00, Zulu time)" },
          { value: 'false', label: "Use user's local timezone" },
        ]}
      />
      <Input
        type='date'
        width={400}
        //debug
        //allowPast={allowPast}
        timeConstraints={timeConstraints}
        label='test date'
        locale={dateLocale}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        utc={isUTC == 'true'}
        validWeekDays={validWeekDays}
        //defaultValue={moment()}
        defaultValue={testDefValue}
        onChange={setTestDefValue}
      />
      <Button onClick={() => setTestDefValue(moment())}>push me</Button>

      {/* <Input
        label='Structure field'
        width={500}
        //fixHeight={100}
        //debug
        //highlightEmpty
        //noPropagation
        fields={testFields}
        //highlightEmpty
        hideSysFields
        //hideId
        //tip='подсказко'
        structSysName='WebUser'
        defaultValue=''
        //onChange={value => console.log(value)}
        onChangeExtended={(value, struct, type) => { }
          //console.log(`${value} ${type}${(type == 'link' || type == 'arrayLink') ? `→${struct}` : ''}`)
        }
        placeholder='Choose the object field'
        icon='database'
        //filterFields={['json']}
        //filterLinkFields='TMessageIn'
        //description='That is a new FormField component for the platform'
        //disabled
        type='structurefield' /> */}
    </div>
  )
}
