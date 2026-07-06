import { useState } from "react";

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("")
    function createTodo(){
        if (!text.trim()) return 
        const newTodo = {id: Date.now(), text: text};
        setTodos([...todos,newTodo])
        setText("")
    }

    function deleteTodo(id){
        const updatedTodo = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodo)
    }

    
    
    return(

        <div>
            <h1>TODO-LIST</h1>
            <input type="text" placeholder="Enter Task..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={createTodo}>Add</button>
            <ol>
                {todos.map(todo =>
                    <li key={todo.id}>{todo.text} <button onClick={() => deleteTodo (todo.id)}>❌</button></li>
                )}
            </ol>
        </div>

        
    )
}

export default TodoList