import Projects from "../components/Projects.jsx";
import { forwardRef } from "react";
import Docs from "./icons/Docs.jsx";
import { useTranslation } from "react-i18next";

const ProjectsSection = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <>
      <div id="projects" className="container-project-section">
        <h2>
          <Docs />
          {t("Projects Section.Title")}
        </h2>
        <Projects ref={ref} isIntersecting={props.isIntersecting} />
      </div>
    </>
  );
});

export default ProjectsSection;
