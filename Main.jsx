import React from 'react'
import Fscard from './Fscard'
import Detail from './detail';
import Detailslide from './Detailslide';
import Point from './Point';

const Main = () => {
  return (
    <div className='height: "100vh", overflow: "auto"'>
      <div>
        <Fscard />
        <div className='my-3'>
          <Point />
        </div>
      </div>
      <Detailslide />
    </div>
  )
}

export default Main