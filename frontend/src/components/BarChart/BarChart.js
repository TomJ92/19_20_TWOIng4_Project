import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { ResponsiveContainer } from 'recharts';

const axios = require('axios');

export default class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataBar: {
        labels: ['Chine', 'Japon', 'Philippines', 'Russie', 'France', 'Grèce', 'Italie'],
        datasets: [
          {
            label: 'Nombre d\'utilisateurs',
            data: [12, 39, 3, 50, 2, 32, 66],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            borderWidth: 1
          }, {
            label: 'Nombre total de personnes dans toutes les maisons',
            data: [56, 24, 5, 16, 45, 24, 8],
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            borderWidth: 1
          }
        ]
      },

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

  }

  render(){
    return (
      <div>
        <h6>Répartition par pays</h6>
        <ResponsiveContainer width='100%'>
          <div>
            <Bar data={this.state.dataBar} height={200} width={400} options={this.state.barChartOptions}/>
          </div>
        </ResponsiveContainer>
      </div>
    );
  }
}
