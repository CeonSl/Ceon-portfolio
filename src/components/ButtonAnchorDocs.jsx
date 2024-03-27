import { handleTimeout } from "./logic/handleTimeout";
import CVDoc from "../assets/docs/Español CV GF - CARLOS ENRIQUE OROPEZA NEGRÓN.pdf";
import Check from "./icons/Check.jsx";
import Resume from "../components/icons/Resume.jsx";

function ButtonAnchorDocs({
  url,
  click = false,
  icon,
  text,
  setDownloadResume = null,
  downloadResume = null,
}) {
  if (click) {
    return (
      <>
        <a
          href={CVDoc}
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
