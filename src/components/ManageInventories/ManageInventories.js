import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightSquare } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';
import Loading from '../Loading/Loading';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

Modal.setAppElement('#root');

const ManageInventories = () => {

    const [loading, setLoading] = useState(true);

    const [id, setId] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    function closeModal(bool) {
        const remove = bool;
        if (remove) {
            axios.delete(`https://hidden-taiga-61073.herokuapp.com/inventory/${id}`).then(res => console.log(res.data))
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining);
        }
        setIsOpen(false);
    }
    function openModal(id) {
        setIsOpen(true);
        setId(id);
    }

    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://hidden-taiga-61073.herokuapp.com/inventories').then(res => {
            setItems(res.data);
            setLoading(false);
        })
    }, []);

    const navigate = useNavigate();

    return (
        <div className='container'>
            {
                loading ? <Loading /> :
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
                                    <td><button onClick={() => openModal(item._id)} className='btn btn-main'>Delete <BsFillTrashFill /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3>Are you sure you want to delete?</h3>
                <div className='text-center mt-4'>
                    <button className='btn btn-out-main me-4' onClick={() => closeModal(true)}>Delete <BsFillTrashFill /></button>
                    <button className='btn btn-main' onClick={() => closeModal(false)}>Cancel <IoMdCloseCircle className='fs-5' /></button>
                </div>
            </Modal>
            <button className='btn btn-out-main w-25 mx-auto btn-lg d-block my-4' onClick={() => navigate('/add-item')}>Add New Item <BsArrowRightSquare className='ms-3' /></button>
        </div>
    );
};

export default ManageInventories;