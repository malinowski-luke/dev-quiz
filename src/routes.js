import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Quiz from './components/Quiz/Quiz'
import Result from './components/Result/Result'

export default (
  <Switch>
    <Route exact path='/landing' component={Landing} />
    <Route path='/result' component={Result} />
    <Route path='/quiz/:subject' component={Quiz} />
    <Redirect from='/' to='landing' />
  </Switch>
)
