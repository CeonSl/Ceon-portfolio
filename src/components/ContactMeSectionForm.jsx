import { useState } from "react";
import SendMessage from "./icons/SendMessage";
import Toast from "./Toast";
import { useTranslation } from "react-i18next";
function ContactMeSectionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmitMessage = (e) => {
    e.preventDefault();

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ceon20020508@gmail.com",
      Password: "925932D4014A81866E08D85A16D0FBDB3C1C",
      To: "ceon20020508@gmail.com",
      From: "ceon20020508@gmail.com",
      Subject: `${subject}`,
      Body: ` Correo de contacto: ${email}.<br/> Mensaje de ${name}: ${message}.`,
    })
      .then((messageResponse) => {
        console.log(messageResponse);
        messageResponse.toLowerCase() == "ok" && setShowToast(true);
      })
      .then(() => {
        setTimeout(() => {
          setShowToast(false);
        }, 3500);
      });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="container-form">
        <Toast showToast={showToast} />
        <form className="form" onSubmit={handleSubmitMessage}>
          <label>{t("Contact Me Section.Form.Name.Title")}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("Contact Me Section.Form.Name.Placeholder")}
          />
          <label>{t("Contact Me Section.Form.Email.Title")}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("Contact Me Section.Form.Email.Placeholder")}
          />
          <label>{t("Contact Me Section.Form.Subject.Title")}</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={t("Contact Me Section.Form.Subject.Placeholder")}
          />
          <label>{t("Contact Me Section.Form.Message.Title")}</label>
          <textarea
            placeholder={t("Contact Me Section.Form.Message.Placeholder")}
            rows={12}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">
            <SendMessage /> {t("Contact Me Section.Form.Button")}
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactMeSectionForm;
