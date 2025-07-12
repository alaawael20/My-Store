import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavbarHeader.css";
import { navLinks } from "../../mock/navLinks";

const NavbarHeader = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span>
            RITA&nbsp;<strong>Store</strong>
          </span>
        </Link>

        <button
          className="navbar__toggle"
          aria-label="فتح القائمة"
          onClick={() => setOpen(!open)}
        >
          <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <nav className={`navbar__menu ${open ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="navbar__link"
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__icons">
          <button aria-label="بحث">
            <i className="fas fa-search"></i>
          </button>
          <Link to="/wishlist" aria-label="قائمة الرغبات">
            <i className="fas fa-heart"></i>
          </Link>
          <Link to="/account" aria-label="حسابي">
            <i className="fas fa-user"></i>
          </Link>
          <Link to="/cart" className="navbar__cart" aria-label="سلة المشتريات">
            <i className="fas fa-shopping-cart"></i>
            <span className="navbar__cart-count">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarHeader;
