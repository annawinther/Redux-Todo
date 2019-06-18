import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import Todos from './constants/Todos';
import './App.css';

// STEP 1: FIGURE OUT THE STATE THE APP NEEDS! { todos, markComplete }
// The less state the better. Avoid redundant slices, like slices
// that could be computed from other slices!

// STEP 2: COME UP WITH ACTION TYPES
const ADD_TODO = 'ADD_TODO';
const MARK_COMPLETED = 'MARK_COMPLETED';
const DELETE_TODO = 'DELETE_TODO';

// STEP 3: BUILD ONE REDUCER PER STATE SLICE
function todoReducer(state = Todos, action) {
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

// function markCompleteReducer(state = null, action){
//   switch(action.type){
//     case(MARK_COMPLETED):
//       return
//   }
// }

// STEP 4: COMBINE REDUCERS
// use combineReducers to create a root reducer off of our reducers
const combinedReducers = combineReducers({ 
   todo: todoReducer, 
  })

// STEP 5: CREATE THE REDUX STORE
const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

// STEP 6: USE THE PROVIDER TO WRAP THE APP PASSING THE STORE AS PROP








