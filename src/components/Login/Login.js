import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className='card mx-auto my-4 p-md-5 p-4 shadow form'>
                        <h1 className='fw-normal text-center mb-4 color'>Login</h1>
                        <form>
                            <div className="mb-4">
                                <label className='form-label fs-5 color' htmlFor="email">Email:</label>
                                <input className='form-control fs-5' id='email' type="email" name='email' />
                            </div>
                            <div className="mb-4">
                                <label className='form-label fs-5 color' htmlFor="password">Password:</label>
                                <input className='form-control fs-5' id='password' type="password" name='password' />
                            </div>
                            <input className='btn w-100 btn-lg fs-4 btn-main' type="submit" value="Login" />
                        </form>
                        <p className='my-2 fs-5 fw-light text-center'>New to Jacob Billy? <Link className='color' to='/signup'>Create New Account</Link></p>
                        <p className='my-2 fs-5 fw-light text-center'>Forget Password? <span className='color' style={{ cursor: 'pointer', textDecoration: 'underline' }} >Reset Password</span></p>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    );
};

export default Login;