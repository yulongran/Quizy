import React from 'react';
import './Quiz.css';
import { Question, Navigation, Progress } from './components';
import QuizData from './data';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
        }
    }

    onPressNext = () => {
        this.setState({ questionNumber: this.state.questionNumber + 1 })
    }

    onPressPrevious = () => {
        this.setState({ questionNumber: this.state.questionNumber - 1 })
    }
    render() {
        return (
            <div className="quiz-container">
                <div className="quiz-question-container">
                    {QuizData.map((question, index) => {
                        return  <Question question={question} number={index} showComponent={index == this.state.questionNumber}/>
                    })}
                    <Navigation onPressNext={this.onPressNext} onPressPrevious={this.onPressPrevious}/>
                </div>
                <div className="quiz-information-container">
                    <Progress />
                </div>
            </div>
        )
    }
}



export default Quiz;