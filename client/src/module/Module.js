import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import SegmentList from './SegmentList';
import SegmentContent from './SegmentContent';

class Module extends Component {
  state = {
    name: '',
    selectedSegmentId: 0,
    segments: [],
    redirectHome: false,
  };

  componentDidMount() {
    // TODO make call given props.match.params.moduleId
    this.setState({
      name: `Module ${this.props.match.params.moduleId}`,
      selectedSegmentId: 1,
      segments: [
        {
          id: 1,
          name: 'Segment 1',
          image_link: '/favicon.ico',
          valid_text: ['zhong', 'center', 'middle'],
          question_text: 'What does this mean',
        },
        {
          id: 2,
          name: 'Segment 2',
          valid_text: ['yes'],
          question_text: '学而时习之，不亦悦乎?',
        },
        {
          id: 3,
          name: 'Segment 3',
          video_link: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
        },
      ],
    });

    // bind the function but don't bind as jsx prop!
    this.handleSegmentItemClick = this._handleSegmentItemClick.bind(this);
  }

  _handleSegmentItemClick(id) {
    this.setState({ selectedSegmentId: id });
  }

  render() {
    const { classes } = this.props;
    const segment = this.state.segments.find(s => s.id === this.state.selectedSegmentId);
    if (this.state.redirectHome) {
      return <Redirect push to="/" />;
    }
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.homeButton}
              color="inherit"
              aria-label="Home"
              onClick={() => this.setState({ redirectHome: true })}
            >
              <HomeIcon />
            </IconButton>
            <Typography
              variant="title"
              component="h1"
              color="inherit"
              className={classes.flex}
            >
              { this.state.name }
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={8}>
          <Grid item xs={3}>
            <SegmentList
              segments={this.state.segments}
              handleClick={this.handleSegmentItemClick}
            />
          </Grid>
          <Grid item xs={9}>
            { segment ? <SegmentContent segment={segment} /> : '' }
          </Grid>
        </Grid>
      </div>
    );
  }
}

Module.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withStyles(styles)(Module);
