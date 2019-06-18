import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../states/actionDispatchers';

export class TodoForm extends React.Component {
    valueRef = React.createRef();

    onAddTodo = () => {
        this.props.addTodo(
            this.valueRef.current.value,
        );
    }

    render(){
        return (
            <div>
                <h3>You have {this.props.numTodos} tasks to complete. Add a new task to the list!</h3>
                <div>
                    <em>Todo</em>
                    <input ref={this.valueRef} type="text"/>
                </div>
                <div>
                    <button onClick={this.onAddTodo}>Add Task</button>
                </div>
            </div>
        )
    }
}
function mapStatetoProps(state){
    return {
        numTodos: state.numTodos,
    }
}
export default connect(mapStatetoProps, { addTodo })(TodoForm);