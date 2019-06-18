import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
// STEP 8: HERE ARE THE NEEDED ACTION DISPATCHERS
import * as actionDispatchers from '../states/actionDispatchers';

export class Todos extends React.Component {
    render(){
        const todos = this.props.todos || [];

        return (
            <div>
                <h3>My Todo List</h3>
                <div>
                    {
                        todos.map(todo => (
                            <Todo 
                                key={todo.id}
                                // STEP 11: WE GET THE SLICES OF STATE FROM PROPS
                                todo={todo}
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
    actionDispatchers,
)(Todos);