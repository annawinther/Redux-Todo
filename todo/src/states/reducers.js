import Todos from '/Users/Anna/Lambda School/Sprint 9 - Redux/Day 2 - Redux Fundam2/Redux-Todo/todo/src/constants/Todos.js';
import {ADD_TODO, DELETE_TODO, MARK_COMPLETED } from './actionTypes';

export default function todoReducer(state = Todos, action) {
    switch (action.type){
      case(DELETE_TODO):
        return state.filter(todo => todo.is !== action.payload);
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
  