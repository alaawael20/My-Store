import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";
import { categories } from "./../../../../mock/categories";

const CategoriesSection = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="categories__title">تصفح حسب الأقسام</h2>
        <div className="categories__grid">
          {categories.map((cat) => (
            <Link to={cat.path} className="category-card" key={cat.id}>
              <img src={cat.image} alt={cat.name} />
              <h3>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
