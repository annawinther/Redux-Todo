import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
// STEP 8: HERE ARE THE NEEDED ACTION DISPATCHERS
import { markComplete, deleteTodo }from '../states/actionDispatchers';

// export default function TodoList(props) {
//     const todos = props.todos.map((todo, index) => (
//         <TodoItem
//             todo={todo}
//             key={index}
//             index={index}
//         />
//     ));
//     return (
//         <ul>
//             { todos }
//         </ul>
//     );
// }


export class TodoList extends React.Component {
    render(){
        const todos = this.props.todos || [];

        return (
            <div>
                <h3>My Todo List</h3>
                <div>
                    {
                        todos.map(todo => (
                            <TodoItem 
                                key={todo.id}
                                // STEP 11: WE GET THE SLICES OF STATE FROM PROPS
                                todos={todos}
                                // STEP 13: WE GET THE ACTION DISPATCHERS FROM PROPS
                                markComplete={this.props.markComplete}
                                deleteTodo={this.props.deleteTodo}
                              />  
                        ))
                    }
                </div>
            </div>     
        )
    }
}

function mapStateToProps(state) {
    // STEP 9: FLESH OUT
    return {
        todos: state.todos,
    };
}

export default connect(
// STEP 10: CONNECT THE COMPONENT PASSING MAP STATE TO PROPS AS 1ST ARG
    mapStateToProps,
// STEP 12: INJECT THE ACTION DISPATCHERS AS 2ND ARG TO CONNECT
   { markComplete, deleteTodo}
)(TodoList);