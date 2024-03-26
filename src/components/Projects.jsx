import page28Siete from "../../videos/Agencia28.mp4";
import Project from "./Project";
import NextJs from "./icons/NextJs";
import Css from "./icons/Css";
import Html from "./icons/Html";

const Projects = () => {
  return (
    <>
      <div className="container-all-projects">
        <Project
          projectTitle={"Landing Page - Agencia 28Siete"}
          videoSrc={page28Siete}
          text={`Desarrollé una Landing Page para la agencia de publicidad 28Siete, la cual fue desarrollada utilizando NextJs.`}
          link="https://agencia28.com"
        >
          <div className="container-nextjs">
            <NextJs />
            <h6>Next.js</h6>
          </div>
          <div className="container-css">
            <Css />
            <h6>CSS</h6>
          </div>
          <div className="container-html">
            <Html />
            <h6>HTML</h6>
          </div>
        </Project>
      </div>
    </>
  );
};

export default Projects;
