import "./print.scss";
import { elements } from "../../utils/data";
import I2 from "../../assets/images/mobile/I2.jpg";
import I3 from "../../assets/images/mobile/I3.jpg";

const Print = () => {
  return (
    <section className="print">
      <div className="print__image-container flex flex-col">
        <img src={I2} alt="image" className="print__image image1 w-full" />
        <img src={I3} alt="image" className="print__image image2 p-8" />
      </div>
      <div className="print__title-container flex flex-col justify-center">
        <h2 className="print__title font-Aribau font-serif font-semibold uppercase text-6 text-center text-gray x2sm:pl-1 x2sm:pr-1 x2sm:text-7">
          {elements.titles.title_3}
        </h2>
        <span className="print__subtitle text-center text-1.8 text-gray">
          {elements.subtitles.elegance}
        </span>
      </div>
    </section>
  );
};

export default Print;
