import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import MermaidTool from 'editorjs-mermaid'
import SimpleImage from '@editorjs/simple-image'
import Underline from '@editorjs/underline';
import _ from 'lodash'

const ToolConfiguration = ({ data, callEndpoint }) => {
    const id = _.get(data, "__data__.sl[0].id");
    const fieldAttachments = _.get(data, "__data__.attachments");
    const sl = _.get(data, '__data__._api_.sl');

    const imageConfig = {
        inlineToolbar: true,
        uploader: {
            async uploadByFile(file) {
                const formData = new FormData();
                formData.append(fieldAttachments, file);
                formData.append("id", id);

                const response = await fetch(sl, {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();

                return {
                    success: 1,
                    file: {
                        url: data.result[0].file[0].urlLink,
                    }
                };
            },
            async uploadByUrl(url) {
                return {
                    success: 1,
                    file: { url }
                };
            }
        }
    };

    return {
        header: Header,
        mermaid: MermaidTool,
        embed: Embed,
        table: Table,
        list: List,
        warning: Warning,
        code: Code,
        underline: Underline,
        image: {
            class: Image,
            config: imageConfig
        },
        raw: Raw,
        quote: Quote,
        marker: Marker,
        checklist: CheckList,
        delimiter: Delimiter,
        inlineCode: InlineCode
    };
};

export default ToolConfiguration;