import { useState } from "react";
import ceonImg from "../imgs/Ceon_Img.webp";
import "../scss/mainSectionStyles.scss";

const MainSectionContainerImg = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`profilePhoto  ${loaded ? "show-img" : "hide-img"} `}>
      <img
        src={`${ceonImg}`}
        alt="Carlos Oropeza foto"
        title="Carlos Oropeza foto"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default MainSectionContainerImg;
