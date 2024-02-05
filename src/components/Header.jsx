import headerStyles from "../css/headerStyles.module.css";
import ButtonsSocialMediaResume from "./ButtonsSocialMediaResume";
import TitleHeader from "./TitleHeader";
import ArrowRightHeader from "./icons/ArrowRightHeader";
function Header({ isOpen, setIsOpen }) {
  const handleCloseBars = () => {
    setIsOpen(false);
  };

  const giveHoverLi = (event) => {
    event.currentTarget.classList.add(headerStyles.hoveringLi);
    event.currentTarget.classList.remove(headerStyles.withoutHoveringLi);
  };

  const removeHoverLi = (event) => {
    event.currentTarget.classList.remove(headerStyles.hoveringLi);
    event.currentTarget.classList.add(headerStyles.withoutHoveringLi);
  };

  return (
    <>
      <div
        className={`${headerStyles.container}  ${
          isOpen && headerStyles.showCompleteHeader
        }`}
      >
        <div
          className={`${headerStyles.arrowRightHeader} ${
            isOpen && headerStyles.toLeft
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowRightHeader />
        </div>
        <div className={`${headerStyles.containerTitleLinks}`}>
          <TitleHeader setIsOpen={setIsOpen} />
          <ul className={headerStyles.containerLinks}>
            <li onMouseOver={giveHoverLi} onMouseOut={removeHoverLi}>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Proyectos
              </a>
            </li>
            <li onMouseOver={giveHoverLi} onMouseOut={removeHoverLi}>
              <a href="#about-me" onClick={() => setIsOpen(false)}>
                Sobre mi
              </a>
            </li>
            <li onMouseOver={giveHoverLi} onMouseOut={removeHoverLi}>
              <a href="#contact-me" onClick={() => setIsOpen(false)}>
                Contáctame
              </a>
            </li>
          </ul>
        </div>
        <div className={headerStyles.containerButtons}>
          <ButtonsSocialMediaResume />
        </div>
      </div>
      <div
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
      </div>
    </>
  );
}

export default Header;
