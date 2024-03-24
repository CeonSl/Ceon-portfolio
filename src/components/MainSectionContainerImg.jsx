import ceonImg from "../imgs/Ceon_img.png";
import "../scss/mainSectionStyles.scss";

const MainSectionContainerImg = () => {
  return (
    <div className="profilePhoto">
      <img
        src={ceonImg}
        alt="Carlos Oropeza foto"
        title="Carlos Oropeza foto"
      />
    </div>
  );
};

export default MainSectionContainerImg;
