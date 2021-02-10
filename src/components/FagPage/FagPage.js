import React from "react";

import Header from "../Header/Header";
import AnswerQuestins from "../AnswerQuestions/AnswerQuestions";
import Footer from "../Footer/Footer";
import Questions from "../Questions/Questions"

import "./FagPage.css"


class FagPage extends React.Component {
    render () {
    return (
        <div className='FagPage'>
            <Header />
            <AnswerQuestins />
            <Questions />
            <Footer />
        </div>
    )
};
};
    
export default FagPage