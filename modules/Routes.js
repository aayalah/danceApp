import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import DanceList  from './DanceComponents/DanceList.js'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={DanceList}/>
  </Route>
)
