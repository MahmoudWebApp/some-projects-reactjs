import React, { useState } from "react";
import "./question.css";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question__item">
      <h4 className="question__title">{title}</h4>
      <button className="question__btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "-" : "+"}
      </button>
      {showInfo && <p className="question__info">{info}</p>}
    </article>
  );
};

export default Question;
