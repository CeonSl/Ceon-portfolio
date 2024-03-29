function handleLeftCard({
  certifications,
  currentCardId,
  setCurrentCardId,
  setPreviousCardId,
  setNextCardId,
}) {
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
  return { handleLeftCard };
}

export default handleLeftCard;
