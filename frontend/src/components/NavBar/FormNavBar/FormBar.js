import React from 'react';
import { MDBListGroupItem, MDBNav, MDBIcon } from "mdbreact";
import { NavLink } from 'react-router-dom';
import './FormBar.css'

class NavBar extends React.Component {
  render(){
    return (

        <div className='rounded' style={{ backgroundColor: 'rgba(142, 162, 198, 1.0)' }}>

          <MDBNav tabs color="secondary"  className='align-items-center justify-content-center'>

            <NavLink className="text-dark font-weight-bolder p-3" exact={true} to="/Admin" activeClassName="activeClass">
              <MDBListGroupItem className='item' style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="chart-pie" className="pr-3"/>
                Add a User
              </MDBListGroupItem>
            </NavLink>

            <NavLink className="text-dark font-weight-bolder p-3" to="/Admin/Rien" activeClassName="activeClass">
              <MDBListGroupItem className='item' style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="user" className="pr-3"/>
                Nothing For Now
              </MDBListGroupItem>
            </NavLink>

            <NavLink className="text-dark font-weight-bolder p-3" to="/Admin/Rien2" activeClassName="activeClass">
              <MDBListGroupItem className='item' style={{backgroundColor: 'transparent'}}>
                <MDBIcon icon="user" className="pr-3"/>
                Nothing For Now
              </MDBListGroupItem>
            </NavLink>

          </MDBNav>

        </div>

);
}
}

export default NavBar;
