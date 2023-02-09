import React from "react";
import d from "./Directions.module.css";
import * as images from './image'

const DirectionItem = ({ image, title, text }) => {
    return (
        <div className={d.direction}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className={d.text}>
                {text}
            </p>
        </div>
    )
}

const directionsData = [
    {
        image: images.one,
        title: 'Программируем',
        text: 'Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.',
    },
    {
        image: images.two,
        title: 'Тестируем',
        text: 'Проводим ручное функциональное тестирование и пишем UI-автотесты. Готовим чек-листы и тест-кейсы.',
    },
];

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
                    {directionsData.map(({ image, text, title }, index) => {
                        return (
                            <DirectionItem key={index} image={image} title={title} text={text} />
                        )
                    })}
                    
                    <div className={d.direction}>
                        <img src={images.three} alt="Значок" />
                        <h3>Поддерживаем</h3>
                        <p className={d.text}>
                            Работаем по SLA. Следим за стабильностью работы приложения,
                            обновляем под новые устройства и версии iOS и Android.
                        </p>
                    </div>
                    <div className={d.direction}>
                        <img src={images.four} alt="Значок" />
                        <h3>Анализируем</h3>
                        <p className={d.text}>
                            Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии
                            заказчика и потребности пользователей.
                        </p>
                    </div>
                    <div className={d.direction}>
                        <img src={images.five} alt="Значок" />
                        <h3>Прототипируем</h3>
                        <p className={d.text}>
                            Прорабатываем пользовательские сценарии, проектируем логику
                            приложения, скечируем основные экраны.
                        </p>
                    </div>
                    <div className={d.direction}>
                        <img src={images.six} alt="Значок" />
                        <h3>Дизайним</h3>
                        <p className={d.text}>
                            Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем
                            удобные и понятные интерфейсы.
                        </p>
                    </div>
                </section>
                <a href="#" className={d.link__all__directions}>
                    Все услуги
                    <img src={images.arrow} alt="arrow" />
                </a>
            </section>
        </div>
    );
}

export default Directions;
