import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Yourplan = () => {
    return (
        <div className='d-lg-flex justify-content-evenly mt-5'>
            <div className='mt-5'>
                <h1 className='fw-bold'>Customize your <br /> Jetty plan.</h1>
                <div className='d-flex ms-5 mt-5 mb-5'>

                    <div className='d-flex me-5'>
                        <p className='me-3'>Starts:</p>
                        <p>Jun 22, 2023</p>
                    </div>

                    <div className='d-flex ms-5'>
                        <p className='me-3'>Deductible:</p>
                        <p>$500</p>
                    </div>
                </div>
                <img src="https://i.ibb.co/ZKtLNZ6/job-task-1.png" alt="" srcset="" />
            </div>
            <Card style={{ width: '18rem' }} className='ms-5 mt-3 mb-3'>
                <Card.Body>
                    <Card.Title className='text-primary'><h2 className='fw-bold'>Essential</h2></Card.Title>
                    <Card.Text>
                        <p className='text-muted'>212 South Broadway Street, Apt 23 New York, NY 10012</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between mt-4'>
                        <p>Start Date</p>
                        <p className='fw-bold'>Today</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Deductible</p>
                        <p className='fw-bold'>$500</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between mt-4'>
                        <p>Household Belongings</p>
                        <p className='fw-bold'>$20,0000</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>Electronics Coverage</p>
                        <p className='fw-bold'>$2,000</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>Valueables Coverage</p>
                        <p className='fw-bold'>..........</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Liability</p>
                        <p className='fw-bold'>$20,0000</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Loss of Use</p>
                        <p className='fw-bold'>$6,000</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Medical Payment</p>
                        <p className='fw-bold'>$1,000</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <p>Landlord</p>
                        <p className='fw-bold'>..........</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Other People</p>
                        <p className='fw-bold'>..........</p>
                    </div>
                    <Button variant="primary" size="lg" className='rounded-pill'>
                        18/mo   <span className='ms-3 fw-bold'>Pay Now</span> 
                    </Button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Yourplan;