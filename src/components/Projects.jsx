import page28Siete from "../../videos/Agencia28.mp4";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <Project
        projectTitle={"Landing Page - Agencia 28Siete"}
        videoSrc={page28Siete}
      >
        Desarrollé una Landing Page para la agencia de publicidad 28Siete, la
        cual fue desarrollada utilizando NextJs.{" "}
        <a href="https://www.agencia28.com" target="_blank" rel="noreferrer">
          Link de la página
        </a>
      </Project>
    </>
  );
};

export default Projects;
