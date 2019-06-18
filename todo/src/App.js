import React from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

import './App.css';

// STEP 1: FIGURE OUT THE STATE THE APP NEEDS! { todos, markComplete }
// The less state the better. Avoid redundant slices, like slices
// that could be computed from other slices!

export default function App() {
  return (
    <div>
      <Todos />
      <TodoForm />
    </div>
  )
}