import React from 'react';
import Widgets from '../Widgets';
import NavBar from '../../components/NavBar/NavBar.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DashBoard.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="flexible-content">
        <Row>
          <Col xs='2'>
            <NavBar></NavBar>
          </Col>

          <Col xs='10'>
            <Widgets></Widgets>
          </Col>
        </Row>
      </div>
      );
  }
}

export default Dashboard;
