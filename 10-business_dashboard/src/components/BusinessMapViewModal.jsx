import { useState } from "react";
import Map from './Map';
import { RxCross2 } from 'react-icons/rx';

const BusinessMapViewModal = ({business, businessMapViewModalIsOpen, setBusinessMapViewModalIsOpen }) => {
    const onClose = () => {
        setBusinessMapViewModalIsOpen(false);
    }

    if ( business == null )
        return null;
    
    return (
        <div 
        onClick={onClose}
        className={`
        inset-0
        fixed
        h-screen  w-screen
        flex justify-center items-center
        transition-all
        ${businessMapViewModalIsOpen ? 'bg-black/60 visible' : 'invisible'}
      `}>
        <div 
          onClick={(e) => e.stopPropagation()}
          className={`
          h-4/5 w-1/3
          bg-white
          rounded-lg
          shadow-lg
          transition-all
          ${businessMapViewModalIsOpen ? 'translate-y-0' : 'translate-y-[900px]'}
          ${businessMapViewModalIsOpen ? 'scale-100' : 'scale-0'}
          px-6 py-8
        `}>
          <div className="
            flex flex-row justify-between items-center
          ">
            <span className="font-bold text-3xl text-slate-800">View Business</span>
            <RxCross2 onClick={onClose} size={30} color='gray' className='cursor-pointer' />
          </div>
          <div className="
            my-5
            w-full
            border-b-2
            border-rose-500
            rounded-full
          "></div>

          
          <div className='overflow-hidden w-full h-4/5 mt-2'>
            <Map currentMarkerPosition={business.location} />
          </div>

        </div>
      </div>
    )
}

export default BusinessMapViewModal;