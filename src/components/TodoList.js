import { useState } from 'react';
import SingleTodo from './SingleTodo';

const TodoList = ({ todos, onDelete, onUpdate }) => {

  return (
    <div className="todo-list">
      {todos.map(todo => {
        return <SingleTodo todo={todo} key={todo.id} onDelete={onDelete} onUpdate={onUpdate} />
      })}
    </div>
  )
}

export default TodoList
