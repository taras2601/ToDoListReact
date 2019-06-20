import React, { Component } from 'react';

export default class ToDoListItem extends Component {

    handlerClickTodo = () => {
        this.props.toggleTodoCompleteStatus(this.props.id)
    };

    render() {
        return (
            <li
                onClick={this.handlerClickTodo}
                style={this.props.isComplete ? {textDecoration: 'line-through'} : {}}
            >
                {this.props.value}
            </li>
        );
    }
}