// SignUp.js
import React, { useState } from 'react';

function SignUp() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUserName = (e) => setUserName(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

    const handleSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        console.log('UserName:', userName);
        console.log('Password:', password);
        console.log('ConfirmPassword:', confirmPassword);

        setErrorMessage('');
    }

    return (
        <div>
            <div className="bg-white relative lg:py-5">
                <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                    <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for an account</p>
                    <div className="w-full mt-6 relative space-y-6">
                        <div className="relative">
                            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Username</p>
                            <input onChange={handleUserName} placeholder="Nabin japrel" type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                        </div>
                        <div className="relative">
                            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                            <input onChange={handlePassword} placeholder="*****" type="password" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                        </div>
                        <div className="relative">
                            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Confirm Password</p>
                            <input onChange={handleConfirmPassword} placeholder="*****" type="password" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-6 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                        </div>
                        <div className="relative">
                            <button onClick={handleSignup} className="w-full inline-block pt-6 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">Sign</button>
                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
