import { useContext } from "react";
import todoListContext from "../../contexts/TodoListContext";

const SideMenuHomeButton = () => {
    const { todoList } = useContext(todoListContext);
    
    return (
        <div className='w-full p-2 cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between'>
            <span>Home</span>
            <div className='h-[20px] w-[25px] bg-rose-500 rounded-lg text-sm text-white text-center'>{todoList.length}</div>
        </div> 
    )
}

export default SideMenuHomeButton;