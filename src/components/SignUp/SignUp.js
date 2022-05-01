import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AiOutlineExclamationCircle } from "react-icons/ai";

const SignUp = () => {

    const userInfo = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [userError, setUserError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
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
        } else if (e.target.name === 'password') {
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
        } else {
            const confirmPasswordInput = e.target.value;
            if (confirmPasswordInput === '') {
                setUserError({ ...userError, confirmPassword: 'Confirm Password is required' });
                userInfo[e.target.name] = '';
            } else if (confirmPasswordInput === userInfo.password) {
                setUserError({ ...userError, confirmPassword: '' });
                userInfo[e.target.name] = confirmPasswordInput;
            } else {
                setUserError({ ...userError, confirmPassword: 'Password didn\'t match' });
                userInfo[e.target.name] = '';
            }
        }
    }

    const handleRegister = e => {
        e.preventDefault();
    }

    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-6 pb-5 pt-4 border-end pe-5">
                    <h1 className='fw-normal text-center text-uppercase mb-3 color'>Sign up</h1>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label className='form-label fs-5' htmlFor="email">Email <span className='color'>*</span></label>
                            <input onChange={(e) => handleFormInput(e)} className='form-control fs-5' id='email' type="email" name='email' required />
                            {userError.email && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.email}</p>}
                        </div>
                        <div className="mb-3">
                            <label className='form-label fs-5' htmlFor="password">Password <span className='color'>*</span></label>
                            <input onChange={(e) => handleFormInput(e)} className='form-control fs-5' id='password' type="password" name='password' required />
                            {userError.password && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.password}</p>}
                        </div>
                        <div className="mb-4">
                            <label className='form-label fs-5' htmlFor="confirm-password">Confirm Password <span className='color'>*</span></label>
                            <input onChange={(e) => handleFormInput(e)} className='form-control fs-5' id='confirm-password' type="password" name='confirmPassword' required />
                            {userError.confirmPassword && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.confirmPassword}</p>}
                        </div>
                        <input className='btn w-100 btn-lg btn-main text-uppercase' type="submit" value="Sign up" />
                    </form>
                </div>
                <div className="col-md-6 text-center pt-4">
                    <h2>Already have an account?</h2>
                    <Link to="/login" className='text-uppercase my-4 btn btn-out-main btn-lg'>Log in</Link>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;