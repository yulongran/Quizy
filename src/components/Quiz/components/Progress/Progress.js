import React from 'react';
import './Progress.css';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showQuizResult, hideQuizResult, backToQuizQuestionIndex } from '../../../../store/actions/Quiz';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

class Progress extends React.Component {
    constructor(props) {
        super(props);
    }

    checkQuestionStatus = (index) => {
        if (typeof this.props.Quiz.question_status[index] !== 'undefined') {
            if (parseInt(this.props.Quiz.question_status[index].checked) + 1 == this.props.Quiz.quiz_data[index].correct) {
                return { color: 'green', margin: 5 };
            }
            return { color: 'red', margin: 5 };
        }
        return { color: 'gray', margin: 5 }
    }
    render() {
        return (
            <div className="quiz-progress-container">
                <div className="quiz-progress-header">
                    <Typography variant="subtitle1" style={{ color: 'white' }}>
                        PROGRESS
                    </Typography>
                </div>
                <div className="quiz-progress-tracker">
                    {this.props.quiz.map((quiz, index) => {
                        return <Button key={quiz.question} startIcon={<QuestionAnswerIcon />} style={this.checkQuestionStatus(index)} onClick={() => {
                            this.props.backToQuizQuestionIndex(index)
                        }}>
                            Question {index + 1}
                        </Button>
                    })}
                </div>
                <div className="quiz-progress-exist">
                    <Button variant="outlined" color="primary" onClick={this.props.goBack}>EXIST</Button>
                </div>
                <div className="quiz-progress-placeholder">
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
        showQuizResult,
        hideQuizResult,
        backToQuizQuestionIndex
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Progress);