import { handleTimeout } from "./handleTimeout";

export const handleCopyEmail = (setCopied) => {
  navigator.clipboard.writeText("ceon20020508@gmail.com");
  handleTimeout(setCopied);
};
