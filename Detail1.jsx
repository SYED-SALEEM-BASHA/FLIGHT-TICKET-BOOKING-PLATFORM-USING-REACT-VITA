import React from 'react'
import { Card } from 'react-bootstrap';
import { BsThreeDots } from "react-icons/bs";

const VistaraFlight = () => {
  return (
    <Card className='mx-2 mb-3'>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <Card.Title className='text-primary fs-6 mb-0'>
            <time>08:00 PM</time> <time>11:30 PM</time>
          </Card.Title>
          <span className='fs-8'><BsThreeDots /></span>
        </div>
        <div className='d-flex align-items-center gap-2 justify-content-between'>
          <div className='d-flex align-items-center gap-3'>
            <img
              src='https://inflightfeed.com/wp-content/uploads/2015/01/UK_Vistara_India_Dec2022_v3.png'
              alt='Vistara Logo'
              width={50}
              height={50}
              className='rounded-circle border p-1 bg-white'
            />
            <div>
              <h5 className='mb-0'>Vistara</h5>
              <p className='mb-0 text-success'>CCU . DEL . BKK</p>
            </div>
          </div>
          <div className='text-end'>
            <h5 className='mb-0'>INR ₹6,500</h5>
            <p className='mb-0 text-secondary-sub fs-6'>Price</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default VistaraFlight;
