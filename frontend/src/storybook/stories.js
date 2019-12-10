import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import 'bootstrap/dist/css/bootstrap.css';
import PieChart from '../components/PieChart/PieChart.js';
import AreaChart from '../components/AreaChart/AreaChart.js';
import RadialChart from '../components/RadialChart/RadialChart.js';
import RadChart from '../components/RadarChart/RadarChart.js';
import BarChart from '../components/BarChart/BarChart.js';
import TabWidget from '../components/TabWidget/TabWidget.js';
import TotalChart from '../components/TotalChart/TotalChart.js';
import FormBar from '../components/NavBar/FormNavBar/FormBar.js';
import NavBar from '../components/NavBar/SideBar/NavBar.js';
import TopBar from '../components/NavBar/TopBar/TopNavBar.js';

//////////////////////////////////////////////////////////////////////
// Ne fonctionne pas encore, erreur qu'on comprends pas dans AreaChart
//////////////////////////////////////////////////////////////////////

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('recharts widgets', module)
  .add('PieChart', () => (
    <PieChart/>
  ))
  .add('RadarChart', () => (
    <RadChart/>
  ))
  .add('RadialChart', () => (
    <RadialChart/>
  ))
  .add('AreaChart', () => (
    <AreaChart/>
  ))
  .add('BarChart', () => (
    <BarChart/>
  ));

storiesOf('non recharts widgets', module)
  .add('Table', () => (
    <TabWidget/>
  ))
  .add('Counter', () => (
    <TotalChart/>
  ));

storiesOf('Nav Bars', module)
  .add('General Navbar', () => (
    <NavBar/>
  ))
  .add('Top General Navbar', () => (
    <TopBar/>
  ))
  .add('Form Navbar', () => (
    <FormBar/>
  ));
