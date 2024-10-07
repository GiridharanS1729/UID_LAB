import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const trimmedText = newTodo.trim();
    if (trimmedText === '') return;
    setTodos([...todos, { id: Date.now(), text: trimmedText, isEditing: false, isCompleted: false }]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleEdit = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText, isEditing: false } : todo));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'pending') return !todo.isCompleted;
    return true;
  });

  const handleKeyPress = (e, id, editText) => {
    if (e.key === 'Enter') updateTodo(id, editText);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className="todo-item">
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => updateTodo(todo.id, e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, todo.id, e.target.value)}
                />
                <button onClick={() => updateTodo(todo.id, todo.text)} className="save-btn">Save</button>
                <button onClick={() => toggleEdit(todo.id)} className="cancel-btn">Cancel</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleComplete(todo.id)}>
                    {todo.isCompleted ? '✔️ ' : '⬜ '}
                    {todo.isCompleted ? <strike>{todo.text}</strike> : todo.text } 
                </span>
                <div className="buttons">
                  <button onClick={() => toggleEdit(todo.id)} className="edit-btn">Edit</button>
                  <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
