import React, { Component } from 'react';
import SegmentItem from './SegmentItem';

class SegmentList extends Component {
  render() {
    return (
      <div className="SegmentList">
        <ul>
          { this.props.segments.map(s =>
            <SegmentItem key={s.id} segmentItem={s} />) }
        </ul>
      </div>
    );
  }
}

export default SegmentList;
