import { React, useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Quotes from "./Quotes";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  // add task to list
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  // update task on list
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  // delete task from list
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div>
      <div>
      <Quotes/>
      </div>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )

}