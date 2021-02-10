import React from "react";
import { Link } from "react-router-dom";
import "./MainHeader.css"


function MainHeader() {
    return (
        <header className="content__container">
            <div className="content__wrapper">
                <div className="content__wrapper-item">
                    <a className="content__logo" href="https://yandex.ru/">SkillDrive</a>
                </div>
                <div className="content__wrapper-item is-desktop">
                    <nav className="menu__frame">
                        <Link to="/" className="menu__frame-link is-animated" data-target="about">О нас</Link>
                        <Link to="/" className="menu__frame-link is-animated" data-target="contact">Условия</Link>
                        <Link to="/faqpage" className="menu__frame-link is-animated" data-target="team">Частые вопросы</Link>
                    </nav>
                </div>
                <div className="content__wrapper-item is-desktop">
                    <Link to='/registration'><button className="content-button is-animated"><span className="content-button-text">Войти</span></button></Link>
                </div>
            </div>
        </header>
    )
}

export default MainHeader