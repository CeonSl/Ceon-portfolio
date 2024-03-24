import MainSectionContainerImg from "./MainSectionContainerImg";

function MainSectionPhotoInfoAndButtons() {
  return (
    <div className="container-img-text">
      <MainSectionContainerImg />
      <div className="container-text">
        <h3>
          Soy <span>Carlos Oropeza</span>,
        </h3>
        <h2>Full Stack Web Developer</h2>
        <p>
          Entusiasmado en adquirir <span>nuevos conocimientos</span> y{" "}
          <span>experiencias</span> en el mundo del desarrollo web.
        </p>
      </div>
    </div>
  );
}

export default MainSectionPhotoInfoAndButtons;
