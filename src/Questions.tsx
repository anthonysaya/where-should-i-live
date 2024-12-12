import React, { useState, useEffect, ChangeEvent } from "react";
import QuestionData from "./QuestionData.json";
import "./Questions.css";

function Questions(props: {
  qNum: keyof typeof QuestionData;
  onQuestions: (input: number) => void;
}) {
  const [answer, setAnswer] = useState(12.5);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAnswer(parseInt(e.target.value));
  }
  function handleQuestions() {
    props.onQuestions(answer);
    setDefaultValue();
  }

  function setDefaultValue() {
    switch (props.qNum) {
      case "Q1":
        setAnswer(QuestionData["Q2"].defaultValue);
        break;
      case "Q2":
        setAnswer(QuestionData["Q3"].defaultValue);
        break;
      case "Q3":
        setAnswer(QuestionData["Q4"].defaultValue);
        break;
      case "Q4":
        setAnswer(QuestionData["Q5"].defaultValue);
        break;
      case "Q5":
        setAnswer(QuestionData["Q6"].defaultValue);
        break;
      case "Q6":
        setAnswer(QuestionData["Q7"].defaultValue);
        break;
      case "Q7":
        setAnswer(QuestionData["Q8"].defaultValue);
        break;
      case "Q8":
        setAnswer(QuestionData["Q9"].defaultValue);
        break;
      case "Q9":
        setAnswer(QuestionData["Q10"].defaultValue);
        break;
      case "Q10":
        setAnswer(QuestionData["Q11"].defaultValue);
        break;
    }
  }

  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar to indicate your feelings on:
          <div className="line-break" />
          <br />
          <mark>{QuestionData[props.qNum].title}</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            {QuestionData[props.qNum].labelLeft}
          </div>
          <div className="questions-input">
            <input
              type="range"
              min={QuestionData[props.qNum].min}
              max={QuestionData[props.qNum].max}
              step={QuestionData[props.qNum].step}
              className="questions-slider"
              id={QuestionData[props.qNum].id}
              value={answer}
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            {QuestionData[props.qNum].labelRight}
          </div>
        </main>
        <section className="questions-buttonContainer">
          <button
            className="questions-button"
            id="Next"
            onClick={handleQuestions}
          >
            Next
          </button>
        </section>
      </section>
    </>
  );
}

export default Questions;
