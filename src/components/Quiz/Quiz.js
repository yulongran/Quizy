import React from 'react';
import './Quiz.css';
import { Question, Navigation, Progress, ResultModal } from './components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
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
                    <Navigation/>
                </div>
                <div className="quiz-information-container">
                    <Progress quiz={this.props.Quiz.quiz_data}/>
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
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
