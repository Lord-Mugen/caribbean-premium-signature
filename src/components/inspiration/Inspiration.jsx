import I12 from "../../assets/images/mobile/I12.jpg";
import I13 from "../../assets/images/mobile/I13.jpg";

import I13desk from "../../assets/images/desktop/I13.jpg";
import I14desk from "../../assets/images/desktop/I14.jpg";

import { elements } from "../../utils/data";
const isDesktop = window.innerWidth >= 1024;

const Inspiration = () => {
  return (
    <section className="inspiration mt-10 pb-20 grid justify-items-center lg:flex lg:pb-4 lg:pl-7 lg:pr-7 lg:gap-7 h-auto">
      <div className="inspiration__section grid justify-items-center lg:p-3 lg:pt-10 lg:w-40">
        <img
          src={isDesktop ? I14desk : I13}
          alt="imagen 13"
          className="inspiration__section-img xl:h-500 xl:w-full"
        />
        <div className="inspiration__section-content grid content-center justify-items-center p-3 pt-10 pb-10 lg:pb3">
          <h1 className="inspiration__section-title uppercase grid text-center text-2.5 md:text-2 md:flex font-medium text-gray leading-none">
            {elements.titles.title_5}{" "}
            <span className="inspiration__section.subtitle uppercase text-center font-light">
              {" "}
              {elements.subtitles.sub_4}
            </span>
          </h1>
          <hr className="hero__text-upperline w-32 gray mb-0 mt-4 hidden md:block " />
          <p className="inspiration__section-title text-center text-1.3 w-4/5 lg:w-full pt-7 text-gray md:leading-tight">
            {elements.paragraphs.paragraph_3}
          </p>
        </div>
      </div>
      <div className="inspiration__section lg:w-60">
        <img
          src={isDesktop ? I13desk : I12}
          alt="imagen 12"
          className="inspiration__section-img lg:h-600 xl:h-800"
        />
      </div>
    </section>
  );
};

export default Inspiration;
