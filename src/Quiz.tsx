import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import Country from "./Country.ts";
import { countryCodes } from "./CountryCode.ts";
import Questions from "./Questions.tsx";
import Loading from "./Loading.tsx";
import Result from "./Result.tsx";
import "./Quiz.css";

function Quiz(props: any) {
  const [state, setState] = useState("Quiz");
  const [idealCountry, setIdealCountry] = useState({});
  const [question, setQuestion] = useState(1);

  let countryArray: any[] = [];
  countryCodes.forEach((country: any) => {
    countryArray.push(new Country(country));
  });

  useEffect(() => {
    if (question < 11 || state != "Loading") {
      return;
    } else if (question == 11 && state == "Loading") {
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
    props.onQuiz("Start");
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
        case 1:
          setTempC(input);
          setQuestion(question + 1);
          break;
        case 2:
          setPopDens(input);
          setQuestion(question + 1);
          break;
        case 3:
          setImmigrants(input);
          setQuestion(question + 1);
          break;
        case 4:
          setEnglish(input);
          setQuestion(question + 1);
          break;
        case 5:
          setPrices(input);
          setQuestion(question + 1);
          break;
        case 6:
          setGini(input);
          setQuestion(question + 1);
          break;
        case 7:
          setDemocracy(input);
          setQuestion(question + 1);
          break;
        case 8:
          setMilitary(input);
          setQuestion(question + 1);
          break;
        case 9:
          setInternet(input);
          setQuestion(question + 1);
          break;
        case 10:
          setCars(input);
          setQuestion(question + 1);
          break;
        case 11:
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
          {state == "Result" && (
            <Result myCountry={idealCountry} onRestart={handleRestart} />
          )}
        </main>
      </section>
    </>
  );
}

export default Quiz;
