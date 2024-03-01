import aboutMeSectionStyles from "../css/aboutMeSectionStyles.module.css";
import JsIcon from "./icons/JsIcon";
import ReactIcon from "./icons/ReactIcon";

function AboutMeSectionInfo() {
  return (
    <div className={aboutMeSectionStyles.containerInfo}>
      <h3>Sobre mi</h3>
      <p>
        El desarrollo web ha sido durante los últimos 2 años mi pasión, por lo
        que he mantenido un aprendizaje continuo considerando diferentes puntos
        como: El aprendizaje de patrones de diseño, arquitecturas de software,
        lenguajes de programación, frameworks, sistemas de gestión de bases de
        datos, configuración de dominios y hostings. De esta manera, permitiendo
        el desarrollo Full Stack de una solución web utilizando a su vez buenas
        prácticas que hacen referencia a manejadores de versiones de código y al
        diseño enfocado en la escalabilidad y mantenibilidad de los sistemas.
      </p>
      <div className={aboutMeSectionStyles.containerInfoPhotos}>
        <JsIcon />
        <ReactIcon />
      </div>
    </div>
  );
}

export default AboutMeSectionInfo;
