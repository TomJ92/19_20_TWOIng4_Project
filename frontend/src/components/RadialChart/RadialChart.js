import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';

const data = [
  { name: 'L1', value: 35 }
];

export default class RadialChart extends PureComponent {
  render() {
    return (
      <div>
        <h4>Argent</h4>
        <h5>Budget total </h5> <span> 500 000€ </span>
        <RadialBarChart
          width={730}
          height={250}
          cx={'50%'}
          cy={'40%'}
          innerRadius={'75%'}
          outerRadius={'90%'}
          barSize={20}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            clockWise
            dataKey="value"
            cornerRadius={'50%'}
            fill="#A4A1FB"
          />
          <text
            x={'50%'}
            y={'40%'}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            48% Economisé
          </text>
        </RadialBarChart>

        <div class="row">
          <div class="col-sm text-align-left">
            <svg>
              <ellipse fill="rgba(237,236,254,1)" id="Circle_Sign__Light_Purple_" rx="5" ry="5" cx="5" cy="5">
              </ellipse>
            </svg>
            <span>Dépense totale</span>
          </div>
          <div class="col-sm">
            <svg style={{float: 'left'}}>
              <ellipse fill="rgba(164,161,251,1)" id="Circle_Sign__Vivid_Purple_" rx="5" ry="5" cx="5" cy="5">
              </ellipse>
            </svg>
            <span class="align-left">Economie</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm text-align-left">
            18,570€
          </div>
            <div class="col-sm text-align-left">
              31,430€
            </div>
          </div>


      </div>
        );
      }
    }
