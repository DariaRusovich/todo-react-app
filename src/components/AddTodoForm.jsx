
import { useState } from "react";
import { addTodo } from "../api/api";
import { useTodos } from "../hooks/useTodos";


export default function AddTodoForm() {
  const [, dispatchTodos] = useTodos();
  const [body, setBody] = useState(""); 

async function addNewTodo(event) {
  event.preventDefault();
  console.log(body);
  
    const newTodo = {
      body: body,
      createdAt: Date.now(),
      updatedAt: null,
      completed: false,
    };
    console.log(newTodo);
    const [savedTodo, savedTodoError] = await addTodo(newTodo)
    
    if (savedTodo) {
      dispatchTodos({type: 'ADD', payload: savedTodo})
      console.log(savedTodo);
    }
    setBody("") //очищаем форму
  }






  return (
    <form onSubmit={addNewTodo} className="todo-form">
      <input className="checkbox-field" type="checkbox" checked={false} readOnly name="flag" />
      <input
        name="body"
        type="text"
        className="field todo"
        placeholder="Add some task"
        autoComplete="off"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
    </form>
  );
}
