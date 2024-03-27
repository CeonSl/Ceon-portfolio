import Check from "./icons/Check";

function Toast({ showToast }) {
  return (
    <div
      className={`container-toast ${showToast ? "show-toast" : "hide-toast"}`}
    >
      <h3 className="message-toast">
        <Check />
        ¡Mensaje enviado!
      </h3>
    </div>
  );
}

export default Toast;
