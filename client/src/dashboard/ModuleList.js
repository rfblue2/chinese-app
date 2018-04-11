import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import ModuleItem from './ModuleItem';

class ModuleList extends Component {
  state = { modules: [] }

  componentDidMount() {
    // TODO fetch modules
    this.setState({
      modules: [
        {
          id: 1,
          name: '把 Structure',
        },
        {
          id: 2,
          name: 'Module 2',
        },
        {
          id: 3,
          name: 'Module 3',
        },
      ],
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cellHeight={80}
        >
          <GridListTile key="subheader" cols={2} style={{ height: 'auto' }}>
            <Subheader
              className={classes.subheader}
              component="div"
            >Assigned Modules
            </Subheader>
          </GridListTile>
          { this.state.modules.map(module =>
            <ModuleItem key={module.id} module={module} />) }
        </GridList>
      </div>
    );
  }
}

ModuleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    margin: '10px 50px 0 50px',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    margin: '10px',
  },
  subheader: {
    width: '100%',
  },
});

export default withStyles(styles)(ModuleList);
