import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
    return (
        <div className='divide-y mt-4'>
            {
            todoList.map(todo => <TodoListItem todo={todo} />)
            }
        </div>
    );
}

export default TodoList;