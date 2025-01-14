import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
// STEP 8: HERE ARE THE NEEDED ACTION DISPATCHERS
import { addTodo, markComplete, deleteTodo } from '../states/actionDispatchers';

 class TodoList extends React.Component {
    valueRef = React.createRef();

    onAddTodo = () => {
        // debugger;
        this.props.addTodo( 
            this.valueRef.current.value 
        );
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <h3>My Todo List</h3>
                <div>
                    <div>
                        <em>Todo </em>
                        <input ref={this.valueRef} type="text"/>
                    </div>
                    <div>
                        <button onClick={this.onAddTodo}>Add Task</button>
                    </div>
                </div>
                <div>
                    {
                        this.props.todos.map(todo => 
                            <TodoItem 
                                key={todo.id}
                                // STEP 11: WE GET THE SLICES OF STATE FROM PROPS
                                todo={todo}
                                // STEP 13: WE GET THE ACTION DISPATCHERS FROM PROPS
                                markComplete={this.props.markComplete}
                                deleteTodo={this.props.deleteTodo}
                              />  
                        )
                    }
                </div>

            </div>     
        )
    }
}

const mapStateToProps = (state) => {
    // STEP 9: FLESH OUT
    return {
        todos: state.todos,
    };
}

export default connect(
// STEP 10: CONNECT THE COMPONENT PASSING MAP STATE TO PROPS AS 1ST ARG
    mapStateToProps,
// STEP 12: INJECT THE ACTION DISPATCHERS AS 2ND ARG TO CONNECT
   { addTodo, markComplete, deleteTodo }
)(TodoList);