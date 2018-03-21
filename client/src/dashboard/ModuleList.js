import React, { Component } from 'react';
import ModuleItem from './ModuleItem';
import './ModuleList.css';

class ModuleList extends Component {
  state = { modules: [] }

  componentDidMount() {
    // TODO fetch modules
    this.setState({
      modules: [
        {
          id: 1,
          name: "Module 1",
        },
        {
          id: 2,
          name: "Module 2"
        }
      ]
    });
  }

  render() {
    return (
      <div className="ModuleList">
        <h2 id="list-header">Assigned Modules</h2>
        <ul id="list-body">
          { this.state.modules.map(module => 
            <ModuleItem key={module.id} module={module} />) }
        </ul>
      </div>
    );
  }
}

export default ModuleList;
