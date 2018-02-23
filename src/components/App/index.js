import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { namedRoutes } from '../../routes';

import Nav from '../Nav';
import Dashboard from '../Dashboard';
import Settings from '../Settings';

const App = () => (
  <div className="app">
    <Nav/>
    <Switch>
      <Route exact path={namedRoutes.dashboard} component={Dashboard}/>
      <Route exact path={namedRoutes.settings} component={Settings}/>
      <Redirect from={namedRoutes.app} to={namedRoutes.dashboard}/>
    </Switch>
  </div>
);

const ComponentWithRouter = withRouter(App);
export default ComponentWithRouter;
