// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand font-weight-bold" to="/">
        KD
      </Link>
      <button onClick={toggleOpen} className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link onClick={toggleOpen} className="nav-link" to="/history">
              Tarihçe
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleOpen} className="nav-link" to="/types">
              Yiyecek Tipleri
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleOpen} className="nav-link" to="/menu">
              Menü
            </Link>
          </li>
          {/* Yeni testimonials sayfasına yönlendiren link */}
          <li className="nav-item">
            <Link onClick={toggleOpen} className="nav-link" to="/testimonials">
              Referanslar
            </Link>
          </li>
          {/* Yeni contact form sayfasına yönlendiren link */}
          <li className="nav-item">
            <Link onClick={toggleOpen} className="nav-link" to="/contact">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
