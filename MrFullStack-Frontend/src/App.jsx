import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from './components/Contact';

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 ">
      <div className="bg-hero-patttern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <br />
      <br />
      <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
      <Contact />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
