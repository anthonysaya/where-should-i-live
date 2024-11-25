import React, { useState } from "react";
import "./Questions.css";

function Q4(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ4() {
    props.onQ4(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar to indicate your feelings on:
          <div className="line-break" />
          <br />
          <mark>English Proficiency</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            I want to be completely immersed in a language other than English
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="400"
              max="650"
              step="1"
              defaultValue="525"
              className="questions-slider"
              id="englishInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            I should be able to comfortably speak English to a stranger on the
            street
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ4}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q4;
