import React from 'react';
import { MDBIcon } from 'mdbreact';
import { ResponsiveContainer } from 'recharts';

export default class TabWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ResponsiveContainer width='100%'>
        <div>
          <div className="grey-text border-bottom border-grey">
            <p icon='user' className="h6">Nombre d'utilisateurs total</p>
            <p icon='user' className="text-dark font-weight-bolder" style={{fontSize: 20}}><MDBIcon size="lg" className="indigo-text pr-3" icon="user"/>60K</p>
          </div>

          <div className="grey-text border-bottom border-grey pt-3">
            <p icon='user' className="h6">Nombre total de capteurs</p>
            <p icon='user' className="text-dark font-weight-bolder" style={{fontSize: 20}}><MDBIcon size="lg" className="red-text pr-3" icon="broadcast-tower"/>20K</p>
          </div>

          <div className="grey-text pt-3">
            <p icon='user' className="h6">Quantité de mesures récoltée</p>
            <p icon='user' className="text-dark font-weight-bolder" style={{fontSize: 20}}><MDBIcon size="lg" className="yellow-text pr-3" icon="thermometer-half"/>200K</p>
          </div>
        </div>
      </ResponsiveContainer>
    );
  }
}
