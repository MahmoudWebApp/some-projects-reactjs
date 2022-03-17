import React, { useState } from "react";
import "./review.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ people }) => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const checknumber = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };
  const prePerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checknumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checknumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checknumber(randomIndex));
  };

  return (
    <article className="review">
      <div className="review__img">
        <FaQuoteRight className="img-icon" />
        <img src={image} alt={name} />
      </div>
      <div className="review-text">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
      </div>
      <div className="review-icon">
        <button onClick={prePerson}>
          <FaChevronLeft style={{ marginRight: "2rem" }} />
        </button>
        <button onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson}>Surprise Me</button>
    </article>
  );
};

export default Review;
