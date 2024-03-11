import React, { useState } from 'react';
import TodoList from './TodoList';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '', completed: false });

  const addTodo = () => {
    if (newTodo.name.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo({ name: '', description: '', completed: false });
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  return (
    <div className="todo-app">
      <h1>My Todo</h1>
      <div className="add-todo">
        <input type="text" name="name" placeholder="Todo Name" value={newTodo.name} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Todo Description" value={newTodo.description} onChange={handleInputChange} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompletion={toggleCompletion} />
    </div>
  );
}

export default TodoApp;