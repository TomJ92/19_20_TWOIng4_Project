import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
      <div>
        <h6>Ventes multimédia</h6>

        <ResponsiveContainer width='100%' height={200}>
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie data={data} cx='50%' cy='50%' innerRadius={50} outerRadius={70} fill="#8884d8" dataKey="value">
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
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
