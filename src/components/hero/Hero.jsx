import "./hero.scss";
import { elements } from "../../utils/data";

const Hero = () => {
  return (
    <>
      <section className="hero h-auto grid">
        <div className="hero__content-container  bg-no-repeat bg-center grid md:justify-items-left items-end md:items-center text-white h-112vh pb-28 md:p-10">
          <div className="hero__content mb-5 grid justify-items-center md:justify-items-center md:h- md:w-1/2">
            <div className="grid justify-center h-20">
              <h1 className="hero__title uppercase text-center font-Cinzel text-4 md:text-6 lg:text-10 leading-1 md:leading-7">
                {elements.titles.hero}
              </h1>
              <span className="text-center font-Tangerine text-5 font-thin ">
                {elements.subtitles.hero_sub}
              </span>
            </div>
            <div className="hero__paragraph-container md:mt-16 grid justify-items-center md:pt-16 lg:pt-8">
              <hr className="hero__text-upperline w-96 gray mb-7 hidden md:block " />
              <p className="hero__paragraph text-center hidden md:block md:text-center md:w-full font-thin lg:w-2/3 ">
                {elements.paragraphs.hero}
              </p>
            </div>
            <button className="hero__button w-58 h-12 md:w-80 md:h-16 uppercase border-2 border-white rounded-xl cursor-pointer pt-0 pb-0 pl-7 pr-7 mt-14 hover:bg-white hover:text-gray">
              {elements.cta.hero_cta}
            </button>
          </div>
        </div>
        <p className="hero__paragraph pt-12 pb-16 text-center grid justify-items-center md:hidden text-gray">
          <hr className="hero__text-upperline w-40 gray mb-7 " />
          {elements.paragraphs.hero}
        </p>
      </section>
    </>
  );
};

export default Hero;
