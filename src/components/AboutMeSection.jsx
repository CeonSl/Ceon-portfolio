import { useTranslation } from "react-i18next";
import AboutMeSectionInfo from "./AboutMeSectionInfo";
import AboutMeSectionPhotos from "./AboutMeSectionPhotos";
import Person from "./icons/Person";
function AboutMeSection() {
  const { t } = useTranslation();

  return (
    <>
      <div id="about-me" className="container-about-me">
        <h2>
          <Person />
          {t("About Me Section.Title")}
        </h2>
        <div className="container-about-me-info">
          <AboutMeSectionInfo />
          <AboutMeSectionPhotos />
        </div>
      </div>
    </>
  );
}
export default AboutMeSection;
