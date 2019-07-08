// import todos from '../constants/todos.js';
import {ADD_TODO, MARK_COMPLETED, DELETE_TODO } from './actionTypes';
import uuid from 'uuid';

const todos = [
  {
    id: uuid(),
    value: "Bake Cookies",
    completed: false,
  },
  {
    id: uuid(),
    value: "Walk the dog",
    completed: false,
  },
];

export default function todoReducer(state = todos, action) {
    switch (action.type){
      case(DELETE_TODO):
        return state.filter(todo => todo.id !== action.payload);
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
  