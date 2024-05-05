import CommentContext from "../context/CommentContext";

const CommentProviders =({children}) =>{
    const [comment, setComment] =useState([
        {
           cmt:"awesome",
           compeleted:true, 
        },
        {
            cmt:"sfhaihi",
            compeleted:false,
        },
    ]);
    return(
    <>
    <CommentContext.Provider value={{
        comment, setComment
    }}>
        {children}
    </CommentContext.Provider>
    </>)
}