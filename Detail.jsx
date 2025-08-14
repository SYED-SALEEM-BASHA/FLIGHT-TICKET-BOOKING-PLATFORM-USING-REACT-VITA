import React from 'react'
import { Card } from 'react-bootstrap';
import { BsThreeDots } from "react-icons/bs";

const IndigoFlight = () => {
  return (
    <Card className='mx-2 mb-3'>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <Card.Title className='text-primary fs-6 mb-0'>
            <time>10:00 AM</time> <time>14:00 PM</time>
          </Card.Title>
          <span className='fs-8'><BsThreeDots /></span>
        </div>
        <div className='d-flex align-items-center gap-2 justify-content-between'>
          <div className='d-flex align-items-center gap-3'>
            <img
              src='https://i.pinimg.com/736x/2d/06/2c/2d062c935dde7754fa80bf011a9dbdc7.jpg'
              alt='Indigo Logo'
              width={50}
              height={50}
              className='rounded-circle border p-1 bg-white'
            />
            <div>
              <h5 className='mb-0'>INDIGO</h5>
              <p className='mb-0 text-success'>AMS . SIN . CGK</p>
            </div>
          </div>
          <div className='text-end'>
            <h5 className='mb-0'>INR ₹5,200</h5>
            <p className='mb-0 text-secondary-sub fs-6'>Price</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default IndigoFlight;
