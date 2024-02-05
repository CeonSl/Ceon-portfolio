import aboutMeSectionStyles from "../css/aboutMeSectionStyles.module.css";
import explicacionWarshall from "../imgs/explicacionWarshall.png";

function AboutMeSectionPhotos() {
  return (
    <>
      <div className={aboutMeSectionStyles.containerPhotos}>
        <img
          src="https://media.istockphoto.com/id/1197640540/es/foto/dise%C3%B1o-del-sitio-web-desarrollo-de-tecnolog%C3%ADas-de-programaci%C3%B3n-y-codificaci%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=KrqgC27MPllB8WSFwvFF_FOIFVpeCFSTf_qvt58hacY="
          alt=""
          title=""
        />
        <img src={explicacionWarshall} alt="" title="" />
      </div>
    </>
  );
}

export default AboutMeSectionPhotos;
