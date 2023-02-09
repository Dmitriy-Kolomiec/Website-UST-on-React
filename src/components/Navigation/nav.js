import React from "react";
import n from './nav.module.css'
import logo from './logo.png';

function Navigation() {
    return (
        <nav className={n.nav}>
            <a className={n.logo} href="#">
                <img src={logo} alt="logo" />
            </a>
            <div className={n.list}>
            <a className={[n.link, n.test].join(' ')} href="#">Главная</a>
            <a className={n.link} href="#">Команда</a>
            <a className={n.link} href="#">Услуги</a>
            <a className={n.link} href="#">Карьера</a>
            <a className={n.link} href="#">Портфолио</a>
            <a className={n.link} href="#">Контакты</a>
            <a className={n.link} href="#">search</a>
            </div>
        </nav>
    )
}

export default Navigation;
