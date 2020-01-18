import React from 'react';
import './Quiz.css';
import { Question, Navigation, Progress, ResultModal } from './components';
import QuizData from './data';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            onStart: true,
            onEnd: false,
            questionScore: [],
            quizResult: 0,
            resultModalOpen: true,
        }
    }

    onPressNext = () => {
        this.setState({ questionNumber: this.state.questionNumber + 1 })
        if (this.state.questionNumber + 1 > 0) {
            this.setState({ onStart: false })
        }
        if (this.state.questionNumber + 1 === QuizData.length - 1) {
            this.setState({ onEnd: true })
        }
    }

    onPressPrevious = () => {
        this.setState({ questionNumber: this.state.questionNumber - 1 })
        if (this.state.questionNumber - 1 === 0) {
            this.setState({ onStart: true })
        }
        if (this.state.questionNumber - 1 < QuizData.length - 1) {
            this.setState({ onEnd: false })
        }
    }

    onPressBackToQuestion = (number) => {
        this.setState({ questionNumber: number })
        if (number > 0) {
            this.setState({ onStart: false })
        }
        if (number === QuizData.length - 1) {
            this.setState({ onEnd: true })
        }
        if (number === 0) {
            this.setState({ onStart: true })
        }
        if (number < QuizData.length - 1) {
            this.setState({ onEnd: false })
        }
    }

    onQuestionAnswered = (score) => {
        this.setState({ questionScore: [...this.state.questionScore, score] }, () => {
        })
    }

    onQuizSubmit = () => {
        let correct = 0;
        this.state.questionScore.forEach((question) => {
            if (question.questionScore == 0) {
                correct++;
            }
        })
        this.setState({ quizResult: correct })
    }


    render() {
        return (
            <div className="quiz-container">
                <div className="quiz-question-container">
                    <div style={{ height: 'inherit' }}>
                        {QuizData.map((question, index) => {
                            return <Question key={question.question} question={question} number={index} showComponent={index == this.state.questionNumber} onQuestionAnswered={this.onQuestionAnswered} />
                        })}
                    </div>
                    <Navigation onPressNext={this.onPressNext} onPressPrevious={this.onPressPrevious} onStart={this.state.onStart} onEnd={this.state.onEnd} />
                </div>
                <div className="quiz-information-container">
                    <Progress questionScore={this.state.questionScore} quiz={QuizData} onPressBackToQuestion={this.onPressBackToQuestion} onPressSubmit={this.onQuizSubmit} />
                </div>
                <div className="quiz-result-modal-container">
                    <ResultModal/>
                </div>
            </div>
        )
    }
}



export default Quiz;