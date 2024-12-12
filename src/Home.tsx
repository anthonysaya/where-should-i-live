import React from "react";
import logo from "./logo.png";
import "./Home.css";

function Home(props: { onStart: () => void; onCredits: () => void }) {
  function handleCredits() {
    props.onCredits();
  }
  function handleStart() {
    props.onStart();
  }

  return (
    <>
      <main className="home-main">
        <section className="home-logoContainer">
          <img src={logo} />
        </section>
        <section className="home-buttonContainer">
          <button className="home-button" id="start" onClick={handleStart}>
            Start
          </button>
          <button className="home-button" id="credits" onClick={handleCredits}>
            Credits
          </button>
        </section>
      </main>
    </>
  );
}

export default Home;
