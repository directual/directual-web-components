import FpsTable from '../components/fps/viewobjects/table/FpsTable'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Table',
  component: FpsTable,
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
    "sl": "darta",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "cardListLayout": "grid",
        "cardHeaderComment": "",
        "deleteField": "",
        "cardBodyText": "",
        "cardImage": false,
        "cardImageField": "",
        "cardImageType": "none",
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
                    "fieldSysName": "number",
                    "fetch": [],
                    "sysName": "number",
                    "name": "",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "text",
                    "fetch": [],
                    "sysName": "text",
                    "name": "TEXT",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "writeFields": [],
            "fields": {
                "id": {
                    "id": "id",
                    "content": "id",
                    "type": "field",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "number": {
                    "id": "number",
                    "content": "",
                    "type": "field",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "text": {
                    "id": "text",
                    "content": "TEXT",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
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
                "number": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "text": {
                    "include": true,
                    "disableEditing": false,
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
                        "id",
                        "number",
                        "text"
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
            "number": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "text": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "tableParams": {
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
                    "fieldSysName": "number",
                    "fetch": [],
                    "sysName": "number",
                    "name": "",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "text",
                    "fetch": [],
                    "sysName": "text",
                    "name": "TEXT",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "writeFields": [],
            "fields": {
                "id": {
                    "id": "id",
                    "content": "id",
                    "dataType": "id",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "number": {
                    "id": "number",
                    "content": "",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
                },
                "text": {
                    "id": "text",
                    "content": "TEXT",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": ""
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
                "number": {
                    "include": true,
                    "fileImageFormat": "square",
                    "fileImageSize": 80,
                    "colorCode": false,
                    "colorFormat": "square",
                    "colorSize": 40
                },
                "text": {
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
                "text",
                "number"
            ]
        }
    },
    "tableTitle": "",
    "actions": [],
    "headers": [
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "number",
            "name": "",
            "dataType": "number",
            "id": "53021759423491996",
            "link": "",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "text",
            "name": "TEXT",
            "dataType": "string",
            "id": "92661759423487062",
            "link": "",
            "group": "0",
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "number": 5,
            "text": "Возможность при мерже создавать какие-то пакеты по-умолчанию для переноса, чтобы кажый раз не набивать по 100 сценариев, эндпоинтов, таблиц вручную (большой риск что-то потерять)",
            "id": "ab68fc23-7b2d-401c-8485-8944f844601a"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99422458
        ],
        [
            "number",
            99422458
        ],
        [
            "text",
            99422458
        ]
    ],
    "writeFields": [],
    "structures": {
        "99422458": {
            "networkID": 34396,
            "sysName": "data",
            "name": "data",
            "id": 99422458,
            "dateCreated": "2025-10-02T16:44:43Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"53021759423491996\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"text\",\"name\":\"TEXT\",\"dataType\":\"string\",\"id\":\"92661759423487062\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2025-10-02T16:44:59Z",
            "createBy": 3527,
            "changedBy": 3527,
            "_settings": null,
            "_nativeIndexSettings": null,
            "innerIDField": {
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": null
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [],
    "quickSearch": "false",
    "httpParams": {},
    "cardCustomHtml": null,
    "cardCustomLayout": {},
    "comment": "",
    "response": false
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
    locale: 'ESP',
    onChange: value => console.log(value),
    handleRoute: value => e => console.log("route => " + value),
  },
};

// Пример кастомных HTML фильтров
const customFilterHTML = `
<div style="padding: 20px; border: 2px solid #007bff; border-radius: 8px; background: #f8f9fa;">
    <h3 style="margin-top: 0; color: #007bff;">🔥 Кастомные фильтры</h3>
    
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Поиск по тексту:</label>
        <input type="text" id="textFilter" placeholder="Введи текст для поиска..." 
               style="width: 300px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
        <button onclick="applyTextFilter()" style="margin-left: 10px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Применить
        </button>
    </div>
    
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Фильтр по числу:</label>
        <input type="number" id="numberFilter" placeholder="Минимальное число" 
               style="width: 200px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
        <button onclick="applyNumberFilter()" style="margin-left: 10px; padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Фильтр
        </button>
    </div>
    
    <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Сортировка:</label>
        <select id="sortField" style="width: 150px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;">
            <option value="">Без сортировки</option>
            <option value="text">По тексту</option>
            <option value="number">По числу</option>
            <option value="id">По ID</option>
        </select>
        <select id="sortDirection" style="width: 100px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;">
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
        </select>
        <button onclick="applySorting()" style="padding: 8px 16px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Сортировать
        </button>
    </div>
    
    <div style="margin-bottom: 15px;">
        <button onclick="clearAllFilters()" style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Очистить все фильтры
        </button>
        <button onclick="showAPIInfo()" style="margin-left: 10px; padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Показать API
        </button>
    </div>
    
    <div id="apiInfo" style="display: none; background: #e9ecef; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 12px;">
        <strong>window.DirectualFilter API:</strong><br>
        • props.currentFilter - текущий DQL фильтр<br>
        • props.fields - доступные поля<br>
        • emit(dql) - отправить новый фильтр
    </div>
</div>

<script>
function applyTextFilter() {
    const value = document.getElementById('textFilter').value;
    if (value) {
        // Формируем DQL запрос для поиска по полю text
        const dql = "'text' like '" + value + "'";
        console.log('Applying text filter:', dql);
        
        // Сохраняем текущую сортировку
        const currentSort = getCurrentSort();
        window.DirectualFilter.emit(dql, currentSort);
    }
}

function applyNumberFilter() {
    const value = document.getElementById('numberFilter').value;
    if (value) {
        // Формируем DQL запрос для фильтрации по числу
        const dql = "'number' >= '" + value + "'";
        console.log('Applying number filter:', dql);
        
        // Сохраняем текущую сортировку
        const currentSort = getCurrentSort();
        window.DirectualFilter.emit(dql, currentSort);
    }
}

function getCurrentSort() {
    const field = document.getElementById('sortField').value;
    const direction = document.getElementById('sortDirection').value;
    
    if (field) {
        return { field: field, direction: direction };
    }
    return null;
}

function applySorting() {
    const field = document.getElementById('sortField').value;
    const direction = document.getElementById('sortDirection').value;
    
    if (field) {
        const sortOptions = { field: field, direction: direction };
        console.log('Applying sorting:', sortOptions);
        
        // Сохраняем текущий фильтр и применяем новую сортировку
        const currentFilter = getCurrentFilter();
        window.DirectualFilter.emit(currentFilter, sortOptions);
    } else {
        // Убираем сортировку
        const currentFilter = getCurrentFilter();
        window.DirectualFilter.emit(currentFilter, null);
    }
}

function getCurrentFilter() {
    const textValue = document.getElementById('textFilter').value;
    const numberValue = document.getElementById('numberFilter').value;
    
    let conditions = [];
    if (textValue) conditions.push("'text' like '" + textValue + "'");
    if (numberValue) conditions.push("'number' >= '" + numberValue + "'");
    
    return conditions.join(' AND ');
}

function clearAllFilters() {
    document.getElementById('textFilter').value = '';
    document.getElementById('numberFilter').value = '';
    document.getElementById('sortField').value = '';
    console.log('Clearing all filters and sorting');
    window.DirectualFilter.emit('', null);
}

function showAPIInfo() {
    const info = document.getElementById('apiInfo');
    if (info.style.display === 'none') {
        info.style.display = 'block';
        if (window.DirectualFilter) {
            info.innerHTML = '<strong>window.DirectualFilter API:</strong><br>' +
                '• props.currentFilter: ' + (window.DirectualFilter.props.currentFilter || 'пусто') + '<br>' +
                '• props.fields: ' + JSON.stringify(window.DirectualFilter.props.fields, null, 2) + '<br>' +
                '• emit(dql) - отправить новый фильтр';
        }
    } else {
        info.style.display = 'none';
    }
}

// Автоматически показываем информацию об API при загрузке
setTimeout(() => {
    if (window.DirectualFilter) {
        console.log('🔥 DirectualFilter API готов!', window.DirectualFilter);
    }
}, 1000);
</script>
`;

export const CustomHTMLFilters = {
  args: {
    data: {
      ...exampleTable,
      customHTMLfilters: true,
      customHTMLfiltersContent: customFilterHTML,
    },
    auth: authExample,
    locale: 'ESP',
    onChange: value => console.log('Table changed:', value),
    handleRoute: value => e => console.log("route => " + value),
  },
};
