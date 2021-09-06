


//ОНА ДОЛЖНА ОТКРЫВАТЬСЯ??
import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function AddTodoForm() {
  const [todos, dispatchTodos] = useTodos();
  const [body, setBody] = useState(""); //строка будет изменяться?

  function addNewTodo(event) {
    event.preventDefault();
    console.log(body);
    setBody("") //очищаем форму
    dispatchTodos({type: 'ADD', payload: {body}})
  }

  return (
    <form onSubmit={addNewTodo} className="todo-form">
      <input className="checkbox-field" type="checkbox" name="flag" required />
      <input
        name="body"
        type="text"
        className="field"
        placeholder="Add some task"
        autoComplete="off"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
    </form>
  );
}
