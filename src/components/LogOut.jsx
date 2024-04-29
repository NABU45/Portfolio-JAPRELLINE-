// LogOut.js
import React, { useState } from 'react';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import SignpClose from './SignpClose';

const LogOut = () => {
    const [isSignpClose, setIsSignpClose] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openSignpClose = () => {
        setIsSignpClose(true);
    };

    const closeSignpClose = () => {
        setIsSignpClose(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleGoogleLogin = () => {
        window.location.href = 'https://accounts.google.com/login';
    };

    const handleGithubLogin = () => {
        window.location.href = 'https://github.com/login';
    };

    const handleTwitterLogin = () => {
        window.location.href = 'https://twitter.com/login';
    };
    return (
        <div>
            <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full fixed">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white shadow rounded lg:w-1/2 md:w-1/2 w-full p-6 my-2 ">
                        <p tabIndex="0" className="focus:outline-none text-xl font-extrabold leading-6 text-gray-800">Login to your account</p>
                        <p tabIndex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Don't have an account? <a
                            onClick={openSignpClose}
                            href="#" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"> Sign up here</a></p>
                        <button
                            onClick={handleGoogleLogin}
                            aria-label="Continue with google" role="button" className="focus:ring-2 focus:ring-offset-1  py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4  focus:border-indigo-500">
                            <FaGoogle />
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                        </button>
                        <button
                            onClick={handleGithubLogin}
                            aria-label="Continue with github" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                            <FaGithub />
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                        </button>
                        <button
                            onClick={handleTwitterLogin}
                            aria-label="Continue with twitter" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                            <FaTwitter />
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
                        </button>
                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                            <hr className="w-full bg-gray-400  " />
                        </div>
                        <form method='post' action=''>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                                    Email
                                </label>
                                <input id="email" type="email" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={email} onChange={handleEmailChange}
                                    required />
                            </div>
                            <div className="mt-6  w-full">
                                <label htmlFor="pass" className="text-sm font-medium leading-none text-gray-800">
                                    Password
                                </label>
                                <div className="relative flex items-center justify-center">
                                    <input id="pass" type="password" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={password} onChange={handlePasswordChange}
                                        required />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">

                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button
                                    onClick={handleSubmit}
                                    required
                                    type="submit" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                                >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <SignpClose isOpen={isSignpClose} onClose={closeSignpClose} />
        </div>
    );
};

export default LogOut;
