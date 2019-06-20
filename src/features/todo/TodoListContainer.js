import React, { Component } from 'react';
import TodoList from './ToDoList';

export default class TodoListContainer extends Component {
    state = {
        inputValues: '',
        todos: [],
    };

    setInputValue = (newValue) => {
        this.setState({inputValues: newValue});
    };

    addTodo = () => {
        const newItem = {
            id: this.state.todos.length,
            value: this.state.inputValues,
            isComplete: false,
          }
          const todos = [ ...this.state.todos, newItem ]
          this.setState({
            todos: todos,
            inputValue: ''
          });
    };

    toggleTodoCompleteStatus = (todoId) => {
        const newTodos = this.state.todos.map(todo => 
            todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
        );
        this.setState({todos: newTodos});
    };

    render() {
        console.log(this);
        return (
            <div>
                <TodoList 
                    inputValues = {this.state.inputValues}
                    todos = {this.state.todos}
                    setInputValue = {this.setInputValue}
                    addTodo = {this.addTodo}
                    toggleTodoCompleteStatus = {this.toggleTodoCompleteStatus}
                />
            </div>
        );
    }
}