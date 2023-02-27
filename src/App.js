import React, { useState } from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import Questions from "./components/Questions";
import questions from "./data";

const App = () => {
  const [question] = useState(questions);

  return (
    <div className="main-card">
      <h1 class="title">FAQ</h1>
      <div>
        {question.map((question) => {
          return <Questions key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
};

export default App;
