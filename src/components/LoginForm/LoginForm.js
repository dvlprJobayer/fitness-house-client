import React, { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";

const LoginForm = ({ children }) => {

    const userInfo = {
        email: '',
        password: ''
    }
    const [userError, setUserError] = useState({
        email: '',
        password: ''
    });

    const handleFormInput = e => {
        if (e.target.name === 'email') {
            const emailInput = e.target.value;
            if (emailInput === '') {
                setUserError({ ...userError, email: 'Email is required' });
                userInfo[e.target.name] = '';
            } else if (/\S+@\S+\.\S+/.test(emailInput)) {
                setUserError({ ...userError, email: '' });
                userInfo[e.target.name] = emailInput;
            } else {
                setUserError({ ...userError, email: 'Invalid Email' });
                userInfo[e.target.name] = '';
            }
        } else {
            const passwordInput = e.target.value;
            if (passwordInput === '') {
                setUserError({ ...userError, password: 'Password is required' });
                userInfo[e.target.name] = '';
            } else if (passwordInput.length > 5) {
                setUserError({ ...userError, password: '' });
                userInfo[e.target.name] = passwordInput;
            } else {
                setUserError({ ...userError, password: 'Password is too Short' });
                userInfo[e.target.name] = '';
            }
        }
    }

    const handleLogin = e => {
        e.preventDefault();
    }

    return (
        <>
            {children}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className='form-label fs-5' htmlFor="email">Email <span className='color'>*</span></label>
                    <input onChange={(e) => handleFormInput(e)} className='form-control fs-5' id='email' type="email" name='email' required />
                    {userError.email && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.email}</p>}
                </div>
                <div className="mb-4">
                    <label className='form-label fs-5' htmlFor="password">Password <span className='color'>*</span></label>
                    <input onChange={(e) => handleFormInput(e)} className='form-control fs-5' id='password' type="password" name='password' required />
                    {userError.password && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.password}</p>}
                </div>
                <input className='btn w-100 btn-lg btn-main text-uppercase' type="submit" value="Login" />
            </form>
            <p className='mt-3 mb-0 color text-center' style={{ cursor: 'pointer' }}>Lost your password?</p>
        </>
    );
};

export default LoginForm;