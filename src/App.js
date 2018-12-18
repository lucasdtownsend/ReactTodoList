import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: ["First", "Second", "Third"],
      currentText: ''
    };
  }
  setText = (e) => {
    const newValue = e.target.value;
    this.setState({currentText: newValue})
  }
  addTodo = () => {
    const newTodo = this.state.currentText;
    // The ... adds everything from the array that follows, then you can add more to the new array
    const newTodos = [...this.state.todos, newTodo]
    this.setState({todos: newTodos, currentText: ''})
  }
  render() {
    // Use this line so you don't have to write this.state for everything.
    const {currentText, todos} = this.state;
    return (
      <Todos currentText={currentText}
        setText={this.setText}
        addTodo={this.addTodo}
        todos={todos}  />
    );
  }
}

export default App;
