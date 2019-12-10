import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from 'mdbreact';
import { ResponsiveContainer } from 'recharts';

const axios = require('axios');

const data = {
  columns: [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'First',
      field: 'first',
      sort: 'asc'
    },
    {
      label: 'Last',
      field: 'last',
      sort: 'asc'
    },
    {
      label: 'Handle',
      field: 'handle',
      sort: 'asc'
      }
  ],
  rows: [
    {
      'id': 1,
      'first': 'Mark',
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': 'Thornton',
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': '@twitter'
    },
    {
      'id': 4,
      'first': 'Mark',
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 5,
      'first': 'Jacob',
      'last': 'Thornton',
      'handle': '@fat'
    },
    {
      'id': 6,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': '@twitter'
    }
  ]
};

export default class TabWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {

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

        <ResponsiveContainer width='100%'>
          <MDBTable scrollY hover>
            <MDBTableHead columns={data.columns} />
            <MDBTableBody rows={data.rows} />
          </MDBTable>
        </ResponsiveContainer>
      </div>
    );
  }
}
