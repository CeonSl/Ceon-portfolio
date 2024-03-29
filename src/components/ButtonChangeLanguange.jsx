import Translate from "./icons/Translate";
import { useTranslation } from "react-i18next";

function ButtonChangeLanguange() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  console.log(currentLang);

  const handleChangeToSpanish = () => {
    i18n.changeLanguage("es");
  };

  const handleChangeToEnglish = () => {
    i18n.changeLanguage("en");
  };

  return (
    <div className="change-language">
      <ul>
        <li>
          <button>
            <Translate />
          </button>
        </li>
        <li onClick={() => handleChangeToSpanish()}>
          <p>🇪🇸</p>
        </li>
        <li onClick={() => handleChangeToEnglish()}>
          <p>🇺🇸</p>
        </li>
      </ul>
    </div>
  );
}

export default ButtonChangeLanguange;
