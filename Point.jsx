import React from 'react'

const Point = ({ fromCity, fromCode, toCity, toCode }) => {
  return (
    <div className='d-flex align-items-center justify-content-between gap-3 p-3 border rounded bg-white'>
      <div>
        <p className='mb-1'>From</p>
        <h4 className='mb-1'>CHENNAI{fromCity}</h4>
        <p className='mb-1'>CHI{fromCode}</p>
      </div>
      <hr className='flex-fill' style={{ borderStyle: 'dashed' }} />
      <div className='text-end'>
        <p className='mb-1'>To</p>
        <h4 className='mb-1'>RUSSIA{toCity}</h4>
        <p className='mb-1'>RU1{toCode}</p>
      </div>
    </div>
  )
}

export default Point
