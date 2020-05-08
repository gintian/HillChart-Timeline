import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';

class App extends Component {
  state = {
    persons: [
      { id: 'grre4', name: 'Max', age: 28 },
      { id: 'lhsdlfj', name: 'Manu', age: 29 },
      { id: 'hsdkfh1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  // Use arrow function instead of regular functions 
  // so we can use the [this] keyword to retrive info from the class

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};    

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;
    
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
    
        {persons}

        <Button
        variant="contained"
        color="primary"
        startIcon={<AddBoxIcon />}
        >
        NEW CHART
        </Button>

      </div>
    );
  }
}

export default App;
