import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Admin from './containers/Admin/Admin.js';
import AddUser from './components/Form/AddUser.js';
import AddSensor from './components/Form/AddSensor.js';
// import Dashboard from './containers/DashBoard/Dashboard.js';
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
          {/* <Route path="/Admin" exact component={ Admin }/> */}
          <Route path="/Admin" exact component={ AddUser }/>
          <Route path="/Admin/AddSensor" exact component={ AddSensor }/>
          <Route path="/Admin/Rien" exact component={ AddUser }/>
        </Switch>
      </MDBCol>

    </MDBRow>

  </div>
    );
