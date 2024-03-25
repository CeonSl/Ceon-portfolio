import GoBackTop from "./icons/GoBackTop";

function Header({ isIntersecting, setIsOpen }) {
  return (
    <>
      <div className="container-header-main">
        <div className="container-header">
          <ul className="container-nav">
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
          <div className="">
            <GoBackTop />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
