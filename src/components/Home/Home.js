import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleItem from '../SingleItem/SingleItem';
import { BsArrowRightSquare } from 'react-icons/bs';
import Loading from '../Loading/Loading';
import './Home.css';

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
        <div>
            <Banner />
            <div className="container">
                <h2 className='color text-center display-4 my-4'>Inventory items</h2>
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
                <Link className='btn btn-main btn-lg my-4 w-25 mx-auto d-block' to="/inventories">Manage Inventories <BsArrowRightSquare className='ms-2' /></Link>
            </div>
        </div>
    );
};

export default Home;