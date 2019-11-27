import React from 'react';
import PieChart from '../components/PieChart/PieChart.js';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AreaChart from '../components/AreaChart/AreaChart.js';
import RadialChart from '../components/RadialChart/RadialChart.js';

export default class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Row>
          <Col xs="10" md="auto">
            <Card className="">
              <Card.Header as="h5">Ventes effectuées</Card.Header>
              <Card.Body>
                <Card.Title>PieChart</Card.Title>
                <Card.Text>

                </Card.Text>
                <PieChart></PieChart>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="10" md="auto">
            <Card className="">
              <Card.Body>
                <Card.Text>

                </Card.Text>
                <AreaChart></AreaChart>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="10" md="auto">
            <Card className="">
              <Card.Body>
                <Card.Text>

                </Card.Text>
                <RadialChart></RadialChart>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
  }
}
