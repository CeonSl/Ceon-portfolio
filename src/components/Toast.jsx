import Check from "./icons/Check";

function Toast({ showToast }) {
  return (
    <div
      className={`container-toast ${showToast ? "show-toast" : "hide-toast"}`}
    >
      <h5 className="message-toast">
        <Check />
        ¡Mensaje enviado!
      </h5>
    </div>
  );
}

export default Toast;
