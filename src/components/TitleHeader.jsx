const TitleHeader = ({ setIsOpen }) => {
  return (
    <div className="">
      <h1 className="">
        <a href="#main-section" onClick={() => setIsOpen(false)}>
          Ceon
        </a>
      </h1>
      <div className="">
        <div className="" />
      </div>
    </div>
  );
};

export default TitleHeader;
