import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';

export const namedRoutes = {
  app: '/',
  dashboard: '/dashboard',
  settings: '/settings'
};

export default (
  <Route path={namedRoutes.app} component={App}/>
);
