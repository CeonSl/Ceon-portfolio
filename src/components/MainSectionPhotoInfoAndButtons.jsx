import MainSectionContainerImg from "./MainSectionContainerImg";
import { useTranslation } from "react-i18next";

function MainSectionPhotoInfoAndButtons() {
  const { t } = useTranslation();

  return (
    <div className="container-img-text">
      <MainSectionContainerImg />
      <div className="container-text">
        <h1>
          {t("First Text")} <span>Carlos Oropeza</span>,
        </h1>
        <h2>{t("Main Profesion")}</h2>
        <p>
          {t("Main Text.First Part")} <span>{t("Main Text.Second Part")}</span>{" "}
          {t("Main Text.Third Part")}
          <span>{t("Main Text.Fourth Part")}</span>
          {t("Main Text.Fifth Part")}
        </p>
      </div>
    </div>
  );
}

export default MainSectionPhotoInfoAndButtons;
