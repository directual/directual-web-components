import React from 'react'
import Hint from './hint'
import icon from './../../../icons/fps-hint.svg'

export default function FpsHint({ data }) {

    data = data || {}
    const error = data.hintColour == 'error'
    const ok = data.hintColour == 'ok'
    const margins = data.margins || {}

    return <Hint
        title={data.title}
        ok={ok}
        error={error}
        margin={{ top: margins.marginTop, bottom: margins.marginBottom }}
    >
        <div
            dangerouslySetInnerHTML={{ __html: data.text }}
        />
    </Hint>

}

FpsHint.settings = {
    icon: icon,
    name: "Hint",
    sysName: 'FpsHint',
    form: [
        { name: "Hint colour", sysName: "hintColour", type: "hintColour" },
        { name: 'Title', sysName: 'title', type: 'string' },
        { name: 'Text (HTML is allowed)', sysName: 'text', type: 'html-SLenriched' },
        { name: 'Margins', sysName: 'margins', type: 'margin-top-bottom' },
        { name: 'API-endpoint (optional)', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Apply template engine', sysName: 'withTemplate', type: 'boolean' },
    ]
}

