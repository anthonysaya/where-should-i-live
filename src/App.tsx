import React, { useState } from "react";
import Start from "./Start.tsx";
import Credits from "./Credits.tsx";
import Quiz from "./Quiz.tsx";
import "./App.css";

function App() {
  const [state, setState] = useState("Start");
  function handleStart(start: string) {
    setState(start);
  }
  function handleCredits(credits: string) {
    setState(credits);
  }
  function handleQuiz(quiz: string) {
    setState(quiz);
  }
  return (
    <>
      {state == "Start" && <Start onStart={handleStart} />}
      {state == "Credits" && <Credits onCredits={handleCredits} />}
      {state == "Quiz" && <Quiz onQuiz={handleQuiz} />}
    </>
  );
}

export default App;
