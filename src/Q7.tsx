import React, { useState } from "react";
import "./Questions.css";

function Q7(props: any) {
  const [answer, setAnswer] = useState(0);
  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQ7() {
    props.onQ7(answer);
  }
  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar below to indicate your feelings on:
        </section>
        <section className="questions-topic">
          <mark>Democracy</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            A strong unhindered leadership is necessary to get things done
          </div>
          <div className="questions-input">
            <input
              type="range"
              min="0.00"
              max="10.00"
              step="0.05"
              defaultValue="5.00"
              className="questions-slider"
              id="demoInput"
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            Multiparty elections and checks & balances are the foundation of
            good government
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button className="questions-button" id="Next" onClick={handleQ7}>
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Q7;
