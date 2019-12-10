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
    this.setState({data : [{name: 'Capteurs d\'humidité', value: this.state.nbrH },
  { name: 'Capteurs de température', value: this.state.nbrT },
  { name: 'Capteurs de pollution', value: this.state.nbrP}]});

  }

  render() {
    return (
      <div>
        <h6>Mesures globales</h6>

        <ResponsiveContainer width='100%' height={200}>
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie data={this.state.data} cx='50%' cy='50%' innerRadius={50} outerRadius={70} fill="#8884d8" dataKey="value">
              {
                this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Tooltip/>
            <Legend iconType='circle' style={{ fontSize: 10 }}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
