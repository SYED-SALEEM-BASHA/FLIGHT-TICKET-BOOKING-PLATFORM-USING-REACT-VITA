import React from 'react'
import Slider from "react-slick";
import Fscard from './Fscard'
import Detail from './detail';
import Remain from './Remain';
import Detail1 from './Detail1';
import Detail2 from './Detail2';
import Detail3 from './Detail3';

const Detailslide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <div className='px-2'>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Detail />
          </div>
          <div>
            <Detail1 />
          </div>
          <div>
            <Detail2 />
          </div>
          <div>
            <Detail3 />
          </div>

        </Slider>
      </div>
    </div>
  )
}

export default Detailslide