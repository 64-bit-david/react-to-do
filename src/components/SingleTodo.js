const SingleTodo = ({ todo }) => {


  return (
    <div>
      <h1>{todo.text}</h1>
      <p>{todo.date}</p>
    </div>
  )
}

export default SingleTodo
