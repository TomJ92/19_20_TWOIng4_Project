import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
// import NotificationFailed from './NotificationFailed.js'
import NotificationSucceed from './NotificationSucceed.js'
import Alert from 'react-bootstrap/Alert'
const axios = require('axios');

class AddSensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      numbperso: null,
      size: "",
      notification: false
      // submitSucceed: false,
      // submitFailed: false
    };

    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCountry(event) {
    this.setState({country: event.target.value});
  }

  handleChangeNumber(event) {
    this.setState({numbperso: event.target.value});
  }

  handleChangeSize(event) {
    this.setState({size: event.target.value});
  }

  handleSubmit(event) {
    this.setState({notification: true});

    console.log(this.state.country);
    console.log(this.state.numbperso);
    console.log(this.state.size);
    console.log(this.state.notification);

    axios({
      method: 'PUT',
      url: 'http://localhost:27017/user/create',
      body: [this.state.country, this.state.numbperso, this.state.size]
    })

    .then((response) => {

      console.log(response.body);
    })

    .catch((error) => {
      // this.setState({submitSucceed: true});
      console.log(error);
    })
  }

  onDismiss() {
        this.setState({ notification: false });
    }

  render() {
    return (
      <MDBRow>
        <MDBCol>
          {/* {this.state.submitSucceed && <NotificationSucceed/>}
          {this.state.submitFailed && <NotificationFailed/>} */}
          <form onSubmit={ this.handleSubmit }>
            <p className="h4 text-center py-4">Enregistrer un nouveau capteur</p>

            <div className="grey-text">
              <p icon='user' className="h7 py-3"><MDBIcon size="2x" icon="user" className="pr-3"/>L'ID utilisateur est généré automatiquement !</p>

              <MDBInput required label="Your country" icon="thumbtack" group type="text" validate error="wrong" success="right" value={this.state.country} onChange={this.handleChangeCountry}/>

              <MDBInput required label="Number of persons in the house" icon="home" group type="number" validate error="wrong" success="right" value={this.state.numbperso} onChange={this.handleChangeNumber}/>

              <div className='d-flex flex-row'>
                <MDBIcon size="2x" icon="expand" className="pr-3"/>
                <select className="browser-default custom-select" value={this.state.size} onChange={this.handleChangeSize}>
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
              <Alert show={this.state.notification} toggle={this.onDismiss}>
                <NotificationSucceed/>
              </Alert>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    );
  }
};

export default AddSensor;
