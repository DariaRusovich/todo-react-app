


export default function Todo({todo}){
    return(
        <div className="todo todo-field">
            <input type="checkbox" />
             <div className="todo-item-wraper">
             <label htmlFor="checkbox" className="todo-body">{todo.body}</label>
             <span>╳</span>
             </div>
        </div>
    )
}