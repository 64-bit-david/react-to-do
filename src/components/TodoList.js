import { useState } from 'react';
import SingleTodo from './SingleTodo';

const TodoList = ({ todos, onDelete }) => {

  return (
    <div className="todo-list">
      {todos.map(todo => {
        return <SingleTodo todo={todo} key={todo.id} onDelete={onDelete} />
      })}
    </div>
  )
}

export default TodoList
