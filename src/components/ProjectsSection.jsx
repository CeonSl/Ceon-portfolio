import Projects from "../components/Projects.jsx";
import { forwardRef } from "react";
import Docs from "./icons/Docs.jsx";

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <>
      <div id="projects" className="container-project-section">
        <h3>
          <Docs />
          ¿Que he realizado?
        </h3>
        <Projects ref={ref} isIntersecting={props.isIntersecting} />
      </div>
    </>
  );
});

export default ProjectsSection;
