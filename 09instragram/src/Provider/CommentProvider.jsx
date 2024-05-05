import { useState } from "react";
import CommentContext from "../context/CommentContext";
import App from "../App";

const CommentProvider = () =>{
    const [comment, setComment] =useState([
        {
           cmt:"awesome",
           compeleted:true, 
        },
        {
            cmt:"sfhaihi",
            compeleted:false,
        },
    ])
    return(
        <>
        <CommentContext.Provider value={{
            comment, setComment
        }}
        >
            <App/>
        </CommentContext.Provider>
        </>
    )
}
export default CommentProvider;