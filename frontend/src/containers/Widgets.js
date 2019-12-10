import React from 'react';
import PieChart from '../components/PieChart/PieChart.js';
import AreaChart from '../components/AreaChart/AreaChart.js';
// import RadialChart from '../components/RadialChart/RadialChart.js';
import RadChart from '../components/RadarChart/RadarChart.js';
import BarChart from '../components/BarChart/BarChart.js';
import TabWidget from '../components/TabWidget/TabWidget.js';
import TotalChart from '../components/TotalChart/TotalChart.js';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdbreact';

export default class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='mr-4'>
        <MDBRow>
          <MDBCol xs="12" md="6">
            <MDBCard className="text-center shadow-box hoverable mt-1">
              <MDBCardBody>
                <TabWidget/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol xs="12" md="6">
            <MDBCard className="text-center shadow-box hoverable mt-1">
              <MDBCardBody>
                <BarChart/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol xs="12" md="6" xl="4">
            <MDBCard className="text-center shadow-box hoverable mt-1">
              <MDBCardBody>
                <PieChart/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol xs="12" md="6" xl="4">
            <MDBCard className="text-center shadow-box hoverable mt-1">
              <MDBCardBody>
                <RadChart/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol xl='4'>
            <MDBCard className="text-center shadow-box hoverable mt-1">
              <MDBCardBody>
                <TotalChart/>
                {/* <RadialChart/> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol xs='12' md='12'>
            <MDBCard className="text-center shadow-box hoverable mt-1">
              <MDBCardBody>
                <AreaChart/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      );
  }
}
