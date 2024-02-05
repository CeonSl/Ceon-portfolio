import contactMeSectionStyles from '../css/contactMeSectionStyles.module.css'
import ContactMeSectionForm from './ContactMeSectionForm'
import ContactMeSectionTitle from './ContactMeSectionTitle'

function ContactMeSection() {
  return (
    <>
      <div id='contact-me' className={contactMeSectionStyles.container}>
        <ContactMeSectionTitle />
        <ContactMeSectionForm />
      </div>
    </>
  )
}

export default ContactMeSection
