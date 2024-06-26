import { useTranslation } from "react-i18next";
import KnowMore from "./icons/KnowMore";
function Project({ projectTitle, text, videoSrc, link = "", children }) {
  const { t } = useTranslation();
  return (
    <>
      <section className="container-project">
        <aside className="project-texts-technologies">
          <div className="project-title-text">
            <h3>{projectTitle}</h3>
            <p>{text}</p>
            {link != "" && (
              <a href={link} target="_blank" rel="noreferrer">
                <KnowMore />
                {t("Projects Section.Button Text")}
              </a>
            )}
          </div>
          <div className="project-technologies">{children}</div>
        </aside>
        <div className="project-video-container">
          <video muted loop playsInline preload="auto" autoPlay>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

export default Project;
