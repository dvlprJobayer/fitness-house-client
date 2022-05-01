import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import LoginForm from '../LoginForm/LoginForm';

const Login = () => {



    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-6 pb-5 pt-4 border-end pe-5">
                    <LoginForm>
                        <h1 className='fw-normal text-center text-uppercase mb-3 color'>Log in</h1>
                    </LoginForm>
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