import React from 'react'
import { Card } from 'react-bootstrap';
import { BsThreeDots } from "react-icons/bs";

const SpiceJetFlight = () => {
  return (
    <Card className='mx-2 mb-3'>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <Card.Title className='text-primary fs-6 mb-0'>
            <time>06:00 AM</time> <time>09:00 AM</time>
          </Card.Title>
          <span className='fs-8'><BsThreeDots /></span>
        </div>
        <div className='d-flex align-items-center gap-2 justify-content-between'>
          <div className='d-flex align-items-center gap-3'>
            <img
              src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-53552,resizemode-75,msid-113189816/industry/transportation/airlines-/-aviation/spicejet-is-struggling-to-defy-gravity-what-are-the-odds.jpg'
              alt='SpiceJet Icon'
              width={40}
              className='rounded-circle'
            />
            <div>
              <h5 className='mb-0'>SpiceJet</h5>
              <p className='mb-0 text-success'>BLR . MAA . HYD</p>
            </div>
          </div>
          <div className='text-end'>
            <h5 className='mb-0'>INR ₹1200</h5>
            <p className='mb-0 text-secondary-sub fs-6'>Price</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SpiceJetFlight;
