import "./hero.scss";
import { elements } from "../../utils/data";

const Hero = () => {
  return (
    <>
      <section className="hero h-screen grid">
        <div className="hero__content-container  bg-no-repeat bg-center grid justify-center items-end text-white h-112vh pb-28">
          <div className="hero__content mb-5 grid justify-center">
            <div className="grid justify-center h-20">
              <h1 className="hero__title uppercase text-center">
                {elements.titles.hero}
              </h1>
              <span className="text-center uppercase">
                {elements.subtitles.hero_sub}
              </span>
            </div>
            <div className="hero__paragraph-container ">
              <p className="hero__paragraph text-center hidden md:block">
                {elements.paragraphs.hero}
              </p>
            </div>
            <button className="hero__button w-58 h-16 uppercase border-2 border-white rounded-xl cursor-pointer pt-0 pb-0 pl-7 pr-7 mt-14 hover:bg-white hover:text-gray ">
              {elements.cta.hero_cta}
            </button>
          </div>
        </div>
        <hr className="hero__text-upperline w-40 gray mt-10 " />
        <p className="hero__paragraph text-center md:hidden text-gray">
          {elements.paragraphs.hero}
        </p>
      </section>
    </>
  );
};

export default Hero;
