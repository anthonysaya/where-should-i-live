import React, { useState } from "react";
import logo from "./logo.png";
import "./Result.css";

function Result(props: any) {
  function handleRestart() {
    props.onRestart("Start");
  }
  return (
    <>
      <br />
      <br />
      <main className="result-main">
        <section className="result-flag">
          <img src={props.myCountry.FlagUrl} />
        </section>
        <section className="result-name">
          I should live in&nbsp;<b>{props.myCountry.ShortName}</b>.
        </section>
        <section className="result-details">
          <section className="result-detailContainer">
            <div className="result-officialName">
              <b>Official Name:</b>&nbsp;&nbsp;{props.myCountry.LongName}
            </div>
            <div className="result-detailsLeft">
              <b>Capital:</b>&nbsp;&nbsp;{props.myCountry.Capital}
              <br />
              <b>Currency:</b>&nbsp;&nbsp;{props.myCountry.Currency}
              <br />
              <b>Demonym:</b>&nbsp;&nbsp;{props.myCountry.Demonym}
            </div>
            <div className="result-detailsRight">
              <b>Languages:</b>&nbsp;&nbsp;{props.myCountry.Languages}
              <br />
              <b>Population (2020):</b>&nbsp;&nbsp;{props.myCountry.Population}
              <br />
              <b>Region:</b>&nbsp;&nbsp;{props.myCountry.Region}
            </div>
          </section>
        </section>
        <section className="result-description">
          <i>
            <b>
              From&nbsp;
              <a href={props.myCountry.WikiLink} target="_blank">
                Wikipedia:
              </a>
            </b>
          </i>
          <br />
          {props.myCountry.WikiDesc}
        </section>
        <button className="result-button" id="restart" onClick={handleRestart}>
          Restart
        </button>
      </main>
    </>
  );
}

export default Result;
