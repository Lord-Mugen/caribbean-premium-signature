import "./App.css";
import Banner_1 from "./components/banner_1/Banner_1";
import Hero from "./components/hero/Hero";
import Inspiration from "./components/inspiration/Inspiration";
import Print from "./components/print/Print";
import Sofistication from "./components/sofistication/Sofistication";
//import Slider1_section from "./containers/slider1_section/Slider1_section";
//import Slider2_section from "./containers/slider2_section/Slider2_section";

const App = () => {
  return (
    <>
      <Hero />
      <Print />
      <Banner_1 />
      <Sofistication />
      <Inspiration />
    </>
  );
};

export default App;
