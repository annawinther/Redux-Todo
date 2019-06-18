import Todos from '/Users/Anna/Lambda School/Sprint 9 - Redux/Day 2 - Redux Fundam2/Redux-Todo/todo/src/constants/Todos.js';
import * as types from './actionTypes';

export default function todoReducer(state = Todos, action) {
    switch (action.type){
      case(types.DELETE_TODO):
        return state.filter(todo => todo.is !== action.payload);
      case(types.ADD_TODO):
       return [...state, action.payload];
      case(types.MARK_COMPLETED):
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
  
  // function markCompleteReducer(state = null, action){
  //   switch(action.type){
  //     case(MARK_COMPLETED):
  //       return
  //   }
  // }