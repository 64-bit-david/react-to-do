import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';


const SingleTodo = ({ todo, onDelete, onUpdate }) => {



  return (
    <div className="single-todo">
      <div className="todo-text-container">
        <h1
          className={`todo-text ${todo.complete ? 'complete' : ''}`}
        >{todo.text}</h1>
        <div className="todo-icons">
          <FaCheckCircle className='check-icon' onClick={() => onUpdate(todo.id)} />
          <FaTimesCircle className="delete-icon" onClick={() => onDelete(todo.id)} />
        </div>
      </div>
      <p className="todo-date">{todo.date}</p>
    </div>
  )
}

export default SingleTodo
