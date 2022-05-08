import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SingleItem from '../SingleItem/SingleItem';
import { BsFillTrashFill } from 'react-icons/bs';
import { FiRefreshCcw } from 'react-icons/fi';
import Loading from '../Loading/Loading';
import Modal from 'react-modal';
import { signOut } from 'firebase/auth';


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

const MyItems = () => {

    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    function closeModal(bool) {
        const remove = bool;
        if (remove === true) {
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

    const [user] = useAuthState(auth);

    const [loading, setLoading] = useState(true);

    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`https://hidden-taiga-61073.herokuapp.com/my-items?email=${user.email}`, {
            headers: {
                auth: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setItems(res.data);
        }).catch(err => {
            console.log(err.message);
            if (err.response.status === 401 || err.response.status === 403) {
                signOut(auth);
                navigate('/login');
            }
        }).then(() => {
            setLoading(false);
        })
    }, [user, navigate]);

    return (
        <div className='min-vh-100 container'>
            <h1 className='text-center display-4 color mt-2 mb-4'>My Items: {items.length}</h1>
            {
                loading ? <Loading /> :
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            items.map(item => <SingleItem key={item._id} item={item}>
                                <div className='mt-3'>
                                    <Link to={`/inventory/${item._id}`} className='btn btn-out-main'>Update <FiRefreshCcw /></Link>
                                    <button onClick={() => openModal(item._id)} className='btn btn-main ms-3'>Delete <BsFillTrashFill /></button>
                                </div>
                            </SingleItem>)
                        }
                    </Row>
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
                    <button className='btn btn-main' onClick={() => closeModal(false)}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
};

export default MyItems;