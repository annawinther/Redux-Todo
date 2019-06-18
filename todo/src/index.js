import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';



// STEP 4: COMBINE REDUCERS
// use combineReducers to create a root reducer off of our reducers
const combinedReducers = combineReducers({ 
    todo: todoReducer, 
   })
 
 // STEP 5: CREATE THE REDUX STORE
 const store = createStore (
   combinedReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 )
 
 // STEP 6: USE THE PROVIDER TO WRAP THE APP PASSING THE STORE AS PROP
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
