import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./PromoCarousel.css";
import { slides } from "../../mock/slides";

const PromoCarousel = () => {
  return (
    <section className="promo-carousel">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        spaceBetween={30}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="promo-slide">
              <div className="promo-slide__content">
                <div className="promo-slide__text">
                  <p className="subtitle">{slide.subtitle}</p>
                  <h2 className="title">
                    {slide.title.split(" ")[0]}{" "}
                    <span>{slide.title.split(" ")[1]}</span>
                  </h2>
                  <p className="subtext">{slide.subtext}</p>
                  <button className="promo-btn">{slide.button}</button>
                </div>
                <div className="promo-slide__image">
                  <img src={slide.image} alt="promo" />
                </div>
                <div className="promo-offer">
                  <h3>{slide.offer}</h3>
                  <p>على كل منتجاتنا</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PromoCarousel;
