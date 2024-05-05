import React from 'react';

const Home = () => {
    return (
        <div className="p-relative  w-screen" style={{ backgroundColor: '#15202b' }}>
            <div className="flex justify-start ">

                <header className="text-white py-4 h-auto w-1/5">
                    {/* Navbar (left side) */}
                    <div style={{ width: '275px' }}>
                        <div className="overflow-y-auto fixed h-screen pr-4" style={{ width: '275px' }}>
                            {/* Logo */}
                            <svg viewBox="0 0 24 24" className="h-8 w-8 text-white ml-3" fill="currentColor">
                                <g>
                                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                                    </path>
                                </g>
                            </svg>

                            {/* Nav */}
                            <nav className="mt-5 py-3   flex flex-col justify-start gap-3">
                                <a href="/" className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-gray-800 text-blue-300">
                                    <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"></path>
                                    </svg>
                                    Home
                                </a>
                                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                                    </svg>

                                    Explore
                                </a>
                                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                                        </path>
                                    </svg>
                                    Notifications
                                </a>
                                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    Messages
                                </a>
                                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                    </svg>
                                    Bookmarks
                                </a>
                                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                        </path>
                                    </svg>
                                    Lists
                                </a>
                                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    Profile
                                </a>
                                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                    <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    More
                                </a>
                                <button class="bg-blue-400 hover:bg-blue-500 w-full mt-5 text-white font-bold py-2 px-4 rounded-full">
                                    Tweet
                                </button>
                                {/* Add more nav items here */}
                            </nav>



                            {/* User Menu */}
                            <div className="absolute" style={{ bottom: '2rem' }}>
                                <div className="flex-shrink-0 flex hover:bg-gray-800 rounded-full px-4 py-3 mt-12 mr-2 ">
                                    <a href="/" className="flex-shrink-0 group block">
                                        <div className="flex items-center">
                                            <div>
                                                <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-base leading-6 font-medium text-white">
                                                    ℜjaprelline.dev
                                                </p>
                                                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                    @Nabin
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div role="main">
                    <div className="flex w-[1000px]">
                        <section className="w-3/4 border border-y-0 border-gray-800" style={{ maxWidth: '750px' }}>
                            {/* Content (Center) */}
                            <aside>
                                <div className="flex">
                                    <div className="flex-1 mx-2">
                                        <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
                                    </div>
                                    <div className="flex-1 px-4 py-2 mx-2">
                                        <a href="/" className=" text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                                            <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <g>
                                                    <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <hr className="border-gray-800" />

                                <div className="flex">
                                    <div className="m-2 w-10 py-1">
                                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                    </div>
                                    <div className="flex-1 px-2 pt-2 mt-2">
                                        <textarea className=" bg-transparent text-gray-400 font-medium text-lg w-full" rows="2" cols="50" placeholder="What's happening?"></textarea>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="w-10"></div>

                                    <div className="w-64 px-2">

                                        <div className="flex items-center">
                                            <div className="flex-1 text-center px-1 py-1 m-2">
                                                <a href="/" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div className="flex-1 text-center py-2 m-2">
                                                <a href="/" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                                        </path>
                                                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div className="flex-1 text-center py-2 m-2">
                                                <a href="/" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div className="flex-1 text-center py-2 m-2">
                                                <a href="/" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <button className="bg-blue-400 hover:bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                                            Tweet
                                        </button>
                                    </div>
                                </div>

                                <hr className="border-gray-800 border-4" />
                            </aside>
                            <ul className="list-none">
                                <li>
                                    {/* <!--second tweet--> */}
                                    <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                        <div className="flex flex-shrink-0 p-4 pb-0">
                                            <a href="/" className="flex-shrink-0 group block">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-base leading-6 font-medium text-white">
                                                            Sonali Hirave
                                                            <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                @ShonaDesign  . 16 April
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="pl-16">
                                            <p className="text-base width-auto font-medium text-white flex-shrink">
                                                Day 07 of the challenge <a href="/" className="text-blue-400">#100DaysOfCode</a>
                                                I was wondering what I can do with <a href="/" className="text-blue-400">#tailwindcss</a>, so just started building
                                                Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                [07/100]
                                                <a href="/" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                            </p>

                                            <div className="md:flex-shrink pr-6 pt-3">
                                                <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: '200px', backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)' }}>
                                                    <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
                                                </div>
                                            </div>

                                            <div className="flex items-center py-4">
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                        </g>
                                                    </svg>
                                                    12.3 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="border-gray-800" />
                                    </article>
                                </li>
                                <li>
                                    {/* <!--second tweet--> */}
                                    <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                        <div className="flex flex-shrink-0 p-4 pb-0">
                                            <a href="/" className="flex-shrink-0 group block">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-base leading-6 font-medium text-white">
                                                            Sonali Hirave
                                                            <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                @ShonaDesign  . 16 April
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="pl-16">
                                            <p className="text-base width-auto font-medium text-white flex-shrink">
                                                Day 07 of the challenge <a href="/" className="text-blue-400">#100DaysOfCode</a>
                                                I was wondering what I can do with <a href="/" className="text-blue-400">#tailwindcss</a>, so just started building
                                                Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                [07/100]
                                                <a href="/" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                            </p>

                                            <div className="md:flex-shrink pr-6 pt-3">
                                                <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: '200px', backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)' }}>
                                                    <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
                                                </div>
                                            </div>

                                            <div className="flex items-center py-4">
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                        </g>
                                                    </svg>
                                                    12.3 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="border-gray-800" />
                                    </article>
                                </li>
                                <li>
                                    {/* <!--second tweet--> */}
                                    <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                        <div className="flex flex-shrink-0 p-4 pb-0">
                                            <a href="/" className="flex-shrink-0 group block">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-base leading-6 font-medium text-white">
                                                            Sonali Hirave
                                                            <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                @ShonaDesign  . 16 April
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="pl-16">
                                            <p className="text-base width-auto font-medium text-white flex-shrink">
                                                Day 07 of the challenge <a href="/" className="text-blue-400">#100DaysOfCode</a>
                                                I was wondering what I can do with <a href="/" className="text-blue-400">#tailwindcss</a>, so just started building
                                                Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                [07/100]
                                                <a href="/" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                            </p>

                                            <div className="md:flex-shrink pr-6 pt-3">
                                                <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: '200px', backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)' }}>
                                                    <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
                                                </div>
                                            </div>

                                            <div className="flex items-center py-4">
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                        </g>
                                                    </svg>
                                                    12.3 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="border-gray-800" />
                                    </article>
                                </li>
                            </ul>

                        </section>

                        <aside className="w-1/5 h-12 ">
                            {/* <!--Aside menu (right side)--> */}
                            <div  style={{ maxWidth: '350px' }} className="overflow-y-auto">
                                <div className="overflow-y-auto fixed h-screen">
                                    <div className="relative text-gray-300 w-80 p-5">
                                        <button type="submit" className="absolute ml-4 mt-3 mr-4">
                                            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                                            </svg>
                                        </button>
                                        <input type="search" name="search" placeholder="Search Twitter" className="bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0" />
                                    </div>
                                    {/* trending tweet section */}
                                    <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
                                        <div className="flex">
                                            <div className="flex-1 m-2">
                                                <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Germany trends</h2>
                                            </div>
                                            <div className="flex-1 px-4 py-2 m-2">
                                                <a href="" className="text-2xl rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                                                    <svg className="m-2 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <hr className="border-gray-800" />
                                        {/* Add your trending tweet content here */}
                                        <aside className="w-2/4 h-12 position-relative">
                                            {/* <!--Aside menu (right side)--> */}
                                            <div style={{ maxWidth: '350px' }}>
                                                <div className="overflow-y-auto fixed h-screen">

                                                    {/* trending tweet section */}
                                                    <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
                                                        <div className="flex">
                                                            <div className="flex-1">
                                                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">1 . Trending</p>
                                                                <h2 className="px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
                                                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">12,466 Tweets</p>
                                                            </div>
                                                            <div className="flex-1 px-4 py-2 m-2">
                                                                <a href="" className="text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                                    <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M19 9l-7 7-7-7"></path>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <hr className="border-gray-800" />
                                                        {/* Add more trending tweets here */}
                                                        <div className="flex">
                                                            <div className="flex-1">
                                                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">2 . Trending</p>
                                                                <h2 className="px-4 ml-2 w-48 font-bold text-white">#Balen</h2>
                                                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">10,416 Tweets</p>
                                                            </div>
                                                            <div className="flex-1 px-4 py-2 m-2">
                                                                <a href="" className="text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                                    <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M19 9l-7 7-7-7"></path>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <hr className="border-gray-800" />


                                                        <div className="flex">
                                                            <div className="flex-1">
                                                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">3 . Trending</p>
                                                                <h2 className="px-4 ml-2 w-48 font-bold text-white">#DV lottery</h2>
                                                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">9,416 Tweets</p>
                                                            </div>
                                                            <div className="flex-1 px-4 py-2 m-2">
                                                                <a href="" className="text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                                    <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M19 9l-7 7-7-7"></path>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <hr className="border-gray-800" />

                                                        <div className="flex">
                                                            <div className="flex-1">
                                                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">4 . Trending</p>
                                                                <h2 className="px-4 ml-2 w-48 font-bold text-white">#SEE eEsult</h2>
                                                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">9,416 Tweets</p>
                                                            </div>
                                                            <div className="flex-1 px-4 py-2 m-2">
                                                                <a href="" className="text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                                    <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M19 9l-7 7-7-7"></path>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <hr className="border-gray-800" />
                                                        {/* <!--show more--> */}

                                                        <div className="flex">
                                                            <div className="flex-1 p-4">
                                                                <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* --- peole suggestion to follow section */}
                                                    <div class="max-w-sm rounded-lg  bg-dim-700 overflow-hidden shadow-lg m-4">
                                                   <div class="flex">
                                                   <div class="flex-1 m-2">
                                                  <h2 class="px-4 py-2 text-xl w-48 font-semibold text-white">Who to follow</h2>
                                                        </div>
                                                       </div>


                                                  <hr class="border-gray-800"></hr>
{/*  first folow  */}


                                                    <div className="flex flex-shrink-0">
                                                        <div className="flex-1">
                                                            <div className="flex items-center w-48">
                                                                <div>
                                                                    <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                                </div>
                                                                <div className="ml-3 mt-3">
                                                                    <p className="text-base leading-6 font-medium text-white">
                                                                        Sonali Hirave
                                                                    </p>
                                                                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                        @ShonaDesign
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 px-4 py-2 m-2">
                                                            <a href="" className="float-right">
                                                                <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                                                                    Follow
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <hr className="border-gray-800" />
                                                    {/* <!--second person who to follow--> */}


                                                    <div className="flex flex-shrink-0">
                                                        <div className="flex-1">
                                                            <div className="flex items-center w-48">
                                                                <div>
                                                                    <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                                </div>
                                                                <div className="ml-3 mt-3">
                                                                    <p className="text-base leading-6 font-medium text-white">
                                                                        Sonali Hirave
                                                                    </p>
                                                                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                        @ShonaDesign
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 px-4 py-2 m-2">
                                                            <a href="" className="float-right">
                                                                <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                                                                    Follow
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <hr className="border-gray-800" />

                                                    {/* <!--show more--> */}

                                                    <div className="flex">
                                                        <div className="flex-1 p-5 ">
                                                            <h2 className="px-4 ml-2  w-48 font-bold text-blue-400">Show more</h2>
                                                        </div>
                                                    </div>

                                                </div>
                                                </div>

{/* 
                                                <div className="flow-root m-6 inline">
                                                    <div className="flex-1">
                                                        <a href="/">
                                                            <p className="text-sm leading-6 font-medium text-gray-500">Terms Privacy Policy Cookies Imprint Ads info
                                                            </p>
                                                        </a>
                                                    </div>
                                                    <div className="flex-2">
                                                        <p className="text-sm leading-6 font-medium text-gray-600"> © 2020 Twitter, Inc.</p>
                                                    </div>
                                                </div> */}
                                            </div>

                                        </aside>

                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;