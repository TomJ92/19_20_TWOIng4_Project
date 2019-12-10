import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import FormBar from '../NavBar/FormNavBar/FormBar.js';
// import NotificationFailed from './NotificationFailed.js'
import NotificationSucceed from './NotificationSucceed.js'
import Alert from 'react-bootstrap/Alert'
const axios = require('axios');

class AddMeasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      creationDate: "",
      sensorID: "",
      value: null,
      notification: false,
      tabSensorsID: []
    };

    this.handleChangeCreationDate = this.handleChangeCreationDate.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeSensorID = this.handleChangeSensorID.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCreationDate(event) {
    this.setState({creationDate: event.target.value});
  }

  handleChangeType(event) {
    this.setState({type: event.target.value});
  }

  handleChangeSensorID(event) {
    this.setState({sensorID: event.target.value});
  }

  handleChangeValue(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({notification: true});

    event.preventDefault();

    const newMeasure = {
      creationDate: this.state.creationDate,
      type: this.state.type,
      sensorID: this.state.sensorID,
      value: this.state.value
    }

    console.log(newMeasure);

    axios.put('http://localhost:3000/measure/', newMeasure)
    .then((response) => {
      this.setState({
        type: "",
        creationDate: "",
        sensorID: "",
        value: null
      });
      window.location.reload();

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
                  <p className="h4 text-center py-3">Enregistrer une nouvelle mesure</p>

                  <div className="grey-text">
                    <div className='d-flex flex-row pt-4'>
                      <MDBIcon size="2x" icon="thermometer-half" className="pr-3"/>
                      <select className="browser-default custom-select" value={this.state.type} onChange={this.handleChangeType}>
                        <option value="">What type of measure is it ?</option>
                        <option value="humidity">Humidity</option>
                        <option value="temperature">Temperature</option>
                        <option value="airPollution">Air Pollution</option>
                      </select>
                    </div>

                    <p className="h7 mt-4"><MDBIcon size="2x" far icon="calendar-alt" className="pr-3"/>Creation date of the measure</p>
                    <MDBInput required type="date" value={this.state.creationDate} onChange={this.handleChangeCreationDate}/>

                    <div className='d-flex flex-row pt-4'>
                      <MDBIcon size="2x" icon="user" className="pr-3"/>
                      <select className="browser-default custom-select" value={this.state.sensorID} onChange={this.handleChangeSensorID}>
                        <option value="">To which sensor does it belong ?</option>
                        { options }
                      </select>
                    </div>

                    <MDBInput className='mt-4' required label="What's the value ?" icon="sort-numeric-up-alt" group type="number" validate error="wrong" success="right" value={this.state.value} onChange={this.handleChangeValue}/>

                  </div>
                  <div className="text-center py-1">
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

export default AddMeasure;
