import Header from "./components/Header.jsx";
import MainSection from "./components/MainSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import AboutMeSection from "./components/AboutMeSection.jsx";
import ContactMeSection from "./components/ContactMeSection.jsx";
import Footer from "./components/Footer.jsx";
import useIntersecting from "./components/hooks/useIntersecting.jsx";
import { preloader } from "./assets/js/preloader.js";
import { useEffect } from "react";
import CertificationsSection from "./components/CertificationsSection.jsx";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const { isIntersectingState } = useIntersecting();
  useEffect(() => {
    preloader();
  }, []);

  return (
    <>
      <Analytics />
      <div id="body"></div>
      <div className="background"></div>
      <div className="container-app">
        <Header isIntersecting={isIntersectingState} />
        <div className="container-sections">
          <MainSection />
          <ProjectsSection isIntersecting={isIntersectingState} />
          <CertificationsSection />
          <AboutMeSection />
          <ContactMeSection />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;
