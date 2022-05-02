import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '60vh' }} className="d-flex align-items-center justify-content-center">
            <Spinner animation="border" className='color' />
        </div>
    );
};

export default Loading;