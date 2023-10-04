import "./sofistication.scss";
import { elements } from "../../utils/data";
import I11 from "../../assets/images/mobile/I11.jpg";
import I12 from "../../assets/images/desktop/I12.jpg";

const Sofistication = () => {
  const isDesktop = window.innerWidth >= 1024;

  return (
    <section className="sofistication h-auto pt-5 lg:pt-4 grid content-center justify-items-center lg:flex lg:items-center lg:justify-between md:gap-3 lg:pl-4 lg:pr-4	">
      <div className="sofistication__content bg-no-repeat bg-center grid content-center justify-items-center h-600 lg:w-70">
        <h1 className="sofistication__title uppercase text-white font-semibold text-2.5 md:text-3.5 text-center grid lg:leading-none">
          {elements.titles.title_4}{" "}
          <span className="sofistication__subtitle text-white font-light">
            {elements.subtitles.sub_3}
          </span>
        </h1>
        <p className="sofistication__p text-white text-center pt-10 w-11/12 font-light">
          {elements.paragraphs.paragraph_2}
        </p>
        <button className="sofistication__btn uppercase w-19 h-12 md:w-54 md:h-16 border-2 text-white border-white rounded-xl cursor-pointer pt-0 pb-0 pl-4 pr-4 mt-14 hover:bg-white hover:text-gray">
          {elements.cta.cta_2}
        </button>
      </div>
      <div className="sofistication__content h-auto mt-10 lg:mt-0 lg:w-30 lg:flex  ">
        <img
          src={isDesktop ? I12 : I11}
          alt="imagen 11"
          className="sofistication__content-img lg:h-600 lg:w-full"
        />
      </div>
    </section>
  );
};

export default Sofistication;
