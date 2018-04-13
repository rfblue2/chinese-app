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
    selectedSegmentId: '1',
    segments: [],
    redirectHome: false,
  };

  constructor() {
    super();
    // bind the function but don't bind as jsx prop!
    this.handleSegmentItemClick = this._handleSegmentItemClick.bind(this);
  }

  componentDidMount() {
    // TODO make call given props.match.params.moduleId
    if (this.props.match.params.moduleId === '1') {
      this.setState({
        name: `Module ${this.props.match.params.moduleId}`,
        selectedSegmentId: '1',
        segments: [
          {
            id: '1',
            name: 'Instructions',
            question_text: 'Fill in the right answer in the following segments.',
          },
          {
            id: '2',
            name: 'Change of Location',
            image_link: '/images/hamburger.gif',
            valid_text: [
              '丁一把汉堡包放在桌子上。', 
              '丁一把汉堡包放在桌子上', 
              '他把汉堡包放在桌子上。', 
              '他把汉堡包放在桌子上'
            ],
            question_text: '丁一做了什么？',
          },
          {
            id: '3',
            name: 'Change of Status',
            image_link: '/images/water.gif',
            valid_text: [
              '张三把水喝了。', 
              '张三把水喝完了。', 
              '张三把水喝了', 
              '张三把水喝完了', 
              '他把水喝完了。', 
              '他把水喝了。', 
              '他把水喝完了', 
              '他把水喝了', 
              '张三把水喝完。', 
              '张三把水喝完', 
              '他把水喝完。', 
              '他把水喝完', 
            ],
            question_text: '张三做了什么？',
          },
        ],
      });
    }
  }

  _handleSegmentItemClick(id) {
    this.setState({
      selectedSegmentId: id,
    });
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
        <Grid container spacing={8} className={classes.grid}>
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
    height: "100%",
    flexGrow: 1,
  },
  grid: {
    height: "100%",
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
