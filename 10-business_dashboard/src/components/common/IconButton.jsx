const IconButton = ({
    icon: Icon,
    color,
    clickHandler,
}) => {
    return (
        <button onClick={clickHandler} className={`rounded-xl border-gray-300 border-2 p-3 hover:border-${color} transition-all`}>
            <Icon className={`text-${color}`} size={20} />
        </button>
    )
}

export default IconButton;