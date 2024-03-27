import { useEffect } from "react";

function useHandleCloseViewer({ setToggleViewer, toggleViewer }) {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName != "IMG" && e.target.tagName != "BUTTON") {
        setToggleViewer(false);
      }
    };

    if (!toggleViewer) {
      document.removeEventListener("click", handleClick);
    } else {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [toggleViewer, setToggleViewer]);
}

export default useHandleCloseViewer;
