import React, { Component } from 'react';
import SegmentList from './SegmentList';
import './Module.css';

class Module extends Component {
  state = { name: '', segments: [] };

  componentDidMount() {
    // TODO make call given props.match.params.moduleId
    this.setState({
      name: `Module ${this.props.match.params.moduleId}`,
      segments: [
        {
          id: 1,
          name: 'seg1',
          image_link: './favicon.ico',
          valid_text: ['zhong', 'center', 'middle'],
          question_text: 'What does this mean',
        },
      ],
    });
  }

  render() {
    return (
      <div className="Module">
        { this.state.name }
        <SegmentList segments={this.state.segments} />
      </div>
    );
  }
}

export default Module;

