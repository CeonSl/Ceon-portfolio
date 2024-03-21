import headerStyles from "../css/headerStyles.module.css";
import goBackTopStyles from "../css/goBackTopStyles.module.css";
import GoBackTop from "./icons/GoBackTop";
import ArrowDownDocs from "./icons/ArrowDownDocs";
import ButtonsSocialMediaResume from "./ButtonsSocialMediaResume";
import { useState } from "react";

function Header({ isIntersecting, setIsOpen }) {
  const [openDocs, setOpenDocs] = useState(false);

  return (
    <>
      <div className={`${headerStyles.container} `}>
        <button
          className={`${headerStyles.containerDocs}`}
          onClick={() => setOpenDocs(!openDocs)}
        >
          <p type="button">Mis Documentos</p>
          <ArrowDownDocs />
        </button>
        <ul className={headerStyles.containerLinks}>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about-me" onClick={() => setIsOpen(false)}>
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#contact-me" onClick={() => setIsOpen(false)}>
              Contáctame
            </a>
          </li>
        </ul>
        <div
          className={`${headerStyles.containerButtons} ${
            openDocs ? headerStyles.fadeIn : headerStyles.fadeOut
          }`}
        >
          <ButtonsSocialMediaResume />
        </div>
        <div
          className={`${
            isIntersecting ? goBackTopStyles.fadeIn : goBackTopStyles.fadeOut
          }`}
        >
          <GoBackTop />
        </div>
      </div>
    </>
  );
}

export default Header;
