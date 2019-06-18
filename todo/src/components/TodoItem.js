import React from 'react';
// import { markComplete } from '../states/actionDispatchers';
// import { connect } from 'react-redux';

export default function TodoItem({ todo, deleteTodo, markComplete })  {
    return (
            <div className="todo">
                <div className="value">{todo.value}</div>

                <div>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => markComplete(todo.id)}>Mark as Complete</button>
                </div>
            </div>
        
    )
}