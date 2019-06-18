import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import './App.css';

// STEP 1: FIGURE OUT THE STATE THE APP NEEDS! { todos, markComplete }
// The less state the better. Avoid redundant slices, like slices
// that could be computed from other slices!

export function App() {
  return (
    <div>
      <Todo />
      <TodoForm />
    </div>
  )
}