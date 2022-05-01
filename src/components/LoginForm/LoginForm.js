import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';

const LoginForm = ({ children }) => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [userError, setUserError] = useState({
        email: '',
        password: ''
    });

    const handleFormInput = e => {
        if (e.target.name === 'email') {
            const emailInput = e.target.value;
            if (emailInput === '') {
                setUserError({ ...userError, email: 'Email is required' });
                setUserInfo({ ...userInfo, email: '' });
            } else if (/\S+@\S+\.\S+/.test(emailInput)) {
                setUserError({ ...userError, email: '' });
                setUserInfo({ ...userInfo, email: emailInput });
            } else {
                setUserError({ ...userError, email: 'Invalid Email' });
                setUserInfo({ ...userInfo, email: '' });
            }
        } else {
            const passwordInput = e.target.value;
            if (passwordInput === '') {
                setUserError({ ...userError, password: 'Password is required' });
                setUserInfo({ ...userInfo, password: '' });
            } else if (passwordInput.length > 5) {
                setUserError({ ...userError, password: '' });
                setUserInfo({ ...userInfo, password: passwordInput });
            } else {
                setUserError({ ...userError, password: 'Password is too Short' });
                setUserInfo({ ...userInfo, password: '' });
            }
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        if (userInfo.email && userInfo.password) {
            signInWithEmailAndPassword(userInfo.email, userInfo.password);
        }
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    return (
        <>
            {children}
            {loading && <Loading />}
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
            {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
            <p className='mt-3 mb-0 color text-center' style={{ cursor: 'pointer' }}>Lost your password?</p>
        </>
    );
};

export default LoginForm;