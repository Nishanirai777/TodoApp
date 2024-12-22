import { useState } from "react";




export default function TodoList() {
    let [Todos , setTodos]= useState(["sample  Task"]);
    let [newTodo, setnewTodo]=useState("");
    let addNewTask=()=> {
        setTodos([...Todos ,newTodo]);
        setnewTodo("");
    };
    let updateTodoValue =(event)=>{
        setnewTodo(event.target.value);
    }
    return (
        <div>
            <input placeholder="Ass a Task"  value={newTodo}  onChange={updateTodoValue} style={{backgroundColor:"black", color:"red", border:"green"}}></input>
            <br></br>
            <button onClick={addNewTask} style={{backgroundColor: "green" }}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>

<ul>
    {Todos.map((Todo) =>(
         <li>
            {Todo}
        </li>
))}
    </ul>   
         </div>
    );
}