import { useState } from 'react';
import SingleTodo from './SingleTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Take dog for walk',
      date: 'Monday, 4pm'
    },
    {
      id: 2,
      text: 'Doctors',
      date: 'Tuesday, 3pm'
    },
    {
      id: 3,
      text: 'Work Meetup',
      date: 'Monday, 6pm'
    },
    {
      id: 4,
      text: 'Deworm the cat',
      date: 'Friday, 6pm'
    }
  ]);

  return (
    <div className="todo-list">
      {todos.map(todo => {
        return <SingleTodo todo={todo} key={todo.id} />
      })}
    </div>
  )
}

export default TodoList
