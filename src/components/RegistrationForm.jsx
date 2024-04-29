import { useState } from "react";

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

        // Check if password and confirm password match
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }

        // Prepare the data object to be sent to the backend
        const userData = {
          email: email,
          password: password,
          confirmPassword:confirmPassword,
        };
        console.log(userData);

        try {
          // Make a POST request to the backend API
          const response = await fetch('http://localhost:8003/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },  
            body: JSON.stringify(userData),
          });

          // Check if the request was successful
          if (response.ok) {
            // Registration successful
            console.log('User registered successfully');
            setError('');
          } else {
            // Registration failed
            setError('Registration failed');
            // Add your logic for failed registration, e.g., display error message to user
          }
        } catch (error) {
          // Error occurred while making the request
          console.error('Error:', error);
          setError('Error occurred. Please try again later.');
        }
    };

    return (
        <form
        onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full h-10 px-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full h-10 px-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full h-10 px-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                    required
                />
            </div>
            <button
            // onClick={handleSubmit}
                type="submit"
                className="w-full mt-5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
