import "./print.scss";
import { elements } from "../../utils/data";
import I2 from "../../assets/images/mobile/I2.jpg";
import I3 from "../../assets/images/mobile/I3.jpg";
import I2desk from "../../assets/images/desktop/I2.jpg";

const Print = () => {
  const isDesktop = window.innerWidth >= 1024;

  return (
    <section className="print md:flex md:p-20 md:items-center md:justify-between md:relative lg:justify-around lg:gap-16">
      <div className="print__image-container flex flex-col lg:items-end ">
        <img
          src={isDesktop ? I2desk : I2}
          alt="image"
          className="print__image image1 w-full lg:w-2/3 lg:h-5/6"
        />
        <img
          src={I3}
          alt="image"
          className="print__image image2 p-6 md:absolute md:bottom-56 md:left-44 md:p-3 lg:left-28 lg:bottom-44 xl:bottom-96 xl:left-60 lg:h-330 xl:h-420"
        />
      </div>
      <div className="print__title-container flex flex-col justify-center md:items-end lg:items-start pt-5 pb-12 lg:w-2/4">
        <h2 className="print__title font-Aribau font-serif font-semibold uppercase text-6 text-center text-gray leading-none x2sm:pl-1 x2sm:pr-1 x2sm:text-7 md:text-right lg:text-left lg:text-8">
          {elements.titles.title_3}
        </h2>
        <span className="print__subtitle text-center text-1.8 text-gray md:text-left lg:text-4">
          {elements.subtitles.elegance}
        </span>
        <button className="hero__button hidden w-58 h-12 md:block md:w-80 md:h-16 uppercase border-2 border-gray text-gray rounded-xl cursor-pointer pt-0 pb-0 pl-7 pr-7 mt-14 hover:bg-gray hover:text-white">
          {elements.cta.cta_3}
        </button>
      </div>
    </section>
  );
};

export default Print;
