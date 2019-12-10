import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import FormBar from '../NavBar/FormNavBar/FormBar.js';
// import NotificationFailed from './NotificationFailed.js'
import NotificationSucceed from './NotificationSucceed.js'
import Alert from 'react-bootstrap/Alert'
const axios = require('axios');

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      personsInHouse: null,
      houSize: "",
      notification: false
    };

    this.handleChangelocation = this.handleChangelocation.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangehouseSize = this.handleChangehouseSize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangelocation(event) {
    this.setState({location: event.target.value});
  }

  handleChangeNumber(event) {
    this.setState({personsInHouse: event.target.value});
  }

  handleChangehouseSize(event) {
    this.setState({houseSize: event.target.value});
  }

  handleSubmit(event) {
    this.setState({notification: true});

    // console.log(this.state.location);
    // console.log(this.state.personsInHouse);
    // console.log(this.state.houseSize);
    // console.log(this.state.notification);

    event.preventDefault();

    const newUser = {
      location: this.state.location,
      personsInHouse: this.state.personsInHouse,
      houseSize: this.state.houseSize,
    }


    axios.put('http://localhost:27017/users/create', newUser)
    .then((response) => {

      console.log(response);
    })

    .catch((error) => {

      console.log(error);
    })
  }

  onDismiss() {
    this.setState({ notification: false });
  }

  render() {
    return (
      <div className='d-flex flex-center mt-4'>
        <MDBCard className='shadow-box hoverable'>
          <FormBar/>

          <MDBCardBody>
            <MDBRow>
              <MDBCol>
                <form onSubmit={ this.handleSubmit }>
                  <p className="h4 text-center py-4">Enregistrer un nouvel utilisateur</p>

                  <div className="grey-text">
                    <p icon='user' className="h7 py-3"><MDBIcon size="2x" icon="user" className="pr-3"/>L'ID utilisateur est généré automatiquement !</p>

                    <MDBInput required label="Your country" icon="thumbtack" group type="text" validate error="wrong" success="right" value={this.state.location} onChange={this.handleChangelocation}/>

                    <MDBInput required label="Number of persons in the house" icon="home" group type="number" validate error="wrong" success="right" value={this.state.personsInHouse} onChange={this.handleChangeNumber}/>

                    <div className='d-flex flex-row'>
                      <MDBIcon size="2x" icon="expand" className="pr-3"/>
                      <select className="browser-default custom-select" value={this.state.houseSize} onChange={this.handleChangehouseSize}>
                        <option value="">What's the size of your house ?</option>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="big">big</option>
                      </select>
                    </div>

                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn className="btn btn-outline-purple" type="submit">
                      Enregistrer
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                  <div>
                    <Alert show={this.state.notification} ontoggle={this.onDismiss}>
                      <NotificationSucceed/>
                    </Alert>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
};

export default AddUser;
