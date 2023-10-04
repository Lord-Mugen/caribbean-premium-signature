import "./sofistication.scss";
import { elements } from "../../utils/data";
import I11 from "../../assets/images/mobile/I11.jpg";

const Sofistication = () => {
  return (
    <section className="sofistication h-auto pt-5 grid content-center justify-items-center">
      <div className="sofistication__content bg-no-repeat bg-center grid content-center justify-items-center h-600">
        <h1 className="sofistication__title uppercase text-white font-semibold text-3.5 text-center grid">
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
      <div className="sofistication__content h-auto mt-10">
        <img src={I11} alt="imagen 11" className="sofistication__content-img" />
      </div>
    </section>
  );
};

export default Sofistication;
