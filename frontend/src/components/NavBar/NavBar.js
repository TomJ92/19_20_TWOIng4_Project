import React from 'react';
import logo from '../../img/logo.png';
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends React.Component {
  render(){
    return (
      <Router>
        <div className="sidebar-fixed position-fixed" style={{ backgroundColor: 'rgba(67, 66, 93, 1.0)' }}>

          <img style={{opacity: 1.0}} alt="MDB React Logo" className="img-fluid mt-5" src={logo}/>

          <MDBListGroup className="list-group-flush mt-5">

            <NavLink className="text-dark font-weight-bolder" exact={true} to="/" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="chart-pie" className="mr-3"/>
                Dashboard
              </MDBListGroupItem>
            </NavLink>

            <NavLink className="text-dark font-weight-bolder" to="/profile" activeClassName="activeClass">
              <MDBListGroupItem style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="user" className="mr-3"/>
                Admin
              </MDBListGroupItem>
            </NavLink>

            <MDBDropdown className="mt-4">
              <MDBDropdownToggle nav caret className="text-dark">
                <MDBIcon icon="link" className="mr-3"/>
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
      </Router>
);
}
}

export default NavBar;
