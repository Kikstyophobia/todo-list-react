import React from 'react';
import TodoList from './components/TodoList';
import './App.css';


function App() { 
  return (
    <div className="todo-app">
      <h1>To Do Or Not To Do?</h1>
      <TodoList/>
    </div>
  );
}

export default App;
