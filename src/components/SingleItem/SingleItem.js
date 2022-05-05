import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleItem = ({ item, children }) => {

    const { img, name, price, short_des, quantity, supplier } = item;

    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" height={250} src={img} style={{ objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title className='color'>{name}</Card.Title>
                    <Card.Text title={short_des}>
                        {short_des.slice(0, 70)}...
                    </Card.Text>
                </Card.Body>
                <div className="px-3 pb-3">
                    <h5>Price: <span className="color">${price}</span></h5>
                    <p className='mb-2'>Quantity: <span className="color fw-bold">{quantity}</span></p>
                    <h5>Supplier: <span className="color">{supplier}</span></h5>
                    {children}
                </div>
            </Card>
        </Col>
    );
};

export default SingleItem;