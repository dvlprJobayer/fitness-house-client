import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        axios.get(`https://hidden-taiga-61073.herokuapp.com/inventory/${id}`).then(res => setItem(res.data))
    }, [id])

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-lg-5">
                    <img src={item.img} alt="" width={350} height={450} />
                </div>
                <div className="col-lg-7 text-center">
                    <h3 className='mt-2'>{item.name}</h3>
                    <p>{item.short_des}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Quantity</th>
                                <th className='color'>{item.quantity}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Price</td>
                                <td className='color'>${item.price}</td>
                            </tr>
                            <tr>
                                <td><h6>Supplier</h6></td>
                                <td className='color'>{item.supplier}</td>
                            </tr>
                            <tr>
                                <td><h6>Status</h6></td>
                                <td className='color'>{item.quantity ? 'Sell' : 'Sold'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='btn bg-color btn-lg'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;