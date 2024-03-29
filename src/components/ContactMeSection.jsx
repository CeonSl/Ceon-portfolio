import { useTranslation } from "react-i18next";
import ContactMeSectionForm from "./ContactMeSectionForm";
import SendMail from "./icons/SendMail";

function ContactMeSection() {
  const { t } = useTranslation();

  return (
    <>
      <div id="contact-me" className="container-contact-me">
        <div>
          <h2>
            <SendMail />
            {t("Contact Me Section.Title")}
          </h2>
        </div>
        <ContactMeSectionForm />
      </div>
    </>
  );
}

export default ContactMeSection;
