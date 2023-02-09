import React from "react";
import main from "./Main.module.css";
import imgOffice from "./image/about_company.png";
import Portfolio from "./Portfolio/Portfolio";
import Directions from "./Directions/Directions";

function Main() {
  // TODO: поправить вёрстку
  return (
    <>
      {/* Первый блок: О нас*/}
      <div>
        <h3 className="info__block">О нас</h3>
        <section className={main.about__company}>
          <img src={imgOffice} alt="office" className={main.img} />
          <div className={main.info__ust}>
            <h2 className="title__block">Почему UST?</h2>
            <p className={main.text}>
              К услугам наших клиентов разработка программного обеспечения на
              заказ, проектирование пользовательских интерфейсов, создание
              сайтов (в том числе на основе индивидуальной CMS) и их поддержка.
            </p>
            <p className={main.text}>
              Мы также предлагаем услугу IT-консалтинга — налаживание работы
              любых информационно-аналитических систем и онлайн-решений компании
              для большей эффективности бизнес-процессов.
            </p>
            <p className={main.text}>
              Сегодня компания «Union Smart Technology» имеет представительства
              с умелыми project‑менеджерами в РФ и Словакии. Такая география
              позволяет привлекать наиболее ответственных и квалифицированных
              программистов и живо реагировать на потребности заказчиков со
              всего света, сохраняя комфортный уровень цен.
            </p>
            <div className={main.block__btn}>
              <button type="button"className="btn btn__white">Вакансии</button>
              <button type="button" className="btn">Читать далее</button>
            </div>
          </div>
        </section>
      </div>
      {/* Второй блок: Наши предложения*/}
      <Directions/>
      {/* Третий блок: завершенные проекты */}
      <section>
        <Portfolio />
      </section>
    </>
  );
}

export default Main;
