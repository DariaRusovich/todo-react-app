


export default function Todo({todo}){
    const todoStatuses = {
        1: "new",
        2: "process",
        3: "done"
    }
    return(
        <div className={`todo todo-field ${todoStatuses[todo.status]}`} >
            <input type="checkbox" />
             <div className="todo-item-wraper">
             <label htmlFor="checkbox" className="todo-body">{todo.body}</label>
             <span>╳</span>
             </div>
        </div>
    )
}