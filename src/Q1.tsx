import React, { useState } from "react";
import "./Questions.css";

function Q1(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ1() {
    props.onQ1(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar below to indicate your feelings on:
        </section>
        <section className="questions-topic">
          <mark>Outdoor Temperatures</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">I want to freeze</div>
          <div className="questions-input">
            <input
              type="range"
              min="-5"
              max="30"
              step="0.1"
              defaultValue="12.5"
              className="questions-slider"
              id="tempInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">I want to boil</div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ1}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q1;
