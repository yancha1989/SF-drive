import React from "react";
import './Question.css'

function Questions() {
    return (
    <section class="question__frame">
        <div class="content__container is-aline-center">
            <button class="accordion">Могу ли я отменить бронь?</button>
                <div class="panel">Заполнить</div>
            <button class="accordion">Могу ли я вернуть деньги, если не подошёл автомобиль?</button>
                <div class="panel">Заполнить</div>
            <button class="accordion">Что делать, если случилось ДТП?</button>
                <div class="panel">Заполнить</div>
            <button class="accordion">Могу ли я оставить автомобиль в удобном для меня месте?</button>
                <div class="panel"><p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p></div>
            <button class="accordion">Что делать, если собственник просит заплатить ему напрямую?</button>
                <div class="panel">Заполнить</div>
            <button class="accordion">Должен ли я заправлять автомобиль?</button>
        </div>
    </section>

    );
}

export default Questions