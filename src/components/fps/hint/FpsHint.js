import React, {useState, useEffect} from 'react'
import Hint from './hint'
import icon from './../../../icons/fps-hint.svg'

export default function FpsHint(props) {

    const [data, setData] = useState(props.data || {})
    useEffect(() => {
        if (JSON.stringify(props.data) !== JSON.stringify(data)) {
            setData(props.data)
        }
    }, [props])

    console.log('HINT')
    console.log(data)

    const error = data.hintColour == 'false'
    const ok = data.hintColour == 'true'
    const margins = data.margins || {}

    if (data.isHidden == 'true') { return <div />}

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
        { name: 'Apply template engine', sysName: 'withTemplate', type: 'boolean' },
        { name: 'API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Hide component', sysName: 'isHidden', type: 'isHidden' },
    ]
}

