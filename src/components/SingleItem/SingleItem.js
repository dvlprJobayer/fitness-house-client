import React from 'react';
import { Card, Col } from 'react-bootstrap';

const singleItem = ({ item }) => {

    const { img, name, price, short_des, quantity, supplier } = item;

    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" height={250} src={img} style={{ objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title className='color'>{name}</Card.Title>
                    <Card.Text>
                        {short_des}
                    </Card.Text>
                </Card.Body>
                <div className="px-3 pb-3">
                    <h5>Price: <span className="color">${price}</span></h5>
                    <p className='mb-2'>Quantity: <span className="color fw-bold">{quantity}</span></p>
                    <h5>Supplier: <span className="color">{supplier}</span></h5>
                    <button className='btn btn-lg bg-color mt-2 w-100'>Manage</button>
                </div>
            </Card>
        </Col>
    );
};

export default singleItem;