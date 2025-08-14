import React from 'react'
import { Card } from 'react-bootstrap';
import { BsThreeDots } from "react-icons/bs";

const AirIndiaFlight = () => {
  return (
    <Card className='mx-2 mb-3'>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <Card.Title className='text-primary fs-6 mb-0'>
            <time>12:00 PM</time> <time>16:30 PM</time>
          </Card.Title>
          <span className='fs-8'><BsThreeDots /></span>
        </div>
        <div className='d-flex align-items-center gap-2 justify-content-between'>
          <div className='d-flex align-items-center gap-3'>
            <img
              src='https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202308/blob110823105252.png'
              alt='Air India Icon'
              width={40}
              className='rounded-circle'
            />
            <div>
              <h5 className='mb-0'>Air India</h5>
              <p className='mb-0 text-success'>DEL . BOM . DXB</p>
            </div>
          </div>
          <div className='text-end'>
            <h5 className='mb-0'>INR ₹1500</h5>
            <p className='mb-0 text-secondary-sub fs-6'>Price</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default AirIndiaFlight;
