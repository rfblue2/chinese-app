import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import SegmentItem from './SegmentItem';

const SegmentList = ({ classes, handleClick, segments }) => (
  <div className={classes.root}>
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <List component="nav">
          <ListItem>
            <ListItemText primary="Segments" />
          </ListItem>
          { segments.map(s => (
            <div key={s.id}>
              <Divider />
              <SegmentItem
                key={s.id}
                segmentItem={s}
                handleClick={handleClick}
              />
            </div>
          )) }
        </List>
      </CardContent>
    </Card>
  </div>
);

SegmentList.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const styles = theme => ({
  root: {
    margin: '10px',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    padding: '0',
    height: '100%',
  },
  cardContent: {
    padding: '0',
  },
});

export default withStyles(styles)(SegmentList);
