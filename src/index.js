import React from "react"
import ReactDOM from "react-dom"
// import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nylas from 'nylas';

// import Component from  "../components/clientView"

import Main from './components/mainPage'
import Calendar from './components/calendarEvents'
import Email from './components/emailEvents'
import PageNotFound from './components/errorPage'

Nylas.config({
  appId: APP_ID,
  appSecret: APP_SECRET,
});
    
const app = document.getElementById("main")


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={()=><Main data={token}/>}></Route>
            <Route path='/calendar' component={Calendar} data={token}></Route>
            <Route path='/email' component={Email} data={token}></Route>
            <Route component={PageNotFound}></Route>
        </Switch>
    </BrowserRouter>
    , app);