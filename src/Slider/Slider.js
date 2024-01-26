import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SliderBanner = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  };

  return (
    <div className="slider-banner">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src="/banner-1.jpeg"/>
        </div>
        <div>
          <img src="/banner-2.jpeg"/>
        </div>
        <div>
          <img src="/banner-3.jpeg"/>
        </div>
        <div>
          <img src="/banner-4.jpeg"/>
        </div>
      </Slider>

      <div className="slider-buttons">
        <button
          className="prev-button"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="icon"/>
        </button>
        <button
          className="next-button"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FontAwesomeIcon icon={faChevronRight} className="icon"/>
        </button>
      </div>
    </div>
  );
};

export default SliderBanner;
