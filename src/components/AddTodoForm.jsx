


//ОНА ДОЛЖНА ОТКРЫВАТЬСЯ??
//поговорим про мутирующие состояния
import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function AddTodoForm() {
  const [, dispatchTodos] = useTodos();
  const [body, setBody] = useState(""); //строка будет изменяться?

  function addNewTodo(event) {
    event.preventDefault();
    console.log(body);
    setBody("") //очищаем форму
    dispatchTodos({type: 'ADD', payload: body})
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
