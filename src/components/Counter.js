import "../App.css";

const Counter = ({ counter, setCounter }) => {
  return (
    <div className="body">
      <div className="parent">
        {
          <button
            className={counter === 0 ? "undisplay-button" : "button"}
            onClick={() => {
              setCounter(counter - 1);
            }}
            disabled={counter === 0}
          >
            -
          </button>
        }

        <div className="counter"> {counter}</div>

        <button
          className={counter >= 10 ? "undisplay-button" : "button"}
          onClick={() => {
            setCounter(counter + 1);
          }}
          disabled={counter >= 10}
        >
          +
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
