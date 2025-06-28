import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="notfound">
      <div className="notfound__box">
        <h1 className="notfound__code">404</h1>
        <p className="notfound__text">
          عذرًا، الصفحة التي تبحث عنها غير موجودة
        </p>
        <Link to="/" className="notfound__btn">
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
