import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import TodoList from './components/TodoList';
import './App.css';


function App() { 
  return (
    <div className="todo-app">
      <p>todo list app react</p>
      <RiCloseCircleLine />
      <TodoList/>
    </div>
  );
}

export default App;
