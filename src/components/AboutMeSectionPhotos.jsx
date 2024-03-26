import ceonImgAboutMe from "../imgs/Ceon_Img_about_me.webp";
import { useState } from "react";

function AboutMeSectionPhotos() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div className={`container-images ${loaded ? "show-img" : "hide-img"} `}>
        <img
          src={ceonImgAboutMe}
          alt="Carlos Oropeza foto 2"
          title="Carlos Oropeza foto 2"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </>
  );
}

export default AboutMeSectionPhotos;
