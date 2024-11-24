import React from "react";
import logo from "./logo.png";
import "./Start.css";

function Start(props: any) {
  function handleCredits() {
    props.onStart("Credits");
  }
  function handleStart() {
    props.onStart("Quiz");
  }

  return (
    <>
      <main className="start-main">
        <section className="start-logoContainer">
          <img src={logo} />
        </section>
        <section className="start-buttonContainer">
          <button className="start-button" id="start" onClick={handleStart}>
            Start
          </button>
          <button className="start-button" id="credits" onClick={handleCredits}>
            Credits
          </button>
        </section>
      </main>
    </>
  );
}

export default Start;
