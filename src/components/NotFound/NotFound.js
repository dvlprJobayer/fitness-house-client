import React from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';

const NotFound = () => {
    return (
        <div className='container text-center'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className='img-fluid' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    <h2>Oops, This Page Could Not Be Found!</h2>
                    <button className='mt-4 btn btn-main btn-lg'>Go to Homepage<BsArrowRightSquare className='ms-3' /></button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;