import React from 'react';
import { MDBIcon } from 'mdbreact';
import { ResponsiveContainer } from 'recharts';

const axios = require('axios');

export default class TabWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totUsers: "",
      totensor: "",
      totMeasure: ""
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/users/count')
    .then((response) => {
      this.setState({totUsers: response.data.user_count});
      console.log(response);
    })

    axios.get('http://localhost:3000/sensors/count')
    .then((response) => {
      this.setState({totSensor: response.data.sensor_count});
      console.log(response);
    })

    axios.get('http://localhost:3000/measures/count')
    .then((response) => {
      this.setState({totMeasure: response.data.measure_count});
      console.log(response);
    })
  }

  render() {
    return (
      <ResponsiveContainer width='100%'>
        <div>
          <div className="grey-text border-bottom border-grey">
            <p icon='user' className="h6">Nombre d'utilisateurs total</p>
            <p icon='user' className="text-dark font-weight-bolder" style={{fontSize: 20}}><MDBIcon size="lg" className="indigo-text pr-3" icon="user"/>{this.state.totUsers}</p>
          </div>

          <div className="grey-text border-bottom border-grey pt-3">
            <p icon='user' className="h6">Nombre total de capteurs</p>
            <p icon='user' className="text-dark font-weight-bolder" style={{fontSize: 20}}><MDBIcon size="lg" className="red-text pr-3" icon="broadcast-tower"/>{this.state.totSensor}</p>
          </div>

          <div className="grey-text pt-3">
            <p icon='user' className="h6">Quantité de mesures récoltée</p>
            <p icon='user' className="text-dark font-weight-bolder" style={{fontSize: 20}}><MDBIcon size="lg" className="yellow-text pr-3" icon="thermometer-half"/>{this.state.totMeasure}</p>
          </div>
        </div>
      </ResponsiveContainer>
    );
  }
}
