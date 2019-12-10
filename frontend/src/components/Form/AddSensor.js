import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import FormBar from '../NavBar/FormNavBar/FormBar.js';
// import NotificationFailed from './NotificationFailed.js'
import NotificationSucceed from './NotificationSucceed.js'
import Alert from 'react-bootstrap/Alert'
const axios = require('axios');

class AddSensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creationDate: "",
      location: "",
      userID: "",
      notification: false
    };

    this.handleChangeCreationDate = this.handleChangeCreationDate.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeUserID = this.handleChangeUserID.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCreationDate(event) {
    this.setState({creationDate: event.target.value});
  }

  handleChangeLocation(event) {
    this.setState({location: event.target.value});
  }

  handleChangeUserID(event) {
    this.setState({userID: event.target.value});
  }

  handleSubmit(event) {
    this.setState({notification: true});

    console.log(this.state.creationDate);
    console.log(this.state.location);
    console.log(this.state.userID);
    console.log(this.state.notification);

    event.preventDefault();

    const newSensor = {
      creationDate: this.state.creationDate,
      location: this.state.location,
      userID: this.state.userID,
    }


    axios.put('http://localhost:27017/sensors/create', newSensor)
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
                  <p className="h4 text-center py-4">Enregistrer un nouveau capteur</p>

                  <div className="grey-text">
                    <p className="h7"><MDBIcon size="2x" far icon="calendar-alt" className="pr-3"/>Date de création du capteur</p>
                    <MDBInput required type="date" value={this.state.creationDate} onChange={this.handleChangeCreationDate}/>

                    <div className='d-flex flex-row pt-4'>
                      <MDBIcon size="2x" icon="thumbtack" className="pr-3"/>
                      <select className="browser-default custom-select" value={this.state.location} onChange={this.handleChangelocation}>
                        <option value="">In which room is the sensor ?</option>
                        <option value="kitchen">Bryan is in the KITCHEN</option>
                        <option value="livingRoom">Living room</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="bathroom">Bathroom</option>
                        <option value="entrance">Entrance</option>
                      </select>
                    </div>

                    <div className='d-flex flex-row pt-5'>
                      <MDBIcon size="2x" icon="user" className="pr-3"/>
                      <select className="browser-default custom-select" value={this.state.userID} onChange={this.handleChangeUserID}>
                        <option value="">To which user does it belong ?</option>
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

export default AddSensor;
