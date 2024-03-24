import Expand from "./icons/Expand";
import Redirect from "./icons/Redirect";

function Certification({
  img,
  title,
  company,
  date,
  urlLinkedIn,
  classNameForShowingCard,
  setToggleViewer,
}) {
  const handleOpenViewer = () => {
    setToggleViewer(true);
  };

  return (
    <>
      <div className={`container-certification ${classNameForShowingCard}`}>
        <div className="container-img-certification">
          <img
            src={img}
            alt={`certificado de ${title}`}
            title={`certificado de ${title}`}
            onClick={() => handleOpenViewer()}
          />
        </div>
        <div className="container-texts-buttons">
          <div className="container-text-certification">
            <h3 className="title-certification">{title}</h3>
            <p className="company-certification">{company}</p>
            <p className="date-certification">{date}</p>
          </div>
          <div className="container-buttons">
            <button onClick={() => handleOpenViewer()}>
              <Expand /> Certificado
            </button>
            <a href={urlLinkedIn} target="_blank" rel="noreferrer">
              <Redirect />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certification;
