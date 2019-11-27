import React from 'react';
import Widgets from './Widgets';
import NavBar from '../components/NavBar/NavBar.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Widgets></Widgets>
      </div>
      );
  }
}

export default Dashboard;
