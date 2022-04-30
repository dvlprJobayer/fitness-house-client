import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        axios.get(`https://hidden-taiga-61073.herokuapp.com/inventory/${id}`).then(res => setItem(res.data))
    }, [id]);

    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    const addQuantity = event => {
        event.preventDefault();
        const newQuantity = +event.target.quantity.value + +quantity;
        setQuantity(newQuantity);
        axios.put(`https://hidden-taiga-61073.herokuapp.com/inventory/${id}`, { quantity: newQuantity }).then(res => console.log(res))
        event.target.reset();
    }

    const decreaseQuantity = () => {
        const newQuantity = quantity - 1
        setQuantity(newQuantity);
        axios.put(`https://hidden-taiga-61073.herokuapp.com/inventory/${id}`, { quantity: newQuantity }).then(res => console.log(res))
    }

    return (
        <div className="container my-4">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img style={{ objectFit: 'contain' }} src={item.img} alt="" width={350} />
                </div>
                <div className="col-lg-7 text-center">
                    <h3 className='mt-2'>{item.name}</h3>
                    <p>{item.short_des}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Quantity</th>
                                <th className='color'>{quantity}</th>
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
                                <td className='color'>{quantity ? 'In stock' : 'Out of stock'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button disabled={!quantity && true} onClick={decreaseQuantity} className='btn bg-color btn-lg'>Delivered</button>
                </div>
            </div>
            <div className="row">
                <h3 className='text-center display-5 fw-normal color mt-4'>ReStock the Item?</h3>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <Form onSubmit={addQuantity}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Put a Quantity</Form.Label>
                            <Form.Control name='quantity' type="text" placeholder="Put a Quantity" autoComplete='off' />
                        </Form.Group>
                        <button className='btn btn-out-main btn-lg w-100'>Submit</button>
                    </Form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default InventoryItem;