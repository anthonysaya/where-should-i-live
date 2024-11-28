import React from "react";
import animation from "./Loading.gif";
import "./Loading.css";

function Loading() {
  return (
    <>
      <section className="Loading">
        Loading...
        <br />
        <br />
        <img src={animation} />
      </section>
    </>
  );
}

export default Loading;
