import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { createMuiTheme } from 'material-ui/styles'; 
import Dashboard from './dashboard/Dashboard';
import Module from './module/Module';
import './App.css';


class App extends Component {

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#fff',
        },
        secondary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
      },
      typography: {
        fontFamily: '"Proxima Nova", Verdana, "KaiTi", "楷体", "STKaiti", "华文楷体"', 
      },
    });

    return (
      <MuiThemeProvider theme={theme} >
        <Router>
          <div className="App">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/module/:moduleId" component={Module}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
