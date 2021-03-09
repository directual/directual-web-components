import React from 'react'
import { Button, FpsLayout, Dnd } from 'directual-web-components'


export default function LayoutPage() {


    return (
        <div>
            <h1>Layout</h1>
            <FpsLayout />
            {/* <Dnd /> */}
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
