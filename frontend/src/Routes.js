import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './containers/Admin/Admin.js';
import Dashboard from './containers/DashBoard/Dashboard.js';
import NavBar from './components/NavBar/NavBar.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default () => (
  <div className="flexible-content">
    <Row>
      <Col xs='2'>
        <NavBar/>
      </Col>

      <Col xs='10'>
        <Switch>
          <Route path="/" exact component={ Dashboard }/>
          <Route path="/Admin" exact component={ Admin }/>
        </Switch>
      </Col>

    </Row>

  </div>
    );
