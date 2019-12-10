import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import FormBar from '../NavBar/FormNavBar/FormBar.js';
// import NotificationFailed from './NotificationFailed.js'
import NotificationSucceed from './NotificationSucceed.js'
import Alert from 'react-bootstrap/Alert'
const axios = require('axios');

class DeleteSensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorID: "",
      notification: false,
      tabSensorsID: []
    };

    this.handleChangeSensorID = this.handleChangeSensorID.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSensorID(event) {
    this.setState({sensorID: event.target.value});
  }

  handleSubmit(event) {
    this.setState({notification: true});

    event.preventDefault();

    axios.delete('http://localhost:3000/sensor/' + this.state.sensorID)
    .then((response) => {
      this.setState({
        sensorID: ""
      });
      window.location.reload();
      console.log(response.data.sensorID);
      console.log(response);
    })

    .catch((error) => {

      console.log(error);
    })
  }

  onDismiss() {
    this.setState({ notification: false });
  }

  componentWillMount() {
    axios.get('http://localhost:3000/sensors/')

    .then((response) => {
      this.setState({tabSensorsID: response.data});

      console.log(this.state.tabSensorsID);
    })
  }

  render() {
    let options = this.state.tabSensorsID.map((data) =>
    <option key={data._id} value={data._id}>
      {data._id}
    </option>
    );

    return (
      <div className='d-flex flex-center mt-4'>
        <MDBCard className='shadow-box hoverable'>
          <FormBar/>

          <MDBCardBody>
            <MDBRow>
              <MDBCol>
                <form onSubmit={ this.handleSubmit }>
                  <p className="h4 text-center py-4">Supprimer un capteur et ses données</p>

                  <div className="grey-text">

                    <div className='d-flex flex-row pt-5'>
                      <MDBIcon size="2x" icon="user" className="pr-3"/>
                      <select className="browser-default custom-select" value={this.state.sensorID} onChange={this.handleChangeSensorID}>
                        <option value="">Which one must be destroyed !?</option>
                        { options }
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

export default DeleteSensor;
