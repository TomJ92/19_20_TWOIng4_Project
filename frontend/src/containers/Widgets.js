import React from 'react';
import PieChart from '../components/PieChart/PieChart.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
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
      <Container>
        <Card className="text-center d-flex flex-center">
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Card.Title>PieChart</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <PieChart></PieChart>
            <AreaChart></AreaChart>
          </Card.Body>
        </Card>
      </Container>
      );
  }
}
