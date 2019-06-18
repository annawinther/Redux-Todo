import uuid from 'uuid';
import {MARK_COMPLETED, ADD_TODO } from './actionTypes';

// STEP 7: CREATE ACTION DISPATCHER FUNCTIONS
// action dispatchers can be shared across all components,
// and saves components from having to use props.dispatch explicitly

// export function deleteTodo(id) {
//     return {
//         type: types.DELETE_TODO,
//         payload: id,
//     }
// }
export function addTodo(todo) {
    return{
        type: ADD_TODO,
        payload: todo
    };
};
export function markComplete(id) {
    return {
        type: MARK_COMPLETED,
        payload: id,
    };
};

// export function addTodo(value) {
//     return {
//         type: ADD_TODO,
//         payload: {
//             value,
//             id: uuid(),
//             completed: false,
//         }
//     }
// }