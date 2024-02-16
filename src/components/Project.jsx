import projectsSectionStyles from "../css/projectsSectionStyles.module.css";

function Project({ projectTitle, children, videoSrc, reverse }) {
  return (
    <>
      <section
        className={`${projectsSectionStyles.project} ${
          reverse && projectsSectionStyles.reverseProject
        }`}
      >
        <h3>{projectTitle}</h3>
        <div className={projectsSectionStyles.dataProject}>
          <p>{children}</p>
          <video muted loop playsInline autoPlay>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </section>
      <div className={projectsSectionStyles.divider}></div>
    </>
  );
}

export default Project;
