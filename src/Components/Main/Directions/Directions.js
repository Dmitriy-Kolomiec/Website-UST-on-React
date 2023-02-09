import React from "react";
import d from "./Directions.module.css";
import one from "./image/1.png";
import two from "./image/2.png";
import three from "./image/3.png";
import four from "./image/4.png";
import five from "./image/5.png";
import six from "./image/6.png";
import arrow from "./image/Arrow_1.png";

function Directions() {
  return (
    <div>
      <h3 className="info__block">Наши предложения</h3>
      <section className={d.block__offers}>
        <div className={d.info_offers}>
          <h2 className="title__block">Разработка полного цикла</h2>
          <p className="text__subtitle">
            Мы можем разработать для вас любое индивидуальное решение. Наша
            компания обладает широкими возможностями для успешного создания
            технически-сложных систем.
          </p>
        </div>
        <section className={d.directions}>
          <div className={d.direction}>
            <img src={one} alt="Значок" />
            <h3>Программируем</h3>
            <p className={d.text}>
              Создаём расширяемую архитектуру, пишем чистый и стабильный код.
              Интегрируемся с технологиями заказчика.
            </p>
          </div>
          <div className={d.direction}>
            <img src={two} alt="Значок" />
            <h3>Тестируем</h3>
            <p className={d.text}>
              Проводим ручное функциональное тестирование и пишем UI-автотесты.
              Готовим чек-листы и тест-кейсы.
            </p>
          </div>
          <div className={d.direction}>
            <img src={three} alt="Значок" />
            <h3>Поддерживаем</h3>
            <p className={d.text}>
              Работаем по SLA. Следим за стабильностью работы приложения,
              обновляем под новые устройства и версии iOS и Android.
            </p>
          </div>
          <div className={d.direction}>
            <img src={four} alt="Значок" />
            <h3>Анализируем</h3>
            <p className={d.text}>
              Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии
              заказчика и потребности пользователей.
            </p>
          </div>
          <div className={d.direction}>
            <img src={five} alt="Значок" />
            <h3>Прототипируем</h3>
            <p className={d.text}>
              Прорабатываем пользовательские сценарии, проектируем логику
              приложения, скечируем основные экраны.
            </p>
          </div>
          <div className={d.direction}>
            <img src={six} alt="Значок" />
            <h3>Дизайним</h3>
            <p className={d.text}>
              Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем
              удобные и понятные интерфейсы.
            </p>
          </div>
        </section>
        <a href="#" className={d.link__all__directions}>
          Все услуги
          <img src={arrow} alt="arrow" />
        </a>
      </section>
    </div>
  );
}

export default Directions;
