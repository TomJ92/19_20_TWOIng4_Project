import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Math', A: 120, B: 110, C: 96, fullMark: 150,
  },
  {
    subject: 'Chinese', A: 98, B: 130, C: 20, fullMark: 150,
  },
  {
    subject: 'English', A: 86, B: 130, C: 40, fullMark: 150,
  },
  {
    subject: 'Geography', A: 99, B: 100, C: 75, fullMark: 150,
  },
  {
    subject: 'Physics', A: 85, B: 90, C: 60, fullMark: 150,
  },
  {
    subject: 'History', A: 65, B: 85, C: 50,fullMark: 150,
  },
];

export default class RadChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h6>Ventes multimédia</h6>

        <ResponsiveContainer width='100%' height={200}>
          <RadarChart cx='50%' cy='45%' outerRadius={60}  data={data}>
            <PolarGrid/>
            <PolarAngleAxis dataKey="subject" style={{ fontSize: 13 }}/>
            <PolarRadiusAxis angle={30} domain={[0, 150]} style={{ fontSize: 10 }}/>
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Radar name="Francis" dataKey="C" stroke="#FFBB28" fill="#FFBB28" fillOpacity={0.4} />
            <Legend iconType='diamond' style={{ fontSize: 10 }} height={10}/>
          </RadarChart>
        </ResponsiveContainer>
      </div>
        );
  }
}
