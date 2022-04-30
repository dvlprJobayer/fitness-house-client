import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

const LoginCanvas = () => {

    const [canvasShow, setCanvasShow] = useState(false);

    const handleCanvasClose = () => setCanvasShow(false);
    const handleCanvasShow = () => setCanvasShow(true);

    return (
        <>
            <span style={{ cursor: 'pointer' }} onClick={handleCanvasShow} className="color fw-bold">Login</span>
            <Offcanvas show={canvasShow} onHide={handleCanvasClose} placement="end" scroll={true}>
                <Offcanvas.Header className='border-bottom'>
                    <Offcanvas.Title className='text-uppercase color'>Sign In</Offcanvas.Title>
                    <h5 className='ms-auto text-uppercase' onClick={handleCanvasClose} style={{ cursor: 'pointer' }}>Close</h5>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <div className="px-3 pt-3">
                        <form>
                            <div className="mb-4">
                                <label className='form-label' htmlFor="email">Email <span className='color'>*</span></label>
                                <input className='form-control rounded-0' id='email' type="email" name='email' />
                            </div>
                            <div className="mb-4">
                                <label className='form-label' htmlFor="password">Password <span className='color'>*</span></label>
                                <input className='form-control rounded-0' id='password' type="password" name='password' />
                            </div>
                            <input className='btn w-100 text-uppercase fw-bold btn-main rounded-0' type="submit" value="Log in" />
                        </form>
                        <p className='mt-3 mb-0 color text-center' style={{ cursor: 'pointer' }}>Lost your password?</p>
                    </div>
                    <SocialLogin>
                        <div className="text-center mt-3">
                            <FiUser className='fs-1' />
                            <p>No account yet?</p>
                            <Link onClick={() => handleCanvasClose(false)} className='color' to="/signup">CREATE AN ACCOUNT</Link>
                        </div>
                    </SocialLogin>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default LoginCanvas;