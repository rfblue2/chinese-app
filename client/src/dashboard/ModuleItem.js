import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { GridListTile } from 'material-ui/GridList';
import Card, { CardContent } from 'material-ui/Card';

class ModuleItem extends Component {
  state={ redirect: false };

  handleClick(id) {
    this.setState({ redirect: true });
  }

  render() {
    const { name, id } = this.props.module;
    const { classes } = this.props;
    if (this.state.redirect) {
      return <Redirect push to={`/module/${id}`} />;
    }
    return (
      <GridListTile
        onClick={ () => this.handleClick(id) }
        className={ classes.tile }
      >
        <Card 
          className={classes.card}
        >
          <CardContent>
            <Typography variant="headline" component="h2">
              { name }
            </Typography>
          </CardContent>
        </Card>
      </GridListTile>
    );
  }
}

const styles = {
  card: {
    margin: "5px",
    transition: "all 0.5s ease",
    '&:hover': {
      backgroundColor: "#dddddd",
      cursor: "pointer",
    },
    '&:active': {
      backgroundColor: "#aaaaaa",
      transition: "none",
    },
  },
  tile: {
    width: "50%",
    padding: "10px",
  },
};

export default withStyles(styles)(ModuleItem);
