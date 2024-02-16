import page28Siete from "../../videos/Agencia28.mp4";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div>
        <Project
          projectTitle={"Landing Page - Agencia 28Siete"}
          videoSrc={page28Siete}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos
          eligendi voluptatum natus est, similique facere omnis earum numquam
          explicabo magni soluta autem, quibusdam, repellendus sint error.
          Laboriosam, minima recusandae!
        </Project>

        <Project
          projectTitle={"Landing Page - Agencia 28Siete"}
          videoSrc={page28Siete}
          reverse={true}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos
          eligendi voluptatum natus est, similique facere omnis earum numquam
          explicabo magni soluta autem, quibusdam, repellendus sint error.
          Laboriosam, minima recusandae!
        </Project>
      </div>
    </>
  );
};

export default Projects;
