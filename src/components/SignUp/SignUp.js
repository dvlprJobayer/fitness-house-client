import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            axios.post('https://hidden-taiga-61073.herokuapp.com/get-token', { email: user.user.email }).then(res => {
                localStorage.setItem('token', res.data.token);
            });
        }
    }, [user, navigate, from]);

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
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
                setUserInfo({ ...userInfo, email: '' });
            } else if (/\S+@\S+\.\S+/.test(emailInput)) {
                setUserError({ ...userError, email: '' });
                setUserInfo({ ...userInfo, email: emailInput });
            } else {
                setUserError({ ...userError, email: 'Invalid Email' });
                setUserInfo({ ...userInfo, email: '' });
            }
        } else if (e.target.name === 'password') {
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
        } else {
            const confirmPasswordInput = e.target.value;
            if (confirmPasswordInput === '') {
                setUserError({ ...userError, confirmPassword: 'Confirm Password is required' });
                setUserInfo({ ...userInfo, confirmPassword: '' });
            } else if (confirmPasswordInput === userInfo.password) {
                setUserError({ ...userError, confirmPassword: '' });
                setUserInfo({ ...userInfo, confirmPassword: confirmPasswordInput });
            } else {
                setUserError({ ...userError, confirmPassword: 'Password didn\'t match' });
                setUserInfo({ ...userInfo, confirmPassword: '' });
            }

        }
    }

    const handleRegister = e => {
        e.preventDefault();
        if (userInfo.email && userInfo.password && userInfo.confirmPassword) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            toast.success('Verification Email sent');
        }
    }

    return (
        <div className='container mt-3 mb-4 pb-3'>
            <div className="row">
                <div className="col-md-6 pb-5 pt-4 border-end pe-5">
                    <h1 className='fw-normal text-center text-uppercase mb-3 color'>Sign up</h1>
                    {
                        loading ? <Loading /> :
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
                    }
                    {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
                </div>
                <div className="col-md-6 text-center pt-4">
                    <h2>Already have an account?</h2>
                    <Link to="/login" className='text-uppercase my-4 btn btn-out-main btn-lg'>Log in</Link>
                    <SocialLogin />
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;