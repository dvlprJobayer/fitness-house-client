import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

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
                        <LoginForm />
                    </div>
                    <SocialLogin handleCanvasClose={handleCanvasClose}>
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