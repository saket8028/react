import React from 'react';
import './TodoList.css';

function TodoList({ todos, deleteTodo, toggleCompletion }) {
   
    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        <div className="todo-header">
        <div className="header-status">Status</div>
        <div className="header-name">Name</div>
        <div className="header-description">Description</div>
        
        <div className="header-actions">Actions</div>
      </div>
        {todos.map((todo, index) => (
            
          <div key={index} className={todo.completed ? 'todo-item todo-item-done' : 'todo-item'}>
            <div className="todo-item-status">
              <input type="checkbox" checked={todo.completed} onChange={() => toggleCompletion(index)} />
            </div>
            <div className='todo-item-name'>{todo.name}</div>
            <div className="todo-item-description">{todo.description}</div>
            
            <div className="todo-item-actions">
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
export default TodoList;