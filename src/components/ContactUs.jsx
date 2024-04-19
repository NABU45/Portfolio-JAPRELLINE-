// ContactUs.js

import React, { useState } from "react";

const ContactUs = () => {
  
  const[userName, setUserName]=useState('');
  const [userEmail, setUserEmail]=useState('');
  const [userMessage, setUserMessage]=useState(" ");


  const handleUserName =(e)=> setUserName(e.target.value);
  const handleUserEmail = (e) => setUserEmail(e.target.value);
  const handleUserMessage = (e) => setUserMessage(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
     console.log({
      userName: userName,
      userEmail: userEmail,
      userMessage: userMessage
    });
  };
  
  return (
      <div className=" px-5 py-1  flex">
        <div className="lg:w-screen md:w-screen  rounded-lg  flex flex-col md:ml-auto w-full   md:mt-0 relative z-10">
        <span className=" font-bold text-xl text-slate-800 ">Register now</span>
          
          <p className="leading-relaxed mb-5 text-gray-600">Sure, I'm here to help! What would you like to discuss or ask about?</p>
          <div className="flex flex-col relative justify-center mb-4 ">
            <input
             onChange={handleUserName}
             value={userName}
              type="text"
              id="name"
              name="username"
              placeholder=" "
              className="w-full h-10 bg-white rounded 
              border border-gray-300
               focus:border-indigo-500 focus:ring-2
                focus:ring-indigo-200 text-base 
                outline-none text-gray-700 py-1 px-3 
                leading-8 transition-colors
                 duration-200 ease-in-out
                 peer "
            >
              </input>
            <span className="
              absolute left-3
              text-gray-500
              transition-all
              flex
              bg-white
              peer-focus:-translate-y-5
              peer-placeholder-shown:translate-y-0
              -translate-y-5
              pointer-events-none
              peer-focus:text-xs
              peer-[:not(:placeholder-shown)]:text-xs
              text-md">Username</span>

          </div>

          <div className=" flex flex-col relative justify-center mb-5">
            <input
            onChange={handleUserEmail}
            value={userEmail}
              type="email"
              id="email"
              name="email"
              placeholder=" "
              className="w-full h-10 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
              peer "
            >
              </input>
              <span className="
              absolute left-3
              text-gray-500
              transition duration-100
              flex
              bg-white
               peer-focus:-translate-y-5
                peer-placeholder-shown:translate-y-0
               -translate-y-5
               pointer-events-none
               peer-focus:text-xs
               peer-[:not(:placeholder-shown)]:text-xs
               text-md
              ">Email address</span>
          </div>
          <div className="flex felx-col relative justify-center mb-4">
            <input
            onChange={handleUserMessage}
            value={userMessage}
              id="message"
              name="message"
              className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out
               peer "
              placeholder=" "
            ></input>
            <span className="
             absolute left-3
             text-gray-500
             transition duration-100
             flex
             bg-white
              peer-focus:-translate-y-1
               peer-placeholder-shown:translate-y-0
              -translate-y-1
              pointer-events-none
              peer-focus:text-xs
              peer-[:not(:placeholder-shown)]:text-xs
              text-2xl
              ">Message here</span>
              
          </div>
          <button 
          onClick={handleSubmit}
           className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
      </div>
  );
}
export default ContactUs;
