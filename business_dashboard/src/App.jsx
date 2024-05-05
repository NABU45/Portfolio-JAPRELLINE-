import { useState } from 'react'
import BusinessAddModal from './components/BusinessAddModal';
import { GoPlus } from 'react-icons/go';
import { RxDragHandleDots1 } from 'react-icons/rx';
import { IoLocationSharp } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';


function App() {

  const [ businessAddModalIsOpen, setBusinessAddModalIsOpen ] = useState(false);
  const [ business, setBusiness ] = useState([
    {
      name: "ABC Pvt. Ltd.",
      createdOn: "2024/04/12",
      location: {
        lat: 27.678962, 
        lng: 85.349038,
      }
    }
    
  ]);

  const handleAddBusiness = (newBusiness) => {
    setBusiness([
      ...business,
      newBusiness
    ])
  } 

  return (
    <div className="w-screen h-screen">
      <div className="
          h-screen w-screen 
          flex justify-center items-center 
          bg-[url('./images/bg_pattern.png')] bg-center bg-contain
      ">
        <div className="h-4/5 w-2/3 bg-white shadow-lg rounded-xl flex flex-col p-10">
          <span className="text-4xl font-bold">Dashboard</span>
          <div className="border-2 border-rose-500 my-3 rounded-lg"></div>
          <div className="flex justify-end">
            <button 
              onClick={() => setBusinessAddModalIsOpen(true)}
              className="
              bg-rose-500 
                px-4 py-2 
                font-bold text-white 
                rounded-lg
                flex gap-2 items-center
              ">
              Add Business
              <GoPlus size={30}/>
            </button>
          </div>
          <div className="flex flex-row justify-between  shadow-md mt-10">

            <div className="flex flex-row gap-2 ">
              <div>
              <RxDragHandleDots1 size={40} />
              </div>
              <div className=" flex flex-col">
                 {
                 business.map(bs => bs.name)
                 } <br />
                  {
                  business.map(bs => bs.createdOn)
                  }
              </div>

            </div>
            <div className="flex flex-row gap-3">

                  {
                  business.map(bs => bs.createdOn)
                  }
                 <IoLocationSharp  size={30} color='red'/>
                 <RiDeleteBin6Line size={30} color='red'/>


            </div>
          </div>

        </div>
      </div>
      <BusinessAddModal 
        businessAddModalIsOpen={businessAddModalIsOpen}
        setBusinessAddModalIsOpen={setBusinessAddModalIsOpen}
        handleAddBusiness={handleAddBusiness}
      />
    </div>
  );
}

export default App
