import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дані відправлено:
      ПІБ: ${formData.name}
      Телефон: ${formData.phone}
      Проблема: ${formData.message}`);
    setFormData({ name: "", phone: "", message: "" });
    setIsModalOpen(false);
  };

  return (
    <>
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
            <button onClick={() => setIsModalOpen(true)}>Написати директору</button>
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

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Напишіть директору</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ваше ПІБ</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Ваш номер телефону</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Опишіть проблему</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-buttons">
                <button type="submit" className="submit-btn">Відправити</button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Закрити
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
