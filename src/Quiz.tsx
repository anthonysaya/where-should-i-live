import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import Country from "./Country.ts";
import { countryCodes } from "./CountryCode.ts";
import QuestionData from "./QuestionData.json";
import CountryData from "./CountryData.json";
import Questions from "./Questions.tsx";
import Loading from "./Loading.tsx";
import Result from "./Result.tsx";
import "./Quiz.css";

interface cArray extends Country {}

function Quiz(props: { onRestart: () => void }) {
  const [state, setState] = useState<"Home" | "Quiz" | "Loading" | "Result">(
    "Quiz"
  );
  const [idealCountry, setIdealCountry] = useState<Country | null>(null);
  const [question, setQuestion] = useState<keyof typeof QuestionData>("Q1");

  let countryArray: cArray[] = [];
  countryCodes.forEach((country: keyof typeof CountryData) => {
    countryArray.push(new Country(country));
  });

  useEffect(() => {
    if (question != "Q11" || state != "Loading") {
      return;
    } else if (question == "Q11" && state == "Loading") {
      let sortedArray = countryArray.map((country) => {
        return {
          cc: country.cc,
          zscore:
            Math.abs(country.AvgTempC - tempC) +
            Math.abs(country.PopDensKm2 - popDens) +
            Math.abs(country.PctImmigrant - immigrants) +
            Math.abs(country.EngProficiency - english) +
            Math.abs(country.PriceLvlIndex - prices) +
            Math.abs(country.GiniCoeff - gini) +
            Math.abs(country.DemoIndex - democracy) +
            Math.abs(country.ActiveMilPer1000 - military) +
            Math.abs(country.MdnInternetSpdMbps - internet) +
            Math.abs(country.VehiclesPer1000 - cars) +
            Math.abs(country.MeatEatenKgPersonYr - meat),
        };
      });
      sortedArray.sort((countryA, countryB) => {
        let result = countryA.zscore - countryB.zscore;
        return result;
      });

      const myCountry = new Country(sortedArray[0].cc);
      myCountry.init().then(() => {
        console.log(myCountry);
        setIdealCountry(myCountry);
        setState("Result");
      });
    }
  }, [question, state]);

  function handleRestart() {
    props.onRestart();
  }

  const [tempC, setTempC] = useState(0);
  const [popDens, setPopDens] = useState(0);
  const [immigrants, setImmigrants] = useState(0);
  const [english, setEnglish] = useState(0);
  const [prices, setPrices] = useState(0);
  const [gini, setGini] = useState(0);
  const [democracy, setDemocracy] = useState(0);
  const [military, setMilitary] = useState(0);
  const [internet, setInternet] = useState(0);
  const [cars, setCars] = useState(0);
  const [meat, setMeat] = useState(0);

  function handleQuestions(input: number) {
    if (state == "Quiz") {
      switch (question) {
        case "Q1":
          setTempC(input);
          setQuestion("Q2");
          break;
        case "Q2":
          setPopDens(input);
          setQuestion("Q3");
          break;
        case "Q3":
          setImmigrants(input);
          setQuestion("Q4");
          break;
        case "Q4":
          setEnglish(input);
          setQuestion("Q5");
          break;
        case "Q5":
          setPrices(input);
          setQuestion("Q6");
          break;
        case "Q6":
          setGini(input);
          setQuestion("Q7");
          break;
        case "Q7":
          setDemocracy(input);
          setQuestion("Q8");
          break;
        case "Q8":
          setMilitary(input);
          setQuestion("Q9");
          break;
        case "Q9":
          setInternet(input);
          setQuestion("Q10");
          break;
        case "Q10":
          setCars(input);
          setQuestion("Q11");
          break;
        case "Q11":
          setMeat(input);
          setState("Loading");
          break;
      }
    }
  }

  return (
    <>
      <section className="quiz-container">
        <header className="quiz-header">
          <img src={logo} />
        </header>
        <main className="quiz-main">
          {state == "Quiz" && (
            <Questions qNum={question} onQuestions={handleQuestions} />
          )}
          {state == "Loading" && <Loading />}
          {state == "Result" && idealCountry && (
            <Result myCountry={idealCountry} onRestart={handleRestart} />
          )}
        </main>
      </section>
    </>
  );
}

export default Quiz;
