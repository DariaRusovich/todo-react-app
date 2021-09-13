import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, dispatchTodos] = useTodos();
  const [todosCopy, setTodosCopy] = useState([]);
  const [filterType, setFilterType] = useState(null);
  useEffect(() => {
    setTodosCopy(todos);
  }, [todos]);
  useEffect(() => {
    filterTodo();
  }, [filterType, todos]);

  function filterTodo() {
    if (filterType !== null) {
      setTodosCopy([...todos].filter((todo) => todo.completed === filterType));
    } else {
      setTodosCopy(todos);
    }
  }
  function clearCompleted() {
    dispatchTodos({ type: "DELETE_COMPLETED" });
    setFilterType(null);
  }

  return (
    <div className="todos">
      {todosCopy.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
      {todos.length > 0 && (
        <div className="todo-footer">
          <span className="count-items">
            {todos.filter((todo) => !todo.completed).length} items left
          </span>
          <div className="btn-filter-group">
            <button
              onClick={() => setFilterType(null)}
              className={`btn-filter ${filterType === null ? "active" : ""}`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType(false)}
              className={`btn-filter ${filterType === false ? "active" : ""}`}
            >
              Active
            </button>
            <button
              onClick={() => setFilterType(true)}
              className={`btn-filter ${filterType === true ? "active" : ""}`}
            >
              Completed
            </button>
          </div>
          <button onClick={clearCompleted} className="btn-clear-all">
            Clear completed
          </button>
        </div>
      )}
    </div>
  );
}

//     const [filtered, setFiltered] = useState(todos)
//     console.log(filtered);
//     function todoFilter(status) {
//       if (status === 'all'){
//         setFiltered(todos)
//       }
//       else{
//         let newTodo = [...todos].filter(item => item.status === status)
//         setFiltered(newTodo)
//       }
//     }
