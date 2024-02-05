import mainSectionStyles from "../css/mainSectionStyles.module.css";
import headerStyles from "../css/headerStyles.module.css";
import LinkedIn from "../components/icons/LinkedIn.jsx";
import Twitter from "../components/icons/Twitter.jsx";
import Mail from "../components/icons/Mail.jsx";
import Resume from "../components/icons/Resume.jsx";
import CVDoc from "../assets/docs/CARLOS ENRIQUE OROPEZA NEGRÓN CV.pdf";
import { useState } from "react";
import Check from "./icons/Check.jsx";
import Copy from "./icons/Copy.jsx";

const ButtonsSocialMediaResume = () => {
  const [downloadResume, setDownloadResume] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTimeout = (setter) => {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 8000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ceon20020508@gmail.com");
    handleTimeout(setCopied);
  };

  const handleHoverButton = (event) => {
    event.currentTarget.classList.add(headerStyles.showText);
    event.currentTarget.classList.add(headerStyles.hoverIconButton);
  };

  const handleRemoveHoverButton = (event) => {
    event.currentTarget.classList.remove(headerStyles.showText);
    event.currentTarget.classList.remove(headerStyles.hoverIconButton);
  };

  return (
    <ul>
      <li>
        <a
          href={CVDoc}
          target="_blank"
          rel="noreferrer"
          onClick={() => handleTimeout(setDownloadResume)}
          onMouseOver={handleHoverButton}
          onMouseOut={handleRemoveHoverButton}
        >
          <div className={headerStyles.containerIcon}>
            {downloadResume ? <Check /> : <Resume />}
          </div>
          <p>Mira mi CV</p>
        </a>
      </li>
      <li>
        <a
          className={mainSectionStyles.anchorIcons}
          onMouseOver={handleHoverButton}
          onMouseOut={handleRemoveHoverButton}
          target="_blank"
          rel="noreferrer"
          href=""
        >
          <div
            className={headerStyles.containerIcon}
            onMouseOver={handleHoverButton}
            onMouseOut={handleRemoveHoverButton}
          >
            <LinkedIn />
          </div>
          <p>Mi LinkedIn</p>
        </a>
      </li>
      <li>
        <a
          className={mainSectionStyles.anchorIcons}
          onMouseOver={handleHoverButton}
          onMouseOut={handleRemoveHoverButton}
          target="_blank"
          rel="noreferrer"
          href=""
        >
          <div className={headerStyles.containerIcon}>
            <Twitter />
          </div>
          <p>Mi Twitter</p>
        </a>
      </li>
      <li>
        <div
          onMouseOver={handleHoverButton}
          onMouseOut={handleRemoveHoverButton}
          className={headerStyles.containerLiEmail}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=ceon20020508@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={headerStyles.containerIcon}>
              <Mail />
            </div>
            <p>ceon20020508@gmail.com</p>
          </a>
          <div
            onClick={() => handleCopyEmail()}
            className={headerStyles.containerIconCopy}
          >
            {copied ? <Check /> : <Copy />}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ButtonsSocialMediaResume;
