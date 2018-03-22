import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from 'material-ui/List';

const SegmentItem = ({ segmentItem, handleClick }) =>
  (
    <ListItem button onClick={() => handleClick(segmentItem.id)} >
      <ListItemText inset primary={segmentItem.name} />
    </ListItem>
  );

SegmentItem.propTypes = {
  segmentItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SegmentItem;
