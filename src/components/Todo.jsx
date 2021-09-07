import { useTodos } from "../hooks/useTodos";

export default function Todo({ todo }) {
  const [todos, dispatchTodos] = useTodos();
  const todoStatuses = {
    1: "new",
    2: "process",
    3: "done",
  };
  function actionTodo() {
      if(todo.status < 3){
          dispatchTodos({type: "NEXT_STATUS", payload: todo.id})
      }
  }
  return (
    <div className={`todo todo-field ${todoStatuses[todo.status]}`}>
      <input onClick={actionTodo} type="checkbox" />
      <div className="todo-item-wraper">
        <label htmlFor="checkbox" className="todo-body">
          {todo.body}
        </label>
        <button>╳</button>
      </div>
    </div>
  );
}
