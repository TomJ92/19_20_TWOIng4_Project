import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddUser from './components/Form/AddUser.js';
import AddSensor from './components/Form/AddSensor.js';
import AddMeasure from './components/Form/AddMeasure.js';
import DeleteSensor from './components/Form/DeleteSensor.js';
import Widgets from './containers/Widgets.js';
import NavBar from './components/NavBar/SideBar/NavBar.js';
import TopNavBar from './components/NavBar/TopBar/TopNavBar.js';
import { MDBCol, MDBRow } from 'mdbreact';

export default () => (
  <div>
    <MDBRow>
      <MDBCol className='d-xs-none d-xl-block' xl='2'>
        <NavBar/>
      </MDBCol>

      <MDBCol xs='12' xl='10'>
        <TopNavBar className='d-xs-block d-xl-none'/>

        <Switch>
          <Route path="/" exact component={ Widgets }/>
          <Route path="/Admin" exact component={ AddUser }/>
          <Route path="/Admin/AddSensor" exact component={ AddSensor }/>
          <Route path="/Admin/AddMeasure" exact component={ AddMeasure }/>
          <Route path="/Admin/DeleteSensor" exact component={ DeleteSensor }/>
        </Switch>
      </MDBCol>

    </MDBRow>

  </div>
    );
