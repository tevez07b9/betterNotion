import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './compoents/Dashboard'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <div>Welcome to BetterNotion</div>} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" render={() => <div>Login Page</div>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
