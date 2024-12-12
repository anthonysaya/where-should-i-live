import React, { useState } from "react";
import Home from "./Home.tsx";
import Credits from "./Credits.tsx";
import Quiz from "./Quiz.tsx";
import "./App.css";

function App() {
  const [state, setState] = useState<"Home" | "Credits" | "Quiz">("Home");

  return (
    <>
      {state == "Home" && (
        <Home
          onStart={() => {
            setState("Quiz");
          }}
          onCredits={() => {
            setState("Credits");
          }}
        />
      )}
      {state == "Credits" && (
        <Credits
          onBack={() => {
            setState("Home");
          }}
        />
      )}
      {state == "Quiz" && (
        <Quiz
          onRestart={() => {
            setState("Home");
          }}
        />
      )}
    </>
  );
}

export default App;
