import React,{useState, useContext} from 'react'
 import UserCommentContext from '../context/UserCommentContext'
 function CommentClon(){
    const [userComment, setUserComment]=useState('');

    const {setComment} =useContext(UserCommentContext)

    const handleCommentn=(e)=>{
        e.preventDefault();
        setComment({userComment})
    }
    return(
        <div>
            <input type="text" value={userComment} onChange={(e) => setUserComment(e.target.value)}className='bg-slate-300' onClick={handleCommentn} />
        </div>
    )
 }
 export default CommentClon;