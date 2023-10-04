import "./slider1_section.scss";
import Slider_1 from "../../components/slider1/Slider_1";
import I4 from "../../assets/images/desktop/I4.jpg";
import I5 from "../../assets/images/desktop/I5.jpg";
import I6 from "../../assets/images/desktop/I6.jpg";
import I7 from "../../assets/images/desktop/I7.jpg";
import I8 from "../../assets/images/desktop/I8.jpg";
import I9 from "../../assets/images/desktop/I9.jpg";
import Grupo22 from "../../assets/images/desktop/Grupo22.png";
import { elements } from "../../utils/data";

const Slider1_section = () => {
  return (
    <section className="slider1_section pt-7">
      <div className="slider1_section hidden md:block relative lg:pl-4 lg:pr-4">
        <img src={I4} alt="imagen i4" />
        <img
          src={Grupo22}
          alt="grupo 22"
          className=" absolute top-7 left-20 h-200  lg:top-7 lg:left-32 "
        />
      </div>
      <div className=" slider1_section-show hidden md:flex w-full justify-center gap-20 p-6 lg:gap-10 lg:p-7 xl:p-16">
        <img
          src={I5}
          alt="imagen i5"
          className="slider1_section-img w-1/3 lg:w-1/2"
        />
        <div className="slider1_section-gallery w-1/3 lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 lg:pt-6 lg:pb-6 xl:p-7">
          <div className="slider1_section-gallery-img-container relative">
            <img
              src={I6}
              alt="imagen de la galería"
              className="slider1_section-gallery-img h-full "
            />
            <button className="card__btn text-0.7 w-58 h-6 xl:text-1 md:w-24 lg:w-48 md:h-9 uppercase border-2 border-white text-white rounded-xl cursor-pointer pt-0 pb-0 lg:pl-7 lg:pr-7 hover:bg-white hover:text-gray absolute md:top-[70%] md:left-[8%] lg:top-[85%] lg:left-[6%] xl:top-[90%] xl:left-[15%]">
              {elements.cta.cta_2}
            </button>
          </div>
          <div className="slider1_section-gallery-img-container relative">
            <img
              src={I7}
              alt="imagen de la galería"
              className="slider1_section-gallery-img h-full "
            />
            <button className="card__btn text-0.7 w-58 h-6 xl:text-1 md:w-24 lg:w-48 md:h-9 uppercase border-2 border-white text-white rounded-xl cursor-pointer pt-0 pb-0 lg:pl-7 lg:pr-7 hover:bg-white hover:text-gray absolute md:top-[70%] md:left-[8%] lg:top-[85%] lg:left-[6%] xl:top-[90%] xl:left-[15%]">
              {elements.cta.cta_2}
            </button>
          </div>
          <div className="slider1_section-gallery-img-container relative">
            <img
              src={I8}
              alt="imagen de la galería"
              className="slider1_section-gallery-img h-full "
            />
            <button className="card__btn text-0.7 w-58 h-6 xl:text-1 md:w-24 lg:w-48 md:h-9 uppercase border-2 border-white text-white rounded-xl cursor-pointer pt-0 pb-0 lg:pl-7 lg:pr-7 hover:bg-white hover:text-gray absolute md:top-[70%] md:left-[8%] lg:top-[85%] lg:left-[6%] xl:top-[90%] xl:left-[15%]">
              {elements.cta.cta_2}
            </button>
          </div>
          <div className="slider1_section-gallery-img-container relative">
            <img
              src={I9}
              alt="imagen de la galería"
              className="slider1_section-gallery-img h-full "
            />
            <button className="card__btn text-0.7 w-58 h-6 xl:text-1 md:w-24 lg:w-48 md:h-9 uppercase border-2 border-white text-white rounded-xl cursor-pointer pt-0 pb-0 lg:pl-7 lg:pr-7 hover:bg-white hover:text-gray absolute md:top-[70%] md:left-[8%] lg:top-[85%] lg:left-[6%] xl:top-[90%] xl:left-[15%]">
              {elements.cta.cta_2}
            </button>
          </div>
        </div>
      </div>
      <div className=" slider1_section-show md:hidden">
        <Slider_1 />
      </div>
    </section>
  );
};

export default Slider1_section;
