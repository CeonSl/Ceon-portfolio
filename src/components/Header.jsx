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

      {/* <div
        className={`${headerStyles.containerResponsive} ${
          isOpen && headerStyles.containerResponsiveOpen
        }`}
      >
        <div className={headerStyles.headerResponsive}>
          <h1 className={headerStyles.title}>
            <a href="#main-section">Ceon</a>
          </h1>
          <div
            className={`${isOpen && headerStyles.barsOpen} ${
              headerStyles.barsResponsive
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <ArrowRightHeader />
          </div>
        </div>
        <div
          className={`${headerStyles.containerLinksButtons} ${
            isOpen
              ? headerStyles.headerResponsiveIsOpen
              : headerStyles.headerResponsiveIsClose
          }`}
        >
          <ul className={`${headerStyles.containerLinks}`}>
            <li>
              <a onClick={handleCloseBars} href="#projects">
                Proyectos
              </a>
            </li>
            <li>
              <a onClick={handleCloseBars} href="#about-me">
                Sobre mi
              </a>
            </li>
            <li>
              <a onClick={handleCloseBars} href="#contact-me">
                Contáctame
              </a>
            </li>
          </ul>
          <div className={headerStyles.containerButtonsResponsive}>
            <ButtonsSocialMediaResume />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Header;
