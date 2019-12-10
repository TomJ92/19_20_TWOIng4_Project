import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { ResponsiveContainer } from 'recharts';

const axios = require('axios');

export default class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      nbrChine : "",
      nbrJapon : "",
      nbrPhiphi : "",
      nbrRussie : "",
      nbrItalie : "",
      nbrGreece : "",
      nbrFrance : "",
      nbrPersChine : "",
      nbrPersJapon : "",
      nbrPersPhiphi : "",
      nbrPersRussie : "",
      nbrPersItalie: "",
      nbrPersGrece: "",
      nbrPersFrance : "",
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
  }

  componentWillMount() {
    // Send a GET request
    axios.get('http://localhost:3000/users/count_chine')
    .then((response) => {
      this.setState({nbrChine: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_japon')
    .then((response) => {
      this.setState({nbrJapon: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_phiphi')
    .then((response) => {
      this.setState({nbrPhiphi: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_russie')
    .then((response) => {
      this.setState({nbrRussie: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_france')
    .then((response) => {
      this.setState({nbrFrance: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_greece')
    .then((response) => {
      this.setState({nbrGreece: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_italy')
    .then((response) => {
      this.setState({nbrItalie: response.data.measure_count});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_pers_chine')
    .then((response) => {
      this.setState({nbrPersChine: response.data[0].totalPersonnes});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_pers_japon')
    .then((response) => {
      this.setState({nbrPersJapon: response.data[0].totalPersonnes});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_pers_phiphi')
    .then((response) => {
      this.setState({nbrPersPhiphi: response.data[0].totalPersonnes});
      console.log(response.data[0]);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_pers_russie')
    .then((response) => {
      this.setState({nbrPersRussie: response.data[0].totalPersonnes});
      console.log(response.data[0]);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_pers_france')
    .then((response) => {
      this.setState({nbrPersFrance: response.data[0].totalPersonnes});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_pers_greece')
    .then((response) => {
      this.setState({nbrPersGrece: response.data[0].totalPersonnes});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });
     // Send a GET request
    axios.get('http://localhost:3000/users/count_pers_italy')
    .then((response) => {
      this.setState({nbrPersItalie: response.data[0].totalPersonnes});
      console.log(response.data);
    })
    .catch(function(error)
    {
      console.log("ERROR");
    });

  }

  render(){
    return (
      <div>
      <h6>Répartition par pays</h6>
      <ResponsiveContainer width='100%'>
      <div>
      <Bar data={{
        labels: ['Chine', 'Japon', 'Philippines', 'Russie', 'France', 'Grèce', 'Italie'],
        datasets: [
        {
          label: 'Nombre d\'utilisateurs',
          data: [this.state.nbrChine, this.state.nbrJapon, this.state.nbrPhiphi, this.state.nbrRussie, this.state.nbrFrance, this.state.nbrGreece, this.state.nbrItalie],
          backgroundColor: 'rgba(245, 74, 85, 0.5)',
          borderWidth: 1
        }, {
          label: 'Nombre total de personnes dans toutes les maisons',
          data: [this.state.nbrPersChine, this.state.nbrPersJapon, this.state.nbrPersPhiphi, this.state.nbrPersRussie, this.state.nbrPersFrance, this.state.nbrPersGrece, this.state.nbrPersItalie],
          backgroundColor: 'rgba(90, 173, 246, 0.5)',
          borderWidth: 1
        }
        ]
      }}
      height={200} width={400} options={this.state.barChartOptions}/>
      </div>
      </ResponsiveContainer>
      </div>
      );
  }
}
