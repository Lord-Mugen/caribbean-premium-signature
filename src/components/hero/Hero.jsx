import "./hero.scss";
import { elements } from "../../utils/data";
import Grupo11 from "../../assets/images/desktop/Grupo11.png";

const Hero = () => {
  return (
    <>
      <section className="hero h-auto grid">
        <div className="hero__content-container  bg-no-repeat bg-center grid md:justify-items-left items-end md:items-center text-white h-112vh pb-28 md:p-10">
          <div className="hero__content mb-5 grid justify-items-center md:justify-items-center md:h- md:w-1/2">
            <div className="grid justify-center h-20 ">
              <img src={Grupo11} alt="hero image" />
            </div>
            <div className="hero__paragraph-container grid justify-items-center md:pt-16 xl:mt-16">
              <hr className="hero__text-upperline w-96 gray mb-7 hidden md:block " />
              <p className="hero__paragraph text-center hidden md:block md:text-center md:w-full font-thin lg:w-2/3 ">
                {elements.paragraphs.hero}
              </p>
            </div>
            <button className="hero__button w-58 h-12 md:w-80 md:h-10 uppercase border-2 border-white rounded-xl cursor-pointer pt-0 pb-0 pl-7 pr-7 mt-10 hover:bg-white hover:text-gray">
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
