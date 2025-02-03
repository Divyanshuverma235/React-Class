import { useState } from 'react';

function EmailValidator() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(null);

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function handleChange(event) {
        const email = event.target.value;
        setEmail(email);
        setIsValid(validateEmail(email));
    }

    return (
        <>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
            />
            {isValid === null ? (s
                <p>Please enter an email address.</p>
            ) : isValid ? (
                <p>The email address is valid.</p>
            ) : (
                <p>The email address is not valid.</p>
            )}
        </>
    );
}

export default EmailValidator;
