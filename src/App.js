import React from 'react';
import TodoList from './components/TodoList';
import './App.css';


function App() { 
  return (
    <div className="todo-app">
      <h1>What's the plan today?</h1>
      <TodoList/>
    </div>
  );
}

export default App;
