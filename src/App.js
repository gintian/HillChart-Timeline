import React, { Component } from 'react';
import './App.css';
import HillChart from './HillChart/HillChart';
import AddChartButton from './AddChartButton/AddChartButton';

class App extends Component {
  state = {
    hillChartList: [

    ],
  }

  addHillChartHandler = () => {
    this.setState({})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <AddChartButton></AddChartButton>
        
        <HillChart></HillChart>
      </div>
    );
  }
}

export default App;
