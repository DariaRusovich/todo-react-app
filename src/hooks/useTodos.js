import { useReducer, useEffect, useContext, createContext } from "react";

if (!localStorage.todos) {
  localStorage.todos = JSON.stringify([]);
}

const inisialState = JSON.parse(localStorage.todos); //initial value which given Todos to all components

const TodosContext = createContext(inisialState);
//TodosContext consists of two properties which are
//special components, one of them is a provider
export function useTodos() {
  return useContext(TodosContext);
}
//for using Todos from array [state, setState] in each component
//we have to use useContext in which transfering object with
//context, in order to not to do it every time, we need create custom hook
export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, inisialState);
  useEffect(() => {
    console.log("todos context is", state);
    localStorage.todos = JSON.stringify(state);
  }, [state]);

  return (
    <TodosContext.Provider value={[state, dispatch]}>
      {children}
    </TodosContext.Provider>
  );
}
//The TodosProvider() function is a wrapper function which gets all child elements, components
//also created useState to get state Todos so that it can change (not simple Todos)
function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "SET_COMPLETED": {
      const todoIdx = state.findIndex((todo) => todo.id === action.payload);
      const todo = { ...state[todoIdx] };
      todo.completed = true;
      todo.updatedAt = Date.now();
      const newState = [...state];
      newState.splice(todoIdx, 1, todo);
      return newState;
    }
    case "DELETE": {
      console.log(action.payload);
      return state.filter(todo => todo.id !== action.payload);
    }
    case "DELETE_COMPLETED": {
      return state.filter(todo => !todo.completed);
    }
    default:
      throw new Error(`Wrong action type! (${action.type})`);
  }
}

// case 'INCREMENT': {
//     return state + 1
// }
// case 'DECREMENT': {
//     return state - 1
// }
// case 'INCREMENT_AMOUNT': {
//     return state + action.payload
// }
// case 'DECREMENT_AMOUNT': {
//     return state - action.payload
// }
