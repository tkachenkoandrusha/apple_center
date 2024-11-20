import React from "react";
import iphoneImage from "../assets/iphone_x_large_2x.png"; // Імпортуємо зображення iPhone
import labImage from "../assets/28_i.png"; // Імпортуємо зображення лабораторії
import accessoriesImage from "../assets/ax.jpg"; // Імпортуємо зображення аксесуарів
import labImages from "../assets/lab.jpg"; // labImage - це ім'я змінної для зображення
import '../styles/Home.css';
const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section id="home">
        <h1 className="hero-title">Apple Center</h1>
        <div className="hero-info">
          <span>® Тільки оригінальні запчастини</span>
          <span>🔄 Заміна у Вашій присутності</span>
          <span>👍 До 5 років гарантії на ремонт</span>
          <span>🔬 Власна лабораторія у місті для складних ремонтів</span>
        </div>
        <img
          src={iphoneImage}
          alt="iPhone"
          className="hero-image"
        />
      </section>

      {/* Про нас */}
      <section id="about">
        <div className="content">
          <div className="text">
            <h2>Чому саме ми?</h2>
            <h2>ДІАГНОСТИКА І ЗАМІНА ЗАПЧАСТИН У ВАС НА ОЧАХ!</h2>
            <p>
              <strong>AppleCenter</strong> - це єдиний сервісний центр техніки Apple у Кропивницькому з  
              <span className="highlight"> ВІДКРИТИМ ДОСТУПОМ</span> до робочого процесу діагностики та заміни запчастин для клієнта! 
              Завдяки спеціальним заскленим робочим місцям, Ви зможете спостерігати, як розбирають та ремонтують Ваш iPhone!
            </p>
          </div>
          <div className="image">
            <img src={labImage} alt="Лабораторія" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Секція Лабораторії */}
      <section id="lab">
        <div className="content">
          <div className="text">
            <h2>ГАРАНТІЯ НА РЕМОНТ ДО 5-ТИ РОКІВ!</h2>
            <p>
              Ми використовуємо тільки оригінальні запчастини та всю свою увагу фокусуємо на якість та швидкий ремонт техніки Apple у Кропивницькому! За таких обставин і якщо ви не порушуєте умови експлуатації, ваш пристрій служитиме Вам довгі роки після ремонту!
            </p>
            <h2>ВЛАСНА ЛАБОРАТОРІЯ В МІСТІ ДЛЯ ВАЖКИХ РЕМОНТІВ</h2>
            <p>Будь-який складний ремонт техніки Apple у Кропивницькому такий як:</p>
            <ul>
              <li>Заміна контролера живлення</li>
              <li>Заміна контролера заряду</li>
              <li>Заміна микросхеми управління сенсором</li>
              <li>Заміна Wi-fi модуля</li>
              <li>Заміна флеш-памʼяті</li>
              <li>Заміна процесора</li>
              <li>Відновлення після потрапляння рідини</li>
            </ul>
            <p>
              Ми проводимо у власній лабораторії з найсучаснішим обладнанням, яке також знаходиться в центрі міста! Більше ніяких відправок та тижневих очікувань - 90% ремонтів ми виконуємо того ж дня, коли прийняли пристрій!
            </p>
          </div>
          <div className="image">
            <img src={labImages} alt="Лабораторія" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Гарантія та аксесуари */}
      <section id="guarantee">
        <div className="content">
          <div className="text">
            <h2>ОРИГІНАЛЬНІ АКСЕСУАРИ, ГАРАНТІЯ 1 РІК!</h2>
            <p>
              Якщо ви хочете купити оригінальний зарядний пристрій iPhone в Кропивницькому з гарантією або будь-який інший аксесуар - ми даємо гарантію 1 рік на всю цифрову продукцію компанії Apple!
            </p>
            <p>
              Досить відвідати нас один раз і ви станете нашим постійним клієнтом. Ми запам'ятовуємось і нам довіряють. Кожного клієнта радіємо знижками та подарунками. У нас ви можете не тільки відремонтувати свій гаджет, але й придбати новий, а наші фахівці допоможуть вам його налаштувати.
            </p>
          </div>
          <div className="image">
            <img src={accessoriesImage} alt="Аксесуари" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Карта локації */}
      <section id="where">
        <div className="text">
          <h2>Де нас знайти?</h2>
        </div>
      </section>
      <section id="map">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.7234346931705!2d32.2616998120362!3d48.50549769714259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d04303d9be97a5%3A0xd0c446dba472915f!2sApple%20Center!5e0!3m2!1sru!2sua!4v1669120087213!5m2!1sru!2sua"
            width="600" 
            height="450" 
            style={{ border: "0" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта локації Apple Center">
          </iframe>
        </div>
      </section>
    </main>
  );
};

export default Home;
