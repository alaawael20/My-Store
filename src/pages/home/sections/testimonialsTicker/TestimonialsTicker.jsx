import React from "react";
import "./TestimonialsTicker.css";
import { testimonials } from "../../../../mock/testimonials";

const TestimonialsTicker = () => {
  return (
    <section className="testimonials-grid">
      <div className="container">
        <h2 className="section-title">آراء العملاء</h2>
        <div className="grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <p className="comment">"{item.comment}"</p>
              <p className="author">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTicker;
