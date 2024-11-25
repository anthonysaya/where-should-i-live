import React, { useState } from "react";
import "./Questions.css";

function Q11(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ11() {
    props.onQ11(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar to indicate your feelings on:
          <div className="line-break" />
          <br />
          <mark>Eating Meat</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            I want to eat less meat (or none at all)
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="4"
              max="124"
              step="1"
              defaultValue="64"
              className="questions-slider"
              id="meatInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            Meat is a significant portion of my diet
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ11}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q11;
