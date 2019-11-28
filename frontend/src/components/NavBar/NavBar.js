import React from 'react';
import logo from '../../img/logo.png';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends React.Component {
  render(){
    return (
      <Router>
        <div className="sidebar-fixed position-fixed deep-purple lighten-4">

          <img style={{opacity: 1.0}} alt="MDB React Logo" className="img-fluid mt-5" src={logo}/>

          <MDBListGroup className="list-group-flush mt-5">
            <NavLink className="text-dark" exact={true} to="/" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="chart-pie" className="mr-3"/>
                Dashboard
              </MDBListGroupItem>
            </NavLink>
            <NavLink className="text-dark" to="/profile" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="user" className="mr-3"/>
                Profile
              </MDBListGroupItem>
            </NavLink>
            <NavLink className="text-dark" to="/tables" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="table" className="mr-3"/>
                Tables
              </MDBListGroupItem>
            </NavLink>
            <NavLink className="text-dark" to="/maps" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="map" className="mr-3"/>
                Maps
              </MDBListGroupItem>
            </NavLink>
            <NavLink className="text-dark" to="/404" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="exclamation" className="mr-3"/>
                404
              </MDBListGroupItem>
            </NavLink>
          </MDBListGroup>
        </div>
      </Router>
    );
  }
}

export default NavBar;
