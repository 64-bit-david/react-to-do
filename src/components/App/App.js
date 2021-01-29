import './App.css'
import Input from '../Input'
import Button from '../Button';
import TodoList from '../TodoList';





const App = () => {

  return (
    <div className="todo-container">
      <h1 className="header">To Do List</h1>
      <div>
        <Input className='header' />
        <Button />
      </div>
      <TodoList />

    </div>
  )
}

export default App
