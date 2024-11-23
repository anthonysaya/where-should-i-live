import React, { useState } from "react";
import "./Questions.css";

function Q6(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ6() {
    props.onQ6(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar below to indicate your feelings on:
        </section>
        <section className="questions-topic">
          <mark>Wealth Distribution</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            Everyone should get as fair and equal a share of the wealth as
            possible
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="50"
              max="90"
              step="0.1"
              defaultValue="70"
              className="questions-slider"
              id="giniInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            People should be free to hold as much wealth as they can earn
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ6}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q6;
