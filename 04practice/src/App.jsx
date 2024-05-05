// // App.js

import { useState } from "react";

// import { useState } from "react";
// import "./App.css";

// function App() {
//     const [Count, setCount] = useState(0);
//     const [, forceRender] = useState(undefined);

//     const handleClick = () => {
//         forceRender((prev) => !prev);
//     };

//     console.log("App.js rendered");
//     return (
//         <div className="App">
//             <h1 className="geeks">GeeksforGeeks</h1>
//             <button onClick={() => setCount(Count + 1)}>
//                 Increase
//             </button>

//             <p>Count:{Count}</p>

//             <button onClick={() => handleClick()}>
//                 Force Update
//             </button>
//         </div>
//     );
// }

// export default App;
 function App(){
  const[count , setCount]=useState(0)
  const handleAddEvent = () =>{
    setCount(count+1);

  } 
 return(
    <>
    <button onClick={handleAddEvent}>Add by 1:  {count}</button>
    </>
  );
 }
 export default App;