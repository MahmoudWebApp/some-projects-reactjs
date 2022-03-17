import React from "react";
import './categories.css';

const Categories = ({ categories, menuFilter }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          className="categories__btn"
          key={index}
          onClick={() => menuFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
