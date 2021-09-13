import { useTodos } from "../hooks/useTodos";

export default function Todo({ todo }) {
  const [, dispatchTodos] = useTodos();
  
  function actionTodo() {
    dispatchTodos({ type: "SET_COMPLETED", payload: todo.id });
  }
  function deleteTodo() {
    dispatchTodos({ type: "DELETE", payload: todo.id });
  }
  return (
    <>
    {todo && <div className={`todo todo-field ${todo.completed ? 'completed' : ''}`}>
      <input onChange={actionTodo} name="action" type="checkbox" checked={todo.completed} disabled={todo.completed} id={todo.id} />
      <div className="todo-item-wraper">
        <label htmlFor={todo.id} className="todo-body">
          {todo.body}
        </label>
        <button onClick={deleteTodo} className="btn-delete-todo">
          ╳
        </button>
      </div>
    </div>}
    </>
  );
}
