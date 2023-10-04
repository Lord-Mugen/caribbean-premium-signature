import "./slider2.scss";
import Slider from "react-slick";
import I1 from "../../assets/images/mobile/I1.jpg";
import I9 from "../../assets/images/mobile/I9.jpg";

const Slider_2 = () => {
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
    <Slider className="slider pt-6" {...settings}>
      <div className="card w-full">
        <img src={I9} alt="Slide 1" className="card__img" />
      </div>
      <div className="card w-full">
        <img src={I1} alt="Slide 2" className="card__img" />
      </div>
    </Slider>
  );
};

export default Slider_2;
