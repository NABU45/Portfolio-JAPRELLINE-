import { useState } from "react"

import Map from './Map'
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";

const BusinessAddModal = ({businessAddModal, setBusinessAddModal})=>{
    const [businessName, setBusinessName] = useState("");
    const [businessDate, setBusinessDate] = useState("");
    const [markerCoords, setMarkerCoords] = useState({
      lat: 27.676003,
      lng: -0.09 
    }
    );
  
    const [businessSubmit, setBusinessSubmit] = useState(null);
    
    const handleBusinessName = (e) => setBusinessName(e.target.value);
  
    const handleBusinessDate = (e) => setBusinessDate(e.target.value);
    
    
  
    const handleSubmitForm = () =>{
      setBusinessSubmit()
  
    }
  
    const onClose  =() => setBusinessAddModal(false);
    
  
    return (
        <div className={`
        inset-0
        fixed
        bg-black/60
        h-screen
        w-screen
        flex justify-center items-center
        transition-all
        ${businessAddModal ? 'bg-black/60 visible': 'invisible' }

      
      `}>
        <div onClick={(e) => e.stopPropagation()} className={`
          h-[750px] w-1/3
          bg-white
          rounded-lg
          shadow-lg
          transition-all
          px-6 py-8
          ${businessAddModal ? 'scale-75' : 'scale-0'}

        `}>
          <div className="
            flex flex-row justify-between items-center
          ">
            <span className="font-bold text-xl text-slate-800">Add a Businesss</span>
            <RxCross1 size={30} onClick={onClose} color="gray"/>
          </div>
          <div className="
            my-3
            w-full
            border-b-2
            border-slate-900
            rounded-full
          "></div>

          
          <span className="font-bold text-md text-slate-800">Add a Businesss Information</span>
          <div className="flex flex-col py-4 relative justify-center">
            <input type="text" placeholder=" " onChange={handleBusinessName} value={businessName} className="
              border-[3px]
              border-rose-500
              rounded-lg
              p-3
              outline-none
              peer
            "></input>
            <span className="
              absolute left-3
              text-gray-500
              transition-all
              flex
              bg-white
              peer-focus:translate-x-64
              peer-placeholder-shown:translate-x-0
              translate-x-764
              pointer-events-none
              
              peer-focus:text-xs
              peer-[:not(:placeholder-shown)]:text-xs
              text-md
            
            ">Business Name</span>


          </div>
          <span className="font-bold text-md text-slate-800">Add a Business Organization Date</span>
          <div className="flex flex-col py-4 relative justify-center">
            <input type="text" placeholder=" " onChange={handleBusinessDate} value={businessDate} className="
              border-[3px]
              border-rose-500
              rounded-lg
              p-3
              outline-none
              peer
            "></input>
            <span className="
              absolute left-3
              text-gray-500
              transition-all
              flex
              bg-white
              peer-focus:translate-x-64
              peer-placeholder-shown:translate-x-0
              translate-x-764
              pointer-events-none
              
              peer-focus:text-xs
              peer-[:not(:placeholder-shown)]:text-xs
              text-md
            
            ">Organization Date</span>


          </div>

          <span className="font-bold text-md text-slate-800">Add a Businesss Location</span>
          <div className="
            overflow-hidden
            w-full h-1/2 mt-2
          ">
            <Map currentMarkerPosition={markerCoords} setCurrentMarkerPosition={setMarkerCoords} />
          </div>

          <div className="flex flex-row  gap-2 justify-end item-center my-3">


          <button className="
            px-3 py-2
            border
            border-slate-900
            text-slate-900
            font-bold
            rounded-md
            hover:border-slate-900/90
            hover:text-slate-900/50
          " onClick={onClose}>Cancel</button>
          <button className="
            px-3 py-2
            bg-slate-900
            text-white
            font-bold
            rounded-md
            hover:bg-slate-900/90
          ">Submit</button>
          </div>
        </div>
      </div>

    )
}
export default BusinessAddModal