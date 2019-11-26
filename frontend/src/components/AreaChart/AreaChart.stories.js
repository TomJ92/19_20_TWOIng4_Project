import React, { Component }  from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import AreaChart from './AreaChart';


export default {
	component: AreaChart,
  title: 'AreaChart',
  data : data
};

export const text = () => (
  <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
);