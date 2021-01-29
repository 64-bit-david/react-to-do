import { useState } from 'react';


const Input = ({ addToDo }) => {

  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(inputText);

  }

  return (
      <form className="form" onSubmit={handleSubmit}>
        <label>Enter To Do</label>
        <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText}/>
        <input type="submit" value="Add To List" className="btn"/>
      </form>
  )
}

export default Input
