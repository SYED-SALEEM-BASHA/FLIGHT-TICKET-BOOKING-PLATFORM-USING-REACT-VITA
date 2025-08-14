import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Fscard = () => {
    return (
        <div className='w-fit'>
            <Card className='card-des my-3'>
                <Card.Body>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <Card.Subtitle className="mb-2 fs-7">READY TO FLY HIGH WITH US ?</Card.Subtitle>
                            <img src={"https://classroomclipart.com/image/content7/64951/thumb.gif"}
                                className='fs-image' />
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <Form>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Location" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Destination" />
                                </Form.Group>

                                 <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>

                                <Button variant="primary" className='w-100 my-4' type="submit" style={{ backgroundColor: "#46f652ff", border: "none" }}>
                                    Search Flights
                                </Button>
                            </Form>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Fscard