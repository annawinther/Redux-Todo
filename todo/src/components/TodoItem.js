import React from 'react';
import { markComplete } from '../states/actionDispatchers';
import { connect } from 'react-redux';

class TodoItem extends React.Component{

    markComplete = () => {
        this.props.markComplete(this.props.id)
    };
    
    render() {
        return (
            <li>
                <input
                    type='checkbox'
                    onChange={this.markComplete.bind(this)}
                />
                {this.props.todo.value}
            </li>
        )
    }
}
export default connect(null, { markComplete })(TodoItem);

// export default class TodoItem extends React.Component {
//     render() {
//         const {
//             todo,
//             deleteTodo,
//             markComplete,
//          } = this.state;

//         return (
//             <div className="todolist">
//                 <div className="value">{todo.value}</div>

//                 <div>
//                     <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//                     <button onClick={() => markComplete(todo.id)}>Mark as Complete</button>
//                 </div>
//             </div>
//         )
//     }
// }