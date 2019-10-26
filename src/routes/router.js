import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Index from '../components/index';
import PrivateRoute from './Private';

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/" component={Index} />
  </Switch>
); 

export default routes;