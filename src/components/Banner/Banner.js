import React from 'react';

const Banner = () => {
    return (
        <div className='banner d-flex align-items-center justify-content-center'>
            <div className="text-white text-center">
                <h1 className='display-2'>Fitness House</h1>
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <p className='arrow'></p>
                    <p className="triangle-right"></p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <p className='triangle-left'></p>
                    <p className='arrow'></p>
                </div>
                <p className='fs-3'>A gym equipment warehouse</p>
            </div>
        </div>
    );
};

export default Banner;