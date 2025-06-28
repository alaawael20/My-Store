import React, { useState, useEffect } from "react";
import "./TopBar.css";

const messages = [
  "الشحن مجاني للطلبات بقيمة 20 دينار أو أكثر 🧡",
  "احصل على خصم 10٪ على أول طلب لك 🎁",
  "الدفع عند الاستلام متوفّر الآن 🛒",
  "تابعنا على إنستغرام لأحدث العروض 📸",
];

const TopBar = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar">
      <div className="topbar__icons">
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <i className="fab fa-tiktok"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className={`topbar__msg ${fade ? "fade-in" : "fade-out"}`}>
        {messages[index]}
      </div>
    </div>
  );
};

export default TopBar;
