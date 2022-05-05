import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {

    return (
        <div className='bg-color text-center py-3'>
            <p className="mb-0 mt-1">
                <small>&copy; <strong>Fitness House</strong> {year}. All Rights Reserved</small>
            </p>
        </div>
    );
};

export default Footer;