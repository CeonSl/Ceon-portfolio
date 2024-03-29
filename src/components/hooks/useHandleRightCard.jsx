function handleRightCard({
  certifications,
  currentCardId,
  setCurrentCardId,
  setPreviousCardId,
  setNextCardId,
}) {
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
  return { handleRightCard };
}

export default handleRightCard;
