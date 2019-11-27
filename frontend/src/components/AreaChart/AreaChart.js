import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Janvier', Multimédia: 4000, Informatique: 2400, amt: 2400,
  },
  {
    name: 'Février', Multimédia: 3000, Informatique: 1398, amt: 2210,
  },
  {
    name: 'Mars', Multimédia: 2000, Informatique: 9800, amt: 2290,
  },
  {
    name: 'Avril', Multimédia: 2780, Informatique: 3908, amt: 2000,
  },
  {
    name: 'Mai', Multimédia: 1890, Informatique: 4800, amt: 2181,
  },
  {
    name: 'Juin', Multimédia: 2390, Informatique: 3800, amt: 2500,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/tv8zfzxo/';

  render() {
    return (
      <div>
      <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#A7A7FF" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#A7A7FF" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#54D8FF" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#54D8FF" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis/>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Multimédia" stroke="#A7A7FF" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Informatique" stroke="#54D8FF" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
<div> <rect fill="rgba(163,161,251,1)" id="Label_A0_Rectangle_50" rx="4" ry="4" x="0" y="0" width="18" height="8">
        </rect>
        </div>
        </div>
    );
  }
}
