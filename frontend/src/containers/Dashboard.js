import React from 'react';
import Widgets from './Widgets';
import NavBar from '../components/NavBar/NavBar.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="danger-color ">
        <Row>
          <Col>
            <NavBar></NavBar>
          </Col>

          <Col>
            <Widgets></Widgets>
          </Col>
        </Row>
      </div>
      );
  }
}

export default Dashboard;
