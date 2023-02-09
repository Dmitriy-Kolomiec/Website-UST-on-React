import React from "react";
import p from "./Portfolio.module.css";
import one from "./image/one.png";
import two from "./image/two.png";
import three from "./image/three.png";
import four from "./image/four.png";
import five from "./image/five.png";
import six from "./image/six.png";

function Portfolio() {
  return (
    <div>
      <h3 className="info__block block-center">Портфолио</h3>
      <section>
        <section className={p.portfolio__block}>
          <h2 className="title__block">Завершенные проекты</h2>
          <p className="text__subtitle text__subtitle-center">
            Мы специализируемся на предоставлении программного обеспечения
            высшего качества и предоставлении высококвалифицированных команд с
            опытом в области разработки блокчейнов, аналитики больших данных и
            AI/ML, а также услуг по разработке программного обеспечения на
            заказ.
          </p>
        </section>
        <section className={p.completed__works}>
          <div className={p.block__work}>
            <img src={one} alt="image" />
            <h3>Мобильный контроль</h3>
            <p>Сервис для работы с клиентами и партнёрами</p>
          </div>
          <div className={p.block__work}>
            <img src={two} alt="image" />
            <h3>Голосовое управление</h3>
            <p>Сервис для работы по задачам</p>
          </div>
          <div className={p.block__work}>
            <img src={three} alt="image" />
            <h3>Vroomgames</h3>
            <p>Сервис для работы со списками заказов</p>
          </div>
          <div className={p.block__work}>
            <img src={four} alt="image" />
            <h3>ATOL-бонус</h3>
            <p>Мобильное приложения для профессионалов</p>
          </div>
          <div className={p.block__work}>
            <img src={five} alt="image" />
            <h3>Prorab-x</h3>
            <p>Мобильное приложение для строителей</p>
          </div>
          <div className={p.block__work}>
            <img src={six} alt="image" />
            <h3>Актуаль</h3>
            <p>Сайт промом игры</p>
          </div>
        </section>
        <div className={p.block__btn}>
          <button className="btn btn__white">Портфолио</button>
          <button className="btn">Заказать проект</button>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
