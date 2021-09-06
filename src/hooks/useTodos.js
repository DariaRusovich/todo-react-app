import { useReducer, useEffect, useContext, createContext } from "react";

const inisialState = []; //initial value which given Todos to all components

const TodosContext = createContext(inisialState) 
//TodosContext consists of two properties which are 
//special components, one of them is a provider
export function useTodos() {
    return useContext(TodosContext)
}
//for using Todos from array [state, setState] in each component 
//we have to use useContext in which transfering object with 
//context, in order to not to do it every time, we need create custom hook
export function TodosProvider({children}) {
    const [state, dispatch] = useReducer(reducer, inisialState);
    useEffect(() => {
        console.log('todos context is', state);
    }, [state])
    return <TodosContext.Provider value={[state, dispatch]}>{children}</TodosContext.Provider>
}
//The TodosProvider() function is a wrapper function which gets all child elements, components
//also created useState to get state Todos so that it can change (not simple Todos)
function reducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            const newTodo = {
                id: Date.now(),
                body: action.payload.body,
                createdAt: Date.now(),
                updatedAt: null,
                status: 1
            }
            return [...state, newTodo]
        }
        default:
        throw new Error(`Wrong actiot type! (${action.type})`);
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
       