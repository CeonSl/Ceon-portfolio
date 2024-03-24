import AboutMeSectionInfo from "./AboutMeSectionInfo";
import AboutMeSectionPhotos from "./AboutMeSectionPhotos";
import Person from "./icons/Person";

function AboutMeSection() {
  return (
    <>
      <div id="about-me" className="container-about-me">
        <h3>
          <Person />
          Sobre mi
        </h3>
        <div className="container-about-me-info">
          <AboutMeSectionInfo />
          <AboutMeSectionPhotos />
        </div>
      </div>
    </>
  );
}

export default AboutMeSection;
