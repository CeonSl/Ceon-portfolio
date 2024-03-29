import { useTranslation } from "react-i18next";

function AboutMeSectionInfo() {
  const { t } = useTranslation();
  return (
    <div>
      <p>
        {t("About Me Section.Paragraphs.First.First Part")}{" "}
        <span>{t("About Me Section.Paragraphs.First.Second Part")}</span>{" "}
        {t("About Me Section.Paragraphs.First.Third Part")}{" "}
        <span>{t("About Me Section.Paragraphs.First.Fourth Part")}</span>,
        <span> {t("About Me Section.Paragraphs.First.Fifth Part")}</span>,
        <span> {t("About Me Section.Paragraphs.First.Sixth Part")}</span>,
        <span> {t("About Me Section.Paragraphs.First.Seventh Part")}</span>,{" "}
        <span>{t("About Me Section.Paragraphs.First.Eighth Part")} </span>,{" "}
        <span>{t("About Me Section.Paragraphs.First.Ninth Part")}</span>.
      </p>
      <p>
        {t("About Me Section.Paragraphs.Second.First Part")}{" "}
        <span> {t("About Me Section.Paragraphs.Second.Second Part")}</span>{" "}
        {t("About Me Section.Paragraphs.Second.Third Part")}{" "}
        <span>{t("About Me Section.Paragraphs.Second.Fourth Part")}</span>{" "}
        {t("About Me Section.Paragraphs.Second.Fifth Part")}{" "}
        <span>{t("About Me Section.Paragraphs.Second.Sixth Part")}</span>{" "}
        {t("About Me Section.Paragraphs.Second.Seventh Part")}
      </p>
    </div>
  );
}
export default AboutMeSectionInfo;
