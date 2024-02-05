import projectsSectionStyles from "../css/projectsSectionStyles.module.css";
import goBackTopStyles from "../css/goBackTopStyles.module.css";
import Project from "./Project.jsx";
import GoBackTop from "./GoBackTop.jsx";
import { forwardRef } from "react";
import agencia28 from "../imgs/Agencia28.png";
import spotifyProject from "../imgs/SpotifyPersonalProject.png";
import andreaMakeUp from "../imgs/AndreaMakeUp.png";
import ropaClothesCRUD from "../imgs/RopaClothesCRUD.png";
import betterBlog from "../imgs/BetterBlog.png";

const Projects = forwardRef((props, ref) => {
  return (
    <>
      <div
        className={`${
          props.isIntersecting
            ? goBackTopStyles.fadeIn
            : goBackTopStyles.fadeOut
        }`}
      >
        <GoBackTop />
      </div>
      <div className={projectsSectionStyles.containerProjects}>
        <Project imgSrc={betterBlog} shape={projectsSectionStyles.tall} />
        <Project imgSrc={spotifyProject} shape={projectsSectionStyles.normal} />
        <Project imgSrc={agencia28} shape={projectsSectionStyles.big} />
        <Project imgSrc={ropaClothesCRUD} shape={projectsSectionStyles.small} />
        <Project imgSrc={andreaMakeUp} shape={projectsSectionStyles.wide} />
        <Project
          imgSrc={
            "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
          }
          shape={projectsSectionStyles.box}
        />
        <div ref={ref} />
      </div>
    </>
  );
});

export default Projects;
