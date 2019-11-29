import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './containers/Admin/Admin.js';
import Dashboard from './containers/DashBoard/Dashboard.js';

export default () => (
  <switch>
    <Route path="/Dashboard" exact component={ Dashboard }/>
    <Route path="/Admin" exact component={ Admin }/>
  </switch>
);
