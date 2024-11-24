import React, { useState } from "react";
import "./Questions.css";

function Q9(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ9() {
    props.onQ9(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar below to indicate your feelings on:
          <div className="line-break" />
          <br />
          <mark>the Internet</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            I want an excuse to unplug as much as I can
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="5"
              max="275"
              step="1"
              defaultValue="140"
              className="questions-slider"
              id="internetInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            I need the strongest, fastest connection everywhere I go
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ9}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q9;
