import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
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
      <MDBNavbar color="default-color" dark expand="md" className="d-flex flex-column w-auto h-100">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar className="d-flex flex-column">
          <MDBNavbarNav className="d-flex flex-column">
            <MDBNavItem active className="d-flex flex-row">
              <MDBIcon icon="home" />
              <MDBNavLink to="#!">Accueil</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="d-flex flex-row">
              <MDBIcon icon="cog" />
              <MDBNavLink to="#!">Administratif</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavBar;
