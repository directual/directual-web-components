import Input from '../components/fps/dataentry/input/input';
import { icon_options } from '../components/fps/dataentry/input/input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Design System/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    icon: { control: 'select', options: icon_options.map(t => t.key) },
  },
};

const testFields = [
  {
    "structName": "alfaWebHookData",
    "fields": [
      {
        "sysName": "id",
        "name": "id",
        "dataType": "id",
        "link": ""
      },
      {
        "sysName": "body",
        "name": "body",
        "dataType": "json",
        "link": ""
      },
      {
        "sysName": "FormState",
        "name": "headers",
        "dataType": "link",
        "link": "alfaWebHookData"
      },
      {
        "sysName": "urlData",
        "name": "urlData",
        "dataType": "json",
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
        "sysName": "GlobalVar",
        "name": "Global Constants (2)",
        "dataType": "link",
        "link": "GlobalVars",
        "vars": "global"
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
    "structName": "ContextVars",
    "fields": [
      {
        "sysName": "orderId",
        "name": "",
        "dataType": "string",
        "link": ""
      },
      {
        "sysName": "job_id",
        "name": "",
        "dataType": "link",
        "link": "Jobs"
      },
      {
        "sysName": "status",
        "name": "",
        "dataType": "string",
        "link": ""
      }
    ]
  },
  {
    "structName": "FormState",
    "fields": [
      {
        "sysName": "orderId",
        "name": "",
        "dataType": "string",
        "link": ""
      },
      {
        "sysName": "job_id",
        "name": "",
        "dataType": "link",
        "link": "Jobs"
      },
      {
        "sysName": "status",
        "name": "",
        "dataType": "string",
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
      }
    ]
  },
  {
    "structName": "ContextVars",
    "fields": [
      {
        "sysName": "orderId",
        "name": "",
        "dataType": "string",
        "link": ""
      },
      {
        "sysName": "job_id",
        "name": "",
        "dataType": "link",
        "link": "Jobs"
      },
      {
        "sysName": "status",
        "name": "",
        "dataType": "string",
        "link": ""
      }
    ]
  }
]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const String = {
  args: {
    type: 'string',
    icon: 'babai'
  },
};

export const Select = {
  args: {
    type: 'select',
    options: [
      {
        "key": "shareAmount",
        "value": "Количество акций"
      },
      {
        "key": "nomSharePrice",
        "value": "Номинальная стоимость акции"
      },
      {
        "key": "shareCostNominal",
        "value": "Стоимость акции"
      },
      {
        "key": "target",
        "value": "Цель раунда"
      },
      {
        "key": "id",
        "value": "id"
      },
      {
        "key": "project",
        "value": "Проект"
      },
      {
        "key": "dealStatusT",
        "value": "Статус сделки (Тинькофф)"
      },
      {
        "key": "dealIdT",
        "value": "ID сделки (Тинькофф)"
      },
      {
        "key": "shareAmount",
        "value": "Количество акций"
      },
      {
        "key": "nomSharePrice",
        "value": "Номинальная стоимость акции"
      },
      {
        "key": "shareCostNominal",
        "value": "Стоимость акции"
      },
      {
        "key": "target",
        "value": "Цель раунда"
      },
      {
        "key": "activeOffer",
        "value": "Активное Инвестпредложение"
      },
      {
        "key": "offers",
        "value": "Инвестпредложения"
      },
      {
        "key": "endDate",
        "value": "Дата окончания"
      },
      {
        "key": "startDate",
        "value": "Дата начала"
      },
      {
        "key": "projectName",
        "value": "Название проекта"
      },
      {
        "key": "number",
        "value": "Номер инвестпредложения"
      },
      {
        "key": "status",
        "value": "Статус"
      },
      {
        "key": "statusColor",
        "value": "Цвет Статуса"
      },
      {
        "key": "statusName",
        "value": "Название статуса"
      },
      {
        "key": "createDealT",
        "value": "Создание сделки"
      }
    ],
    icon: 'babai'
  },
};



export const StructureField = {
  args: {
    type: 'structurefield',
    noHint: true,
    FPSForm2: true,
    noPropagation: true,
    fields: testFields,
    structSysName: 'alfaWebHookData'
  },
};

export const SelectImages = {
  args: {
    type: 'selectImages',
    options: [
      {
        "key": "46713452-42a6-421c-9e91-8e35dd355c15",
        "value": "https://api.alfa.directual.com/fileUploaded/fpsform2/0037b933-27bc-455b-82d8-afb0cfc011a6.jpeg"
      },
      {
        "key": "731e88cf-6050-4e03-8308-ffcb188fbbef",
        "value": "https://api.alfa.directual.com/fileUploaded/fpsform2/d6d8c71e-ed00-49ed-a4ea-4bc6de592bef.jpg"
      },
      {
        "key": "2f56d81d-a11a-4d22-b2c9-4a0224dc6294",
        "value": "https://api.alfa.directual.com/fileUploaded/fpsform2/c10bf0be-cdf0-4bf6-b43e-8332784f3634.jpg"
      },
      {
        "key": "3395fba2-aad3-4919-b5c2-d25f4116bfd0",
        "value": "https://api.alfa.directual.com/fileUploaded/fpsform2/d0f8f716-2dfd-4a46-a9be-072693834547.jpg"
      }
    ],
    imageWidth: 140,
    imageHeight: 105,
    resize: "cover",
    defaultValue: "2f56d81d-a11a-4d22-b2c9-4a0224dc6294",
    //debug: true
  },
};

export const SelectRadioImages = {
  args: {
    type: 'selectImages',
    options: [
      {
        "key": "46713452-42a6-421c-9e91-8e35dd355c15",
        "value": "https://api.alfa.directual.com/fileUploaded/fpsform2/0037b933-27bc-455b-82d8-afb0cfc011a6.jpeg"
      },
      {
        "key": "731e88cf-6050-4e03-8308-ffcb188fbbef",
        "value": "https://api.alfa.directual.com/fileUploaded/fpsform2/d6d8c71e-ed00-49ed-a4ea-4bc6de592bef.jpg"
      },
      {
        "key": "2f56d81d-a11a-4d22-b2c9-4a0224dc6294",
        "value": "https://api.alfa.directual.com/fileUploaded/fpsform2/c10bf0be-cdf0-4bf6-b43e-8332784f3634.jpg"
      },
      {
        "key": "3395fba2-aad3-4919-b5c2-d25f4116bfd0",
        "value": "https://api.alfa.directual.com/fileUploaded/fpsform2/d0f8f716-2dfd-4a46-a9be-072693834547.jpg"
      }
    ],
    imageWidth: 140,
    imageHeight: 210,
    resize: "contain",
    radio: true,
    defaultValue: "2f56d81d-a11a-4d22-b2c9-4a0224dc6294"
  },
};

export const DimanicSelect = {
  args: {
    type: 'dinamicSelect',
    displayKey: true,
    onLoad: (finish) => {
      console.log('call onLoad')
      console.log('loading...')
      setTimeout(() => {
        const salt1 = Math.random().toString(5)
        const salt2 = Math.random().toString(5)
        const salt3 = Math.random().toString(5)
        finish && finish([
          { key: Date.now().toString() + salt1, value: "option_" + salt1 },
          { key: Date.now().toString() + salt2, value: "option_" + salt2 },
          { key: Date.now().toString() + salt3, value: "option_" + salt3 },
        ])
      }, 2000)
    },
    icon: 'actions'
  },
};

export const DimanicComplexSelect = {
  args: {
    type: 'dinamicComplexSelect',
    displayKey: true,
    width: 400,
    onLoad: (finish) => {
      console.log('call onLoad')
      console.log('loading...')
      setTimeout(() => {
        const salt1 = Math.random().toString(5)
        const salt2 = Math.random().toString(5)
        const salt3 = Math.random().toString(5)
        finish && finish([
          { key: Date.now().toString() + salt1, value: "option_" + salt1, description: "однажды в суровую зимнюю пору", image: "https://api.alfa.directual.com/fileUploaded/dev/be1ae50d-d24f-4ad8-bb3a-6765390d2c9f.jpg" },
          { key: Date.now().toString() + salt2, value: "option_" + salt2, description: "я из лесу вышел был сильный мороз — гляжу забирается медленно в гору телега", image: "https://api.alfa.directual.com/fileUploaded/dev/be1ae50d-d24f-4ad8-bb3a-6765390d2c9f.jpg" },
          { key: Date.now().toString() + salt3, value: "option_" + salt3, description: "откуда дровишки? из лесу, вестимо", image: "https://api.alfa.directual.com/fileUploaded/dev/be1ae50d-d24f-4ad8-bb3a-6765390d2c9f.jpg" },
        ])
      }, 2000)
    },
  },
};

export const Pedal = {
  args: {
    type: 'pedal',
    options: [
      {
        "icon": "babai",
        "key": "1",
        "value": "Раз"
      },
      {
        "icon": "twitter",
        "key": "2",
        "value": "Два"
      },
      {
        "key": "3",
        "value": "Три"
      },
    ],
    defaultValue: "1",
    stretch: true,
    width: 400,
  },
};

