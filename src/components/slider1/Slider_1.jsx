/* eslint-disable react/prop-types */
import "./slider1.scss";
import Slider from "react-slick";

import I5 from "../../assets/images/mobile/I5.jpg";
import I6 from "../../assets/images/mobile/I6.jpg";
import I7 from "../../assets/images/mobile/I7.jpg";
import I8 from "../../assets/images/mobile/I8.jpg";

const Slider_1 = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider className="slider" {...settings}>
      <div className="card w-full">
        <img src={I5} alt="Slide 1" className="card__img" />
      </div>
      <div className="card w-full">
        <img src={I6} alt="Slide 2" className="card__img" />
      </div>
      <div className="card w-full">
        <img src={I7} alt="Slide 3" className="card__img" />
      </div>
      <div className="card w-full">
        <img src={I8} alt="Slide 4" className="card__img" />
      </div>
    </Slider>
  );
};

export default Slider_1;
