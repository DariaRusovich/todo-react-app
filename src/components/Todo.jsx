import { useTodos } from "../hooks/useTodos";

export default function Todo({ todo }) {
  const [todos, dispatchTodos] = useTodos();
  const todoStatuses = {
    1: {
      status: "new",
      statusText: "",
    },
    2: {
      status: "process",
      statusText: "(your task in process)",
    },
    3: {
      status: "done",
      statusText: "",
    },
  };
  function actionTodo() {
    if (todo.status < 3) {
      dispatchTodos({ type: "NEXT_STATUS", payload: todo.id });
    }
  }
  function deleteTodo() {
    dispatchTodos({ type: "DELETE", payload: todo.id });
  }
  return (
    <div className={`todo todo-field ${todoStatuses[todo.status].status}`}>
      <input onClick={actionTodo} type="checkbox" />
      <div className="todo-item-wraper">
        <label htmlFor="checkbox" className="todo-body">
          {todo.body} <span>{todoStatuses[todo.status].statusText}</span>
        </label>
        <button onClick={deleteTodo} className="btn-delete-todo">
          ╳
        </button>
      </div>
    </div>
  );
}
