import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero h-screen bg-no-repeat bg-center">
        <div className="hero__content sm: grid justify-center text-white h-3/4">
          <div className="grid justify-center h-20">
            <h1 className="hero__title uppercase text-center">caribbean</h1>
            <span className="text-center">premium signature</span>
          </div>
          <p className="hero__paragraph text-center">
            Con Caribbean Premium Signature presentamos una colección en la que
            más allá de tendencias se habla de un estilo atemporal, creado con
            materiales premium que elevan la sofisticación de las prendas.
          </p>
          <button className="hero__button bg-opacity-0 w-40 h-20 ">
            Botón
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
