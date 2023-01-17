import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const One = ({ priceCard }) => {

    const { name, Description, price, belongings, electonics, liabality } = priceCard;

    return (

        <div className='mt-5 ms-5 mb-4'>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='text-primary'><h2 className='fw-bold'>{name}</h2></Card.Title>
                    <Card.Text>
                        <p className='fw-bolder'>{Description}</p>
                    </Card.Text>
                    <h4 className='text-primary fw-bold'>{price}</h4>
                    <p className='fw-bold text-muted mt-3'>Key Feature</p>
                    <hr />
                    <div className='d-flex justify-content-between mt-4'>
                        <p>Everyday Belongings</p>
                        <p className='fw-bold'>{belongings}</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>Portable Electronics</p>
                        <p className='fw-bold'>{electonics}</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>Personal Liability</p>
                        <p className='fw-bold'>{liabality}</p>
                    </div>

                    <Link to='/plan'>
                        <Button variant="primary" size="lg" className='rounded-pill'>
                            Choose Plan
                        </Button>

                    </Link>
                </Card.Body>
            </Card>
        </div>


    );
};

export default One;