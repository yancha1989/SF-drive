import React from "react";
import './AnswerQuestions.css'


function AnswerQuestins() {
    return (
        <section className="about__frame">
            <div className="content__container is-aline-center">
                <img src="../img/main.svg" alt="main image" className="about__frame-img is-desktop" />
                <img src="../img/mainMobile.svg" alt="main image" className="is-mobile" />
                <h1 className="about__frame-maintitle">Частые вопросы</h1>
                <div className="about__frame-text">
                    <p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                </div>
            </div>
        </section>
    );
}

export default AnswerQuestins