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
      <div>
            <PieChart></PieChart>
            <AreaChart></AreaChart>
            </div>
      );
  }
}
