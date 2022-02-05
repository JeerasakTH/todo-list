import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  
  const [todos, setTodos] = useState([{
    id: new Date().getTime(),
    todo: "First Todo",
    complete: false
  }])
  const [addTodo, setAddtodo] = useState({
      id: new Date().getTime(),
      todo: '',
      complete: false
  })

  useEffect(() => {
    const tempGet = localStorage.getItem('todos')
    const loadedTodos = JSON.parse(tempGet)
  
    if (loadedTodos) {
      setTodos(loadedTodos)
    } else {
      return [];
    }
  }, [])

  useEffect(() => {
    const tempSet = JSON.stringify(todos)
    localStorage.setItem('todos', tempSet)
  }, [todos])

  const handleSubmit = e => {
      e.preventDefault();
      setTodos((prev) => [...prev, {
          id: new Date().getTime(),
          todo: addTodo.todo,
          complete: false
      }])

      e.target.reset();
  }

  const handleChange = e => {
      setAddtodo( prev => {
          return { ...prev,[e.target.name]: e.target.value}
        })
  }

  const handleDelete = id => {
      setTodos((todo) => todo.filter(i => i.id !== id))
  }

  const toggleComplete = id => {
      const toggle = [...todos].map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
      setTodos(toggle)
  }

  return (
    <div className="App mt-5 shadow rounded p-5" style={{width: '60%', margin: '0 auto'}}>
      <h1>Todo List</h1>
      <AddTodoForm todos={todos} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleDelete={handleDelete} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
