import React from 'react'
import Slide from '../components/Slide';
import Main from '../components/Main';
import Remain from '../components/Remain';

export const Homepage = () => {
  return (
   <div className='height: "100vh", overflow: "auto"'>
    <div className='d-flex gap-0'>
      <Slide />
      <div className='main-container my-0'>
           <Main /> 
        </div>

      <div className='my-0'>
        <Remain />
      </div>
    </div>
   </div>
  );
};

export default Homepage;
