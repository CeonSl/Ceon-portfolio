import Certification from "./Certification";
import Medallist from "./icons/Medallist";
import Arrow from "./icons/Arrow.jsx";
import { useState } from "react";
import { selectTypeCard } from "../assets/js/logic/selectTypeCard";
import CertificationsViewer from "./CertificationsViewer";
import useHandleLeftCard from "./hooks/useHandleLeftCard.jsx";
import useHandleRightCard from "./hooks/useHandleRightCard.jsx";
import useHandleCloseViewer from "./hooks/useHandleCloseViewer.jsx";
import ControlsArrowResponsive from "./ControlsArrowResponsive.jsx";
import CertificationsData from "../data/CertificationsData.jsx";
import { useTranslation } from "react-i18next";

function CertificationsSection() {
  const { certifications } = CertificationsData();

  const [currentCardId, setCurrentCardId] = useState(1);
  const [previousCardId, setPreviousCardId] = useState(certifications.length);
  const [nextCardId, setNextCardId] = useState(2);
  const [toggleViewer, setToggleViewer] = useState(false);

  const { handleLeftCard } = useHandleLeftCard({
    certifications,
    currentCardId,
    setCurrentCardId,
    setNextCardId,
    setPreviousCardId,
  });

  const { handleRightCard } = useHandleRightCard({
    certifications,
    currentCardId,
    setCurrentCardId,
    setNextCardId,
    setPreviousCardId,
  });

  useHandleCloseViewer({ setToggleViewer, toggleViewer });
  const { t } = useTranslation();

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
        {t("Certifications Section.Title")}
      </h2>
      <div className="certifications">
        <button
          id="arrow-left"
          aria-label="arrow-left"
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
                smallImg={certification.smallImg}
                urlLinkedIn={certification.url}
                setToggleViewer={setToggleViewer}
              />
            );
          })}
        </div>
        <button
          id="arrow-right"
          aria-label="arrow-right"
          className="arrow-right"
          onClick={() => {
            handleRightCard();
          }}
        >
          <Arrow />
        </button>
        <ControlsArrowResponsive
          handleLeftCard={handleLeftCard}
          handleRightCard={handleRightCard}
        />
      </div>
    </section>
  );
}

export default CertificationsSection;
