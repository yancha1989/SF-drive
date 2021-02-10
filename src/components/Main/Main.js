import React from "react";
import "./main.css"

function Main() {
    return (
        <main>
            <section className="about__frame" id="section-about">
                <div className="content__container is-aline-center">
                    <img src="../img/img.svg" alt="main image" className="is-desktop" />
                    <img src="../img/imgmobile.svg" alt="main image" className="is-mobile" />
                    <h1 className="about__frame-maintitle">О нас</h1>
                    <div className="about__frame-text is-desktop">
                        <p>Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого
                        веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать
          автомобили, но и сдавать их в аренду.</p>
                    </div>
                    <div className="about__frame-text is-mobile">
                        <p>Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого
                        веб-приложения.
                        Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и
                        сдавать их в
          аренду.</p>
                    </div>
                </div>
            </section>
            <section className="contact__frame is-grey" id="section-contact">
                <div className="content__container">
                    <h2>Контакты</h2>
                    <div className="contact__frame-wrapper">
                        <div className="contact__frame-item">
                            <div className="contact__frame-title">Электронная почта</div>
                            <div className="contact__frame-info"><a href="drive@skillfactory.com">drive@skillfactory.com</a>
                            </div>
                        </div>
                        <div className="contact__frame-item">
                            <div className="contact__frame-title">Телефон</div>
                            <div className="contact__frame-info"><a href="+7 912 123-45-67">+ 7 912 123-45-67</a></div>
                        </div>
                    </div>
                    <div className="contact__frame-line" />
                </div>
            </section>
            <section className="team__frame" id="section-team">
                <div className="content__container ">
                    <h2>Команда</h2>
                    <div className="team__frame-wrapper">
                        <div className="team__frame-itemup">
                            <div className="team__frame-itemup-first">
                                <div className="team__frame-item">
                                    <img src="../Team photo/ivan_ivanov.svg" alt="Ivan Ivanov photo" className="is-desktop" />
                                    <img src="../Team photo mobile/ivan_ivanov.svg" alt="Ivan Ivanov photo" className="is-mobile" />
                                    <div className="team__frame-name">Иван Иванов</div>
                                    <div className="team__frame-work">CEO</div>
                                </div>
                                <div className="team__frame-item">
                                    <img src="../Team photo/alex_smirn.svg" alt="Alex Smirnov" className="is-desktop" />
                                    <img src="../Team photo mobile/alex_smirn.svg" alt="Alex Smirnov" className="is-mobile" />
                                    <div className="team__frame-name">Алексей Смирнов</div>
                                    <div className="team__frame-work">Frontend-разраотчик</div>
                                </div>
                            </div>
                            <div className="team__frame-itemup-first">
                                <div className="team__frame-item">
                                    <img src="../Team photo/den_yarz.svg" alt="Den Yarcev" className="is-desktop" />
                                    <img src="../Team photo mobile/den_yarz.svg" alt="Den Yarcev" className="is-mobile" />
                                    <div className="team__frame-name">Денис Ярцев</div>
                                    <div className="team__frame-work">Backend-разработчик</div>
                                </div>
                                <div className="team__frame-item">
                                    <img src="../Team photo/nik_moroz.svg" alt="Nik Morozov" className="is-desktop" />
                                    <img src="../Team photo mobile/nik_moroz.svg" alt="Nik Morozov" className="is-mobile" />
                                    <div className="team__frame-name">Николай Морозов</div>
                                    <div className="team__frame-work">Дизайнер</div>
                                </div>
                            </div>
                        </div>
                        <div className="team__frame-wrapperdown">
                            <div className="team__frame-itemdown">
                                <div className="team__frame-item">
                                    <img src="../Team photo/irina_deeva.svg" alt="Irina Deeva" className="is-desktop" />
                                    <img src="../Team photo mobile/irina_deeva.svg" alt="Irina Deeva" className="is-mobile" />
                                    <div className="team__frame-name">Ирина Деева</div>
                                    <div className="team__frame-work">Копирайтер</div>
                                </div>
                                <div className="team__frame-item">
                                    <img src="../Team photo/mari_strelkova.svg" alt="Mriya Strelnikova" className="is-desktop" />
                                    <img src="../Team photo mobile/mari_strelkova.svg" alt="Mriya Strelnikova" className="is-mobile" />
                                    <div className="team__frame-name">Мария Стрелкова</div>
                                    <div className="team__frame-work">SMM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}


export default Main;