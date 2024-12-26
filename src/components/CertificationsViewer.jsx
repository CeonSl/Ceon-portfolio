import { useState } from "react";
import Arrow from "./icons/Arrow";
import Exit from "./icons/Exit";
function CertificationsViewer({
  certificationSelected,
  setToggleViewer,
  toggleViewer,
  certifications,
  index,
}) {
  const [currentCertification, setCurrentCertification] = useState({
    id: certificationSelected.id,
    img: certificationSelected.img,
    smallImg: certificationSelected.smallImg,
    title: certificationSelected.title,
    company: certificationSelected.company,
    date: certificationSelected.date,
  });
  const [currentIndex, setCurrentIndex] = useState(index);

  const nextCertification = (dir) => {
    const newIndex =
      dir == "left"
        ? currentIndex - 1 < 0
          ? certifications.length - 1
          : currentIndex - 1
        : currentIndex + 1 > certifications.length - 1
        ? 0
        : currentIndex + 1;
    setCurrentCertification(certifications[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {toggleViewer && (
        <>
          <button
            id="arrow-left-viewer"
            aria-label="arrow-left-viewer"
            className="arrow-left-viewer"
            onClick={() => {
              nextCertification("left");
            }}
          >
            <Arrow />
          </button>
          <div className="container-viewer">
            <div className="container-viewer-things">
              <div
                className="container-exit"
                onClick={() => setToggleViewer(false)}
              >
                <Exit />
              </div>
              <div className="container-content-viewer">
                <div className="container-img">
                  <img
                    src={currentCertification.img}
                    alt={`Certificado de ${currentCertification.title}`}
                    title={`Certificado de ${currentCertification.title}`}
                  />
                </div>
                <div className="image-text-viewer">
                  <h3 className="title-certification">
                    {currentCertification.title}
                  </h3>
                  <p className="company-certification">
                    {currentCertification.company}
                  </p>
                  <span className="date-certification">
                    {currentCertification.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            id="arrow-right-viewer"
            aria-label="arrow-right-viewer"
            className="arrow-right-viewer"
            onClick={() => {
              nextCertification("right");
            }}
          >
            <Arrow />
          </button>
        </>
      )}
    </>
  );
}

export default CertificationsViewer;
