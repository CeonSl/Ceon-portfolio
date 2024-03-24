import "../scss/projectStyles.scss";
function Project({ projectTitle, text, videoSrc, link = "", children }) {
  return (
    <>
      <section className="container-project">
        <aside className="project-texts-technologies">
          <div className="project-title-text">
            <h3>{projectTitle}</h3>
            <p>{text}</p>
            {link != "" && (
              <a href={link} target="_blank" rel="noreferrer">
                Saber más
              </a>
            )}
          </div>
          <div className="project-technologies">{children}</div>
        </aside>
        <div className="project-video-container">
          <video muted loop playsInline autoPlay>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

export default Project;
