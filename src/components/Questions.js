import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Questions = ({ question, answer }) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="faq-section">
      <div className="question">
        <h3>{question}</h3>
        <div onClick={() => setIsClick(!isClick)} className="arrow">
          {isClick ? (
            <FaAngleUp className="arrow-icon" />
          ) : (
            <FaAngleDown className="arrow-icon" />
          )}
        </div>
      </div>
      {isClick && <p className="answer">{answer}</p>}
      <hr />
    </div>
  );
};

export default Questions;
