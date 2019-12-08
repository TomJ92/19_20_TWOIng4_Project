import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact";
import { ResponsiveContainer } from 'recharts';

export default class PieChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataDoughnut: {
        labels: ["Ordinateurs", "Tablettes", "Logiciels", "Smartphones"],
        datasets: [
          {
            data: [300, 50, 100, 40],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#388e3c"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#388e3c ",
            ]
          }
        ]
      }
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h6>Ventes effectuées</h6>
        <ResponsiveContainer width='100%' height={150}>
          <div className="d-flex flex-row">
            <div className="d-flex align-items-center">
              <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }}/>
            </div>

            <div className='d-md-none d-lg-block'>
              <MDBListGroup className="list-group-flush d-flex align-items-center" style={{fontSize: 12}}>
                
                <MDBListGroupItem>
                  <text className="pr-2">
                    Ordinateurs
                  </text>
                  <MDBBadge color="danger-color" pill className="float-right">
                    300
                  </MDBBadge>
                </MDBListGroupItem>

                <MDBListGroupItem>
                  <text className="pr-2">
                    Tablettes
                  </text>
                  <MDBBadge color="info-color" pill className="float-right">
                    50
                  </MDBBadge>
                </MDBListGroupItem>

                <MDBListGroupItem>
                  <text className="pr-2">
                    Logiciels
                  </text>
                  <MDBBadge color="amber darken-1" pill className="float-right">
                    100
                  </MDBBadge>
                </MDBListGroupItem>

                <MDBListGroupItem>
                  <text className="pr-2">
                    Smartphones
                  </text>
                  <MDBBadge color="green darken-2" pill className="float-right">
                    40
                  </MDBBadge>
                </MDBListGroupItem>

              </MDBListGroup>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
);
}
}
