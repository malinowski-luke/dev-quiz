import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Quiz from './components/Quiz/Quiz'

export default (
  <Switch>
    <Route exact path='/landing' component={Landing} />
    <Route path='/quiz/:subject' component={Quiz} />
    <Redirect exact from='/' to='landing' />
  </Switch>
)
