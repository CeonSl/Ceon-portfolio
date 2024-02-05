import MainSectionPhotoInfoAndButtons from "./MainSectionPhotoInfoAndButtons";
import mainSectionStyles from "../css/mainSectionStyles.module.css";
import MainSectionGoDown from "./MainSectionGoDown";
import React from "react";

const MainSection = React.forwardRef((_, ref) => {
  return (
    <>
      <div ref={ref} id="main-section" className={mainSectionStyles.container}>
        <MainSectionPhotoInfoAndButtons />
        <MainSectionGoDown />
      </div>
    </>
  );
});
export default MainSection;
