import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from 'mdbreact';
import { ResponsiveContainer } from 'recharts';


const axios = require('axios');
export default class TabWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        columns: [
    {
      label: '#',
      field: '_id',
      sort: 'asc'
    },
    {
      label: 'Type',
      field: 'type',
      sort: 'asc'
    },
    {
      label: 'Date',
      field: 'creationDate',
      sort: 'asc'
    },
    {
      label: 'Capteur',
      field: 'sensorID',
      sort: 'asc'
      },
      {
      label: 'Valeur',
      field: 'value',
      sort: 'asc'
      }
  ],
  rows : []
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/measures/lasts')
    .then((response) => {
      this.setState({rows: response.data});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
  }

  render() {
    return (
      <div>

        <div className="input-group xs-form form-sm form-1 mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text purple lighten-3" id="basic-text1">
              <MDBIcon className="text-white" icon="search" />
            </span>
          </div>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
                    <h6>Dernières mesures effectuées</h6>


        <ResponsiveContainer width='100%'>
          <MDBTable scrollY hover >
            <MDBTableHead columns={this.state.columns} />
            <MDBTableBody rows={this.state.rows} />
          </MDBTable>
        </ResponsiveContainer>
      </div>
    );
  }
}