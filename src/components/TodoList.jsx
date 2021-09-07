import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";

export default function TodoList() {
  const [todos] = useTodos();

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

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
      {todos.length > 0 && (
        <div className="todo-footer">
          <span className="count-items">{todos.length} items left</span>
          <div className="btn-filter-group">
            <button /*onClick={() => 'all'}*/ className="btn-filter">
              All
            </button>
            <button /*onClick={() => todoFilter(2)}*/ className="btn-filter">
              Active
            </button>
            <button /*onClick={() => todoFilter(3)}*/ className="btn-filter">
              Completed
            </button>
          </div>
          <button className="btn-clear-all">Clear completed</button>
        </div>
      )}
    </div>
  );
}
