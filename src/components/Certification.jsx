import { useState } from "react";
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
  const [loaded, setLoaded] = useState(false);
  const handleOpenViewer = () => {
    setToggleViewer(true);
  };

  let urlSplited = img.split("/");
  let imgSplited = img.split("/")[3].split("?");
  imgSplited[0] =
    imgSplited[0].split(".")[0] + " small." + imgSplited[0].split(".")[1];
  urlSplited[3] = imgSplited.join("?");
  let imgSmall = urlSplited.join("/");

  return (
    <>
      <div className={`container-certification ${classNameForShowingCard}`}>
        <div
          className={`container-img-certification ${
            loaded ? "show-img" : "hide-img"
          }`}
          style={{ backgroundImage: `url("${imgSmall}")` }}
        >
          <img
            src={img}
            alt={`certificado de ${title}`}
            title={`certificado de ${title}`}
            onClick={() => handleOpenViewer()}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="container-texts-buttons">
          <div className="container-text-certification">
            <h3 className="title-certification">{title}</h3>
            <p className="company-certification">{company}</p>
            <span className="date-certification">{date}</span>
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
