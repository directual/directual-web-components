import React, { useState, useEffect, useCallback, useRef } from 'react'
import EditorJS from '@editorjs/editorjs';
import edjsParser from 'editorjs-parser'
import ToolConfiguration from './editor-tools'
import icon from './../../../icons/fps-form2.svg'
import PropTypes, { object } from 'prop-types'
import Button from '../button/button'
import _ from 'lodash'

const EDITOR_HOLDER_ID = 'editorjs';

const DEFAULT_INITIAL_DATA = {    
    time: new Date().getTime(),
    blocks: [
        {
            type: "paragraph",
            data: {
                text: "Hey. Meet the new Editor. Then, try a demo 🤓"
            }
        }
    ]
};

export default function Editor(props) {
    const { data, callEndpoint } = props;

    // user fields
    const payload = _.get(data, "__data__.sl")[0];
    const field_Blocks = _.get(data, "__data__.blocks");
    const field_ContentHTML = _.get(data, "__data__.contentHTML");
    const isReadonly = _.get(data, "__data__.readonly") === 'true' || false;

    // content from user`s fields
    const { id, [field_Blocks]:blocks, [field_ContentHTML]:contentHTML } = payload;
    
    const editorCore = useRef(null);
    const editorParser = new edjsParser(); 

    // current editor content as blocks 
	const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);

    const handleChange = useCallback(async () => {
        var savedData = await editorCore.current.save();
        setEditorData(savedData);
    }, []);

    const handleSave = useCallback(async () => {
        try {
            const editorDataHTML = editorParser.parse(editorData);
            const response = await fetch(
                _.get(data, '__data__._api_.sl'), 
                {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify({ id: id, [field_Blocks]:editorData, [field_ContentHTML]: editorDataHTML })
                }
            ).then(() => {
                alert('Data saved successfully!');
            });
        } catch (error) { 
            console.error('Error:', error) 
        }
    }, [editorData]);

    const initEditor = () => { 
        const editor = new EditorJS({
            holder: EDITOR_HOLDER_ID,
            autofocus: true,
            tools: ToolConfiguration(props),
            onReady: () => { 
                blocks && editor.render(JSON.parse(blocks)) ||
                contentHTML && editor.blocks.renderFromHTML(contentHTML) || 
                editorData && editor.render(editorData);
                console.log('Editor.js is ready to work!'); 
            },
            onChange: handleChange
        });

        return editor;
    };

    useEffect(() => {
		if (_.isNil(editorCore.current)) {
			editorCore.current = initEditor();
		}

		return () => {
			if (editorCore.current?.destroy) {
				editorCore.current?.destroy();
				editorCore.current = null;
			}
		};
	}, []);

    return (
        <div className={`FPS_EDITOR_WRAPPER`}>
            <div>
                <div id={EDITOR_HOLDER_ID}/>
            </div>
            <div>
                {
                    !isReadonly &&
                    <div>
                        <Button accent icon="edit" onClick={handleSave}>Save</Button>
                    </div>
                }
            </div>
        </div>
    )
}

Editor.propTypes = {
    data: PropTypes.object,
    auth: {},
    locale: {},
};

Editor.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG"
};

Editor.settings = {
    icon: icon,
    name: 'editor',
    sysName: 'editor',
    isLegacy: false,
    isMarketplace: true
};