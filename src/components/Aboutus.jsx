import React, { useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import ContactFormModal from "./ContactFormModal";

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <div className="m-auto max-w-6xl  px-6 max-h-2xl ">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 max-w-md flex flex-col justify-center ">
            <div className="md:text-5xl text-2xl  uppercase font-black ">Awesome tool for your future team</div>
            <div className="text-xl  mt-6">"Like a finely crafted component, you make every interaction in life smoother and more delightful."</div>
            <div className="my-5 h-16">
              <button
                onClick={openContactModal}
                className="shadow-md font-medium py-2 px-4 text-white cursor-pointer rounded-2xl text-2lg text-center w-30  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                Join us now
              </button>
            </div>
          </div>
          <div className="flex md:justify-end w-full md:w-1/2 -mt-5">
            <div className="bg-dots">
              <div className="shadow-2xl max-w-md z-10 mt-6 ml-4 justify-center">
                <img
                  alt="card img"
                  className="rounded-[1%]"
                  src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/378345056_327746343158571_6676538891280478066_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6PzuMii_QAAAb4sT9Kw&_nc_ht=scontent.fktm17-1.fna&oh=00_AfB2S-BODQjXsO4rDU4ACIug2e6nEkmZ924_8rYpJcBpvQ&oe=6625DC99"
                />
                <div className="text-md overflow-hidden px-5 py-1">
                  <RiDoubleQuotesL size={20} />
                  Nabin Japrel is a talented full-stack developer, proficient in both frontend and backend technologies, capable of building robust and scalable web applications from start to finish
                  <RiDoubleQuotesR size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default About;
