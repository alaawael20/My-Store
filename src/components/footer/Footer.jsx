import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>RITA Store</h3>
      <p>تسوق أحدث المنتجات بأفضل الأسعار – تجربة تسوق سهلة وآمنة.</p>
      <div className="footer-links">
        <a href="/">الرئيسية</a>
        <a href="/shop">المتجر</a>
        <a href="/offers">العروض</a>
        <a href="/contact">اتصل بنا</a>
      </div>
      <div className="footer-social">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="footer-copy">© 2025 جميع الحقوق محفوظة RITA Store</div>
    </footer>
  );
};

export default Footer;
