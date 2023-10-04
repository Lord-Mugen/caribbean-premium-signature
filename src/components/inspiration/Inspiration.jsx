import I12 from "../../assets/images/mobile/I12.jpg";
import I13 from "../../assets/images/mobile/I13.jpg";
import { elements } from "../../utils/data";

const Inspiration = () => {
  return (
    <section className="inspiration mt-10 pb-20">
      <div className="inspiration__section">
        <img src={I13} alt="imagen 13" className="inspiration__section-img" />
        <div className="inspiration__section-content grid content-center justify-items-center p-3 pt-10 pb-10">
          <h1 className="inspiration__section-title uppercase grid text-center text-3.5 font-medium text-gray">
            {elements.titles.title_5}
            <span className="inspiration__section.subtitle uppercase text-center font-light">
              {elements.subtitles.sub_4}
            </span>
          </h1>
          <p className="inspiration__section-title text-center text-1.3 w-4/5 pt-10 text-gray">
            {elements.paragraphs.paragraph_3}
          </p>
        </div>
      </div>
      <div className="inspiration__section">
        <img src={I12} alt="imagen 12" />
      </div>
    </section>
  );
};

export default Inspiration;
