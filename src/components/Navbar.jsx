import React, { useState, useEffect } from "react";
import { IoHomeOutline, IoIdCardOutline } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import About from "./Aboutus";
import { RxCross1, RxCross2 } from "react-icons/rx";
import ContactUs from "./ContactUs";
import Card from "./Card";

function Navbar() {
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [card, setCard] = useState(false);

  // Function to close modals
  const closeModals = () => {
    setAbout(false);
    setContact(false);
    setCard(false);
  };

  return (
    <>
      <div className="flex flex-row nav-container">
        <nav  className="h-screen w-1/3 justify-start bg-slate-900">
          <h2  className="fpnt-bold font-serif text-2xl py-10 text-white flex justify-center">
            Japrelline
          </h2>
          <ul className="text-white font-bold text-xl justify-center py-10 flex flex-col gap-5">
            <li className="flex gap-7 px-[30%]">
              <IoHomeOutline size={25} />
              <button>Home</button>
            </li>
            <li className="flex gap-7 px-[30%]">
              <FaBookOpen size={25} />
              <button onClick={() => setAbout(true)}>About Us</button>
            </li>
            <li className="flex gap-7 px-[30%]">
              <IoIdCardOutline size={25} />
              <button onClick={() => setCard(true)}>Card</button>
            </li>
            <li className="flex gap-7 px-[30%]">
              <MdContactPhone size={25} />
              <button onClick={() => setContact(true)}>Contact Us</button>
            </li>
            <li className="flex gap-7 px-[30%]">
              <RiLoginBoxLine size={25} /> Login
            </li>
          </ul>
        </nav>

        <div className="font-extrabold text-5xl justify-center text-blue-700 bg-slate-300 w-screen h-screen transition-all duration-100" style={{ backgroundImage: 'url("https://th.bing.com/th/id/R.c9c905906ed5f6b395dec5514f75b7cb?rik=cI0aaM39DTF6dA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fHd-Laptop-wallpapers.jpg&ehk=fdAGF7dNdtQMtY9E7s8hArE8z60Wx9Vbg4oAC9aYUcs%3d&risl=&pid=ImgRaw&r=0")', backgroundSize:    'cover', backgroundPosition: 'center'}}>
         <h1 className={`px-40 py-72 ${about || card || contact ? "invisible" : ""}`}>
         Welcome to japrelline web page
        </h1>
      </div>

      </div>

      <div   onClick={closeModals} className={`h-screen inset-0 fixed flex justify-center items-center transition-all ${about ? "visible" : "invisible"}`}>
        <div onClick={(e) => e.stopPropagation()}  className={`h-[85%] w-[50%] rounded-lg shadow-lg ml-[30%] transition-all bg-slate-200 ${about ? "scale-1 translate-y-10" : "scale-900 translate-x-500"} px-0 py-6`}>
          <div className="flex flex-row justify-between items-center px-8 ">
            <span className="font-bold text-xl ">Coding Genius: Programmer Developer</span>
            <button className=" duration-200"> <RxCross1 onClick={() => setAbout(false)} /></button>
          </div>
          <div className="my-5 w-full border-b-2 border-blue-600 rounded-full"></div>
          <About />
        </div>
      </div>

      <div onClick={closeModals} className={`h-screen inset-0 fixed flex justify-center items-center transition-all ${contact ? "visible" : "invisible"}`}>
        <div onClick={(e) => e.stopPropagation()}  className={` h-[85%] w-[50%]  bg-slate-200  rounded-lg shadow-lg ml-[35%] transition-all ${contact ? "scale-1 translate-y-10" : "scale-900 translate-x-500"} px-0 py-4`}>
          <div className="flex flex-row justify-between items-center px-8 ">
            <span className="font-bold text-xl ">Contact with me</span>
            <RxCross2 size={20} color="gray" onClick={() => setContact(false)} />
          </div>
          <div className="my-5 w-full border-b-2 border-blue-600 rounded-full"></div>
          <ContactUs />
        </div>
      </div>

      <div onClick={closeModals} className={`h-screen inset-0 fixed flex justify-center items-center transition-all ${card ? "visible" : "invisible"}`}>
        <div onClick={(e) => e.stopPropagation()}  className={`h-[84%] w-[40%] bg-slate-200  rounded-lg shadow-lg ml-[30%] transition-all ${card ? "scale-1 translate-y-10" : "scale-900 translate-x-500"} px-0 py-1`}>
          <div className="flex flex-row justify-between items-center px-8 py-4">
            <span className="font-bold text-xl ">Welcome to japrelline market</span>
            <RxCross2 size={20} color="gray" onClick={() => setCard(false)} />
          </div>
          <div className="my-1 w-full border-b-2 border-blue-600 rounded-full"></div>
          <div className="px-5 py-2 transition duration-500 ease-in-out">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
