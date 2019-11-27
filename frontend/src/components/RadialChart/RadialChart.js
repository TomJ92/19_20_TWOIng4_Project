import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: 'unknow', uv: 67, pv: 4800, fill: '#ffc658',
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

export default class Example extends PureComponent {
  render() {
    return (
      <RadialBarChart width={500} height={300} cx={'50%'} cy={'50%'} innerRadius={100} barSize={30} data={data}>
        <RadialBar minAngle={0} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
    );
  }
}