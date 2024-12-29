import Twitter from "../components/icons/Twitter.jsx";
import Mail from "../components/icons/Mail.jsx";
import { useState } from "react";
import Check from "./icons/Check.jsx";
import Copy from "./icons/Copy.jsx";
import { handleCopyEmail } from "./logic/handleCopyEmail.jsx";
import ButtonAnchorDocs from "./ButtonAnchorDocs.jsx";
import { useTranslation } from "react-i18next";

const ButtonsSocialMediaResume = () => {
  const [downloadResume, setDownloadResume] = useState(false);
  const [copied, setCopied] = useState(false);

  const { t } = useTranslation();

  return (
    <ul>
      <li>
        <ButtonAnchorDocs
          click={true}
          downloadResume={downloadResume}
          setDownloadResume={setDownloadResume}
        />
      </li>
      <li>
        <ButtonAnchorDocs
          url={"https://twitter.com/CeonSl_"}
          text={"Twitter"}
          icon={<Twitter />}
        />
      </li>
      <li>
        <div className="container-mail-button">
          <ButtonAnchorDocs
            url={
              "https://mail.google.com/mail/?view=cm&source=mailto&to=ceon20020508@gmail.com"
            }
            text={t("Buttons.Contact Me")}
            icon={<Mail />}
          />
          <div onClick={() => handleCopyEmail(setCopied)} className="">
            {copied ? <Check /> : <Copy />}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ButtonsSocialMediaResume;
