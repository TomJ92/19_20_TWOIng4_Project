import React from 'react';
import Form from '../../components/Form/Form.js';
import NavBar from '../../components/NavBar/NavBar.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Admin.css'

class Admin extends React.Component {
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
            <Form></Form>
          </Col>
        </Row>
      </div>
      );
  }
}

export default Admin;
