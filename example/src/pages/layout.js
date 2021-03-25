import React, { useState } from 'react'
import { Button, FpsLayout, Dnd, SplitPane } from 'directual-web-components'
import { useSortBy } from 'react-table'

const exampleData =
{
    reorder: true,
    sizeUnits: '%', // 'px', '%'
    panes:
        [
            { id: 'pane_01', content: <div style={{ height: 140 }}>a</div>, size: 50 },
            { id: 'pane_02', content: <div style={{ height: 140 }}>b</div>, size: 20 },
            { id: 'pane_03', content: <div style={{ height: 140 }}>c</div>, size: 30 }
        ]
}

const exampleData2 =
{
    reorder: true,
    sizeUnits: '%', // 'px', '%'
    panes:
        [
            { id: 'pane_01', content: <div style={{ height: 140 }}>a</div>, size: 50 },
            { id: 'pane_02', content: <div style={{ height: 140 }}>b</div>, size: 20 },
            { id: 'pane_03', content: <div style={{ height: 140 }}>c</div>, size: 20 },
            { id: 'pane_04', content: <div style={{ height: 140 }}>c</div>, size: 10 }
        ]
}

export default function LayoutPage() {

    const [data,setData] = useState(exampleData)

    return (
        <div>
            <h1>Layout</h1>
            <SplitPane width = {400} panes={data}/>
            {/* <Dnd /> */}
            <Button onClick={()=>{
                if (JSON.stringify(data) != JSON.stringify(exampleData2)) {
                    setData(exampleData2) } else {
                    setData(exampleData)
                }
            }}>Click me</Button>
        </div>
    )
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
