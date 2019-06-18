import todos from '../constants/todos.js';
import {ADD_TODO, MARK_COMPLETED } from './actionTypes';

export default function todoReducer(state = todos, action) {
  console.log(todos);
    switch (action.type){
      // case(DELETE_TODO):
      //   return state.filter(todo => todo.is !== action.payload);
      case(ADD_TODO):
       return [...state, action.payload];
      case(MARK_COMPLETED):
        return state.map(todo => {
          if (todo.id === action.payload) {
            return {...todo, completed: true};
          }
          return todo;
        });
        default:
          return state;
    }
  }
  