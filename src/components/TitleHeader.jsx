import headerStyles from "../css/headerStyles.module.css";

const TitleHeader = ({ setIsOpen }) => {
  return (
    <div className={headerStyles.containerTitle}>
      <h1 className={headerStyles.title}>
        <a href="#main-section" onClick={() => setIsOpen(false)}>
          Ceon
        </a>
      </h1>
      <div className={headerStyles.titleDecoration}>
        <div className={`${headerStyles.decoration} ${headerStyles.deco1}`} />
      </div>
    </div>
  );
};

export default TitleHeader;
