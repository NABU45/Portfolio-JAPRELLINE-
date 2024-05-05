import { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons

import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const menu = [
        {
            name: <span className='font-semibold'> Home </span>, icon: <i className="fa-solid fa-house"></i>, url: ''
        },
        {
            name: 'Search', icon: <i className="fa-solid fa-magnifying-glass"></i>, url: ''
        },
        {
            name: 'Explore', icon: <i className="fa-regular fa-compass"></i>, url: ''
        },
        {
            name: 'Messages', icon: <i className="fa-brands fa-facebook-messenger"></i>
        },
        {
            name: 'Notifications', icon: <i className="fa-regular fa-heart"></i>,
        },
        {
            name: 'Create', icon: <i className="fa-regular fa-square-plus"></i>,
        },
        {
            name: 'Profile', icon: <div className='h-4 w-4 rounded-full'><img className='h-4 w-4 rounded-full' src="/images/profile(3).jpeg" alt="" srcset="" /></div>,
        },
    ];

    const stories = [
        // url: /images/download (1).jpeg
        { story: 1, text: 'jonathan_...', url: <img className='h-12 w-12 rounded-full' src="https://avatars.githubusercontent.com/u/118363606?v=4" alt="" srcset="" /> },
        { story: 2, text: 'johnnyolth...', url: <img className='h-12 w-12 rounded-full' src="https://avatars.githubusercontent.com/u/118363606?v=4" alt="" srcset="" /> },
        { story: 3, text: 'calvaryma...', url: <img className='h-12 w-12 rounded-full' src="https://avatars.githubusercontent.com/u/118363606?v=4" alt="" srcset="" /> },
        { story: 4, text: 'calvaryma...', url: <img className='h-12 w-12 rounded-full' src="https://avatars.githubusercontent.com/u/118363606?v=4" alt="" srcset="" /> },
     ];



    const [isLiked, setIsLiked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [notificationCount, setNotificationCount] = useState(0);


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setNotificationCount(notificationCount + 1);
            setInputValue('');
        }
        setComments([...comments, newComment]);
        setInputValue('');
    };
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        if (!isLiked) {
            setNotificationCount(notificationCount + 1); // Increment count when liked
        } else {
            setNotificationCount(notificationCount - 1); // Decrement count when unliked
        }
    };

    const divElements = [
    ];


    return (<>
        <div className='flex flex-row border-r mt-4 h-screen'>
            <div className='h-full border-r border-gray-200 ms-4'>
                <div className='text-left pb-6 font-semibold'> Instagram</div>
                <div className=' me-20 '>
                    {
                        menu.map(item => (
                            <div key={item.name} className='flex items-center'>
                                <div>{item.icon}</div>
                                <div className='m-2 font-normal'>{item.name}</div>
                                {item.name === 'Notifications' && notificationCount > 0 && (
                                    <div className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                        {notificationCount}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
                <div className='flex items-center absolute bottom-3 gap-1'>
                    <div><IoReorderThreeOutline /></div>
                    <div>More</div>
                </div>
            </div>
            <div className='ms-48 w-1/4'>
                <div className=' mt-3 border border-gray-300 rounded-md'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='h-12 w-12 ms-2 mt-2 rounded-full ring-2 ring-rose-400 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white '>
                                <img className='h-12 w-12 rounded-full' src="https://avatars.githubusercontent.com/u/118363606?v=4" alt="" srcset="" />
                            </div>
                            <div className='font-semibold'>calvarymagazine</div>
                        </div>
                        <div className='me-3'>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <div>
                        <div className='m-2'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-1'>
                                    <div className='flex justify-between items-center'>
                                        {isLiked ? (
                                            <div onClick={handleLikeClick}>
                                                <FaHeart className="text-red-600 cursor-pointer" />
                                            </div>
                                        ) : (
                                            <div onClick={handleLikeClick}>
                                                <FaRegHeart className="text-gray-600 cursor-pointer" />
                                            </div>
                                        )}
                                    </div>
                                    <div> <i class="fa-regular fa-message " onClick={handleFormSubmit}></i> </div>
                                    <div> <i class="fa-regular fa-paper-plane"></i> </div>
                                </div>
                                <div className='flex gap-x-0.5'>

                                    {divElements.map((element, index) => (
                                        <div key={index} className={element.className}></div>
                                    ))}
                                </div>
                                <div className='me-2'> <i class="fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center relative h-4 overflow-hidden">
                                    <div class="absolute  w-3 h-3  rounded-full z-20 ring-0 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white">
                                        <img className='w-3 h-3 rounded-full' src="/images/profile(3).jpeg" alt="" srcset="" />
                                    </div>
                                    <div class="absolute left-2.5 w-3 h-3 rounded-full z-10">
                                        <img className='w-3 h-3 rounded-full' src="/images/profile(2).jpeg" alt="" srcset="" />
                                    </div>
                                    <div className='ms-8'><span> Liked by </span>
                                        <span className='font-semibold'> calvarymv </span>
                                        <span> and </span>
                                        <span className='font-semibold'> others </span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className=' m-2 flex justify-between border-gray-300'>
    
                        <div className='input-container'>
                            <form onSubmit={handleFormSubmit} >
                                <div className="flex flex-row pt-4 gap-1">
                                <input
                                    type="text"
                                    className="w-3/4 border-2 rounded-lg px-2 focus:border-rose-500 outline-none"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Enter your notification"
                                />
                                <button  type="submit" className="bg-green-600 text-white p-2 rounded-lg font-semibold hover:bg-green-500">Post</button>
                                </div>
                                 <h5>{inputValue}</h5>
                            </form> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default App;

// import React from 'react';
// import Clon from './components/Clon';

// function App() {
//   return (
//     <>
//       <Clon />
//     </>
//   );
// }
// export default App;
