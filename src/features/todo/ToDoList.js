import React, { Component } from 'react';
import ToDoListItem from './ToDoListItem';

export default class ToDoList extends Component {

    handlerChangeInput = (event) => {
        this.props.setInputValue(event.target.value);
    };

    handlerClickButtonAdd = () => {
        this.props.addTodo();
    };

    render() {
        return (
            <div>
                <input onChange={this.handlerChangeInput} value={this.props.value} />
                <button type='submit' onClick={this.handlerClickButtonAdd}>Save</button>
                <ul>{this.props.todos.map(item =>
                    <ToDoListItem 
                        key={item.id}
                        id={item.id}
                        value={item.value}
                        isComplete={item.isComplete}
                        toggleTodoCompleteStatus={this.props.toggleTodoCompleteStatus}        
                    />
                )}</ul>
            </div>
        );
    }
}