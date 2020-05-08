import React, { Component } from 'react';
import './App.css';
import HillChart from './HillChart/HillChart';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <Button
        variant="contained"
        color="primary"
        startIcon={<AddBoxIcon />}
        >
        NEW CHART
        </Button>

        <HillChart></HillChart>
      </div>
    );
  }
}

export default App;
