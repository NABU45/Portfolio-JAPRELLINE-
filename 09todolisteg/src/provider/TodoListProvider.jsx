import { useState } from "react";
import todoListContext from "../context/TodoListContext";
import App from "../App";

const TodoListProvider =()=>{
    const [todoList, setTodoList] = useState([
        {
          todo: "Do the dishes",
          completed: true,
        },
        {
          todo: "Complete homework",
          completed: false,
        },
      ]);

    return(
        <todoListContext.Provider  value={{
            todoList,
            setTodoList
        }}>
            <App/>
         </todoListContext.Provider>
    )

}
export default TodoListProvider