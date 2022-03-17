import "./accordion.css";
import data from "./accordionData";
import Question from "./Question";

const Accordion = () => {
  const questions = data;
  return (
    <div className="accordion">
      <div className="questions">
        <div className="questions__title">
          Questions and Answers About Login
        </div>
        <div className="questions__list">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
