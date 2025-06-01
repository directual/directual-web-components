import FpsChart from '../components/fps/FpsChart'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Components/Chart',
  component: FpsChart,
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

let exampleChart = {
    "sl": "cv_90d_snapshots",
    "pageSize": "200",
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
        "show_grid": true,
        "chart_type": "line",
        "x_axis": "report_date",
        "lines_from_data": "from_data",
        "connectNulls": false,
        "show_legend": true,
        "show_tooltip": false,
        "layoutVertical": false,
        "show_brush": false,
        "paging_is_on": false,
        "filter_lines": true,
        "chart_height": 800,
        "x_axis_format": "DD.MM.Y",
        "chart_lines": [
            {
                "id": "64411718736163451",
                "color": "#9013fe",
                "line_data": "cv_90_days",
                "line_dot": true,
                "line_type": "monotone",
                "dot_width": 1
            }
        ],
        "line_labels": "for_graph",
        "biAxial": false,
        "x_axis_scale": "auto"
    },
    "tableTitle": "Динамика конверсии",
    "actions": null,
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        },
        {
            "sysName": "cv_90_days",
            "name": "Конверсия 90 дней",
            "dataType": "decimal",
            "id": "85841718730208425",
            "link": "",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        },
        {
            "sysName": "pays_90_days",
            "name": "Оплаты 90 дней",
            "dataType": "number",
            "id": "98701718730197832",
            "link": "",
            "group": "0",
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
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        },
        {
            "sysName": "report_date",
            "name": "report_date",
            "dataType": "date",
            "id": "23511718728875383",
            "link": "",
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
                "timeFormat": " HH:mm",
                "isUTC": "false"
            },
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        },
        {
            "sysName": "b24_lead_napr_id",
            "name": "b24_lead_napr_id",
            "dataType": "link",
            "id": "50571718728858282",
            "link": "b24_direction_of_study",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false
        },
        {
            "sysName": "b24_lead_sourse_id",
            "name": "b24_lead_sourse_id",
            "dataType": "link",
            "id": "36261718728837399",
            "link": "b24_sourse",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false
        },
        {
            "sysName": "b24_lead_category",
            "name": "b24_lead_category",
            "dataType": "string",
            "id": "81631718728827719",
            "link": null,
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        },
        {
            "sysName": "lead_owner",
            "name": "lead_owner",
            "dataType": "link",
            "id": "52301718728805730",
            "link": "WebUser",
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
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false
        },
        {
            "sysName": "count_leads",
            "name": "Лиды 90 дней",
            "dataType": "number",
            "id": "96331718728791148",
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
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        },
        {
            "sysName": "for_graph",
            "name": "",
            "dataType": "string",
            "id": "72771718808307837",
            "link": null,
            "group": "1718808337652",
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
            "array": false,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false
        }
    ],
    "data": [
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 40,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f45",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 6,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии": 40
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 40,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469802",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 6,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии": 40
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 40,
            "report_date": 1718810940164,
            "id": "f3efd121-d9d4-494d-890e-344471213da0",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 6,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии": 40
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 40,
            "report_date": 1718897340188,
            "id": "4cc31b1f-5c72-44fa-95b1-1776a0912826",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 6,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии": 40
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 40,
            "report_date": 1718983740148,
            "id": "7690fae8-0aba-4ee7-a195-fd30d96237a3",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 6,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии": 40
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 40,
            "report_date": 1719070140215,
            "id": "7fad74f7-9c5d-4326-93e3-1ebf14e77458",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 6,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Рабочие профессии": 40
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 35.71,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f8e",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 5,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии": 35.71
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 35.71,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469815",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 5,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии": 35.71
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 35.71,
            "report_date": 1718810940164,
            "id": "44e10c9f-5a5a-41e2-8023-8ddd9696b8bf",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 5,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии": 35.71
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 35.71,
            "report_date": 1718897340188,
            "id": "22222656-d1ca-4019-ac80-99293100b2ca",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 5,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии": 35.71
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 35.71,
            "report_date": 1718983740148,
            "id": "b42f2608-7aab-4c42-bc5b-3c5e545840ca",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 5,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии": 35.71
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 35.71,
            "report_date": 1719070140215,
            "id": "c267afee-5e96-47af-a7c2-377b44ab773e",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 5,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-evidpo.ru-Рабочие профессии": 35.71
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 33.33,
            "report_date": 1718983740148,
            "id": "768390c5-a2fa-4c08-a2ef-b12d122b54b3",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 4,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Педагогика": 33.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 33.33,
            "report_date": 1719070140215,
            "id": "d8c96926-b231-489f-961a-3f3846113316",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 4,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Педагогика": 33.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 30.77,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721e98",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 4,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии": 30.77
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 30.77,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d4246983b",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 4,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии": 30.77
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 30.77,
            "report_date": 1718810940164,
            "id": "120a99f2-fa5f-4f91-b549-2b5df9cdf2e5",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 4,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии": 30.77
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 30.77,
            "report_date": 1718897340188,
            "id": "8856497d-1033-47dd-a7cd-1c92dc8c3d5e",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 4,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии": 30.77
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 30.77,
            "report_date": 1718983740148,
            "id": "9da06bf5-3bb0-4b02-a227-d4ca46f804e3",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 4,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии": 30.77
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 30.77,
            "report_date": 1719070140215,
            "id": "79c2b981-e707-42be-8246-20980f060f55",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии",
            "pays_90_days": 4,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-evidpo.ru-Рабочие профессии": 30.77
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 25,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469787",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 3,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Педагогика": 25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 25,
            "report_date": 1718810940164,
            "id": "f079ae63-55e4-4d9c-8aa4-507e8d831048",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 3,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Педагогика": 25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 25,
            "report_date": 1718897340188,
            "id": "c5f103b5-14ee-4ea9-9c18-afcf6bb5b6fc",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 3,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Педагогика": 25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 23.08,
            "report_date": 1719070140215,
            "id": "5723466b-0498-48da-a246-9cb3cadb456e",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Дьяченко-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 3,
            "count_leads": 13,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-Яндекс Директ-Педагогика": 23.08
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 20,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f67",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 2,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-БДД": 20
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 20,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f51",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 2,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Педагогика": 20
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 20,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d4246985f",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 2,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-БДД": 20
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 20,
            "report_date": 1718810940164,
            "id": "4b201791-b5af-4f24-9b34-d1342be1859b",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 2,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-БДД": 20
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 20,
            "report_date": 1718897340188,
            "id": "28c2bff3-08ac-4b09-84d2-440829dd5830",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Карина Салихова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 2,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-evidpo.ru-Педагогика": 20
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 20,
            "report_date": 1718983740148,
            "id": "c62bfb6f-beb8-415d-8c56-c84ba65ae4be",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Карина Салихова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 2,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-evidpo.ru-Педагогика": 20
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 20,
            "report_date": 1719070140215,
            "id": "ada054ce-02c8-402f-9e33-76ca7d708c32",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Карина Салихова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 2,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-evidpo.ru-Педагогика": 20
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 17.91,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f49",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 12,
            "count_leads": 67,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии": 17.91
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 17.91,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469861",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 12,
            "count_leads": 67,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии": 17.91
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 17.91,
            "report_date": 1718810940164,
            "id": "a73d9a96-edaa-4abf-9fb1-1d6640835068",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 12,
            "count_leads": 67,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии": 17.91
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 17.91,
            "report_date": 1718897340188,
            "id": "b08867aa-7f5e-49ea-8f6e-0c156724bd52",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 12,
            "count_leads": 67,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии": 17.91
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 17.91,
            "report_date": 1718983740148,
            "id": "83dc570c-e5f7-49e3-b800-5e0ee852ac51",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 12,
            "count_leads": 67,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии": 17.91
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 17.91,
            "report_date": 1719070140215,
            "id": "4f7dbb80-befb-468b-85a2-a36a683fac18",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 12,
            "count_leads": 67,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-Яндекс Директ-Рабочие профессии": 17.91
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 16.67,
            "report_date": 1718897340188,
            "id": "6c3651da-9c3e-4016-8b78-af0028d91dfe",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии": 16.67
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 15.38,
            "report_date": 1718983740148,
            "id": "de7e5594-2fe8-4f6f-bdd0-2ef717cd2f24",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии": 15.38
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 15.38,
            "report_date": 1719070140215,
            "id": "2bd877d7-b368-443d-8f8a-478f7d2e67c8",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии": 15.38
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 15.25,
            "report_date": 1718983740148,
            "id": "2adf5e8a-51c8-4501-86e7-d01465533ed5",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 9,
            "count_leads": 59,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии": 15.25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 15.25,
            "report_date": 1719070140215,
            "id": "8572c27f-8095-4cc0-ae76-de5a3c3298f0",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 9,
            "count_leads": 59,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии": 15.25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 15,
            "report_date": 1718983740148,
            "id": "28e9959b-f1c3-46ee-a251-5bf9284762c2",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 3,
            "count_leads": 20,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии": 15
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 15,
            "report_date": 1719070140215,
            "id": "185f2f85-0fef-420d-9ca3-723e42004add",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 3,
            "count_leads": 20,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии": 15
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 14.29,
            "report_date": 1718897340188,
            "id": "58262b94-e555-41b3-9115-d6356929b26d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 2,
            "count_leads": 14,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-БДД": 14.29
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 14.29,
            "report_date": 1718983740148,
            "id": "a79e820f-bd4a-4c94-b07a-f1f92649520c",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 2,
            "count_leads": 14,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-БДД": 14.29
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 14.29,
            "report_date": 1719070140215,
            "id": "a117f1c3-fb50-446a-ac58-d91aad88cf77",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 2,
            "count_leads": 14,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-БДД": 14.29
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 13.56,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f38",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 8,
            "count_leads": 59,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии": 13.56
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 13.56,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469842",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 8,
            "count_leads": 59,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии": 13.56
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 13.56,
            "report_date": 1718810940164,
            "id": "fd97e515-ed0e-4e47-87af-6826daccae8e",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 8,
            "count_leads": 59,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии": 13.56
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 13.56,
            "report_date": 1718897340188,
            "id": "742709ad-0ec8-427f-b2e6-b6a1708af95b",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 8,
            "count_leads": 59,
            "lead_owner": {
                "firstName": "Юлия",
                "lastName": "Емельянова ",
                "id": "map180@evidpo.ru"
            },
            "Юлия Емельянова -1 категория-Яндекс Директ-Рабочие профессии": 13.56
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 12.5,
            "report_date": 1718983740148,
            "id": "9d6de5c7-dbbc-4be5-be90-97a7de8d4fcd",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 2,
            "count_leads": 16,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика": 12.5
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 12.5,
            "report_date": 1719070140215,
            "id": "98681092-5e41-4769-8cc6-de4751c069d5",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 2,
            "count_leads": 16,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика": 12.5
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 11.11,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f5f",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 18,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии": 11.11
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 11.11,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d424698f7",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 18,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии": 11.11
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 11.11,
            "report_date": 1718810940164,
            "id": "1603816a-5ef1-4e39-a9aa-7e3191149fa6",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 18,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии": 11.11
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 11.11,
            "report_date": 1718897340188,
            "id": "db43b3a8-972f-4990-9781-0950b597668d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 18,
            "lead_owner": {
                "lastName": "Котова",
                "firstName": "Елена",
                "id": "map103@evidpo.ru"
            },
            "Елена Котова-1 категория-Яндекс Директ-Рабочие профессии": 11.11
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721fd6",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Елена Дьяченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-evidpo.ru-Педагогика": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f35",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d4272203b",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Карина Салихова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-evidpo.ru-Педагогика": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469782",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Карина Салихова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-evidpo.ru-Педагогика": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d424697a2",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718810940164,
            "id": "5ecb79fa-62e8-4560-aaa4-fd7a32a5667e",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Карина Салихова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-evidpo.ru-Педагогика": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718810940164,
            "id": "8df4df26-a775-4fab-b6ec-901aa3b23cd2",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718897340188,
            "id": "7a5bc8c1-fd5f-4015-b5d7-a92e322424d4",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1718983740148,
            "id": "d591ab74-520c-4147-90f8-973e7b191bf8",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1719070140215,
            "id": "ba13deb2-1319-4d2c-ac5a-cca5010efcbe",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Мария Юрченко-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-Яндекс Директ-БДД": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 10,
            "report_date": 1719070140215,
            "id": "583cae64-3e0d-49ab-ac9a-11bfa91821ee",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 10,
            "lead_owner": {
                "lastName": "Салихова",
                "firstName": "Карина",
                "id": "map245@evidpo.ru"
            },
            "Карина Салихова-1 категория-Яндекс Директ-Рабочие профессии": 10
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 9.09,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469869",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 11,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии": 9.09
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 9.09,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d424698ac",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Елена Дьяченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 11,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-evidpo.ru-Педагогика": 9.09
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 9.09,
            "report_date": 1718810940164,
            "id": "d0cef06c-eb7e-4b8e-9056-e488898bd5a3",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Елена Дьяченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 11,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-evidpo.ru-Педагогика": 9.09
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 9.09,
            "report_date": 1718810940164,
            "id": "93c8314a-2e88-460a-b269-3b49c6013b91",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 11,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-Яндекс Директ-Рабочие профессии": 9.09
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 9.09,
            "report_date": 1718897340188,
            "id": "ab6e1971-df8f-48ab-b1b0-2bc5f0464b20",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Елена Дьяченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 11,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-evidpo.ru-Педагогика": 9.09
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 9.09,
            "report_date": 1718983740148,
            "id": "4cf866d8-f775-44be-a874-46951bbb936d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Елена Дьяченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 11,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-evidpo.ru-Педагогика": 9.09
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 9.09,
            "report_date": 1718983740148,
            "id": "4eff3b77-268e-4de8-a745-7b81fccb8ca2",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Тамара Айрапетян-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 11,
            "lead_owner": {
                "firstName": "Тамара",
                "lastName": "Айрапетян",
                "id": "map248@evidpo.ru"
            },
            "Тамара Айрапетян-1 категория-Яндекс Директ-Педагогика": 9.09
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 9.09,
            "report_date": 1719070140215,
            "id": "5fc3aba3-6740-4b0f-838a-24aff2a8c89f",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Тамара Айрапетян-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 11,
            "lead_owner": {
                "firstName": "Тамара",
                "lastName": "Айрапетян",
                "id": "map248@evidpo.ru"
            },
            "Тамара Айрапетян-1 категория-Яндекс Директ-Педагогика": 9.09
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.54,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469848",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 7,
            "count_leads": 82,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии": 8.54
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.54,
            "report_date": 1718810940164,
            "id": "c2f81034-58a4-4fb3-9534-164d81291522",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 7,
            "count_leads": 82,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии": 8.54
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f66",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Мария Юрченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-evidpo.ru-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f0d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d4246983a",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Мария Юрченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-evidpo.ru-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469747",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718810940164,
            "id": "0885abc5-dd64-4638-bef1-42f86b4b5305",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718810940164,
            "id": "b1ca0836-a07a-4d1e-8421-b82012fcdc3f",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Мария Юрченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-evidpo.ru-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718897340188,
            "id": "f3dfe5cb-66c3-4654-8000-19a54c4ddcd6",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 7,
            "count_leads": 84,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718897340188,
            "id": "73ff7593-3fbb-4a0a-9890-b634c57b8bfe",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Мария Юрченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-evidpo.ru-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718897340188,
            "id": "a0192e42-5813-4ade-b390-39ad0b5edae2",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718983740148,
            "id": "a2768089-bef0-4d3f-952e-e3449b3eedf5",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718983740148,
            "id": "4c0d6c53-7f68-4b95-8cc8-3fd1248c3d95",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Дарья Доценко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-evidpo.ru-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718983740148,
            "id": "16df1400-77ed-46bb-bfb0-de19c1fad712",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Мария Юрченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-evidpo.ru-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1718983740148,
            "id": "c64f7a8e-668e-435c-aeff-e3f933bd51bd",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 7,
            "count_leads": 84,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1719070140215,
            "id": "501f0798-e209-4956-9320-b41a7521b8e8",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Дарья Доценко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Доценко",
                "firstName": "Дарья",
                "id": "map233@evidpo.ru"
            },
            "Дарья Доценко-1 категория-evidpo.ru-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1719070140215,
            "id": "f6dc5f97-6f2b-4861-99cd-84b68e90a7d6",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 7,
            "count_leads": 84,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 8.33,
            "report_date": 1719070140215,
            "id": "b630d1aa-43f3-4b70-8c2d-e191aecf7623",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 12,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-Педагогика": 8.33
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.69,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721ee7",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Ирина Будур-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-evidpo.ru-Педагогика": 7.69
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.69,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d424697d9",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Ирина Будур-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-evidpo.ru-Педагогика": 7.69
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.69,
            "report_date": 1718810940164,
            "id": "60f2a613-5953-4e8f-9f2b-329d65575dad",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Ирина Будур-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-evidpo.ru-Педагогика": 7.69
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.69,
            "report_date": 1718897340188,
            "id": "fd029d95-cc16-4959-8491-23421150ac84",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Ирина Будур-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-evidpo.ru-Педагогика": 7.69
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.69,
            "report_date": 1718983740148,
            "id": "8217270a-92da-4e32-be43-f42beb038637",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Ирина Будур-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-evidpo.ru-Педагогика": 7.69
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.69,
            "report_date": 1719070140215,
            "id": "6faae7a1-cf4e-4d08-b922-0a2c853fc21c",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Ирина Будур-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 13,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-evidpo.ru-Педагогика": 7.69
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f8d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Педагогика": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d42469812",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 28,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d4246986f",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Педагогика": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1718810940164,
            "id": "aaa0497e-de5a-4a35-b04e-636131b0adb8",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 28,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1718810940164,
            "id": "e0b923cc-142a-4914-834c-81f6d5050059",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Педагогика": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1718897340188,
            "id": "bd161c32-6c1c-4be5-b2c8-8be04ee3e7e1",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Педагогика": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1718897340188,
            "id": "9151da0e-6864-4449-82ab-456c32b80d20",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 28,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1718983740148,
            "id": "24eb25c1-90e5-40a0-bbaf-051b0fed7f56",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 28,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 7.14,
            "report_date": 1719070140215,
            "id": "42c40b2f-d28e-48c2-a3dd-4080ea79fff4",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Мария Юрченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 14,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-evidpo.ru-Педагогика": 7.14
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.67,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f77",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Дьяченко-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-Яндекс Директ-БДД": 6.67
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.67,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d4246977c",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Дьяченко-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-Яндекс Директ-БДД": 6.67
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.67,
            "report_date": 1718810940164,
            "id": "6f31f287-57f0-471c-80d5-72c65dddd64d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Дьяченко-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 15,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-Яндекс Директ-БДД": 6.67
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.45,
            "report_date": 1719070140215,
            "id": "a6799d0a-da1e-4868-8f68-cfca8f430dad",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 2,
            "count_leads": 31,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии": 6.45
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.25,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721e97",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 16,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика": 6.25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.25,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d4246983c",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 16,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика": 6.25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.25,
            "report_date": 1718810940164,
            "id": "c3d796e9-e2d6-42ae-b3f5-bcde556b8818",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 16,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика": 6.25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.25,
            "report_date": 1718897340188,
            "id": "d5cd3382-62af-401d-ae79-34a2b16a1fd9",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 16,
            "lead_owner": {
                "lastName": "Татаринцева",
                "firstName": "Екатерина",
                "id": "map255@evidpo.ru"
            },
            "Екатерина Татаринцева-1 категория-evidpo.ru-Педагогика": 6.25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.25,
            "report_date": 1718983740148,
            "id": "50ee09fb-ecd3-4ba5-8cfd-fc56f5a356c4",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Гузеева-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 16,
            "lead_owner": {
                "lastName": "Гузеева",
                "firstName": "Екатерина",
                "id": "map242@evidpo.ru"
            },
            "Екатерина Гузеева-1 категория-Яндекс Директ-БДД": 6.25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.25,
            "report_date": 1719070140215,
            "id": "36ea6c4d-d61b-4bd9-bc8b-4c6625915c45",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Гузеева-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 16,
            "lead_owner": {
                "lastName": "Гузеева",
                "firstName": "Екатерина",
                "id": "map242@evidpo.ru"
            },
            "Екатерина Гузеева-1 категория-Яндекс Директ-БДД": 6.25
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 6.1,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f47",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 5,
            "count_leads": 82,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-Яндекс Директ-Рабочие профессии": 6.1
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5.88,
            "report_date": 1719070140215,
            "id": "4078ea14-829f-4a7a-9cb5-e23cb25b1ca1",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Мария Юрченко-1 категория-Яндекс Директ-Педагогика",
            "pays_90_days": 1,
            "count_leads": 17,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-Яндекс Директ-Педагогика": 5.88
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5.56,
            "report_date": 1718897340188,
            "id": "66cb2f9b-56a8-418d-8e45-6ea9d1fe095e",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Дьяченко-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 18,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-Яндекс Директ-БДД": 5.56
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5.56,
            "report_date": 1719070140215,
            "id": "c514be90-8369-4dc0-9c83-57f8c57aa1ce",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 2,
            "count_leads": 36,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-БДД": 5.56
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5.56,
            "report_date": 1719070140215,
            "id": "405f7103-e5ed-4b8a-9d5b-7dcdaf99893c",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Елена Дьяченко-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 18,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-evidpo.ru-Педагогика": 5.56
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5.26,
            "report_date": 1718983740148,
            "id": "7f0bb975-58b2-420e-b314-a3dc4343d80d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 19,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Педагогика": 5.26
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5.26,
            "report_date": 1719070140215,
            "id": "d135f9e7-e076-4f4d-a4bb-5b0e57b00e20",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Педагогика",
                "id": "1113"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "evidpo.ru",
                "id": "11"
            },
            "for_graph": "Наталья Трофимова-1 категория-evidpo.ru-Педагогика",
            "pays_90_days": 1,
            "count_leads": 19,
            "lead_owner": {
                "firstName": "Наталья",
                "lastName": "Трофимова",
                "id": "map271@evidpo.ru"
            },
            "Наталья Трофимова-1 категория-evidpo.ru-Педагогика": 5.26
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721ee9",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 20,
            "lead_owner": {
                "lastName": "Файзуллина",
                "firstName": "Элина",
                "id": "map236@evidpo.ru"
            },
            "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии": 5
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d424698f1",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 20,
            "lead_owner": {
                "lastName": "Файзуллина",
                "firstName": "Элина",
                "id": "map236@evidpo.ru"
            },
            "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии": 5
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5,
            "report_date": 1718810940164,
            "id": "26a757bd-70d7-4c9e-98b1-fd1d40ef83ab",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 20,
            "lead_owner": {
                "lastName": "Файзуллина",
                "firstName": "Элина",
                "id": "map236@evidpo.ru"
            },
            "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии": 5
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5,
            "report_date": 1718897340188,
            "id": "8b15b7ab-b7e7-45a2-b796-2f0d5ff26c0f",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 20,
            "lead_owner": {
                "lastName": "Файзуллина",
                "firstName": "Элина",
                "id": "map236@evidpo.ru"
            },
            "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии": 5
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5,
            "report_date": 1718983740148,
            "id": "3e9c7673-a3bd-4cb5-990a-e4921a68d6e6",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 20,
            "lead_owner": {
                "lastName": "Файзуллина",
                "firstName": "Элина",
                "id": "map236@evidpo.ru"
            },
            "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии": 5
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 5,
            "report_date": 1719070140215,
            "id": "23a77652-b54a-413c-959b-3db5c5505295",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 20,
            "lead_owner": {
                "lastName": "Файзуллина",
                "firstName": "Элина",
                "id": "map236@evidpo.ru"
            },
            "Элина Файзуллина-1 категория-Яндекс Директ-Рабочие профессии": 5
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 4.55,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f58",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 22,
            "lead_owner": {
                "lastName": "Гузеева",
                "firstName": "Екатерина",
                "id": "map242@evidpo.ru"
            },
            "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии": 4.55
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 4.35,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d424697fa",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 23,
            "lead_owner": {
                "lastName": "Гузеева",
                "firstName": "Екатерина",
                "id": "map242@evidpo.ru"
            },
            "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии": 4.35
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 4.35,
            "report_date": 1718810940164,
            "id": "f98f9f2f-0110-49ea-8aaa-5a490ace425d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 23,
            "lead_owner": {
                "lastName": "Гузеева",
                "firstName": "Екатерина",
                "id": "map242@evidpo.ru"
            },
            "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии": 4.35
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 4.35,
            "report_date": 1718897340188,
            "id": "8c85734b-15bc-4b3f-855a-d4440f044a63",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 23,
            "lead_owner": {
                "lastName": "Гузеева",
                "firstName": "Екатерина",
                "id": "map242@evidpo.ru"
            },
            "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии": 4.35
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 4.35,
            "report_date": 1718983740148,
            "id": "52eeed71-18ae-494f-aaac-902675b4884b",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 23,
            "lead_owner": {
                "lastName": "Гузеева",
                "firstName": "Екатерина",
                "id": "map242@evidpo.ru"
            },
            "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии": 4.35
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 4.35,
            "report_date": 1719070140215,
            "id": "200f964b-8b36-425e-bbb0-cd38981ba322",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 23,
            "lead_owner": {
                "lastName": "Гузеева",
                "firstName": "Екатерина",
                "id": "map242@evidpo.ru"
            },
            "Екатерина Гузеева-1 категория-Яндекс Директ-Рабочие профессии": 4.35
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 4,
            "report_date": 1718983740148,
            "id": "df9c03bf-1ec0-49aa-8591-173ca6989b69",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Дьяченко-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 25,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-Яндекс Директ-БДД": 4
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 3.85,
            "report_date": 1719070140215,
            "id": "ae58b3a7-56b7-4dfb-a717-33e1472e94e1",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Елена Дьяченко-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 26,
            "lead_owner": {
                "firstName": "Елена",
                "lastName": "Дьяченко",
                "id": "evimap6@gmail.com"
            },
            "Елена Дьяченко-1 категория-Яндекс Директ-БДД": 3.85
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 3.57,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721ef7",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "Рабочие профессии",
                "id": "1115"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии",
            "pays_90_days": 1,
            "count_leads": 28,
            "lead_owner": {
                "firstName": "Мария",
                "lastName": "Юрченко",
                "id": "map171@evidpo.ru"
            },
            "Мария Юрченко-1 категория-Яндекс Директ-Рабочие профессии": 3.57
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 3.13,
            "report_date": 1718724540245,
            "id": "6671a7bca84f8f0d42721f55",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 32,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-БДД": 3.13
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 3.13,
            "report_date": 1718809290064,
            "id": "6672f2caa84f8f0d4246980d",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 32,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-БДД": 3.13
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 3.13,
            "report_date": 1718810940164,
            "id": "674320d6-befd-4b1a-94d9-d6cfee3ccaf3",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 32,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-БДД": 3.13
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 3.13,
            "report_date": 1718897340188,
            "id": "6000c5f7-2613-4a3c-8c24-5c8a1b8bb414",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 32,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-БДД": 3.13
        },
        {
            "b24_lead_category": "1 категория",
            "cv_90_days": 2.78,
            "report_date": 1718983740148,
            "id": "a70eace7-8c2e-4873-ab4d-7f026da87844",
            "b24_lead_napr_id": {
                "b24_direction_of_study_name": "БДД",
                "id": "1101"
            },
            "b24_lead_sourse_id": {
                "b24_sourse_name": "Яндекс Директ",
                "id": "10"
            },
            "for_graph": "Ирина Будур-1 категория-Яндекс Директ-БДД",
            "pays_90_days": 1,
            "count_leads": 36,
            "lead_owner": {
                "lastName": "Будур",
                "firstName": "Ирина",
                "id": "map136@evidpo.ru"
            },
            "Ирина Будур-1 категория-Яндекс Директ-БДД": 2.78
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "id",
            99320697
        ],
        [
            "cv_90_days",
            99320697
        ],
        [
            "pays_90_days",
            99320697
        ],
        [
            "report_date",
            99320697
        ],
        [
            "b24_lead_napr_id.id",
            99306069
        ],
        [
            "b24_lead_napr_id.b24_direction_of_study_name",
            99306069
        ],
        [
            "b24_lead_sourse_id.id",
            99306068
        ],
        [
            "b24_lead_sourse_id.b24_sourse_name",
            99306068
        ],
        [
            "b24_lead_category",
            99320697
        ],
        [
            "lead_owner.id",
            99123383
        ],
        [
            "lead_owner.firstName",
            99123383
        ],
        [
            "lead_owner.lastName",
            99123383
        ],
        [
            "count_leads",
            99320697
        ],
        [
            "for_graph",
            99320697
        ]
    ],
    "writeFields": [],
    "structures": {
        "99123383": {
            "id": 99123383,
            "dateCreated": "2022-07-31T09:04:32Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 13775,
            "name": "App users",
            "sysName": "WebUser",
            "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"tgChatId\",\"name\":\"ID чата в телеграм\",\"dataType\":\"string\",\"id\":\"65181699865221344\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"role\",\"name\":\"systemRoles\",\"dataType\":\"array\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"firstName\",\"name\":\"Имя\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"lastName\",\"name\":\"Фамилия\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"gender\",\"name\":\"Пол\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"temp\",\"name\":\"Временный юзер\",\"dataType\":\"boolean\",\"id\":\"25061713521772260\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"job_title\",\"name\":\"Должность\",\"dataType\":\"arrayLink\",\"id\":\"93621665303195388\",\"link\":\"job_titles\",\"group\":\"1665303173803\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"departments\",\"name\":\"Отдел\",\"dataType\":\"arrayLink\",\"id\":\"95551674628615592\",\"link\":\"departments\",\"group\":\"1665303173803\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"userLineManager\",\"name\":\"Руководитель\",\"dataType\":\"link\",\"id\":\"38471695381223498\",\"link\":\"WebUser\",\"group\":\"1665303173803\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"UserSystemRoles\",\"name\":\"UserSystemRoles\",\"dataType\":\"arrayLink\",\"id\":\"64921687898012995\",\"link\":\"user_system_roles\",\"group\":\"1665303173803\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[\"SystemRoleName\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"evidpo-owner\",\"label\":\"evidpo-owner\"},{\"value\":\"evidpo-admin\",\"label\":\"evidpo-admin\"},{\"value\":\"evidpo-worker\",\"label\":\"evidpo-worker\"},{\"value\":\"partner-owner\",\"label\":\"partner-owner\"},{\"value\":\"partner-worker\",\"label\":\"partner-worker\"},{\"value\":\"client-owner\",\"label\":\"client-owner\"},{\"value\":\"client-worker\",\"label\":\"client-worker\"},{\"value\":\"client-student\",\"label\":\"client-student\"},{\"value\":\"teacher\",\"label\":\"teacher\"}]},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"userRights\",\"name\":\"Права пользователя\",\"dataType\":\"arrayLink\",\"id\":\"96521690273696243\",\"link\":\"userrights\",\"group\":\"1665303173803\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[\"rightName\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"generatedPassword\",\"name\":\"generatedPassword(no hash)\",\"dataType\":\"string\",\"id\":\"15781694501139290\",\"link\":\"\",\"group\":\"1694501105557\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"company\",\"name\":\"[MKD] Company\",\"dataType\":\"link\",\"id\":\"14731696443945778\",\"link\":\"mkd_company\",\"group\":\"1696443935587\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"clientsWorkspaces\",\"name\":\"[MKD] clientsWorkspaces\",\"dataType\":\"arrayLink\",\"id\":\"88781696448249362\",\"link\":\"mkdclientsworkspace\",\"group\":\"1696443935587\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"b24_user_id_string\",\"name\":\"B24 USER ID\",\"dataType\":\"string\",\"id\":\"96671709573654577\",\"link\":null,\"group\":\"1697054908126\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_distr_is_rop\",\"name\":\"Является РОПом с распределением?\",\"dataType\":\"boolean\",\"id\":\"88121713788008334\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_distr_rop_quene\",\"name\":\"Очередь отдела\",\"dataType\":\"number\",\"id\":\"97381713788135356\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_in_the_distribution\",\"name\":\"В распределении\",\"dataType\":\"boolean\",\"id\":\"98151713266827065\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_is_work\",\"name\":\"На линии\",\"dataType\":\"boolean\",\"id\":\"67441713787026829\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"На линии\",\"Не на линии\"],\"hideStandardBooleanIcons\":false,\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_distr_sourses\",\"name\":\"Распр. с источников\",\"dataType\":\"arrayLink\",\"id\":\"52311713784588001\",\"link\":\"b24_sourse\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"b24_user_distr_napr\",\"name\":\"Распр. с направлений\",\"dataType\":\"arrayLink\",\"id\":\"90351713784856092\",\"link\":\"b24_direction_of_study\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"b24_user_all_limit\",\"name\":\"Лимит всего лидов\",\"dataType\":\"number\",\"id\":\"13011713786351575\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_all_fact\",\"name\":\"Факт всего лидов\",\"dataType\":\"number\",\"id\":\"22531713786873024\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_all_limit_open\",\"name\":\"Общий лимит не закрыт\",\"dataType\":\"boolean\",\"id\":\"64671715260324527\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color_all_limit\",\"name\":\"Цвет общего лимита\",\"dataType\":\"string\",\"id\":\"58451715960052571\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_limit_1cat\",\"name\":\"Лимит 1 кат\",\"dataType\":\"number\",\"id\":\"84371713786417808\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_fact_1cat\",\"name\":\"Факт 1 кат\",\"dataType\":\"number\",\"id\":\"40301713786778985\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_limit_1cat_open\",\"name\":\"1 кат не закрыта\",\"dataType\":\"boolean\",\"id\":\"78441715260260982\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color_1cat_limit\",\"name\":\"Цвет 1 кат лимита\",\"dataType\":\"string\",\"id\":\"76991715960156619\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_limit_23cat\",\"name\":\"Лимит 23 кат\",\"dataType\":\"number\",\"id\":\"41431717711162147\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_fact_23cat\",\"name\":\"Факт 23 кат\",\"dataType\":\"number\",\"id\":\"71511717711189756\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_limit_23cat_open\",\"name\":\"23 кат не закрыта\",\"dataType\":\"boolean\",\"id\":\"21921717711208759\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color_23cat_limit\",\"name\":\"Цвет 23 кат лимита\",\"dataType\":\"string\",\"id\":\"90511717775829739\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_limit_karma\",\"name\":\"Лимит кармы\",\"dataType\":\"number\",\"id\":\"83131713786513590\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_fact_karma\",\"name\":\"Сейчас в карме\",\"dataType\":\"number\",\"id\":\"72571713786744264\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_karma_open\",\"name\":\"Карма не закрыта\",\"dataType\":\"boolean\",\"id\":\"15091715260181504\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color_karma_limit\",\"name\":\"Цвет кармы\",\"dataType\":\"string\",\"id\":\"17831716044214449\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color_row\",\"name\":\"Цвет строки\",\"dataType\":\"string\",\"id\":\"67981715962551015\",\"link\":\"\",\"group\":\"1697054908126\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_index_akb\",\"name\":\"Индекс АКБ\",\"dataType\":\"number\",\"id\":\"62901718264598974\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_index_akb_date_update\",\"name\":\"Индекс АКБ обновлен\",\"dataType\":\"date\",\"id\":\"24651718270293030\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_clients_a\",\"name\":\"Клиентов А\",\"dataType\":\"number\",\"id\":\"64301718310453028\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_clients_b\",\"name\":\"Клиентов B\",\"dataType\":\"number\",\"id\":\"10041718310468396\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_user_clients_c\",\"name\":\"Клиентов C\",\"dataType\":\"number\",\"id\":\"50121718310484162\",\"link\":\"\",\"group\":\"1718264588137\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
            "jsonGroupSettings": "[{\"id\":1718264588137,\"name\":\"АКБ\",\"order\":6},{\"id\":1665303173803,\"name\":\"Права\",\"order\":2},{\"id\":-1776115286,\"name\":\"System fields\",\"order\":1},{\"id\":1697054908126,\"name\":\"b24_distr\",\"order\":5},{\"id\":1696443935587,\"name\":\"[MKD] test\",\"order\":4},{\"id\":1694501105557,\"name\":\"auto Fields\",\"order\":3},{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-13T20:38:56Z",
            "createBy": 0,
            "changedBy": 13979,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
            "innerIDField": {
                "sysName": "id",
                "name": "Username (login)",
                "dataType": "id",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false
            },
            "folderId": 33725112
        },
        "99306068": {
            "id": 99306068,
            "dateCreated": "2024-04-15T07:02:30Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 13775,
            "name": "b24_sourse",
            "sysName": "b24_sourse",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_sourse_name\",\"name\":\"Наименование источника\",\"dataType\":\"string\",\"id\":\"96941713164632475\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_sourse_distribute\",\"name\":\"Распределение вкл / выкл\",\"dataType\":\"boolean\",\"id\":\"21771713166393991\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"JSON\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"19521713166444706\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"who_edited\",\"name\":\"Кто редактировал\",\"dataType\":\"link\",\"id\":\"46971713167094986\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"filter_by_lead\",\"name\":\"Создавать заявку?\",\"dataType\":\"boolean\",\"id\":\"91431713384697030\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"b24_sourse_name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-18T08:35:38Z",
            "createBy": 13979,
            "changedBy": 13979,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false
            },
            "folderId": 33800752
        },
        "99306069": {
            "id": 99306069,
            "dateCreated": "2024-04-15T07:03:11Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 13775,
            "name": "b24_direction_of_study",
            "sysName": "b24_direction_of_study",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_direction_of_study_name\",\"name\":\"Наименование направления\",\"dataType\":\"string\",\"id\":\"25911713164594643\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"JSON\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"23381713169228060\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"who_edited\",\"name\":\"Кто редактировал\",\"dataType\":\"link\",\"id\":\"80251713169232856\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"b24_direction_distribute\",\"name\":\"Распределение вкл/выкл\",\"dataType\":\"boolean\",\"id\":\"93951713169304626\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"b24_direction_of_study_name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-04-15T08:52:56Z",
            "createBy": 13979,
            "changedBy": 13979,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false
            },
            "folderId": 33800752
        },
        "99320697": {
            "id": 99320697,
            "dateCreated": "2024-06-18T16:37:47Z",
            "hidden": false,
            "dateHidden": null,
            "networkID": 13775,
            "name": "cv_90d_snapshots",
            "sysName": "cv_90d_snapshots",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"report_date\",\"name\":\"report_date\",\"dataType\":\"date\",\"id\":\"23511718728875383\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_lead_sourse_id\",\"name\":\"b24_lead_sourse_id\",\"dataType\":\"link\",\"id\":\"36261718728837399\",\"link\":\"b24_sourse\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"b24_lead_napr_id\",\"name\":\"b24_lead_napr_id\",\"dataType\":\"link\",\"id\":\"50571718728858282\",\"link\":\"b24_direction_of_study\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"lead_owner\",\"name\":\"lead_owner\",\"dataType\":\"link\",\"id\":\"52301718728805730\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"for_graph\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"72771718808307837\",\"link\":null,\"group\":\"1718808337652\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"b24_lead_category\",\"name\":\"b24_lead_category\",\"dataType\":\"string\",\"id\":\"81631718728827719\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"cv_90_days\",\"name\":\"Конверсия 90 дней\",\"dataType\":\"decimal\",\"id\":\"85841718730208425\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"count_leads\",\"name\":\"Лиды 90 дней\",\"dataType\":\"number\",\"id\":\"96331718728791148\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"pays_90_days\",\"name\":\"Оплаты 90 дней\",\"dataType\":\"number\",\"id\":\"98701718730197832\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
            "jsonGroupSettings": "[{\"id\":1718808337652,\"name\":\"graph\",\"order\":0}]",
            "jsonViewIdSettings": null,
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2024-06-19T14:45:48Z",
            "createBy": 13979,
            "changedBy": 13979,
            "_settings": null,
            "_nativeIndexSettings": null,
            "objectIDSysName": "id",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false
            },
            "folderId": 33800752
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [],
    "quickSearch": "false",
    "httpParams": {
        "b24_lead_category": "1 категория"
    },
    "cardCustomHtml": null,
    "cardCustomLayout": null,
    "comment": null,
    "response": null
}


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    data: exampleChart,
    locale: 'ENG'
  },
};
