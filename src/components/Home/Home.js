import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import SingleItem from '../SingleItem/SingleItem';
import './Home.css';

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://hidden-taiga-61073.herokuapp.com/inventory').then(res => setItems(res.data))
    }, []);

    return (
        <div>
            <Banner />
            <div className="container">
                <h2 className='color text-center display-4 fw-normal my-4'>Inventory items</h2>
                <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                    {
                        items.map(item => <SingleItem key={item._id} item={item} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;