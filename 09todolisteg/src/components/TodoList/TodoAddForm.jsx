import { useState } from "react";

const TodoAddForm = ({ submitHandler }) => {
    const [todoText, setTodoText] = useState("");
    const handleTodoTextChange = (e) => setTodoText(e.target.value);

    const handleSubmit = (e) => {
        submitHandler(e, todoText);
        setTodoText("");
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-row pt-4 gap-1">
            <input onChange={handleTodoTextChange} value={todoText} type="text" className="w-3/4 border-2 rounded-lg px-2 focus:border-rose-500 outline-none" />
            <button className="bg-green-600 text-white w-1/4 p-2 rounded-lg font-semibold hover:bg-green-500">Add Todo</button>
        </form>
    );
}

export default TodoAddForm;