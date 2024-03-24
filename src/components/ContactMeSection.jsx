import ContactMeSectionForm from "./ContactMeSectionForm";
import SendMail from "./icons/SendMail";

function ContactMeSection() {
  return (
    <>
      <div id="contact-me" className="container-contact-me">
        <div>
          <h3>
            <SendMail />
            ¡Contáctame conmigo!
          </h3>
        </div>
        <ContactMeSectionForm />
      </div>
    </>
  );
}

export default ContactMeSection;
