import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';


const SingleTodo = ({ todo }) => {
  return (
    <div className="single-todo">
      <div className="todo-text-container">
        <h1 className="todo-text">{todo.text}</h1>
        <div className="todo-icons">
          <FaCheckCircle className='check-icon' />
          <FaTimesCircle className="delete-icon" />
        </div>
      </div>
      <p className="todo-date">{todo.date}</p>
    </div>
  )
}

export default SingleTodo
