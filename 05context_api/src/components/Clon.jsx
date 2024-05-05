import React from 'react';

 const Clon=({toggleLike})=> {
    return (
        <>
            <div className="mt-5 shadow">
                <div className="border-black rounded-lg flex felx-row sm:gap-[450px] lg:gap-[230px]">
                    <div className="sm:ml-[75px] lg:ml-4 flex flex-row gap-3">
                        <img src="https://avatars.githubusercontent.com/u/118363606?v=4" alt=""
                            className="mt-2 rounded-full h-8 w-8 ring ring-4 ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..." />

                        <span className="text-xs mt-4 font-bold">Japrelline</span>
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/128/512/512142.png" alt=""
                        className="w-6 h-6 justify-center mt-3" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/b6/53/c2/b653c21668db7ef44ad5eb0341f058e6.jpg"
                        alt="" className="h-[310px] w-[390px] mt-4" />
                </div>
                <div className="flex flex-row ml-1 gap-[200px]">
                    <div className="flex flex-row gap-2">
                        <span className='flex felx-row gap-1'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" alt=""
                            className="w-4 mt-2"  />
                            <h5>111k</h5>
                        </span>
                        <span className='flex felx-row gap-1'>
                        <img src="https://cdn-icons-png.flaticon.com/128/5948/5948565.png" alt=""
                            className="w-4 mt-2" />
                            <h5>112k</h5>
                        </span>
                        <span className='flex felx-row gap-1'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png" alt=""
                            className="w-4 mt-2" />
                            <h5>12k</h5>
                        </span>
                    </div>
                    <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/3082/3082331.png" alt=""
                            className="w-4 mt-2" />
                    </div>
                </div>
                <div className="ml-1 mt-2 w-[370px]">
                    <p className="text-[12px]"><span className="font-bold">I'm ChatGPT</span> an AI language model designed to assist and provide information across different topics. Feel free to ask me anything!</p>
                </div>
            </div>

        </>
    )
}
export default Clon;