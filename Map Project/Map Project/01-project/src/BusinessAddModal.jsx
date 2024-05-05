import { useState } from 'react'
import Map from './component/Map'
import { MdClose } from "react-icons/md";

const BusinessAddModal = ({ businessAddModal, setBusinessAddModal })=>{


  const [businessName, setBusinessName] = useState();
  const [businessDate, setBusinessDate] = useState();
  const [markerCoords, setMarkerCoords] = useState({
    lat: 27.676003,
    lng: 51.45,
  });

  const [businessSubmit, setBusinessSubmit] = useState(null);

  const handelBusinessNameClick = (e) => {
    setBusinessName(e.target.value);
  }

  const handelBusinessDateClick = (e) => {
    setBusinessDate(e.target.value);
  }

  const handleSubmitForm = () => {
    setBusinessSubmit()
  }

  const onClose = () => {
    setBusinessAddModal(false);
  }


  return (
      <div
      onClick={onClose}
      className={`
       
          inset-0
          fixed
          h-screen w-screen
          flex justify-center 
          items-center
          transition-all
          ${businessAddModal ? 'bg-black/60 visible' : 'invisible'}
          `}>
        <div onClick={(e) => e.stopPropagation()} className={`
            h-[750px] w-1/3
            px-6 py-8
            bg-white
            rounded-lg
            shodow-lg
            transition-all
            ${businessAddModal ? 'scale-75' : 'scale-0'}
            `}>
          <div className="
              flex flex-row justify-between items-center">
            <span className='font-bold text-3xl text-slate-800'> Add a Business </span>
            <button onClick={onClose}>
              <MdClose />
            </button>
          </div>

          <div className='
              my-5
              w-full
              border-b-2
              border-rose-500
              rounded-full
              '></div>

          <span className='font-bold text-xl text-slate-800'> Add Business Information </span>
          <div className="flex flex-col py-4 relative justify-center">
            <input
              onChange={handelBusinessNameClick} value={businessName}
              type="text" placeholder=' ' className='
                border-[3px]
                border-rose-500
                rounded-lg
                p-3
                outline-none
                peer
                ' />
            <span className='
                absolute left-3
                text-gray-500
                transition-all
                flex
                bg-white
                peer-focus:-translate-y-7
                peer-placeholder-shown:-translate-y-0
                -translate-y-7
                pointer-events-none
    
                peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:text-xs
                text-md
                '> Business Name</span>
          </div>

          <span className="font-bold text-xl text-slate-800">Add a Business Organization Date</span>
          <div className="flex flex-col py-4 relative justify-center">
            <input
              onChange={handelBusinessDateClick} value={businessDate}
              type="text" placeholder=' ' className='
                border-[3px]
                border-rose-500
                rounded-lg
                p-3
                outline-none
                peer
                ' />
            <span className='
                absolute left-3
                text-gray-500
                transition-all
                flex
                bg-white
                peer-focus:-translate-y-7
                peer-placeholder-shown:-translate-y-0
                -translate-y-7
                pointer-events-none
    
                peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:text-xs
                text-md
                '> Business Orginization Date</span>
          </div>


          <span className='font-bold text-xl text-slate-800'> Add a Business Location</span>
          <div className="overflow-hidden w-full h-1/2 mt-2">
            <Map currentMarkerPosition={markerCoords} setCurrentMarkerPosition={setMarkerCoords} />
          </div>
          
          <div className=" flex flex-row  justify-end items-center my-3 gap-4">
           
            <button
              class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700" onClick={onClose}>
              Cancel
            </button>

            <button
              class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    
  )
}
export default BusinessAddModal