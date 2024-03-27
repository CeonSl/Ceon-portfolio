import Arrow from "./icons/Arrow";

function ControlsArrowResponsive({ handleLeftCard, handleRightCard }) {
  return (
    <div className="container-controls-arrow-responsive">
      <button
        id="arrow-left-responsive"
        aria-label="arrow-left-responsive"
        className="arrow-left"
        onClick={() => {
          handleLeftCard();
        }}
      >
        <Arrow />
      </button>
      <button
        id="arrow-right-responsive"
        aria-label="arrow-right-responsive"
        className="arrow-right"
        onClick={() => {
          handleRightCard();
        }}
      >
        <Arrow />
      </button>
    </div>
  );
}

export default ControlsArrowResponsive;
