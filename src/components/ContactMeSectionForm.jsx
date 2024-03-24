function ContactMeSectionForm() {
  return (
    <>
      <div className="container-form">
        <form className="form">
          <label>Nombre</label>
          <input type="text" placeholder="Nombre Apellido..." />
          <label>Correo</label>
          <input type="email" placeholder="correo1234@gmail.com..." />
          <label>Mensaje</label>
          <textarea placeholder="Me interesaría que trab...." rows={12} />
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </>
  );
}

export default ContactMeSectionForm;
