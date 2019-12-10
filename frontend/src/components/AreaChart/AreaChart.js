import React, { PureComponent } from 'react';
import {
  AreaChart, Area, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const axios = require('axios');

const data = [
  {
    name: 'Janvier', Multimédia: 4000, Informatique: 2400, Téléphonie: 5000, amt: 2400,
  },
  {
    name: 'Février', Multimédia: 11000, Informatique: 1398, Téléphonie: 3500, amt: 2210,
  },
  {
    name: 'Mars', Multimédia: 2000, Informatique: 9800, Téléphonie: 7000, amt: 2290,
  },
  {
    name: 'Avril', Multimédia: 2780, Informatique: 3908, Téléphonie: 2600, amt: 2000,
  },
  {
    name: 'Mai', Multimédia: 1890, Informatique: 4800, Téléphonie: 700, amt: 2181,
  },
  {
    name: 'Juin', Multimédia: 2390, Informatique: 3800, Téléphonie: 8000, amt: 2500,
  },
];

export default class areaChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="BarChartWidget">
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }} label="Bonjour">
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A7A7FF" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#A7A7FF" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#54D8FF" stopOpacity={0.7}/>
                <stop offset="95%" stopColor="#54D8FF" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFBB28" stopOpacity={0.7}/>
                <stop offset="95%" stopColor="#FFBB28" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" style={{ fontSize: 12 }}/>
            <YAxis type="number" domain={[0, 20000]} ticks={[5000, 10000, 15000]} style={{ fontSize: 12 }} interval={0}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip />
            <Legend verticalAlign="bottom" align ="center" iconType ="rect" height={15}/>
            <Area type="monotone" dataKey="Multimédia" stroke="#A7A7FF" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="Informatique" stroke="#54D8FF" fillOpacity={1} fill="url(#colorPv)" />
            <Area type="monotone" dataKey="Téléphonie" stroke="#FFBB28" fillOpacity={1} fill="url(#colorRv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  );
}
}
