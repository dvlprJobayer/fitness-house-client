import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
    }

    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-6 pb-5 pt-4 border-end pe-5">
                    <h1 className='fw-normal text-center text-uppercase mb-3 color'>Log in</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className='form-label fs-5' htmlFor="email">Email <span className='color'>*</span></label>
                            <input className='form-control fs-5' id='email' type="email" name='email' required />
                        </div>
                        <div className="mb-4">
                            <label className='form-label fs-5' htmlFor="password">Password <span className='color'>*</span></label>
                            <input className='form-control fs-5' id='password' type="password" name='password' required />
                        </div>
                        <input className='btn w-100 btn-lg btn-main text-uppercase' type="submit" value="Login" />
                    </form>
                </div>
                <div className="col-md-6 text-center pt-4">
                    <h2>Don't have an account?</h2>
                    <Link to="/signup" className='text-uppercase my-4 btn btn-out-main btn-lg'>Sign up</Link>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;