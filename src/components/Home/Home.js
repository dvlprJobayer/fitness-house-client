import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleItem from '../SingleItem/SingleItem';
import { BsArrowRightSquare } from 'react-icons/bs';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import Loading from '../Loading/Loading';
import './Home.css';
import Slider from '../Slider/Slider';

const Home = () => {

    const [loading, setLoading] = useState(true);

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://hidden-taiga-61073.herokuapp.com/inventory').then(res => {
            setItems(res.data)
            setLoading(false);
        })
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <Banner />
            <div className="container">
                <h2 className='text-uppercase text-center my-4'>Inventory items</h2>
                <div className="d-flex justify-content-center my-4">
                    <span style={{ height: 4, width: 80, backgroundColor: '#e73c3e' }}></span>
                </div>
                {
                    loading ? <Loading /> :
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                items.map(item => <SingleItem key={item._id} item={item}>
                                    <button onClick={() => navigate('/inventory/' + item._id)} className='btn btn-lg btn-out-main mt-2 w-100'>Manage</button>
                                </SingleItem>)
                            }
                        </Row>
                }
                <div className="row">
                    <div className="col-lg-4 col-md-3"></div>
                    <div className="col-lg-4 col-md-6">
                        <Link className='btn btn-main btn-lg my-4 w-100' to="/inventories">Manage Inventories <BsArrowRightSquare className='ms-2' /></Link>
                    </div>
                    <div className="col-lg-4 col-md-3"></div>
                </div>
                <h2 className='text-uppercase text-center my-4'>Customer Reviews</h2>
                <div className="d-flex justify-content-center my-4">
                    <span style={{ height: 4, width: 80, backgroundColor: '#e73c3e' }}></span>
                </div>
                <Slider />
                <h2 className='text-uppercase text-center my-4'>Why Chose Us</h2>
                <div className="d-flex justify-content-center my-4">
                    <span style={{ height: 4, width: 80, backgroundColor: '#e73c3e' }}></span>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-4 mb-2">
                        <div className="d-flex">
                            <BsFillCartCheckFill className='color display-3' />
                            <div className="ms-3">
                                <h6 className='text-uppercase'>Extra fast delivery</h6>
                                <p>Your order will be delivered 3-5 business days after all of your items are available</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-2">
                        <div className="d-flex">
                            <BsFillChatDotsFill className='color display-4' />
                            <div className='ms-3'>
                                <h6>TRUSTED BY THOUSANDS</h6>
                                <p>Trusted by a community of thousands of users.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex">
                            <FaHandshake className='color display-3' />
                            <div className="ms-3">
                                <h6 className='text-uppercase'>Guarantee</h6>
                                <p>If the item you want is available, we can process a return and place a new order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;