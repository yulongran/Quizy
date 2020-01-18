import React from 'react';
import './Quiz.css';
import {Question, Navigation, Progress} from './components';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz-container">
                <div className="quiz-question-container">
                    <Question/>
                    <Navigation/>
                </div>
                <div className="quiz-information-container">
                    <Progress/>
                </div>
            </div>
        )
    }
}



export default Quiz;