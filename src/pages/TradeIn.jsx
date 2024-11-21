import React, { useState } from "react";
import "../styles/TradeIn.css";

const TradeIn = () => {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedModel === "iPhone 13" && selectedMemory === "128 GB") {
      alert("Ціна: 17 130 грн");
    } else {
      alert(`Вибрано модель: ${selectedModel}, пам'ять: ${selectedMemory}`);
    }
  };

  return (
    <section id="tradein">
      <h1>Як проходить обмін в Apple Centre?</h1>
      <ul>
        <li>За допомогою конструктора вкажіть модель, колір і обсяг пам'яті вашого старого пристрою.</li>
        <li>Також виберіть модель на яку хочете обміняти та не забудьте вказати додаткові параметри для максимально точного розрахунку оцінки й доплати.</li>
        <li>У кілька кліків оформте заявку на обмін і чекайте дзвінка від менеджера.</li>
        <li>Приходьте в зручний для вас магазин Ябко для проведення оцінки. Дізнайтеся точну різницю між вартістю старого пристрою і бажаної моделі.</li>
        <li>Проведіть обмін Trade IN — весь процес займе мінімум часу. Швидко і зручно.</li>
      </ul>
      <p>Немає ніяких обмежень по асортименту або кількості пристроїв від компанії Apple, які підлягають обміну одночасно...</p>
      <p>Якщо у пристрої, наприклад, розбитий екран — ми просто враховуємо це при загальній оцінці...</p>

      {/* Форма для вибору моделі та пам'яті */}
      <form onSubmit={handleSubmit} className="tradein-form">
        <h2>Заповніть форму для оцінки пристрою</h2>
        <div className="form-group">
          <label htmlFor="model">Модель iPhone</label>
          <select
            id="model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            required
          >
            <option value="" disabled>Оберіть модель</option>
            <option value="iPhone 13">iPhone 13</option>
            <option value="iPhone 13 Pro">iPhone 13 Pro</option>
            <option value="iPhone 14">iPhone 14</option>
            <option value="iPhone 14 Pro">iPhone 14 Pro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="memory">Обсяг пам'яті</label>
          <select
            id="memory"
            value={selectedMemory}
            onChange={(e) => setSelectedMemory(e.target.value)}
            required
          >
            <option value="" disabled>Оберіть пам'ять</option>
            <option value="64 GB">64 GB</option>
            <option value="128 GB">128 GB</option>
            <option value="256 GB">256 GB</option>
            <option value="512 GB">512 GB</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Відправити</button>
      </form>
    </section>
  );
};

export default TradeIn;
