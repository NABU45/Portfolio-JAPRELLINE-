import { useState } from "react";

function Index(){

    const commentForm = ({ submitHandler }) => {
        const [commentText, setCommentText] = useState("");
        const handleCommentTextChange = (e) => setCommentText(e.target.value);
    
        const handleSubmit = (e) => {
            submitHandler(e, commentText);
            setCommentText("");
        }
        
        return (
            <form onSubmit={handleSubmit} className="flex flex-row pt-4 gap-1">
                <input onChange={handleCommentTextChange} value={commentText} type="text" className="w-3/4 border-2 rounded-lg px-2 focus:border-rose-500 outline-none" />
                <button className="bg-green-600 text-white w-1/4 p-2 rounded-lg font-semibold hover:bg-green-500"></button>
            </form>
        );
    }
    
    return(
        <>
        <div class="sm:flex flex-col lg:flex lg:flex-row lg:gap-24">
            {/* <!-- navbar---section----------------------- --> */}
            <div class="shadow sm:h-33 lg:w-48 lg:h-auto">
                <h2 class="text-2xl font-bold font-cursive  sm:mt-4 sm:ml-[70px] lg:m-4 lg:ml-8  ">instagram</h2>
                <ul class="flex  sm:flex-row sm:mt-6 lg:flex-col">
                    <li class="mt-3 sm:mt-0 sm:ml-[60px]  lg:mt-5 lg:ml-5 lg:flex flex-row gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" alt="home icon"
                            class="w-6 sm:ml-2" />
                        <span>Home</span>
                    </li>
                    <li class="mt-3 sm:mt-0 ml-4  lg:mt-5 lg:ml-5 lg:flex flex-row gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png" alt="home icon"
                            class="w-6 sm:ml-2" />
                        <span>Search</span>
                    </li>
                    <li class="mt-3 sm:mt-0 ml-4  lg:mt-5 lg:ml-5 lg:flex flex-row gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/10189/10189582.png" alt="home icon"
                            class="w-6 sm:ml-3 lg:ml-2" />
                        <span>Explore</span>
                    </li>
                    <li class="mt-3 sm:mt-0 ml-4  lg:mt-5 lg:ml-5 lg:flex flex-row gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/1370/1370907.png" alt="home icon"
                            class="w-6 sm:ml-4 lg:ml-2" />
                        <span>Message</span>
                    </li>
                    <li class="mt-3 sm:mt-0 ml-4  lg:mt-5 lg:ml-5 lg:flex flex-row gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" alt="home icon"
                            class="w-6 sm:ml-4 lg:ml-2" />
                        <span>Notification</span>
                    </li>
                    <li class="mt-3 sm:mt-0 ml-4  lg:mt-5 lg:ml-5 lg:flex flex-row gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/7420/7420919.png" alt="home icon"
                            class="w-6 sm:ml-2 lg:ml-2" />
                        <span>Create</span>
                    </li>
                    <li class="mt-3 sm:mt-0 ml-4  lg:mt-5 lg:ml-5 lg:flex flex-row gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png" alt="home icon"
                            class="w-6 sm:ml-2 lg:ml-2" />
                        <span>Profile</span>
                    </li>

                    <li class="lg:mt-[260px] lg:ml-6  flex felx-col gap- sm:mt-3 sm:ml-24 sm:gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/2354/2354551.png" alt="home icon"
                            class="w-6 h-6" />
                        <span>More</span>
                    </li>

                </ul>
            </div>
            <div>
                <div class="flex lg:flex-row mt-5  sm:flex-col lg:ml-8 gap-6">

                    {/* <!-- hero- section--------------------- --> */}
                    <div class="w-auto">
                        <div
                            class="flex  flex-row  sm:mt-8 sm:gap-14 lg:mt-5  lg:gap-4 shadow h-24 border-1 border-black rounded-lg">
                            <div class="mt-2 lg:ml-3">
                                <img src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/315631497_188221900444350_8510332970008259226_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wkTev1Wgm0oAb4P8B78&_nc_ht=scontent.fktm17-1.fna&oh=00_AfBms2tbIkHj3Io5HamF5xpjmCvKsJZRhw_AcryXstAeAg&oe=662487A8" alt=""
                                    class="rounded-full h-12 w-12 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900  ..." />

                                <span class="text-xs ">Japrelline</span>
                            </div>
                            <div class=" mt-2 ">
                                <img src="https://th.bing.com/th/id/OIP.L8bs33mJBAUBA01wBfJnjQHaHa?w=223&h=220&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                                    alt=""
                                    class="rounded-full h-12 w-12 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..." />

                                <span class="text-xs ">badboye12</span>
                            </div>
                            <div class=" mt-2 ">
                                <img src="https://th.bing.com/th/id/OIP.A_MGXTU1u63B6CMT6CRgPgHaKH?w=164&h=220&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                                    alt=""
                                    class="rounded-full h-12 w-12 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..." />

                                <span class="text-xs ">nickjonas22</span>
                            </div>
                            <div class="mt-2">
                                <img src="https://th.bing.com/th?q=Profile+for+Boys&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NP&setlang=en&adlt=moderate&t=1&mw=247"
                                    alt=""
                                    class="rounded-full h-12 w-12 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..." />

                                <span class="text-xs ">cuteegirl</span>
                            </div>
                            <div class="mt-2 ">
                                <img src="https://th.bing.com/th/id/OIF.nmb7riRuzjbh1v48Pv7nig?w=149&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                                    alt=""
                                    class="rounded-full h-12 w-12 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..." />

                                <span class="text-xs ">hensomboy1</span>
                            </div>
                        </div>
                        <div class=" mt-5 shadow">
                            <div class="  border-black rounded-lg flex felx-row sm:gap-[450px] lg:gap-[230px]">
                                <div class="sm:ml-[75px]  lg:ml-4 flex flex-row  gap-3 ">
                                    <img src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/315631497_188221900444350_8510332970008259226_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wkTev1Wgm0oAb4P8B78&_nc_ht=scontent.fktm17-1.fna&oh=00_AfBms2tbIkHj3Io5HamF5xpjmCvKsJZRhw_AcryXstAeAg&oe=662487A8" alt=""
                                        class=" mt-2 rounded-full h-8 w-8 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..."/>

                                    <span class="text-xs mt-4 font-bold ">Japrelline</span>
                                </div>
                                <img src="https://cdn-icons-png.flaticon.com/128/512/512142.png" alt=""
                                    class="w-6 h-6 justify-center mt-3" />
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/originals/b6/53/c2/b653c21668db7ef44ad5eb0341f058e6.jpg"
                                    alt="" class="h-[310px] w-[390px] mt-4" />
                            </div>
                            <div class="flex flex-row ml-1 gap-28">
                                <div class="flex flex-row gap-2">
                                    <img src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" alt=""
                                        class="w-4 mt-2 " /> 
                                    <img src="https://cdn-icons-png.flaticon.com/128/5948/5948565.png" alt=""
                                        class="w-4 mt-2" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png" alt=""
                                        class="w-4 mt-2" />
                                </div>

                                <div class="flex flex-row gap-2">
                                    <img src="https://cdn-icons-png.flaticon.com/128/5720/5720434.png" alt=""
                                        class="w-2 h-2 mt-3" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/10238/10238346.png" alt=""
                                        class="w-2 h-2 mt-3" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/5720/5720434.png" alt=""
                                        class="w-2 h-2 mt-3" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/5720/5720434.png" alt=""
                                        class="w-2  h-2 mt-3" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/5720/5720434.png" alt=""
                                        class="w-2 h-2 mt-3" />
                                </div>
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3082/3082331.png" alt=""
                                        class="w-4 mt-2" />
                                </div>
                            </div>
                            <div class=" flex flex-row ml-1 gap-3">
                                <div class="mt-2 flex flex-row ">
                                    <img src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="" class="rounded-full h-7 w-7 ring-1 ring z-10 " />
                                    <img src="https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="" class="rounded-full h-7 w-7 ring ring-1  z-0 -ml-3" />
                                </div>
                                <p class="justify-center text-[12px] mt-3">Liked by <span
                                        class="font-bold">kivinalagrari</span> and <span class="font-bold">other</span>
                                </p>
                            </div>
                            <div class="ml-1 mt-2 w-[370px]">
                                <p class="text-[12px]"><span class="font-bold ">
                                        I'm ChatGPT</span> an AI language model designed to assist and provide
                                    information across different topics. Feel free to ask
                                    me anything!</p>
                            </div>
                            <div class="ml-1 mt-1">
                                <span class="text-[12px]  text-slate-400  font-bold">View all 9 comments</span>
                            </div>
                            <div class=" mt-1 shadow border-slate-300 h-full flex flex-row gap-56">
                                <div class=" flex flex-row gap-4 ml-2">
                                    <img src="https://cdn-icons-png.flaticon.com/128/158/158420.png" alt=""
                                        class="w-4 h-4 justify-center mt-3" />
                                    <span class="text-[12px] mt-3">Add comment....</span>
                                </div>
                                <span class=" text-blue-600 mt-2">Post</span>
                            </div>
                        </div>

                    </div>

                    {/* <!-- ------------footer-section-------- --> */}

                    <div>
                        <div class=" mt-8 flex felx-row gap-[73px] ">
                            <div class="  ml-5 flex flex-row  gap-3  ">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    class=" mt-4 rounded-full h-8 w-8 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..." />
                                <div class="flex flex-col ">
                                    <span class="text-xs mt-4 font-bold ">babylady</span>
                                    <span class="text-xs text-slate-400  font-bold"> J W A N K T Y T G R </span>
                                </div>
                            </div>
                            <button class="text-xs mt-3 font-bold text-blue-800 justify-end">Switch</button>
                        </div>
                        <div class="flex flex-row mt-1 ml-6   gap-24">
                            <span class="text-xs mt-4 font-bold  text-slate-400 w-32 ">Suggestion For You</span>
                            <span class="text-xs mt-4 font-bold ">See All</span>
                        </div>
                        <div>
                            <div class="flex flex-row gap-[75px]">
                                <div class="  ml-7 mt-4 flex flex-row  gap-3 ">
                                    <img src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
                                        alt=""
                                        class=" mt-2 rounded-full h-4 w-4 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..."/>
                                    <div class="flex flex-col -mt-4 ">
                                        <span class="text-xs mt-4 font-bold ">rockstar</span>
                                        <span class="text-[10px] text-slate-400  font-bold">Follow by the Instargram
                                        </span>
                                    </div>
                                </div>
                                <button class="text-xs mt-3 font-bold text-blue-800">Follow</button>
                            </div>
                            <div class="flex flex-row gap-[75px]">
                                <div class="  ml-7 mt-4 flex flex-row  gap-3 ">
                                    <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt=""
                                        class=" mt-2 rounded-full h-4 w-4 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..."/>
                                    <div class="flex flex-col -mt-4 ">
                                        <span class="text-xs mt-4 font-bold ">vikingline1</span>
                                        <span class="text-[10px] text-slate-400  font-bold">Follow by the Instargram
                                        </span>
                                    </div>
                                </div>
                                <button class="text-xs mt-3 font-bold text-blue-800">Follow</button>
                            </div>
                            <div class="flex flex-row gap-[75px]">
                                <div class="  ml-7 mt-4 flex flex-row  gap-3 ">
                                    <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt=""
                                        class=" mt-2 rounded-full h-4 w-4 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..."/>
                                    <div class="flex flex-col -mt-4 ">
                                        <span class="text-xs mt-4 font-bold ">havinking</span>
                                        <span class="text-[10px] text-slate-400  font-bold">Follow by the Instargram
                                        </span>
                                    </div>
                                </div>
                                <button class="text-xs mt-3 font-bold text-blue-800">Follow</button>
                            </div>
                            <div class="flex flex-row gap-[75px]">
                                <div class="  ml-7 mt-4 flex flex-row  gap-3 ">
                                    <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt=""
                                        class=" mt-2 rounded-full h-4 w-4 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..." />
                                    <div class="flex flex-col -mt-4 ">
                                        <span class="text-xs mt-4 font-bold ">findrawatt</span>
                                        <span class="text-[10px] text-slate-400  font-bold">Follow by the Instargram
                                        </span>
                                    </div>
                                </div>
                                <button class="text-xs mt-3 font-bold text-blue-800">Follow</button>
                            </div>
                            <div class="flex flex-row gap-[75px]">
                                <div class="  ml-7 mt-4 flex flex-row  gap-3 ">
                                    <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt=""
                                        class=" mt-2 rounded-full h-4 w-4 ring-4 ring ring-pink-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ..."/>
                                    <div class="flex flex-col -mt-4 ">
                                        <span class="text-xs mt-4 font-bold ">tonyjs</span>
                                        <span class="text-[10px] text-slate-400  font-bold">Follow by the Instargram
                                        </span>
                                    </div>
                                </div>
                                <button class="text-xs mt-3 font-bold text-blue-800">Follow</button>
                            </div>

                        </div>
                        <div>
                            <ul class=" flex flex-row mt-4 ml-7 gap-5">
                                <li class="text-[13px] text-slate-400  font-bold">About</li>
                                <li class="text-[13px] text-slate-400  font-bold">Helps</li>
                                <li class="text-[13px] text-slate-400  font-bold">Press</li>
                                <li class="text-[13px] text-slate-400  font-bold">API</li>
                                <li class="text-[13px] text-slate-400  font-bold">Jobs</li><br/>

                            </ul>
                            <ul class=" flex flex-row mt-1 ml-7 gap-5">
                                <li class="text-[13px] text-slate-400  font-bold">Privacy</li>
                                <li class="text-[13px] text-slate-400  font-bold">Terms</li>
                                <li class="text-[13px] text-slate-400  font-bold">location</li>
                                <li class="text-[13px] text-slate-400  font-bold">Language</li>
                            </ul>
                            <ul>
                                <li class="text-[14px] text-slate-400  font-bold mt-2 ml-7"> &copy; INSTRAGRAM FROM
                                    META.</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Index;