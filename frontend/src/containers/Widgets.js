import React from 'react';
import PieChart from '../components/PieChart/PieChart.js';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AreaChart from '../components/AreaChart/AreaChart.js';

export default class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Row>
          <Col xs="10" md="auto" className="mt-2 ml-2">
            <Card className="text-center">
              <Card.Body>
                <PieChart/>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="10" md="auto" className="mt-2 ml-2">
            <Card className="text-center">
              <Card.Body>
                <AreaChart/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
  }
}
