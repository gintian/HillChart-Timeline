import React, { Component } from 'react';
import './App.css';
import HillChartCard from './HillChart/HillChartCard';
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
        <HillChartCard></HillChartCard>
      </div>
    );
  }
}

export default App;
