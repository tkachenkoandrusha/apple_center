import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    issue: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дані відправлено:
      ПІБ: ${formData.name}
      Модель: ${formData.model}
      Поломка: ${formData.issue}
      Телефон: ${formData.phone}`);
    setFormData({ name: "", model: "", issue: "", phone: "" });
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="App-header">
        <h1>Apple Center Service</h1>
        <nav>
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/repair">Ремонт</Link></li>
            <li><Link to="/tradein">Trade-in</Link></li>
            <li><Link to="/about">Про нас</Link></li>
            <li>
              <button
                className="quick-check-button"
                onClick={() => setIsModalOpen(true)}
              >
                Швидка перевірка
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Швидка перевірка</h2>
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
                <label htmlFor="model">Модель телефону</label>
                <select
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Оберіть модель</option>
                  <option value="iPhone 13">iPhone 13</option>
                  <option value="iPhone 13 Pro">iPhone 13 Pro</option>
                  <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>
                  <option value="iPhone 14">iPhone 14</option>
                  <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                  <option value="iPhone 14 Pro Max">iPhone 14 Pro Max</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="issue">Опис поломки</label>
                <textarea
                  id="issue"
                  name="issue"
                  rows="4"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                ></textarea>
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
              <div className="form-buttons">
                <button type="submit" className="submit-btn">Зв’язатися з менеджером</button>
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

export default Header;
