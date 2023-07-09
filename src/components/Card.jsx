import React from "react";
export default function Sidebar() {
  const [angle, setAngle] = React.useState(0);
  const [count, setCount] = React.useState(1);
  const [data, setData] = React.useState({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what’s difficult is getting up and taking action.",
  });
  React.useEffect(() => {
    fetch(`https://api.adviceslip.com/advice?t=${Math.random()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.slip.advice);
        setData((prevData) => {
          return {
            id: data.slip.id,
            advice: data.slip.advice,
          };
        });
      });
  }, [count]);
  const rotateButton = () => {
    setAngle((prevAngle) => prevAngle + 360);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="card">
      <h2 className="card__header">ADVICE #{data.id}</h2>
      <p className="card__advice">“{data.advice}”</p>
      <span className="card__divider">
        <img
          className="card__divider__image--desktop"
          src="./images/pattern-divider-desktop.svg"
          alt="pattern-divider-desktop"
        />
        <img
          className="card__divider__image--mobile"
          src="./images/pattern-divider-mobile.svg"
          alt="pattern-divider-desktop"
        />
      </span>
      <button
        aria-label="button-generator"
        className="card__generator"
        onClick={rotateButton}
        style={{ transform: `translate(-50%, 50%) rotate(${angle}deg)` }}
      >
        <img className="card__generator__image" src="./images/icon-dice.svg" />
      </button>
    </div>
  );
}
