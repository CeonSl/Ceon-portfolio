export const selectTypeCard = ({
  certification,
  currentCardId,
  nextCardId,
  previousCardId,
}) => {
  let classNameForCard = "";

  if (certification.id == currentCardId) {
    classNameForCard = "current-card";
  }

  if (certification.id == nextCardId) {
    classNameForCard = "next-card";
  }

  if (certification.id == previousCardId) {
    classNameForCard = "previous-card";
  }

  return classNameForCard;
};
