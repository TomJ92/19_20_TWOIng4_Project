import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="deep-purple darken-3" dark expand="md" className="d-flex flex-column h-100 align-items-start">

        <MDBNavbarBrand>
          <strong className="white-text">DashBoard</strong>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />

        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar className="d-flex flex-column pt-4">

          <MDBNavbarNav className="d-flex flex-column">

            <MDBNavItem className="d-flex flex-row">
              <MDBNavLink to="#!"><MDBIcon icon="home"/> Accueil</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem className="d-flex flex-row">
              <MDBNavLink to="#!"><MDBIcon icon="cog"/> Administratif</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem className="pt-4">
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Liens utiles</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="https://trello.com/b/tYwAd3dE/react-project">Trello</MDBDropdownItem>
                  <MDBDropdownItem href="https://github.com/TomJ92/19_20_TWOIng4_Project/tree/master/frontend">GitHub Tom</MDBDropdownItem>
                  <MDBDropdownItem href="https://github.com/Thomas7156?tab=repositories">GitHub Thomas</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavBar;
