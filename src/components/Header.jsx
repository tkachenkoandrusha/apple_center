import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <h1>Apple Center Service</h1>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/repair">Ремонт</Link></li>
          <li><Link to="/tradein">Trade-in</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li>
            <button className="quick-check-button">
            Швидка перевірка
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;