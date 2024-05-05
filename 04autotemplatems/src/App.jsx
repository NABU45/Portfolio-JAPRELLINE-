import CommentClon from "./components/CommentClon";
import CommentNoticie from "./components/CommentNotice";
import UserCommentProvider from "./context/UserCommentProvider";

function App(){
  return(
    <>
    <UserCommentProvider>
    <h2>hello japrel</h2>
    <CommentClon/>
    <CommentNoticie/>
    </UserCommentProvider>
    </>
  );
}
export default App;