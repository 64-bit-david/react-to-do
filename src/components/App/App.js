import './App.css'
import Input from '../Input'
import Button from '../Button';
import TodoList from '../TodoList';





const App = () => {

  return (
    <div>
      <h1>To Do List</h1>
      <Input className='header' />
      <Button />
      <TodoList />

    </div>
  )
}

export default App
