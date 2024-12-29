import { handleTimeout } from "./logic/handleTimeout";
import CVDocSpanish from "../assets/docs/Español CV GF - CARLOS ENRIQUE OROPEZA NEGRÓN.pdf";
import CVDocEnglish from "../assets/docs/English CV GF - CARLOS ENRIQUE OROPEZA NEGRÓN.pdf";
import Check from "./icons/Check.jsx";
import Resume from "../components/icons/Resume.jsx";
import { useTranslation } from "react-i18next";

function ButtonAnchorDocs({
  url,
  click = false,
  icon,
  text,
  setDownloadResume = null,
  downloadResume = null,
}) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  if (click) {
    return (
      <>
        <a
          href={currentLang == "es" ? CVDocSpanish : CVDocEnglish}
          target="_blank"
          rel="noreferrer"
          onClick={() => handleTimeout(setDownloadResume)}
        >
          <div className="icon-container">
            {downloadResume ? <Check /> : <Resume />}
          </div>
          Curriculum Vitae
        </a>
      </>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onClick={() => handleTimeout(setDownloadResume)}
    >
      <div className="icon-container">{icon}</div>
      {text}
    </a>
  );
}

export default ButtonAnchorDocs;
