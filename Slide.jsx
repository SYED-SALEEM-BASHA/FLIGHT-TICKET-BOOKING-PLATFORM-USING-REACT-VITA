import React from 'react'

const Slide = () => {
  return (
    <div className='slide'>
       <div className='d-flex flex-column align-items-center justify-content-between h-100'>
         <div className=' w-100'>
          <h5 className='py-3 text-center'>SYED FLIGHT</h5>
               <nav className='slide-links w-100'>
                <ul>
                  <li className='active'><a href="#home">Home</a></li>
                  <li><a href="#ticket">Ticket</a></li>
                  <li><a href="#schedule">Schedule</a></li>
                  <li><a href="#history">History</a></li>
                  <li><a href="#support">Support</a></li>
                 </ul>
              </nav>

             </div>
             <nav className='slide-links w-100'>
          <ul>
              <li><a href="#settings">Settings</a></li>
          </ul>
      </nav>
      </div>
      </div>

  )
}

export default Slide