import Slider_2 from "../../components/slider_2/Slider_2";
import I10 from "../../assets/images/desktop/I10.jpg";

const Slider2_section = () => {
  return (
    <section className="slider2_section lg:pl-4 lg:pr-4">
      <div className="slider2_section-img-container hidden md:block">
        <img src={I10} alt="" />
      </div>
      <div className="slider2_section-slider-container md:hidden">
        <Slider_2 />
      </div>
    </section>
  );
};

export default Slider2_section;
