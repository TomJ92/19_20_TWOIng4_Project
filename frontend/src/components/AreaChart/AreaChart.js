import React, { PureComponent } from 'react';
import {
  AreaChart, Area, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const axios = require('axios');

export default class areaChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      humidity_january : "",
      humidity_february : "",
      humidity_march : "",
      humidity_april : "",
      humidity_may : "",
      humidity_june : "",
      temperature_january : "",
      temperature_february : "",
      temperature_march : "",
      temperature_april : "",
      temperature_may : "",
      temperature_june : "",
      pollution_january : "",
      pollution_february : "",
      pollution_march : "",
      pollution_april : "",
      pollution_may : "",
      pollution_june : "",
    };
  }

  componentWillMount() {
     // Send a GET request
    axios.get('http://localhost:3000/measures/humidity_january')
    .then((response) => {
      this.setState({humidity_january: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/humidity_february')
    .then((response) => {
      this.setState({humidity_february: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/humidity_march')
    .then((response) => {
      this.setState({humidity_march: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/humidity_april')
    .then((response) => {
      this.setState({humidity_april: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/humidity_may')
    .then((response) => {
      this.setState({humidity_may: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/humidity_june')
    .then((response) => {
      this.setState({humidity_june: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/measures/temperature_january')
    .then((response) => {
      this.setState({temperature_january: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/temperature_february')
    .then((response) => {
      this.setState({temperature_february: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/temperature_march')
    .then((response) => {
      this.setState({temperature_march: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/temperature_april')
    .then((response) => {
      this.setState({temperature_april: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/temperature_may')
    .then((response) => {
      this.setState({temperature_may: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/temperature_june')
    .then((response) => {
      this.setState({temperature_june: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/measures/pollution_january')
    .then((response) => {
      this.setState({pollution_january: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/pollution_february')
    .then((response) => {
      this.setState({pollution_february: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/pollution_march')
    .then((response) => {
      this.setState({pollution_march: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/pollution_april')
    .then((response) => {
      this.setState({pollution_april: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/pollution_may')
    .then((response) => {
      this.setState({pollution_may: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
    // Send a GET request
    axios.get('http://localhost:3000/measures/pollution_june')
    .then((response) => {
      this.setState({pollution_june: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
  }

  render() {
    return (
      <div className="BarChartWidget">
      <h6> Mesures par mois </h6>
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart data={[
  {
    name: 'Janvier', Multimédia: this.state.humidity_january, Informatique: this.state.temperature_january, Téléphonie: this.state.pollution_january, amt: 2400,
  },
  {
    name: 'Février', Multimédia: this.state.humidity_february, Informatique: this.state.temperature_february, Téléphonie: this.state.pollution_february, amt: 2210,
  },
  {
    name: 'Mars', Multimédia: this.state.humidity_march, Informatique: this.state.temperature_march, Téléphonie: this.state.pollution_march, amt: 2290,
  },
  {
    name: 'Avril', Multimédia: this.state.humidity_april, Informatique: this.state.temperature_april, Téléphonie: this.state.pollution_april, amt: 2000,
  },
  {
    name: 'Mai', Multimédia: this.state.humidity_may, Informatique: this.state.temperature_may, Téléphonie: this.state.pollution_may, amt: 2181,
  },
  {
    name: 'Juin', Multimédia: this.state.humidity_june, Informatique: this.state.temperature_june, Téléphonie: this.state.pollution_june, amt: 2500,
  },
]}
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
            <YAxis type="number" domain={[0, 50]} ticks={[15, 30, 45]} style={{ fontSize: 12 }} interval={0}/>
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
