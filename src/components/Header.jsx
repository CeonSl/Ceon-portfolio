import GoBackTop from "./icons/GoBackTop";

function Header({ isIntersecting }) {
  return (
    <>
      <div className="container-header-main">
        <div className="container-header">
          <ul className="container-nav">
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#about-me">Sobre mi</a>
            </li>
            <li>
              <a href="#contact-me">Contáctame</a>
            </li>
            <li className="container-go-back-top-li">
              <GoBackTop isIntersecting={isIntersecting} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
