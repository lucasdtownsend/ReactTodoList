import React, { Component } from 'react';
import TodoList from './TodoList';
import AddBar from './AddBar';

class Todos extends Component {
    render() {
        const {currentText, setText, addTodo, todos} = this.props;
        return (
            <div>  
            <AddBar 
            currentText={currentText}
            // setText and addTodo were functions (not variables) so they get this.
            // Until it was moved here as props, now they're just local variables.
            setText={setText}
            addTodo={addTodo} 
            />
            <TodoList todos={todos} />
            </div>
        );
    }
}

export default Todos;