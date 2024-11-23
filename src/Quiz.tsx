import React, { useState } from "react";
import logo from "./logo.png";
import Q1 from "./Q1.tsx";
import Q2 from "./Q2.tsx";
import Q3 from "./Q3.tsx";
import Q4 from "./Q4.tsx";
import Q5 from "./Q5.tsx";
import Q6 from "./Q6.tsx";
import Q7 from "./Q7.tsx";
import Q8 from "./Q8.tsx";
import Q9 from "./Q9.tsx";
import Q10 from "./Q10.tsx";
import Q11 from "./Q11.tsx";
import Result from "./Result.tsx";
import "./Quiz.css";

function Quiz(props: any) {
  function handleRestart() {
    props.onQuiz("Start");
  }
  function handleQ1(temp: number) {
    setTempC(temp);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ2(pop: number) {
    setPopDens(pop);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ3(imm: number) {
    setImmigrants(imm);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ4(eng: number) {
    setEnglish(eng);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ5(pli: number) {
    setPrices(pli);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ6(ineq: number) {
    setGini(ineq);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ7(demo: number) {
    setDemocracy(demo);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ8(mil: number) {
    setMilitary(mil);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ9(mbps: number) {
    setInternet(mbps);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ10(mv: number) {
    setCars(mv);
    //For each Country, run ZScorefunc()
    setQuestion(question + 1);
  }
  function handleQ11(durger: number) {
    setMeat(durger);
    //For each Country, run ZScorefunc()
    setState("Result");
  }

  const [state, setState] = useState("Quiz");
  const [question, setQuestion] = useState(1);

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

  return (
    <>
      <section className="quiz-container">
        <header className="quiz-header">
          <img src={logo} />
        </header>
        <main className="quiz-main">
          {state == "Quiz" && question == 1 && <Q1 onQ1={handleQ1} />}
          {state == "Quiz" && question == 2 && <Q2 onQ2={handleQ2} />}
          {state == "Quiz" && question == 3 && <Q3 onQ3={handleQ3} />}
          {state == "Quiz" && question == 4 && <Q4 onQ4={handleQ4} />}
          {state == "Quiz" && question == 5 && <Q5 onQ5={handleQ5} />}
          {state == "Quiz" && question == 6 && <Q6 onQ6={handleQ6} />}
          {state == "Quiz" && question == 7 && <Q7 onQ7={handleQ7} />}
          {state == "Quiz" && question == 8 && <Q8 onQ8={handleQ8} />}
          {state == "Quiz" && question == 9 && <Q9 onQ9={handleQ9} />}
          {state == "Quiz" && question == 10 && <Q10 onQ10={handleQ10} />}
          {state == "Quiz" && question == 11 && <Q11 onQ11={handleQ11} />}
          {state == "Result" && <Result onRestart={handleRestart} />}
        </main>
      </section>
    </>
  );
}

export default Quiz;
