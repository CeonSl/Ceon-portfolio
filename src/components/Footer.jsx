import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-footer">
        <ul className="footer-ul">
          <li>
            <h4>{t("Footer Section.Left Part")}</h4>
          </li>
          <li>
            <h4>
              +51 912 315 701 |{" "}
              <a
                href="https://github.com/CeonSl/Ceon-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                {t("Footer Section.Right Part")}
              </a>
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
