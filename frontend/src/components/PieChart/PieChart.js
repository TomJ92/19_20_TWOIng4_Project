import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer
} from 'recharts';

const axios = require('axios');
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nbrH : "",
      nbrT : "",
      nbrP : "",
      data : []
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/measures/count_humidity')
    .then((response) => {
      this.setState({nbrH: response.data.measure_count});
      console.log(this.state.nbrH);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    axios.get('http://localhost:3000/measures/count_temperature')
    .then((response) => {
      this.setState({nbrT: response.data.measure_count});
      console.log(response.data.measure_count);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    axios.get('http://localhost:3000/measures/count_pollution')
    .then((response) => {
      this.setState({nbrP: response.data.measure_count});
      console.log(response.data.measure_count);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
  }

  render() {
    return (
      <div>
        <h6>Mesures globales</h6>

        <ResponsiveContainer width='100%' height={200}>
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie data={[
              {name: 'Mesures d\'humidité', value: this.state.nbrH },
              { name: 'Mesures de température', value: this.state.nbrT },
              { name: 'Mesures de pollution', value: this.state.nbrP}]} cx='50%' cy='50%' innerRadius={40} outerRadius={60} fill="#8884d8" dataKey="value">
              {
                [
                {name: 'Mesures d\'humidité', value: this.state.nbrH },
                { name: 'Mesures de température', value: this.state.nbrT },
                { name: 'Mesures de pollution', value: this.state.nbrP}
                ].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Tooltip/>
            <Legend iconType='circle' style={{ fontSize: 12 }}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
