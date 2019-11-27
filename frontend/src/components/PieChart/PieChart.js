import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge } from "mdbreact";

class PieChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataDoughnut: {
        labels: ["Ordinateurs", "Tablettes", "Logiciels", "Smartphones"],
        datasets: [
          {
            data: [300, 50, 100, 40],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774"
            ]
          }
        ]
      }
    };
  }

render() {
    return (
    <div className="d-flex flex-row">
      <div style={{ width: "22rem" }}>
        <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
      </div>

      <div>
        <MDBContainer>
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Cras justo odio<MDBBadge color="primary"
                                                                                                           pill>14</MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<MDBBadge
                                                                                                                   color="primary" pill>2</MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Morbi leo risus<MDBBadge color="primary"
                                                                                                           pill>1</MDBBadge>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
      </div>
    </div>
    );
  }
}

export default PieChart;
