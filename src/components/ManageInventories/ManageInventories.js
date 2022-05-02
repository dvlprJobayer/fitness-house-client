import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightSquare } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';

const ManageInventories = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://hidden-taiga-61073.herokuapp.com/inventories').then(res => setItems(res.data))
    }, []);

    console.log(items[6]);

    const navigate = useNavigate();

    return (
        <div className='container'>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col" className='ps-4'>Picture</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id}>
                            <td><img style={{ objectFit: 'contain' }} height={80} width={100} src={item.img} alt="" /></td>
                            <td className='fw-bold'>{item.name}</td>
                            <td className='color'>${item.price}</td>
                            <td className='color ps-4'>{item.quantity}</td>
                            <td>{item.supplier}</td>
                            <td><button className='btn btn-main'>Delete <BsFillTrashFill /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <button className='btn btn-out-main w-25 mx-auto btn-lg d-block my-4' onClick={() => navigate('/add-item')}>Add New Item <BsArrowRightSquare className='ms-3' /></button>
        </div>
    );
};

export default ManageInventories;