import { useState } from "react";
import SendMessage from "./icons/SendMessage";
import Toast from "./Toast";
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
      Body: `Mensaje de ${name}: ${message}. Correo de contacto: ${email}.`,
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

  return (
    <>
      <div className="container-form">
        <Toast showToast={showToast} />
        <form className="form" onSubmit={handleSubmitMessage}>
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre Apellido..."
          />
          <label>Correo</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo1234@gmail.com..."
          />
          <label>Asunto</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Propuesta laboral..."
          />
          <label>Mensaje</label>
          <textarea
            placeholder="Me interesaría que trab...."
            rows={12}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">
            <SendMessage /> Enviar mensaje
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactMeSectionForm;
