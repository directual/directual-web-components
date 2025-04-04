import Editor from '../components/fps/editor/editor';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
    title: 'FPS/Components/Editor',
    component: Editor,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'left',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs']
};

const editorData = {
    "readonly": "false",
    "sl": "editor",
    "test1": "field1",
    "test2": "field2",
    "blocks": "field1",
    "contentHTML": "field2",
    "__libs__": [
        "https://cdn.jsdelivr.net/npm/@editorjs/header@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/image@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/list@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/checklist@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/quote@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/code@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/embed@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/table@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/link@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/warning@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/marker@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/inline-code@latest",
        "https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest",
        "https://cdn.jsdelivr.net/npm/editorjs-html@3.4.0/build/edjsHTML.js",
        "https://cdn.jsdelivr.net/npm/@editorjs/raw@latest",
        "https://cdn.jsdelivr.net/npm/editorjs-parser@1/build/Parser.browser.min.js",
        "https://cdn.jsdelivr.net/npm/editorjs-youtube-embed-extended@1.0.3/dist/main.min.js"
    ],
    "__header__": "",
    "__initialize__": "function init(instance, context) {\n    div = $('<div id=\"Editor\" class=\"editorjs\"/>');\n    instance.canvas.append(div);\n};",
    "__update__": "function TextEditor(instance, properties, context) {\n    \n    const editors = [];\n    const parser = new edjsParser();\n    const appID = context.appID;\n    const isExistingObject = context.isExistingObject == 'true' ? true : false;\n    const isReadonly = context.readonly == 'true' ? true : false;\n    const ApiEndpoint = (context._api_ || {}).sl;\n    const sessionID = () => {\n        for (const key in localStorage) {\n            if (key.includes('token_')) {\n                return JSON.parse(localStorage.getItem(key)).token ?? '';\n            }\n        }\n    };\n    \n    const EDITOR_JS_TOOLS = {\n        header: {\n            class: Header,\n            inlineToolbar: ['link'],\n            config: {\n                placeholder: 'Header'\n            },\n            shortcut: 'CMD+SHIFT+H'\n        },\n        list: {\n            class: List,\n            inlineToolbar: true,\n            shortcut: 'CMD+SHIFT+L'\n        },\n        marker: {\n            class:  Marker,\n            shortcut: 'CMD+SHIFT+M'\n        },\n        linkTool: LinkTool,\n        table: {\n            class: Table,\n            inlineToolbar: true,\n            config: {\n              rows: 2,\n              cols: 3,\n            },\n        },\n        embed: {\n            class: Embed,\n            config: {\n              services: {\n                youtube: true,\n                coub: true\n              }\n            }\n        }\n    };\n\n    async function get () {\n        try {\n            const url = `${ApiEndpoint}&sessionID=${sessionID()}` + (isExistingObject ? (`&id=${window.location.href.replace(/.*\\//, '')}`) : '');\n            const response = await fetch(url);\n            if (!response.ok) { throw Error(response.statusText); }\n            const data = await response.json();\n            return data.payload;\n        } catch (error) { console.error('Error:', error) }\n    };\n\n    function post (data) {\n        const url = `${ApiEndpoint}&sessionID=${sessionID()}`;\n        try {\n            fetch(url, {\n                method: 'POST',\n                body: JSON.stringify(data),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n            });\n        } catch (error) { console.error('Error:', error) }\n    };  \n    \n    (() => {\n        try {\n          if (!document.getElementById('Editor').hasChildNodes()) {\n            if (window.dVar) { return }\n            window.dVar = true;\n            new Promise(async (resolve) => {\n                const result = await get();\n                const payload = result.length > 0 ? result : [ { id: '', [context.content]: 'Hello World!' } ];\n                payload.map(async (element) => {\n                    var data = { id: element.id ? element.id : '', [context.content]: element[[context.content]] ? element[[context.content]] : '' };\n                    var editor = new EditorJS({\n                        holderId: 'Editor',\n                        readOnly: isReadonly,\n                        tools: EDITOR_JS_TOOLS,\n                        onReady: () => {},\n                        onChange: () => {}\n                    });\n                    await editor.isReady;\n                    editor.blocks.renderFromHTML(element[[context.content]] ? element[[context.content]] : 'Hello world!');\n                    editors.push({editor, data});\n                    resolve(editors);\n                });\n            }).then(() => {\n                if(!document.getElementById('ButtonSave')) {\n                    if (isReadonly) { return }\n                    var buttonSave = document.createElement('button');\n                    buttonSave.id = 'ButtonSave';\n                    buttonSave.className = '.button _F2GoE _XgAMu';\n                    buttonSave.textContent = 'Save';\n                    buttonSave.addEventListener('click', function (e) {\n                        editors.map((item) => {\n                            item.editor.save().then(async (blocks) => {\n                                var savedData = parser.parse(blocks)\n                                if (item.data[context.content] != savedData) {\n                                    item.data[context.content] = savedData;\n                                    await post(item.data); \n                                    console.log(`${item.data.id} - saved!`)\n                                }\n                            });\n                        });\n                        alert('Data saved successfully!');\n                        e.preventDefault();\n                        e.stopImmediatePropagation();\n                    });\n                    [...document.getElementsByClassName('codex-editor__redactor')]\n                    [[...document.getElementsByClassName('codex-editor__redactor')].length-1]\n                        .insertAdjacentElement('beforeend', buttonSave);\n                }\n                [...document.getElementsByClassName('codex-editor__redactor')].forEach(element => {\n                    element.style.paddingBottom = '150px';\n                });\n            });\n          }\n        } catch (error) { console.error('Error:', error) }\n    }) ();\n}",
    "__destroy__": null,
    "__data__": {
        "test2": "field2",
        "readonly": "false",
        "blocks": "field1",
        "sl": [
            {
                "field1": "A",
                "field2": "B",
                "id": "1"
            }
        ],
        "contentHTML": "field2",
        "_api_": {
            "sl": "https://api.directual.com/good/api/v5/data/editor/editor?appID=02b25988-d214-43ee-84f7-d75a129836de"
        },
        "test1": "field1"
    }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
    args: {
      data: editorData,
      auth: {},
      locale: 'ENG'
    }
};