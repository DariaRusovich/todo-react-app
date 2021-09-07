import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";



export default function TodoList() {
    const [todos] = useTodos()
  return <div className="todos">
     {todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)} 
     {todos.length > 0 && 
     <div className="todo-footer">
       <span className="count-items">{todos.length} items left</span>
       <div className="btn-filter-group">
         <button className="btn-filter" type>All</button>
         <button className="btn-filter" type>Active</button>
         <button className="btn-filter" type>Completed</button>
       </div>
       <button className="btn-clear-all">Clear completed</button>
       </div>}
  </div>;
}
