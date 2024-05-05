import { useContext } from "react";
import CommentContext from "../context/CommentContext";
const CommentButton=()=>{
    const {comment} = useContext(CommentContext);
    
    return(
        <div className='w-full p-2 cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between'>
            <span>Notification</span>
            <div className='h-[20px] w-[25px] bg-rose-500 rounded-lg text-sm text-white text-center'>{comment.length}</div>
        </div> 
    )
}
export default CommentButton;