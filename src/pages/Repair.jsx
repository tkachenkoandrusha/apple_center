import React from "react";
import '../styles/Repair.css';
import Data from "../assets/ios.png"; 
const Repair = () => {
  return (
    <>
      <section id="apple-repair">
        <div className="content">
          <div className="text">
            <h2>Ремонт телефонів Apple</h2>
            <h3 className="highlight">Надійний ремонт для вашого iPhone</h3>
            <p>Наші сертифіковані майстри готові швидко та якісно відновити роботу вашого iPhone чи іншого пристрою Apple.</p>
            <p>Наші послуги:</p>
            <ul>
              <li>Заміна скла та екрана</li>
              <li>Ремонт кнопок та роз'ємів</li>
              <li>Відновлення після води</li>
              <li>Заміна акумулятора</li>
            </ul>
            <p>З технікою Apple у нас склалися особливі відносини. Багаторічний досвід дає змогу швидко та якісно проводити ремонт і оперативно рятувати вашого друга від води, від грубих механічних пошкоджень і від перебування смартфона в дитячих ручках. Це наша робота - щодня рятувати та оживляти яблучні девайси. У вартість ремонту входить ціна запчастини та ремонт.</p>
          </div>
        </div>
      </section>

      {/* Додаткові послуги */}
      <section id="apple-repair-services">
        <div className="content">
          <div className="text">
            <h2>Додаткові послуги</h2>
            <ul>
              <li>Оптимізація програмного забезпечення iPhone</li>
              <li>Ремонт MacBook</li>
              <li>Відновлення даних з пошкоджених пристроїв</li>
              <li>Налаштування пристроїв після ремонту</li>
              <li>Встановлення антивірусів</li>
              <li>Захисні плівки та чохли</li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src={Data} alt="Дані" className="hero-image" />
        </div>
      </section>
    </>
  );
};

export default Repair;
