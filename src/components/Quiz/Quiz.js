import React from 'react';
import './Quiz.css';
import { Question, Navigation, Progress, ResultModal } from './components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCurrentQuestionIndex, decrementCurrentQuestionIndex} from '../../store/actions/Quiz';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            onStart: true,
            onEnd: false,
        }
    }

    onPressNext = () => {
        this.props.incrementCurrentQuestionIndex();
        if (this.state.questionNumber + 1 > 0) {
            this.setState({ onStart: false })
        }
        if (this.state.questionNumber + 1 === this.props.Quiz.quiz_data.length - 1) {
            this.setState({ onEnd: true })
        }
    }

    onPressPrevious = () => {
        this.props.decrementCurrentQuestionIndex();
        if (this.state.questionNumber - 1 === 0) {
            this.setState({ onStart: true })
        }
        if (this.state.questionNumber - 1 < this.props.Quiz.quiz_data.length - 1) {
            this.setState({ onEnd: false })
        }
    }

    onPressBackToQuestion = (number) => {
        this.setState({ questionNumber: number })
        if (number > 0) {
            this.setState({ onStart: false })
        }
        if (number === this.props.Quiz.quiz_data.length - 1) {
            this.setState({ onEnd: true })
        }
        if (number === 0) {
            this.setState({ onStart: true })
        }
        if (number < this.props.Quiz.quiz_data.length - 1) {
            this.setState({ onEnd: false })
        }
    }

    render() {
        return (
            <div className="quiz-container">
                <div className="quiz-question-container">
                    <div style={{ height: 'inherit' }}>
                        {this.props.Quiz.quiz_data.map((question, index) => {
                            return <Question key={question.question} question={question} number={index} showComponent={index == this.props.Quiz.current_question_index} />
                        })}
                    </div>
                    <Navigation onPressNext={this.onPressNext} onPressPrevious={this.onPressPrevious} onStart={this.state.onStart} onEnd={this.state.onEnd} />
                </div>
                <div className="quiz-information-container">
                    <Progress quiz={this.props.Quiz.quiz_data} onPressBackToQuestion={this.onPressBackToQuestion} />
                </div>
                <div className="quiz-result-modal-container">
                    <ResultModal />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { Quiz } = state
    return { Quiz }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        incrementCurrentQuestionIndex,
        decrementCurrentQuestionIndex
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
