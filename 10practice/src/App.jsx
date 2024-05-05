import { useState } from "react"
import BusinessAddModal from "./components/AddBusinessModel";


function App() {

  const [businessAddModal, setBusinessAddModal] = useState(false);
 

  return (
    <div className="w-screen h-screen">
      hello
      <button onClick={ () => setBusinessAddModal(true)}>Open Model</button>
      <BusinessAddModal businessAddModal={businessAddModal} setBusinessAddModal={setBusinessAddModal}/>
      
    </div>
  )

  
 

}

export default App