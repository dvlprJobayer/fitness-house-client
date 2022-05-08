import React, { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import axios from 'axios';

const SocialLogin = ({ children }) => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            axios.post('https://hidden-taiga-61073.herokuapp.com/get-token', { email: user.user.email }).then(res => {
                localStorage.setItem('token', res.data.token);
            })
        }
    }, [user, from, navigate]);
    useEffect(() => {
        if (loading) {
            <Loading />
        }
    }, [loading]);

    return (
        <div className='mt-3'>
            <div className="px-3 border-bottom">
                <div className='d-flex align-items-center justify-content-center mb-3'>
                    <div style={{ height: '1px', width: '95px', backgroundColor: 'lightgrey' }}></div>
                    <div className='text-uppercase mx-3 fw-bold'>or login with</div>
                    <div style={{ height: '1px', width: '95px', backgroundColor: 'lightgrey' }}></div>
                </div>
                <div className='mx-2'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-out-main rounded-0 w-100 mb-4 d-flex align-items-center justify-content-center'><div className='bg-white p-1'><FcGoogle className='fs-5' /></div> <p style={{ width: '100%', fontWeight: '500' }} className='mb-0 text-uppercase me-3'>Google</p></button>
                    <p className='text-danger'>{error && error.message}</p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SocialLogin;