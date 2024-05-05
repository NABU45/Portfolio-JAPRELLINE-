import { useState } from "react";
import todoListContext from "../contexts/TodoListContext";

const TodoListProvider = ({ children }) => {
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

    return (
        <todoListContext.Provider value={{
            todoList,
            setTodoList
        }}>
            {children}
        </todoListContext.Provider>
    );
};

export default TodoListProvider;
