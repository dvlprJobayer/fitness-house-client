import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {

    const navigate = useNavigate();

    return (
        <div className='container'>
            <button onClick={() => navigate('/add-item')}>Add new Item</button>
        </div>
    );
};

export default ManageInventories;