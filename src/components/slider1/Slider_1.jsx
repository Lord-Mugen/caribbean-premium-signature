/* eslint-disable react/prop-types */
import "./slider1.scss";
import Slider from "react-slick";

import I5 from "../../assets/images/mobile/I5.jpg";
import I6 from "../../assets/images/mobile/I6.jpg";
import I7 from "../../assets/images/mobile/I7.jpg";
import I8 from "../../assets/images/mobile/I8.jpg";
import { elements } from "../../utils/data";

const Slider_1 = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div
        className="card bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${I5})` }}
      >
        <button className="card__btn w-58 h-12 md:w-54 md:h-16 uppercase border-2 border-gray rounded-xl cursor-pointer pt-0 pb-0 pl-7 pr-7 hover:bg-white hover:text-gray">
          {elements.cta.cta_2}
        </button>
      </div>
      <div
        className="card bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${I6})` }}
      >
        <button className="card__btn w-58 h-12 md:w-54 md:h-16 uppercase border-2 border-gray rounded-xl cursor-pointer pt-0 pb-0 pl-7 pr-7 hover:bg-white hover:text-gray">
          {elements.cta.cta_2}
        </button>
      </div>
      <div
        className="card bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${I7})` }}
      >
        <button className="card__btn w-58 h-12 md:w-54 md:h-16 uppercase border-2 border-gray rounded-xl cursor-pointer pt-0 pb-0 pl-7 pr-7 hover:bg-white hover:text-gray">
          {elements.cta.cta_2}
        </button>
      </div>
      <div
        className="card bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${I8})` }}
      >
        <button className="card__btn w-58 h-12 md:w-54 md:h-16 uppercase border-2 border-gray rounded-xl cursor-pointer pt-0 pb-0 pl-7 pr-7 hover:bg-white hover:text-gray">
          {elements.cta.cta_2}
        </button>
      </div>
    </Slider>
  );
};

export default Slider_1;
