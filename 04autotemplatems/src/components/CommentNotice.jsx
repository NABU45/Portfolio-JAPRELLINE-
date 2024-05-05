import React, { useContext } from 'react'
import UserCommentContext from '../context/UserCommentContext'
function CommentNoticie(){
    const {comment} = useContext(UserCommentContext)
    if(!comment) return <div>comment please</div>

    return(
        <div>
            comment is {comment.userComment}
        </div>
    )
}
export default CommentNoticie;