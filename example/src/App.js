import React from 'react'
import { FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, 
  FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper } from 'directual-web-components'
import 'directual-web-components/dist/index.css'

const App = () => {
  //return <ExampleComponent text="Create React Library Example 😄" />
  let exampleDataHtml = {
    html: '<b>test</b>'
  }

  let exampleTable = {
    'sl': 'countries',
    'pageSize': '10',
    'headerField': '',
    'headers': [{
      'sysName': 'Name',
      'name': 'Country name',
      'dataType': 'string',
      'id': '91001588873211198',
      'link': null,
      'group': '0',
      'tags': null,
      'indexing': false,
      'ordering': false,
      'description': null,
      'weight': null,
      'order': 1,
      'linkIndexFieldSysName': [],
      'defaultValue': null,
      'constraints': null,
      'synthetic': false,
      'json': false,
      'linkType': false,
      'indexExists': false,
      'typeVariable': {},
      'linkOrArrayLinkType': false,
      'arrayLink': false
    }, {
      'sysName': 'id',
      'name': 'id',
      'dataType': 'id',
      'id': '0',
      'link': '',
      'group': '0',
      'tags': '',
      'indexing': false,
      'ordering': false,
      'description': null,
      'weight': null,
      'order': 0,
      'linkIndexFieldSysName': [],
      'defaultValue': '',
      'constraints': null,
      'synthetic': false,
      'json': false,
      'linkType': false,
      'indexExists': false,
      'typeVariable': {},
      'linkOrArrayLinkType': false,
      'arrayLink': false
    }],
    'data': [{ 'Name': 'Afghanistan', 'id': 'AF' }, { 'Name': 'Åland Islands', 'id': 'AX' }, {
      'Name': 'Albania',
      'id': 'AL'
    }, { 'Name': 'Algeria', 'id': 'DZ' }, { 'Name': 'American Samoa', 'id': 'AS' }, {
      'Name': 'Andorra',
      'id': 'AD'
    }, { 'Name': 'Angola', 'id': 'AO' }, { 'Name': 'Anguilla', 'id': 'AI' }, {
      'Name': 'Antarctica',
      'id': 'AQ'
    }, { 'Name': 'Antigua and Barbuda', 'id': 'AG' }],
    'totalPages': 25,
    'pageNumber': 0,
    'error': null
  }

  let exampleForm = {
    'sl': 'countries',
    'formName': 'sdsdds',
    'successText': 'sdsdds',
    'fileds': [{
      'sysName': 'Name',
      'name': 'Country name',
      'dataType': 'string',
      'id': '91001588873211198',
      'link': null,
      'group': '0',
      'tags': null,
      'indexing': false,
      'ordering': false,
      'description': null,
      'weight': null,
      'order': 1,
      'linkIndexFieldSysName': [],
      'defaultValue': null,
      'constraints': null,
      'synthetic': false,
      'json': false,
      'linkType': false,
      'indexExists': false,
      'typeVariable': {},
      'linkOrArrayLinkType': false,
      'arrayLink': false
    }, {
      'sysName': 'id',
      'name': 'id',
      'dataType': 'id',
      'id': '0',
      'link': '',
      'group': '0',
      'tags': '',
      'indexing': false,
      'ordering': false,
      'description': null,
      'weight': null,
      'order': 0,
      'linkIndexFieldSysName': [],
      'defaultValue': '',
      'constraints': null,
      'synthetic': false,
      'json': false,
      'linkType': false,
      'indexExists': false,
      'typeVariable': {},
      'linkOrArrayLinkType': false,
      'arrayLink': false
    }],
    'error': null,
    'isSuccessWrite': false
  }

  return (
    <FpsWrapper>
      {/* FpsHtml:
      <FpsHtml data={exampleDataHtml}/>
      FpsTable:
      <FpsCards data={exampleTable}/>
      FpsForm:
      <FpsForm data={exampleForm}/> */}
      <MainMenu
        logoUrl='https://api.alfa.directual.com/fileUploaded/directual-site/32e12a82-222f-477a-acda-b23018cedbf6.svg'
        menu={
          [
            {
              title: 'What is it?',
              path: '/',
              icon: 'info'
            },
            {
              subheader: true,
              title: 'Directual Components'
            },
            {
              title: 'Article',
              path: '/article',
              icon: 'paragraph'
            },
            {
              title: 'Table view',
              path: '/table',
              icon: 'database'
            },
            {
              title: 'Cards view',
              path: '/',
              icon: 'cards'
            },
            {
              title: 'Form',
              path: '/',
              icon: 'edit'
            },
            {
              title: 'Theme management',
              path: '/',
              icon: 'styles'
            },
            {
              title: 'Log in / Sign up / Profile',
              path: '/',
              icon: 'user'
            },
            {
              title: 'Chat (soon)',
              path: '/',
              icon: 'bubble',
              disabled: true
            },
            {
              title: 'Billing (soon)',
              path: '/',
              icon: 'creditcard',
              disabled: true
            },
            {
              subheader: true,
              title: 'Design System'
            },
            {
              title: 'Directual icons',
              path: '/',
              icon: 'babai'
            },
            {
              title: 'Fonts',
              path: '/',
              icon: 'sort'
            },
          ]}
      />
      <ContentWrapper>

        {/* <ComponentDetails /> */}

        <FpsTable data={exampleTable}/>

      </ContentWrapper>

    </FpsWrapper>
  )
}

export default App
