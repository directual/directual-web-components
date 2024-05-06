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

export const Danger = {
  args: {
    danger: true,
    children: 'button',
    icon: 'delete'
  },
};

export const SelectImages = {
  args: {
    type: 'selectImages',
    options: [
      {
        key: "1",
        value: "https://api.alfa.directual.com/fileUploaded/fpsform2/0037b933-27bc-455b-82d8-afb0cfc011a6.jpeg"
      },
      {
        key: "2",
        value: "https://api.alfa.directual.com/fileUploaded/fpsform2/d6d8c71e-ed00-49ed-a4ea-4bc6de592bef.jpg"
      },
      {
        key: "3",
        value: "https://api.alfa.directual.com/fileUploaded/fpsform2/c10bf0be-cdf0-4bf6-b43e-8332784f3634.jpg"
      },
      {
        key: "4",
        value: "https://api.alfa.directual.com/fileUploaded/fpsform2/d0f8f716-2dfd-4a46-a9be-072693834547.jpg"
      },
    ],
    imageWidth: 140,
    imageHeight: 105,
    resize: "cover",
    defaultValue: "2"
  },
};

export const SelectRadioImages = {
  args: {
    type: 'selectImages',
    options: [
      {
        key: "1",
        value: "https://api.alfa.directual.com/fileUploaded/fpsform2/0037b933-27bc-455b-82d8-afb0cfc011a6.jpeg"
      },
      {
        key: "2",
        value: "https://api.alfa.directual.com/fileUploaded/fpsform2/d6d8c71e-ed00-49ed-a4ea-4bc6de592bef.jpg"
      },
      {
        key: "3",
        value: "https://api.alfa.directual.com/fileUploaded/fpsform2/c10bf0be-cdf0-4bf6-b43e-8332784f3634.jpg"
      },
      {
        key: "4",
        value: "https://api.alfa.directual.com/fileUploaded/fpsform2/d0f8f716-2dfd-4a46-a9be-072693834547.jpg"
      },
    ],
    imageWidth: 140,
    imageHeight: 210,
    resize: "contain",
    radio: true,
    defaultValue: "2"
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

