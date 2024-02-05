import Header from "./components/Header.jsx";
import MainSection from "./components/MainSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import AboutMeSection from "./components/AboutMeSection.jsx";
import ContactMeSection from "./components/ContactMeSection.jsx";
import mainAppStyles from "./css/mainAppStyles.module.css";
import Footer from "./components/Footer.jsx";
import useIntersecting from "./components/hooks/useIntersecting.jsx";
import { preloader } from "./assets/js/preloader.js";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const { isIntersectingState } = useIntersecting();
  useEffect(() => {
    preloader();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <div id="body"></div>
      <div className={mainAppStyles.container}>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <div
          className={`${isOpen && mainAppStyles.barIsOpen}`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div className={`${mainAppStyles.containerApp}`}>
          <div className={mainAppStyles.app}>
            <MainSection />
            <ProjectsSection isIntersecting={isIntersectingState} />
            <AboutMeSection />
            <ContactMeSection />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default App;
