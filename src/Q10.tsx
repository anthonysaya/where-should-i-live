import React, { useState } from "react";
import "./Questions.css";

function Q10(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ10() {
    props.onQ10(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar below to indicate your feelings on:
        </section>
        <section className="questions-topic">
          <mark>Motor Vehicles</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            Cars and trucks are destroying the planet. @&#$ Cars!
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="10"
              max="950"
              step="5"
              defaultValue="480"
              className="questions-slider"
              id="carsInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            Cars and trucks provide me the freedom to get where I need to go on
            my terms
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ10}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q10;
