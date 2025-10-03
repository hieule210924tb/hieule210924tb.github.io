import React from "react";
import "./FoodCategories.css";

const categories = [
  "Pizza",
  "Breakfast",
  "Japanese",
  "Halal",
  "Dessert",
  "Lebanese",
  "American",
  "Sushi",
  "Greek",
  "Thai",
  "Vegetarian",
  "Italian",
  "Mexican",
  "Indian",
  "Chinese",
  "Breakfast",
  "Burgers",
];

const FoodCategories = () => {
  return (
    <div className="food-categories">
      <h2 className="title">Popular categories by food</h2>
      <div className="container">
        <div className="categories-list">
          {categories.map((item, index) => (
            <span key={index} className="category-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
