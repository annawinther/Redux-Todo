import React from 'react';

export default function TodoItem({ todo, deleteTodo, markComplete })  {
    return (
            <div className="todo">
                <div className="value">{todo.value}</div>
                <div>
                    <button className="btn1" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button className="btn2"onClick={() => markComplete(todo.id)}>Mark as Complete</button>
                </div>
            </div>
        
    )
}

