import React, {useEffect, useState} from 'react'
import {
  FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input, FpsTheme,
  ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

//pages:
import ButtonsPage from './pages/buttons'
import InputsPage from './pages/inputs'
import IconsPage from './pages/icons'


function MainMenuWrapper () {
  let location = useLocation()

  return (
  <MainMenu
    title='directual-design'
    logoUrl='https://api.alfa.directual.com/fileUploaded/directual-site/32e12a82-222f-477a-acda-b23018cedbf6.svg'
    currentRoute={location.pathname || '/'}
    menu={[
      { name: "What?", route: "/", icon: "info", link: <Link to="/">What is it?</Link> },
      { name: "Components", subheader: true },
      { name: "Sign In / Sign Up / Profile", route: "/profile", icon: "user", link: <Link to="/profile">Sign in, Sign up, Profile</Link> },
      { name: "Table view", route: "/table", icon: "database", link: <Link to="/table">Table view</Link> },
      { name: "List view", route: "/list", icon: "list", link: <Link to="/list">List view</Link> },
      { name: "Cards view", route: "/cards", icon: "cards", link: <Link to="/cards">Cards view</Link> },
      { name: "Form", route: "/form", icon: "edit", link: <Link to="/form">Form</Link> },
      { name: "Theme management", route: "/theme", icon: "styles", link: <Link to="/theme">Theme management</Link> },
      { name: "Chat (soon)", route: "/chat", icon: "bubble", disabled: true },
      { name: "Calculator (soon)", route: "/calc", icon: "actions", disabled: true },
      { name: "Design system", subheader: true },
      { name: "Typography", route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
      { name: "Directual Icons", route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
      { name: "Buttons", route: "/system-button", icon: "play", link: <Link to="/system-button">Action panel, Buttons</Link> },
      { name: "Inputs", route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> }
    ]}

  /> )
}

const App = (props) => {
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
    'formName': 'Fill the survey',
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <FpsWrapper>
      <Router>

        <MainMenuWrapper />


        <ContentWrapper>

          <Switch>
            <Route exact path="/table">
              <FpsTable data={exampleTable} />
            </Route>
            <Route exact path="/">
              <h1>What is it</h1>
            </Route>
            <Route exact path="/form">
              <FpsForm data={exampleForm} formWidth={400}/>
            </Route>
            <Route exact path="/cards">
              <h1>Cards</h1>
            </Route>
            <Route exact path="/theme">
              <h1>Theme management</h1>
              <FpsTheme themeName='dd' themes={['classic', 'tiffany', 'dark-mint', 'warm-night']}/>
            </Route>

            <Route exact path="/system-typography">
              <h1>Typography</h1>
            </Route>
            <Route exact path="/system-button">
              <ButtonsPage />
            </Route>
            <Route exact path="/system-icons">
              <IconsPage />
            </Route>
            <Route exact path="/system-data-entry">
              <InputsPage />
            </Route>

          </Switch>



        </ContentWrapper>
      </Router>
    </FpsWrapper>
  )
}

export default App
