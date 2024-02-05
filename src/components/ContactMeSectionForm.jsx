import contactMeSectionStyles from '../css/contactMeSectionStyles.module.css'

function ContactMeSectionForm() {
  return (
    <>
      <div className={contactMeSectionStyles.containerForm}>
        <form className={contactMeSectionStyles.form}>
          <label>Nombre</label>
          <input type='text' placeholder='Carlos Oropeza...'/>

          <label>Correo</label>
          <input type='email' placeholder='correo1234@gmail.com...'/>
          <label>Asunto</label>
          <input type='text' placeholder='Invitación al equipo...'/>
          <label>Mensaje</label>
          <textarea placeholder='Me interesaría que trab....' rows={12}/>
          <button type='submit'>Enviar mensaje</button>
        </form> 
      </div>
    </>
  )
}

export default ContactMeSectionForm
