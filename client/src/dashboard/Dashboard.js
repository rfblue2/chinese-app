import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ModuleList from './ModuleList';

const Dashboard = () => (
  <div className="Dashboard">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" component="h1" color="inherit">
          Dashboard (仪表板)
        </Typography>
      </Toolbar>
    </AppBar>
    <ModuleList />
  </div>
);

export default Dashboard;
