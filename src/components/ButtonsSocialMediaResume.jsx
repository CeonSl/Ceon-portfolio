import LinkedIn from "../components/icons/LinkedIn.jsx";
import Twitter from "../components/icons/Twitter.jsx";
import Mail from "../components/icons/Mail.jsx";
import Resume from "../components/icons/Resume.jsx";
import CVDoc from "../assets/docs/CARLOS ENRIQUE OROPEZA NEGRÓN CV_.pdf";
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

  return (
    <ul>
      <li>
        <a
          href={CVDoc}
          target="_blank"
          rel="noreferrer"
          onClick={() => handleTimeout(setDownloadResume)}
        >
          <div className="icon-container">
            {downloadResume ? <Check /> : <Resume />}
          </div>
          <p>Curriculum Vitae</p>
        </a>
      </li>
      <li>
        <a
          className=""
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/carlos-enrique-oropeza"
        >
          <div className="icon-container">
            <LinkedIn />
          </div>
          <p>LinkedIn</p>
        </a>
      </li>
      <li>
        <a
          className=""
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/CeonSl_"
        >
          <div className="icon-container">
            <Twitter />
          </div>
          <p>Twitter</p>
        </a>
      </li>
      <li>
        <div className="container-mail-button">
          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=ceon20020508@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-container">
              <Mail />
            </div>
            <p>Contáctame</p>
          </a>
          <div onClick={() => handleCopyEmail()} className="">
            {copied ? <Check /> : <Copy />}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ButtonsSocialMediaResume;
