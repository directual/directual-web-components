import React, { useState } from 'react'
import { Button, FpsLayout, Dnd } from 'directual-web-components'
import { useSortBy } from 'react-table'


export default function LayoutPage() {

    const layoutExample = {
        "showHeader": true,
        "header": "Books!!",
        "tabs": [
            {
                "id": "tab_01",
                "title": "Tab 1"
            },
            {
                "id": "tab_1616786206244",
                "title": "Tab 2"
            },
            {
                "id": "tab_3",
                "title": "Tab 3"
            }
        ],
        "sections": {
            "tab_01": [
                {
                    "id": "section_610a56c4-3",
                    "tab": "tab_01",
                    "flexDirection": {
                        "mobile": "column",
                        "desktop": "row"
                    },
                    "columns": [
                        {
                            "size": 100,
                            "id": "column_610a56c4-3",
                            "content": {
                                "clazz": "FpsCards",
                                "id": "610a56c4-39e4-f75b-98e5-9d79bf3b583a"
                            },
                            "render": <div>FpsCards</div>
                        }
                    ]
                },
                {
                    "id": "section_1616786179144",
                    "tab": "tab_01",
                    "columns": [
                        {
                            "id": "column_1616786179144",
                            "content": {
                                "clazz": "FpsForm",
                                "id": "comp_1616786182315"
                            },
                            "size": 50,
                            "render": <div>FpsForm</div>
                        },
                        {
                            "id": "column_1616786202461",
                            "content": null,
                            "size": 50,
                            "render": null
                        }
                    ],
                    "flexDirection": {
                        "mobile": "row",
                        "desktop": "row"
                    }
                }
            ],
            "tab_1616786206244": [
                {
                    "id": "section_1616786213464",
                    "tab": "tab_1616786206244",
                    "columns": [
                        {
                            "id": "column_1616786213464",
                            "content": null,
                            "size": 15,
                            "render": null
                        },
                        {
                            "id": "column_1616786216062",
                            "content": null,
                            "size": 61,
                            "render": null
                        },
                        {
                            "id": "column_1616786216338",
                            "content": null,
                            "size": 24,
                            "render": null
                        }
                    ],
                    "flexDirection": {
                        "mobile": "column",
                        "desktop": "row"
                    }
                },
                {
                    "id": "section_1616786209058",
                    "tab": "tab_1616786206244",
                    "columns": [
                        {
                            "id": "column_1616786209058",
                            "content": {
                                "clazz": "FpsHtml",
                                "id": "comp_1616786211156"
                            },
                            "size": 100,
                            "render": <div>FpsHtml</div>
                        }
                    ],
                    "flexDirection": {
                        "mobile": "column",
                        "desktop": "row"
                    }
                }
            ],
            "tab_03": []
        }
    }

    return <FpsLayout
        layout={layoutExample}
    />
}




{/* 
    const exampleTabs = [
        { key: '1', title: 'Tab number 1', content: <div>Tab content 1</div> },
        { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
        { key: '3', disabled: true, title: 'Tab 3 (disabled)', content: <div>Tab content 3</div> }
      ]

    <div>
            <h1>Layout</h1>
            <h2>Tabs</h2>
            <TabsPane tabs={exampleTabs} currentTabKey={1} fixedScroll={false} />
            <h2 style={{ marginTop: 32, marginBottom: 32 }}>Images-buttons</h2>
            <ImageButtons
                borderRadius={18}
                size={120}
                onClick={value=>console.log(value)}
                margin={18}
                options={[
                    {
                        image:'https://api.alfa.directual.com/fileUploaded/directual-site/094d439f-ac27-4a49-8f84-d41e39e33efc.png',
                        color:'#fff',
                        key:'gmail'
                    },
                    {
                        image:'https://api.alfa.directual.com/fileUploaded/directual-site/094d439f-ac27-4a49-8f84-d41e39e33efc.png',
                        color:'#8CD984',
                        key:'smtp'
                    }
                ]}
            />
        </div> */}
