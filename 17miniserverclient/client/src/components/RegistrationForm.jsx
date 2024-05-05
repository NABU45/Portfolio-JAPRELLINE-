import React, { useState } from 'react';

const RegistrationForm = () => {
    // State for managing form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Event handler for email input
    const handleEmailChange = (e) => setEmail(e.target.value);

    // Event handler for password input
    const handlePasswordChange = (e) => setPassword(e.target.value);

    // Event handler for confirm password input
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    // Event handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // TODO: Implement logic for form submission (e.g., making API request to register the user)

        // Reset form inputs and error state after successful submission
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-100 text-sm font-bold mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-100 text-sm font-bold mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-100 text-sm font-bold mb-2">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full mt-5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
