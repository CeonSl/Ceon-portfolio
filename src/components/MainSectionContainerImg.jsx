import mainSectionStyles from "../css/mainSectionStyles.module.css";
import ceonImg from "../imgs/Ceon_img.jpeg";

const MainSectionContainerImg = () => {
  return (
    <div className={mainSectionStyles.containerImg}>
      <img src={ceonImg} alt="ceon" title="ceon" />
    </div>
  );
};

export default MainSectionContainerImg;
