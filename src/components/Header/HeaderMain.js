import React from "react";
import h from "./Header.module.css";

function HeaderMain() {
  return (
    <section className={h.header__block}>
      <div className={h.block}>
        <h1 className={h.title}>
          Студия разработки программного обеспечения{" "}
          <span>с продуктовым мышлением</span>
        </h1>
        <h3 className={h.subtitle}>
          Мы создаем кроссплатформенные мобильные приложения и веб-платформы и
          находим для них лучшие решения.
        </h3>
        <button className="btn">Заказать проект</button>
      </div>
      
      <div className={h.block__statistic}>
        <div className={h.item}>
          <h3>
            4+
            <p>Года опыта</p>
          </h3>
        </div>
        <div className={h.item}>
          <h2>30+</h2>
          <h3>Завершенных проектов</h3>
        </div>
        <div className={h.item}>
          <h2>4+</h2>
          <h3>Года опыта</h3>
        </div>
        <div className={h.item}>
          <h2>4+</h2>
          <h3>Года опыта</h3>
        </div>
      </div>
    </section>
  );
}

export default HeaderMain;
