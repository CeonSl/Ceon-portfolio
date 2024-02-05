import preloaderStyles from "../../css/preloaderStyles.module.css";

export const preloader = () => {
  const body = document.getElementById("body");
  console.log(body);
  if (body) {
    body.classList.add(preloaderStyles.putBackground);
    setTimeout(() => {
      body.classList.add(preloaderStyles.removeBackground);
    }, 500);
  }
};
