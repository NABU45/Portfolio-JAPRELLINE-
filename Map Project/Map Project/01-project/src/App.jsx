import { useState } from 'react'
import BusinessAddModal from './BusinessAddModal';


function App() {

  const [businessAddModalIsOpen, SetBusinessAddModalIsOpen] = useState();




  return (
    <div className="h-screen w-screen">
      {/* <button className="px-2 py-1 text-rose-500 rounded-md font-bold text-lg border-2 border-rose-500 hover:bg-red-500 hover:text-white" onClick={() => SetBusinessAddModalIsOpen(true)}> Open</button> */}

      <button
        class="mt-2 ms-2 cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700" onClick={() => SetBusinessAddModalIsOpen(true)}>
        Open
      </button>


      <BusinessAddModal businessAddModal={businessAddModalIsOpen} setBusinessAddModal={SetBusinessAddModalIsOpen} />
    </div>
  )
}

export default App

