import React from 'react';
import './ModuleItem.css';

const ModuleItem = props => 
  (<li className="module">{props.module.name}</li>);

export default ModuleItem;
