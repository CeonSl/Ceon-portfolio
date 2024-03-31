import ButtonChangeLanguange from "./ButtonChangeLanguange";
import GoBackTop from "./icons/GoBackTop";
import { useTranslation } from "react-i18next";

function Header({ isIntersecting }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-header-main">
        <div className="container-header">
          <ul className="container-nav">
            <li className="container-change-language">
              <ButtonChangeLanguange />
            </li>
            <li className="list-item-container-links-page">
              <ul className="container-links-page">
                <li>
                  <a href="#projects">{t("Header.Projects")}</a>
                </li>
                <li>
                  <a href="#about-me">{t("Header.About Me")}</a>
                </li>
                <li>
                  <a href="#contact-me">{t("Header.Contact Me")}</a>
                </li>
              </ul>
            </li>
            <li
              className={`container-go-back-top-li ${
                isIntersecting ? "show-back-top" : "hide-back-top"
              }`}
            >
              <GoBackTop />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
