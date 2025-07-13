import React, { useState } from "react";
import { products } from "../../../../mock/products";
import "./TabbedCategoryProducts.css";
import { tabbedCategories } from "../../../../mock/tabbedCategories";

const TabbedCategoryProducts = () => {
  const [selected, setSelected] = useState("مكياج");

  const filtered = products.filter((p) => p.category === selected);

  return (
    <section className="tabbed-products">
      <div className="container">
        <h2 className="section-title">تصفح حسب الفئة</h2>

        <div className="tabs">
          {tabbedCategories.map((cat) => (
            <button
              key={cat}
              className={`tab ${selected === cat ? "active" : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price">
                <span>{product.price} ₪</span>
                {product.oldPrice && (
                  <del className="old-price">{product.oldPrice} ₪</del>
                )}
              </div>
              <div className="rating">⭐ {product.rating}</div>
              <button className="add-btn">أضف إلى السلة</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabbedCategoryProducts;
