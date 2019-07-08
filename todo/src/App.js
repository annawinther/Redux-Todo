import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

// STEP 1: FIGURE OUT THE STATE THE APP NEEDS! { todos, markComplete }
// The less state the better. Avoid redundant slices, like slices
// that could be computed from other slices!

export default function App() {
    return (
      <div className="todo-app">
        <TodoList />
      </div>
    );
}