import { useState } from 'react';
import SingleTodo from './SingleTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Take dog for walk',
      date: 'Monday, 4pm'
    },
    {
      text: 'Doctors',
      date: 'Tuesday, 3pm'
    },
    {
      text: 'Work Meetup',
      date: 'Monday, 6pm'
    }
  ])
  return (
    <div>

    </div>
  )
}

export default TodoList
