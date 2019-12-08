import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { MDBIcon } from 'mdbreact';

const data = [
  { name: 'L1', value: 35 }
];

export default class RadialChart extends PureComponent {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h7>Budget total </h7> <span> 500 000€ </span>

        <ResponsiveContainer width='100%' height={150}>
          <div className='d-flex flex-column'>
            <RadialBarChart width={250} height={150} cx='50%' cy='50%' innerRadius={60} outerRadius={50} barSize={20} data={data} startAngle={90} endAngle={-270}>

              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false}/>
              <RadialBar background clockWise dataKey="value" cornerRadius={'50%'} fill="#A4A1FB"/>
              <text x={'50%'} y={'50%'} textAnchor="middle" dominantBaseline="middle" className="progress-label" style={{fontSize: 10}}>
                48% Economisé
              </text>

            </RadialBarChart>

            <div className='d-flex flex-row justify-content-between' style={{fontSize: 10}}>

              <div>
                <MDBIcon className='mr-2' icon="euro-sign" style={{color: '#A4A1FB'}}/>
                Dépense : 30 000€
              </div>

              <div>
                <MDBIcon className='mr-2' icon="euro-sign" style={{color: 'rgba(220,220,254,1)'}}/>
                Economie : 20 000€
              </div>

            </div>
          </div>
          </ResponsiveContainer>

      </div>
        );
      }
    }
