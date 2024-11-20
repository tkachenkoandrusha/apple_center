import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Основний контент футера */}
      <div className="footer-content">
        <div className="footer-column">
          <h3>Клієнту</h3>
          <ul>
            <li>Про нас</li>
            <li>Ремонт</li>
            <li>Trade-in</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Наші контакти</h3>
          <p>вул.Набережна 13, ТЦ "Борса", 2-й поверх</p>
          <p>066 00 79 555</p>
          <button>Написати директору</button>
        </div>
        <div className="footer-column">
          <h3>Наші соцмережі</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/applecenterkr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/instagram.png")}
                alt="instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.tiktok.com/@applecenterkr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/tkt.png")}
                alt="tiktok"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Нижній текст футера */}
      <div className="footer-bottom">
        <p>© 2024 Всі права захищені. Apple Center</p>
      </div>
    </footer>
  );
};

export default Footer;
