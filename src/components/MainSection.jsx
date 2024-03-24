import MainSectionPhotoInfoAndButtons from "./MainSectionPhotoInfoAndButtons";
import ButtonsSocialMediaResume from "./ButtonsSocialMediaResume";
import React from "react";

const MainSection = React.forwardRef((_, ref) => {
  return (
    <>
      <div ref={ref} id="main-section" className="container-main-section">
        <MainSectionPhotoInfoAndButtons />
        <div className="container-buttons">
          <ButtonsSocialMediaResume />
        </div>
      </div>
    </>
  );
});
export default MainSection;
