import React from "react";
import Slider from "react-slick";
import Flightdetailcard from "./Flightdetailcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Flightdetailslider = ({ flights = [] }) => {
  const settings = {
    dots: true,
    infinite: flights.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  // Show message if no flights are available
  if (!flights || flights.length === 0) {
    return (
      <div className="px-1 mt-4">
        <div className="alert alert-info text-center">
          <p className="mb-0">Search for flights to see available options</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-1">
      <div className="slider-container">
        <Slider {...settings}>
          {flights.map((flight, index) => (
            <div key={flight.id || index}>
              <Flightdetailcard flight={flight} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Flightdetailslider;
