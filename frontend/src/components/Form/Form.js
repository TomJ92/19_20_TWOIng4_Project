import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddUser from './AddUser.js';
import FormBar from '../NavBar/FormNavBar/FormBar.js';
import { MDBCard, MDBCardBody } from 'mdbreact';

export default () => (
  <div className='d-flex flex-center mt-4'>
    <MDBCard className='shadow-box hoverable'>
      <FormBar/>

      <MDBCardBody>
        <Switch>
          <Route path="/Admin" exact component={ AddUser }/>
          <Route path="/Admin/Rien" exact />
          <Route path="/Admin/Rien2" exact />
        </Switch>
      </MDBCardBody>
    </MDBCard>
  </div>
);
