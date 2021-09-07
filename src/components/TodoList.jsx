import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";

export default function TodoList() {
  const [todos] = useTodos();
  const [todosCopy, settodosCopy] = useState([]);
  const [filterType, setfilterType] = useState(null);
  useEffect(() => {
    settodosCopy(todos);
  }, [todos]);
  useEffect(() => {
    console.log(filterType);
    if(filterType){
      const [key, order] = filterType.split('/')
      settodosCopy(prev => [...prev].sort((a,b) => (a[key] - b[key]) * order))
    }
  }, [filterType, todos]);

  return (
    <div className="todos">
      {todosCopy.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
      {todosCopy.length > 0 && (
        <div className="todo-footer">
          <span className="count-items">{todos.length} items left</span>
          <div className="btn-filter-group">
            <button /*onClick={() => 'all'}*/ className="btn-filter">
              All
            </button>
            <button onClick={() => setfilterType('status/1')} className="btn-filter">
              Active
            </button>
            <button onClick={() => setfilterType('status/-1')} className="btn-filter">
              Completed
            </button>
          </div>
          <button className="btn-clear-all">Clear completed</button>
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
