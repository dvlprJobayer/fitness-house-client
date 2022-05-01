import React from 'react';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({ children }) => {
    return (
        <div className='mt-3'>
            <div className="px-3 border-bottom">
                <div className='d-flex align-items-center justify-content-center mb-3'>
                    <div style={{ height: '1px', width: '90px', backgroundColor: 'lightgrey' }}></div>
                    <div className='text-uppercase mx-3 fw-bold'>or login with</div>
                    <div style={{ height: '1px', width: '90px', backgroundColor: 'lightgrey' }}></div>
                </div>
                <div className='mx-2'>
                    <button className='btn btn-out-main rounded-0 w-100 mb-4 d-flex align-items-center justify-content-center'><div className='bg-white p-1'><FcGoogle className='fs-5' /></div> <p style={{ width: '100%', fontWeight: '500' }} className='mb-0 text-uppercase me-3'>Google</p></button>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SocialLogin;