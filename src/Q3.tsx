import React, { useState } from "react";
import "./Questions.css";

function Q3(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ3() {
    props.onQ3(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar to indicate your feelings on:
          <div className="line-break" />
          <br />
          <mark>Immigration</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            I want to be the only foreigner around
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="0.0"
              max="51.0"
              step="0.1"
              defaultValue="25.5"
              className="questions-slider"
              id="migrantInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            I want to live somewhere with a large community of expats like
            myself
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ3}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q3;
