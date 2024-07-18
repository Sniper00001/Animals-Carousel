// src/components/Carousel.js
import "../App.css";
import useCarousel from "./Usecarouselhook";
import Thumbnail from "./Thumbnail";
import CarouselItem from "./CarouselItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef,useState } from "react";

const Carousel = () => {
  const { items } = useCarousel(); // Ensure useCarousel is defined and returns items correctly

  const sliderRef = useRef(null); // Check if sliderRef is properly used
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  const nextSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Ensure slickNext method exists
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Ensure slickPrev method exists
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay for manual control
    afterChange: handleAfterChange,
  };

  return (
    <div className="carousel">
      <div className="list">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <CarouselItem key={index} item={item} />
          ))}
        </Slider>
      </div>

      {/* Uncomment and check Thumbnail logic if needed */}
      <div className="thumbnail">
        {items.map((item, index) => (
          <Thumbnail key={index} item={item}  isActive={index === currentSlide} />
        ))}
      </div>

      <div className="Arrows">
        <button onClick={prevSlide}>{"<"}</button>
        <button onClick={nextSlider}>{">"}</button>
      </div>
    </div>
  );
};

export default Carousel;
