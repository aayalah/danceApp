import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import DanceList  from './DanceComponents/DanceList.js'
import DanceInfo from './DanceComponents/DanceInfo.js'
import EventsList from './EventsComponents/EventsComponent.js'
import Login from './LoginComponents/Login.js'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="/list" component={DanceList}/>
    <Route path="/events" component={EventsList}/>
    <Route path="/info/:name" component={DanceInfo}/>
  </Route>
)
