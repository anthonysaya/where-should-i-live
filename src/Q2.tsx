import React, { useState } from "react";
import "./Questions.css";

function Q2(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ2() {
    props.onQ2(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar to indicate your feelings on:
          <div className="line-break" />
          <br />
          <mark>Population Density</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            I want to be as far away from others as I can
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="0"
              max="550"
              step="5"
              defaultValue="275"
              className="questions-slider"
              id="denseInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            I want to be surrounded by other people
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ2}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q2;
