import React, { Component } from 'react'
import ModuleList from './ModuleList'

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard (仪表板)</h1>
        <ModuleList />
      </div>
    );
  }
}

export default Dashboard;
