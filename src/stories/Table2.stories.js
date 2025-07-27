import FpsTable2 from '../components/fps/viewobjects/table2/FpsTable2'

export default {
  title: 'FPS/Components/Table2 (TanStack)',
  component: FpsTable2,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {
    enableSearch: {
      control: 'boolean',
      description: 'Включить/выключить поиск по таблице',
      defaultValue: true,
    },
    enableSorting: {
      control: 'boolean', 
      description: 'Включить/выключить сортировку колонок',
      defaultValue: true,
    },
  },
};

// Данные для примера - используем те же что и в старой таблице
let exampleTableData = {
    "sl": "test",
    "pageSize": "10",
    "headerField": null,
    "params": {
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
                    "fieldSysName": "fruits",
                    "fetch": [
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "title",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "descr",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "fruits",
                    "name": "fruits",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "filter"
                },
                {
                    "fieldSysName": "status",
                    "fetch": [],
                    "sysName": "status",
                    "name": "status",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "booleanOptions": ["Активен", "Неактивен"]
                    },
                    "link": null
                },
                {
                    "fieldSysName": "price",
                    "fetch": [],
                    "sysName": "price",
                    "name": "price",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "created",
                    "fetch": [],
                    "sysName": "created",
                    "name": "created",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {
                        "dateFormat": "DD/MM/Y",
                        "timeFormat": ", HH:mm"
                    },
                    "link": null
                }
            ],
            "writeFields": [
                {
                    "fieldSysName": "fruits",
                    "fetch": [],
                    "sysName": "fruits",
                    "name": "fruits",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "filter"
                }
            ],
            "fields": {
                "id": {
                    "id": "id",
                    "content": "ID",
                    "type": "field",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "fruits": {
                    "id": "fruits",
                    "content": "Фрукты",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "filter",
                    "actions": []
                },
                "status": {
                    "id": "status",
                    "content": "Статус",
                    "type": "field",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "booleanOptions": ["Активен", "Неактивен"]
                    },
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "price": {
                    "id": "price",
                    "content": "Цена",
                    "type": "field",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "created": {
                    "id": "created",
                    "content": "Дата создания",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {
                        "dateFormat": "DD/MM/Y",
                        "timeFormat": ", HH:mm"
                    },
                    "read": true,
                    "link": null,
                    "actions": []
                }
            }
        },
        "tableParams": {
            "fields": {
                "id": {
                    "id": "id",
                    "content": "ID",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "fruits": {
                    "id": "fruits",
                    "content": "Фрукты",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "filter"
                },
                "status": {
                    "id": "status",
                    "content": "Статус",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {
                        "booleanOptions": ["Активен", "Неактивен"]
                    },
                    "read": true,
                    "link": null
                },
                "price": {
                    "id": "price",
                    "content": "Цена",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null
                },
                "created": {
                    "id": "created",
                    "content": "Дата создания",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {
                        "dateFormat": "DD/MM/Y",
                        "timeFormat": ", HH:mm"
                    },
                    "read": true,
                    "link": null
                }
            },
            "fieldParams": {
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "fruits": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "price": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "created": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                }
            },
            "fieldOrder": [
                "id",
                "fruits",
                "status",
                "price",
                "created"
            ]
        }
    },
    "tableTitle": "Новая таблица (TanStack Table v8)",
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
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "fruits",
            "dataType": "link",
            "name": "fruits",
            "id": "68751734264999151",
            "link": "filter",
            "group": "0",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        },
        {
            "sysName": "status",
            "dataType": "boolean",
            "name": "status",
            "id": "32811733750256971",
            "link": null,
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
            "format": null,
            "formatOptions": {
                "booleanOptions": ["Активен", "Неактивен"]
            },
            "groupName": null,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "array": false
        }
    ],
    "data": [
        {
            "id": "1",
            "fruits": {
                "id": "bae9ca94-7d13-47f3-80f7-623b9633728a",
                "title": "Яблоки",
                "descr": "Красные яблоки"
            },
            "status": true,
            "price": 150,
            "created": "2024-12-15T10:30:00Z"
        },
        {
            "id": "2",
            "fruits": {
                "id": "5953667f-b4b6-4365-9e40-da983da68475",
                "title": "Апельсины",
                "descr": "Сочные апельсины"
            },
            "status": false,
            "price": 200,
            "created": "2024-12-14T15:45:00Z"
        },
        {
            "id": "3",
            "fruits": {
                "id": "c4d2d620-c95a-4b5a-938f-1b9ad23be0b6",
                "title": "Бананы",
                "descr": "Спелые бананы"
            },
            "status": true,
            "price": 120,
            "created": "2024-12-13T09:15:00Z"
        },
        {
            "id": "4",
            "fruits": {
                "id": "d4e2e620-c95a-4b5a-938f-1b9ad23be0b7",
                "title": "Киви",
                "descr": "Кислые киви"
            },
            "status": true,
            "price": 300,
            "created": "2024-12-12T14:20:00Z"
        },
        {
            "id": "5",
            "fruits": {
                "id": "e5f3f730-d06b-5c6b-a49g-2c0be34cf0c8",
                "title": "Манго",
                "descr": "Экзотическое манго"
            },
            "status": false,
            "price": 450,
            "created": "2024-12-11T11:10:00Z"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "writeFields": [
        "fruits"
    ],
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "quickSearch": "false",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null,
    "response": false
}

let authExample = {
  "isAuth": false,
  "custom_labels": "{\n   \"foo\": \"hello brave new world!\",\n   \"bar\": \"foobar\"\n}",
  "role": "admin",
  "lastName": "Иванов",
  "firstName": "Иван",
  "token": "1a9f10d0-d45f-4bf2-9e7e-d6ce2e752d03",
  "notifications_counter": "",
  "nid": 18924,
  "user": "ivan@example.com",
}

// Основная история
export const Regular = {
  args: {
    data: exampleTableData,
    auth: authExample,
    locale: 'RUS',
    onEvent: (event, pageInfo) => {
      console.log('Table event:', event, pageInfo)
      return Promise.resolve()
    },
    handleRoute: (route) => () => console.log("Переход по маршруту:", route),
    id: "table2-example",
    currentBP: "lg"
  },
};

// История с пустыми данными
export const EmptyData = {
  args: {
    ...Regular.args,
    data: {
      ...exampleTableData,
      data: []
    }
  },
};

// История с ошибкой
export const WithError = {
  args: {
    ...Regular.args,
    data: {
      ...exampleTableData,
      error: "Ошибка загрузки данных"
    }
  },
};

// История с загрузкой
export const Loading = {
  args: {
    ...Regular.args,
  },
  play: async ({ canvasElement }) => {
    // Симуляция загрузки (для демо)
    setTimeout(() => {
      console.log('Загрузка завершена')
    }, 2000)
  }
};

// История без поиска
export const WithoutSearch = {
  args: {
    ...Regular.args,
    enableSearch: false,
  },
};

// История без сортировки
export const WithoutSorting = {
  args: {
    ...Regular.args,
    enableSorting: false,
  },
};

// История только с базовой функциональностью (без поиска и сортировки)
export const BasicTable = {
  args: {
    ...Regular.args,
    enableSearch: false,
    enableSorting: false,
  },
}; 