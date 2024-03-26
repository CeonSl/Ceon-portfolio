import Check from "./icons/Check";

function Toast({ showToast }) {
  return (
    <div
      className={`container-toast ${showToast ? "show-toast" : "hide-toast"}`}
    >
      <h6 className="message-toast">
        <Check />
        ¡Mensaje enviado!
      </h6>
    </div>
  );
}

export default Toast;
