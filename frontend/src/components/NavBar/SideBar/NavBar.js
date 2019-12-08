import React from 'react';
import logo from '../../../img/logo.png';
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

class NavBar extends React.Component {
  render(){
    return (

        <div className="sidebar-fixed position-fixed" style={{ backgroundColor: 'rgba(67, 66, 93, 1.0)' }}>

          <img alt="MDB React Logo" className="img-fluid mt-5" src={logo}/>

          <MDBListGroup className="list-group-flush mt-5">

            <NavLink className="text-dark font-weight-bolder" exact={true} to="/" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="chart-pie" className="pr-3"/>
                Dashboard
              </MDBListGroupItem>
            </NavLink>

            <NavLink className="text-dark font-weight-bolder" to="/Admin" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="user" className="pr-3"/>
                Admin
              </MDBListGroupItem>
            </NavLink>

            <MDBDropdown className="mt-4">
              <MDBDropdownToggle nav caret className="text-dark">
                <MDBIcon icon="link" className="pr-3"/>
                <div className="d-none d-md-inline text-dark font-weight-bolder">Liens utiles</div>
              </MDBDropdownToggle>

              <MDBDropdownMenu className="dropdown-default text-dark">

                <MDBDropdownItem href="https://trello.com/b/tYwAd3dE/react-project">Treelo</MDBDropdownItem>

                <MDBDropdownItem href="https://github.com/TomJ92/19_20_TWOIng4_Project/tree/master/frontend">GitHub Tom</MDBDropdownItem>

                <MDBDropdownItem href="https://github.com/Thomas7156?tab=repositories">GitHub Thomas</MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>

          </MDBListGroup>

        </div>

);
}
}

export default NavBar;
