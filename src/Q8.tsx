import React, { useState } from "react";
import "./Questions.css";

function Q8(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ8() {
    props.onQ8(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar below to indicate your feelings on:
          <div className="line-break" />
          <br />
          <mark>Military Forces</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            Peace and disarmament are the world's best path forward
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="0"
              max="20"
              step="0.1"
              defaultValue="10"
              className="questions-slider"
              id="milInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            A strong military is the best way to guarantee security
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ8}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q8;
