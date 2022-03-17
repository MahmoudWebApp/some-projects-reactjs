import React from "react";
import "./TourItem.css";

const TourItem = ({ name, id, image, price,info,removeTour}) => {
  return (
    <li  className="tour__item">
      <div className="tour__image-box">
        <img src={image} alt={name} />
      </div>
      <div className="tour__head">
        <h3>{name}</h3>
        <p>$ {price}</p>
      </div>
      <p className="tour__info">{info}</p>
      <button className="tour__btn" onClick={() => removeTour(id)}>
        not interesting
      </button>
    </li>
  );
};

export default TourItem;
