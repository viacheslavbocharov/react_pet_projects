import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([])

  function addTodoHandler(text) {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function toggleTodoHandlet(id) {
    setTodos(todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : { ...todo }
    }))
  }

  function resetTodosHandler() {
    setTodos([])
  }

  function deleteCompletedTodosHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && <TodosActions
        completedTododExist={!!completedTodosCount}
        resetTodos={resetTodosHandler}
        deleteCompletedTodos={deleteCompletedTodosHandler}
      />}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandlet}
      />
      {completedTodosCount > 0 &&
        <h2>{`You have ${completedTodosCount} completed ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>
      }
    </div>
  )
}

export default App;
