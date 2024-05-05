import { createContext } from "react";
import ChildA from "./assets/ChildA";

const data=createContext
function App(){
  const name="nabin";
return(
  <>
  <data.provider value={name}>
    <ChildA />
  </data.provider>
  </>
);
}
export default App;
export {data};