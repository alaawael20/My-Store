import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    alert("تم الاشتراك بنجاح!");
  };

  return (
    <section className="newsletter">
      <h2>اشترك في نشرتنا البريدية</h2>
      <p>
        كن أول من يعرف عن العروض الحصرية، المنتجات الجديدة، وآخر الأخبار من RITA
        Store
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">اشترك الآن</button>
      </form>
    </section>
  );
};

export default Newsletter;
