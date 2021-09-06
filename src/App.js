import AddTodoForm from "./components/AddTodoForm";
import { useTodos } from "./hooks/useTodos";






function App() {
  const [num, dispatchNum] = useTodos();
  return (
    
    <div className="App">
      <div className="section">
      <div className="container">
      <h1 className="main-title">Todo</h1>

        <AddTodoForm></AddTodoForm>
      </div>
      </div>
    </div>
  );
}

export default App;

/* <h2>Context number is {num} </h2>
      <button onClick={() => dispatchNum({type: 'INCREMENT'})}> Increment context by 1</button>
      <button onClick={() => dispatchNum({type: 'DECREMENT'})}> Decrement context by -1</button>
      <button onClick={() => dispatchNum({type: 'INCREMENT_AMOUNT', payload: 10})}> Increment context by 10</button>
      <button onClick={() => dispatchNum({type: 'DECREMENT_AMOUNT', payload: 10})}> Decrement context by -10</button> */
