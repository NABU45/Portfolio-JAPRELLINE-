const TodoListItem = ({ todo }) => {
    return (
        <div 
            className={`py-2 shadow-sm flex flex-row justify-between ${todo.completed ? 'line-through text-gray-600' : ''} `}
        >
            <span>{ todo.todo }</span>
            <div>
            <button className="bg-rose-500 rounded-lg p-2 text-white text-sm hover:bg-rose-400">Delete</button>
            </div>
        </div>
    )
}

export default TodoListItem;