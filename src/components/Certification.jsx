import { useState } from "react";
import Expand from "./icons/Expand";
import { handleOpenViewer } from "./logic/handleOpenViewer";
import { useTranslation } from "react-i18next";

function Certification({
  img,
  smallImg,
  title,
  company,
  date,
  classNameForShowingCard,
  setToggleViewer,
}) {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className={`container-certification ${classNameForShowingCard}`}>
        <div
          className={`container-img-certification ${
            loaded ? "show-img" : "hide-img"
          }`}
          style={{ backgroundImage: `url("${smallImg}")` }}
        >
          <img
            src={img}
            alt={`certificado de ${title}`}
            title={`certificado de ${title}`}
            onClick={() => handleOpenViewer(setToggleViewer)}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>
        <div className="container-texts-buttons">
          <div className="container-text-certification">
            <h3 className="title-certification">{title}</h3>
            <p className="company-certification">{company}</p>
            <span className="date-certification">{date}</span>
          </div>
          <div className="container-buttons">
            <button onClick={() => handleOpenViewer(setToggleViewer)}>
              <Expand /> {t("Certifications Section.Button Expand")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certification;
