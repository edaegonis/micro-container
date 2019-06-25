import React from 'react'
import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom'
import MicroFrontend from './MicroFrontend'
import Random from './Random'

const dashboardHost = 'https://micro-dashboard.now.sh/bundle.js'

const Dashboard = ({ history }) => <MicroFrontend history={history} name="Dashboard" host={dashboardHost} />

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavLink to="/">home</NavLink>
      <NavLink to="/random">random</NavLink>

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/random" component={Random} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
