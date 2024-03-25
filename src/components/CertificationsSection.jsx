import Certification from "./Certification";
import Medallist from "./icons/Medallist";
import Arrow from "./icons/Arrow.jsx";
import { certifications } from "../data/certifications";
import { useState } from "react";
import { selectTypeCard } from "../assets/js/logic/selectTypeCard";
import CertificationsViewer from "./CertificationsViewer";
import { useEffect } from "react";

function CertificationsSection() {
  const [currentCardId, setCurrentCardId] = useState(1);
  const [previousCardId, setPreviousCardId] = useState(certifications.length);
  const [nextCardId, setNextCardId] = useState(2);
  const [toggleViewer, setToggleViewer] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName != "IMG" && e.target.tagName != "BUTTON") {
        setToggleViewer(false);
      }
    };

    if (!toggleViewer) {
      document.removeEventListener("click", handleClick);
    } else {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [toggleViewer]);

  const handleLeftCard = () => {
    let newCurrentCardId = 0;
    let newPreviousCardId = 0;
    let newNextCardId = 0;

    if (currentCardId - 1 < 1) {
      newCurrentCardId = certifications.length;
      newPreviousCardId = certifications.length - 1;
      newNextCardId = 1;
    } else {
      newCurrentCardId = currentCardId - 1;
      newPreviousCardId =
        newCurrentCardId - 1 == 0
          ? certifications.length
          : newCurrentCardId - 1;
      newNextCardId = newCurrentCardId + 1;
    }

    setCurrentCardId(newCurrentCardId);
    setPreviousCardId(newPreviousCardId);
    setNextCardId(newNextCardId);
  };

  const handleRightCard = () => {
    let newCurrentCardId = 0;
    let newPreviousCardId = 0;
    let newNextCardId = 0;

    if (currentCardId + 1 > certifications.length) {
      newCurrentCardId = 1;
      newPreviousCardId = certifications.length;
      newNextCardId = 2;
    } else {
      newCurrentCardId = currentCardId + 1;
      newPreviousCardId = newCurrentCardId - 1;
      newNextCardId =
        newCurrentCardId + 1 > certifications.length ? 1 : newCurrentCardId + 1;
    }

    setCurrentCardId(newCurrentCardId);
    setPreviousCardId(newPreviousCardId);
    setNextCardId(newNextCardId);
  };

  return (
    <section className="container-certifications">
      <CertificationsViewer
        title={certifications[currentCardId - 1].title}
        img={certifications[currentCardId - 1].img}
        setToggleViewer={setToggleViewer}
        toggleViewer={toggleViewer}
      />
      <h2>
        <Medallist />
        Certificaciones
      </h2>
      <div className="certifications">
        <button
          className="arrow-left"
          onClick={() => {
            handleLeftCard();
          }}
        >
          <Arrow />
        </button>
        <div className="certifications-group" id="certifications">
          {certifications.map((certification) => {
            const classNameForCard = selectTypeCard({
              certification,
              previousCardId,
              nextCardId,
              currentCardId,
            });
            return (
              <Certification
                key={certification.id}
                classNameForShowingCard={classNameForCard}
                date={certification.date}
                company={certification.company}
                title={certification.title}
                img={certification.img}
                urlLinkedIn={certification.url}
                setToggleViewer={setToggleViewer}
              />
            );
          })}
        </div>
        <button
          className="arrow-right"
          onClick={() => {
            handleRightCard();
          }}
        >
          <Arrow />
        </button>
        <div className="container-controls-arrow-responsive">
          <button
            className="arrow-left"
            onClick={() => {
              handleLeftCard();
            }}
          >
            <Arrow />
          </button>
          <button
            className="arrow-right"
            onClick={() => {
              handleRightCard();
            }}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
