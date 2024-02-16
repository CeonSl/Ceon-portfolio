import mainSectionStyles from "../css/mainSectionStyles.module.css";

const MainSectionContainerImg = () => {
  return (
    <div className={mainSectionStyles.containerImg}>
      <img
        src={
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="ceon"
        title="ceon"
      />
    </div>
  );
};

export default MainSectionContainerImg;
