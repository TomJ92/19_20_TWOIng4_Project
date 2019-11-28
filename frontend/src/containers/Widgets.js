import React from 'react';
import PieChart from '../components/PieChart/PieChart.js';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AreaChart from '../components/AreaChart/AreaChart.js';
import RadialChart from '../components/RadialChart/RadialChart.js';
import radarChart from '../components/RadarChart/RadarChart.js';

export default class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="10" md="auto" className="mt-3">
            <Card className="text-center shadow-box hoverable">
              <Card.Body>
                <PieChart/>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="10" md="auto" className="mt-2">
            <Card className="text-center shadow-box hoverable">
              <Card.Body>
                <AreaChart/>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col xs="10" md="auto" className="mt-2">
            <Card className="text-center shadow-box hoverable">
              <Card.Body>
                <RadialChart/>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="10" md="auto" className="mt-3">
            <Card className="text-center shadow-box hoverable">
              <Card.Body>
                <radarChart/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      );
  }
}
