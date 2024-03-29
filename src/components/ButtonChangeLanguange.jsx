import { useState } from "react";
import Translate from "./icons/Translate";
import { useTranslation } from "react-i18next";

function ButtonChangeLanguange() {
  const [openLanguages, setOpenLanguages] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  console.log(currentLang);

  const handleChangeState = () => {
    setOpenLanguages(!openLanguages);
  };

  const handleChangeToSpanish = () => {
    i18n.changeLanguage("es");
  };

  const handleChangeToEnglish = () => {
    i18n.changeLanguage("en");
  };

  return (
    <div className="change-language" onClick={() => handleChangeState()}>
      <ul className={`${openLanguages == false ? "" : "all-buttons"}`}>
        <li className={`${openLanguages == false ? "just-button" : ""}`}>
          <button>
            <Translate />
          </button>
        </li>
        {openLanguages && (
          <>
            <li onClick={() => handleChangeToSpanish()}>
              <p>🇪🇸</p>
            </li>
            <li onClick={() => handleChangeToEnglish()}>
              <p>🇺🇸</p>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default ButtonChangeLanguange;
