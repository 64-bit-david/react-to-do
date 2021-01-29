import { useState } from 'react';

import './App.css'
import Input from '../Input'
import TodoList from '../TodoList';






const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Take dog for walk',
      complete: false
    },
    {
      id: 2,
      text: 'Doctors',
      complete: false

    },
    {
      id: 3,
      text: 'Work Meetup',
      complete: false

    },
    {
      id: 4,
      text: 'Deworm the cat',
      complete: false

    }
  ]);

  const addTodo = (textInput) => {
    setTodos([...todos, { id: Math.floor(Math.random() * 10000), text: textInput, complete: false }])
  }

  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))

  }

  const completeTodo = (id) => {
    const todoToUpdate = todos.findIndex(todo => todo.id === id);
    const updatedTodoList = [...todos];
    updatedTodoList[todoToUpdate].complete = !updatedTodoList[todoToUpdate].complete;
    setTodos(updatedTodoList);
  }




  return (
    <div className="todo-container">
      <h1 className="header">To Do List</h1>
      <div>
        <Input className='header' addToDo={addTodo} />
      </div>
      <TodoList todos={todos} onDelete={deleteToDo} onUpdate={completeTodo} />

    </div>
  )
}

export default App
