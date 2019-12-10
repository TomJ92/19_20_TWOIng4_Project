import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const axios = require('axios');

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
  constructor(props) {
    super(props);
    this.state = {
      nbrKitchen : "",
      nbrLiving : "",
      nbrBedroom : "",
      nbrBathroom : "",
      nbrEntrance : "",

    };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/sensors/count_kitchen')
    .then((response) => {
      this.setState({nbrKitchen: response.data.measure_count});
      console.log(this.state.nbrH);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    axios.get('http://localhost:3000/sensors/count_livingroom')
    .then((response) => {
      this.setState({nbrLiving: response.data.measure_count});
      console.log(response.data.measure_count);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    axios.get('http://localhost:3000/sensors/count_bedroom')
    .then((response) => {
      this.setState({nbrBedroom: response.data.measure_count});
      console.log(response.data.measure_count);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    axios.get('http://localhost:3000/sensors/count_bathroom')
    .then((response) => {
      this.setState({nbrBathroom : response.data.measure_count});
      console.log(response.data.measure_count);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    axios.get('http://localhost:3000/sensors/count_entrance')
    .then((response) => {
      this.setState({nbrEntrance: response.data.measure_count});
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
      <h6>Disposition des capteurs</h6>

      <ResponsiveContainer width='100%' height={200}>
      <RadarChart cx='50%' cy='45%' outerRadius={60}  data={[
{
  subject: 'Kitchen', A: this.state.nbrKitchen, fullMark: 50,
},
{
  subject: 'Living Room', A: this.state.nbrLiving ,fullMark: 50,
},
{
  subject: 'Bedroom', A: this.state.nbrBedroom, fullMark: 50,
},
{
  subject: 'Bathroom', A: this.state.nbrBathroom, fullMark: 50,
},
{
  subject: 'Entrance', A: this.state.nbrEntrance, fullMark: 50,
},
]}>
      <PolarGrid/>
      <PolarAngleAxis dataKey="subject" style={{ fontSize: 13 }}/>
      <PolarRadiusAxis angle={30} domain={[0, 40]} style={{ fontSize: 10 }}/>
      <Radar name="Nombre de capteurs par pièce" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Legend iconType='diamond' style={{ fontSize: 10 }}/>
      <Tooltip/>
      </RadarChart>
      </ResponsiveContainer>
      </div>
      );
  }
}
