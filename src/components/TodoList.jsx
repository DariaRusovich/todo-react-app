import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";



export default function TodoList() {
    const [todos] = useTodos()
  return <div className="todos">
      {todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)}
  </div>;
}
