import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

class SegmentContent extends Component {

  state = { 
    inputProps: {text: ''}, 
    text: '',
    correct: false,
    showFeedback: false,
  }

  handleClick() {
    if (!('valid_text' in this.props.segment)) return;
    if (this.props.segment.valid_text.includes(this.state.text)) {
      this.setState({correct: true, showFeedback: true});
    } else {
      this.setState({correct: false, showFeedback: true});
    }
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      if (!('valid_text' in this.props.segment)) return;
      if (this.props.segment.valid_text.includes(this.state.text)) {
        this.setState({correct: true, showFeedback: true});
      } else {
        this.setState({correct: false, showFeedback: true});
      }
    }
  }

  onChange(e) {
    this.setState({text: e.target.value})
  }

  render() {
    const { 
      classes, 
      segment,
    } = this.props;
    const { 
      showFeedback,
      correct,
    } = this.state;
    return (
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
            <Typography gutterBottom variant="subheading">
              { segment.question_text } {/* TODO larger text font*/}
            </Typography>
            {
              segment.valid_text ?
                <TextField 
                  id="answer" 
                  type="text" 
                  inputProps={this.state.inputProps} 
                  onChange={this.onChange.bind(this)}
                  onKeyPress={this.onKeyPress.bind(this)}
                />
                : ''
            }
         </CardContent>
          <CardActions>
            { segment.valid_text ? 
              <Button 
                size="small" 
                color="primary" 
                onClick={this.handleClick.bind(this)}>
                    Submit
                </Button> : ''
            }
          </CardActions>
          <CardContent>
            { showFeedback ? (correct ? 
              <Typography gutterBottom variant="subheading">Correct!</Typography> : 
              <Typography gutterBottom variant="subheading">Try again.</Typography>) :
               ''
            } 
          </CardContent>
        </Card>
      </div>
    );
  }
}

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
    maxHeight: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actions: {
    display: 'flex',
  },
};

export default withStyles(styles)(SegmentContent);
