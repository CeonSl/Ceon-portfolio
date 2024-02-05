import mainSectionStyles from '../css/mainSectionStyles.module.css'
function MainSectionDecorationsInfo() {
  return (
    <>
      <div className={mainSectionStyles.decorationUpRight}>
        <div className={mainSectionStyles.decorationUpRight1} />
        <div className={mainSectionStyles.decorationUpRight2} />
        <div className={mainSectionStyles.decorationUpRight3} />
      </div>
      <div
        className={`${mainSectionStyles.decorationUpRight} ${mainSectionStyles.copyDecorationUpRight}`}
      >
        <div className={`${mainSectionStyles.decorationUpRight1}`} />
        <div className={`${mainSectionStyles.decorationUpRight2}`} />
        <div className={`${mainSectionStyles.decorationUpRight3}`} />
      </div>
    </>
  );
}

export default MainSectionDecorationsInfo;
