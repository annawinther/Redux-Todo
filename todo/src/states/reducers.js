import Todos from './constants/Todos';
import * as types from './actionTypes';

function todoReducer(state = Todos, action) {
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