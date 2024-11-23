import React, { useState } from "react";
import "./Questions.css";

function Q5(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ5() {
    props.onQ5(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar below to indicate your feelings on:
        </section>
        <section className="questions-topic">
          <mark>Cost of Living</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            I want to live as cheaply and affordably as possible
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="35"
              max="185"
              step="1"
              defaultValue="110"
              className="questions-slider"
              id="priceInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            I want to live in a wealthy country with luxury prices
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ5}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q5;
