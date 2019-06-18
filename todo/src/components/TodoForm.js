import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../states/actionDispatchers';

export class TodoForm extends React.Component {
    valueRef = React.createRef();

    onAddTodo = () => {
        // debugger;
        this.props.addTodo( this.valueRef.current.value );
    }
    render(){
        return (
            <div>
                <div>
                    <em>Todo </em>
                    <input ref={this.valueRef} type="text"/>
                </div>
                <div>
                    <button onClick={this.onAddTodo}>Add Task</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { addTodo })(TodoForm);