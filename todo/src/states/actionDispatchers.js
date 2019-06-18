import uuid from 'uuid';
import * as types from './actionTypes';

// STEP 7: CREATE ACTION DISPATCHER FUNCTIONS
// action dispatchers can be shared across all components,
// and saves components from having to use props.dispatch explicitly

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        payload: id,
    }
}

export function markComplete(id) {
    return {
        type: types.MARK_COMPLETED,
        payload: id,
    }
}

export function addTodo(value) {
    return {
        type: types.ADD_TODO,
        payload: {
            value,
            id: uuid(),
            completed: false,
        }
    }
}