import React from 'react';

export default class TodoItem extends React.Component {
    render() {
        const {
            todo,
            deleteTodo,
            markComplete,
         } = this.state;

        return (
            <div className="todolist">
                <div className="value">{todo.value}</div>

                <div>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => markComplete(todo.id)}>Mark as Complete</button>
                </div>
            </div>
        )
    }
}