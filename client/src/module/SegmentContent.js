import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const SegmentContent = ({ classes, segment }) => (
  <div className={classes.root}>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" >
          { segment.name }
        </Typography>
      </CardContent>
      {
        segment.image_link ?
          <CardMedia
            component="img"
            className={classes.media}
            src={segment.image_link}
          /> : ''
      }
      {
        segment.video_link ?
          <CardMedia
            component="video"
            controls
            className={classes.media}
            src={segment.video_link}
          /> : ''
      }
      <CardContent>
        <Typography gutterBottom variant="body2">
          { segment.question_text }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Submit
        </Button>
      </CardActions>
    </Card>
  </div>
);

SegmentContent.propTypes = {
  classes: PropTypes.object.isRequired,
  segment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    video_link: PropTypes.string,
    image_link: PropTypes.string,
    question_text: PropTypes.string,
    valid_text: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const styles = {
  root: {
    margin: '10px',
    height: '100%',
  },
  card: {
    width: '100%',
    height: '100%',
  },
  media: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actions: {
    display: 'flex',
  },
};

export default withStyles(styles)(SegmentContent);
