import React, { useState } from "react";
import logo from "./logo.png";
import Country from "./Country.ts";
import "./Result.css";

function Result(props: any) {
  let sampleCountry = new Country("DE");
  return (
    <>
      <br />
      <br />
      <main className="result-main">
        <section className="result-flag">
          <img src="https://flagcdn.com/de.svg" />
        </section>
        <section className="result-name">
          I should live in&nbsp;<b>Germany</b>.
        </section>
        <section className="result-details">
          <section className="result-detailContainer">
            <div className="result-officialName">
              <b>Official Name:</b>&nbsp;&nbsp;Federal Republic of Germany
            </div>
            <div className="result-detailsLeft">
              <b>Capital:</b>&nbsp;&nbsp;Berlin
              <br />
              <b>Currency:</b>&nbsp;&nbsp;Euro
              <br />
              <b>Demonym:</b>&nbsp;&nbsp;German
            </div>
            <div className="result-detailsRight">
              <b>Languages:</b>&nbsp;&nbsp;German
              <br />
              <b>Population:</b>&nbsp;&nbsp;82 million
              <br />
              <b>Region:</b>&nbsp;&nbsp;Central Europe
            </div>
          </section>
        </section>
        <section className="result-description">
          <i>
            <b>
              From&nbsp;
              <a href="https://en.wikipedia.org/wiki/Germany" target="_blank">
                Wikipedia:
              </a>
            </b>
          </i>
          <br />
          Germany, officially the Federal Republic of Germany, is a country in
          Central Europe. It lies between the Baltic and North Sea to the north
          and the Alps to the south. Its sixteen constituent states have a total
          population of over 82 million in an area of 357,596 km2 (138,069 sq
          mi), making it the most populous member state of the European Union.
          It borders Denmark to the north, Poland and the Czech Republic to the
          east, Austria and Switzerland to the south, and France, Luxembourg,
          Belgium, and the Netherlands to the west. The nation's capital and
          most populous city is Berlin and its main financial centre is
          Frankfurt; the largest urban area is the Ruhr.
        </section>
      </main>
    </>
  );
}

export default Result;
