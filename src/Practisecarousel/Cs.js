// src/Carousel.js

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cs = ({ items }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay for manual control
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (

    <>
    <div>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt={item.alt} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
      
    </div>
    <div className="arrow" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide} style={{ marginLeft: '10px' }}>Next</button>
      </div>

    </>
  );
};

export default Cs;
