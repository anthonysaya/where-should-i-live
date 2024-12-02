import React, { useState, useEffect } from "react";
import QuestionData from "./QuestionData.json";
import "./Questions.css";

function Questions(props: any) {
  const [answer, setAnswer] = useState(12.5);
  const [questNum, setQuestNum] = useState("Q1");

  function handleChange(e: any) {
    setAnswer(e.target.value);
  }
  function handleQuestions() {
    props.onQuestions(answer);
    setDefaultValue();
  }

  function setDefaultValue() {
    switch (questNum) {
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

  useEffect(() => {
    setQuestNum("Q" + props.qNum);
  }, [props.qNum]);

  return (
    <>
      <section className="questions-container">
        <section className="questions-intro">
          Use the bar to indicate your feelings on:
          <div className="line-break" />
          <br />
          <mark>{QuestionData[questNum].title}</mark>
        </section>
        <main className="questions-main">
          <div className="questions-label">
            {QuestionData[questNum].labelLeft}
          </div>
          <div className="questions-input">
            <input
              type="range"
              min={QuestionData[questNum].min}
              max={QuestionData[questNum].max}
              step={QuestionData[questNum].step}
              className="questions-slider"
              id={QuestionData[questNum].id}
              value={answer}
              onChange={handleChange}
            />
          </div>
          <div className="questions-label">
            {QuestionData[questNum].labelRight}
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
