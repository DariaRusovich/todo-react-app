import { useState } from "react";
import { useTodos } from "../hooks/useTodos";




export default function AddTodoForm() {

  const [todos, dispatchTodos] = useTodos()
  const [body, setBody] = useState()
 

  function addNewTodo(event) {
    event.preventDefault()
  }



  return (
    <form onSubmit={addNewTodo} className="todo-form">
          <input
          className="checkbox-field"
          type="checkbox"
          name="flag"
          required
        />
      <input name="body" type="text" className="field" placeholder="Some task"/>
   
        
      
    </form>
  );
}
