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

const dqlData = {
    "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"49841748937042790\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"content\",\"name\":\"Content\",\"dataType\":\"string\",\"id\":\"21461748937047459\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"15621748937053847\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"price\",\"name\":\"Price\",\"dataType\":\"decimal\",\"id\":\"95351748937078349\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"amount\",\"name\":\"Amount\",\"dataType\":\"number\",\"id\":\"28031748937107577\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"isEnable\",\"name\":\"Is enable\",\"dataType\":\"boolean\",\"id\":\"45091748937061611\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false}]",
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const String = {
  args: {
    //type: 'textarea',
    icon: 'babai',
    // restrictChars: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    //   'q', 'r', 's', 't', 'v', 'u', 'w', 'x', 'y', 'z', '0', '1', ' ', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '-'],
    rows: 'auto',
    debug: true,
    autoFocus: true,
    label: 'Hello!',
    tooltip: "<div>hello</div><b>world!</b><br /><img width='150' src='https://otvet.imgsmail.ru/download/70090365_fa84df0362d311036a0a62e2c01ecbad_800.gif' />"
  },
};

export const MaskedString = {
  args: {
    type: 'phone',
    debug: true,
    icon: 'forward',
    imask: {
      "mask": "+{7}(000)000-00-00",
      "lazy": false
    },
    //tip: "value: TV, HD, VR",
    label: 'Hello!',
    tooltip: "<div>hello</div><b>world!</b><br /><img width='150' src='https://otvet.imgsmail.ru/download/70090365_fa84df0362d311036a0a62e2c01ecbad_800.gif' />"
  },
};

export const Select = {
  args: {
    type: 'select',
    label: 'Hello!',
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
    //debug: true,
    width: 400,
    onLoad: (finish) => {
      console.log('call onLoad')
      console.log('loading...')
      setTimeout(() => {
        finish && finish([
          {
            key: "1", value: "option_1",
            description: "однажды в суровую зимнюю пору",
            //image: "https://api.alfa.directual.com/fileUploaded/dev/be1ae50d-d24f-4ad8-bb3a-6765390d2c9f.jpg" 
          },
          {
            key: "2", value: "option_2",
            //description: "я из лесу вышел был сильный мороз — гляжу забирается медленно в гору телега", 
            image: "https://api.alfa.directual.com/fileUploaded/dev/be1ae50d-d24f-4ad8-bb3a-6765390d2c9f.jpg"
          },
          {
            key: "3", value: "option_3",
            // description: "откуда дровишки? из лесу, вестимо", 
            // image: "https://api.alfa.directual.com/fileUploaded/dev/be1ae50d-d24f-4ad8-bb3a-6765390d2c9f.jpg" 
          },
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

export const MaskedInput = {
  args: {
    type: 'masked',
    imask: {
      mask: '+{7}(000)000-00-00'
    },
    label: 'Phone number',
    debug: true
  },
};

export const Slider = {
  args: {
    type: 'slider',
    label: 'Slider Input',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: { firstValue: 50 },
    width: 400,
    debug: true,
    tooltip: "This is a slider input component"
  },
};

export const SliderDisabled = {
  args: {
    type: 'slider',
    label: 'Slider Input',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: { firstValue: 50 },
    width: 400,
    debug: true,
    tooltip: "This is a disabled slider input component",
    disabled: true
  },
};

export const Range = {
  args: {
    type: 'range',
    label: 'Range Input',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: { firstValue: 25, secondValue: 75 }, // Range with two values
    width: 400,
    debug: true,
    tooltip: "This is a range input component with two handles"
  },
};

export const RangeDisabled = {
  args: {
    type: 'range',
    label: 'Range Input',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: { firstValue: 25, secondValue: 75 }, // Range with two values
    width: 400,
    debug: true,
    tooltip: "This is a disabled range input component with two handles",
    disabled: true
  },
};

export const DqlConstructor = {
  args: {
    type: 'dqlconstructor',
    onChange: (dql) => {
      console.log('dql', dql);
    },
    label: 'DqlConstructor',
    tooltip: "This is a DQL constructor component for custom filters create",
    fields: testFields[0].fields,
    value: `(id != "" AND (body < "10000" OR FormState > "500"))`,
    disabled: false
  }
}

export const Markdown = {
  args: {
    type: 'markdown',
    edit: true,
    nomargin: true,
    label: 'Markdown редактор',
    tooltip: "Редактор с поддержкой markdown разметки",
    defaultValue: `# Заголовок первого уровня

## Заголовок второго уровня

Обычный текст с **жирным** и *курсивным* шрифтом.

### Список:
- Первый элемент
- Второй элемент  
- Третий элемент

### Нумерованный список:
1. Раз
2. Два  
3. Три

### Код:
\`\`\`javascript
console.log('Hello, world!');
\`\`\`

### Ссылка:
[Directual](https://directual.com)

### Цитата:
> Это пример цитаты

---

*Горизонтальная линия выше*`,
    debug: true,
    width: 600,
    height: 400
  }
}