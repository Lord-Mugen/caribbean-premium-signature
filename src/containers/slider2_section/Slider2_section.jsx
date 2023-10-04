import Slider_2 from "../../components/slider_2/Slider_2";
import I10 from "../../assets/images/desktop/I10.jpg";

const Slider2_section = () => {
  return (
    <section className="slider2_section">
      <div className="slider2_section-img-container">
        <img src={I10} alt="" />
      </div>
      <div className="slider2_section-slider-container md:hidden">
        <Slider_2 />
      </div>
    </section>
  );
};

export default Slider2_section;
