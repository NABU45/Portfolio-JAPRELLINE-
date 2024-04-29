// PasswordResetForm.js

import { useState } from "react";

const PasswordResetForm = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send a request to your server to handle the password reset logic
        console.log("Password reset request submitted for email:", email);

        // After submitting the request, you might show a confirmation message to the user
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
            />
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default PasswordResetForm;
