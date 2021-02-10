import React, { useState } from "react";
import "./MobileHeader.css"




function MobileHeader()  {

    const [open, setOpen] = useState(false)
    const openMenu = () => setOpen(!open)

    return (
        <header>
            <div className="content__wrapper">
                <div className="mobile__burger is-mobile">
                    <div onClick={openMenu} className="mobile__burger-item" />
                    <div className="mobile__burger-item" />
                    <div className="mobile__burger-item" />
                </div>
            </div>
            <div className="menu__mobile is-mobile is-animeted">
                <div className="menu__mobile-header">
                    <div className="menu__mobile-item">
                        <a className="content__logo" href="https://yandex.ru/">SkillDrive</a>
                    </div>
                    <div className="menu__mobile-close"><img src="../img/menu_close.svg" alt /></div>
                </div>
                
                <div className="menu__mobile-frame">
                    <nav>
                        <div className = {open ? "menu__mobile-link is-animated is-active" : "menu__mobile-link is-animated"}>О нас</div>
                        <div className="menu__mobile-link is-animated">Условия</div>
                        <div className="menu__mobile-link is-animated">Частые вопросы</div>
                    </nav>
                </div>
                <div className="menu__mobile-button">
                    <button className="menu__mobile-but is-animated"><span className="content-button-text">Войти</span></button>
                </div>
            </div>
        </header>
    )


}
export default MobileHeader

//{open ? "menu__mobile-link is-animated is-active" : "menu__mobile-link is-animated"}