import React from 'react';
import './Question.css';
import Typography from '@material-ui/core/Typography';
import { green} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Checkbox, FormControlLabel } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showQuizResult, addQuestionStatus } from '../../../../store/actions/Quiz';


class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: undefined,
            disabled: false,
            showAnswer: false,
        }
    }

    handleChange = index => event => {
        if (!this.props.Quiz.question_status[this.props.number]) {
            this.props.addQuestionStatus({
                [this.props.number]: {
                    checked: event.target.value,
                    disabled: true,
                    showAnswer: true,
                    correct: event.target.value == this.props.question.correct - 1,
                }
            })
        }
        return false
    }

    checkeQuestionAnswered = (index) => {
        if (this.props.Quiz.question_status[this.props.number]) {
            return this.props.Quiz.question_status[this.props.number].checked == index
        }
        return false;
    }

    getAnswerStyle = index => {
        if (this.props.Quiz.question_status[this.props.number]) {
            if (this.props.Quiz.question_status[this.props.number].checked == index) {
                if (this.props.Quiz.question_status[this.props.number].checked == this.props.question.correct - 1) {
                    return { color: 'green' };
                }
                else {
                    return { color: 'red' };
                }
            }
            else if (index === this.props.question.correct - 1) {
                return { color: 'green' };
            }
            else {
                return { color: 'gray' };
            }
        }
        return { color: 'gray' };
    }

    render() {
        const GreenCheckbox = withStyles({
            root: {
                '&$checked': {
                    color: green[600],
                },
            },
            checked: {},
        })(props => <Checkbox color="default" {...props} />);

        return (
            <div className="quiz-question-wrapper" style={!this.props.showComponent ? { display: 'none' } : null}>
                <div className="quiz-question-placeholder">
                </div>
                <div className="quiz-question-number">
                    <Typography variant="h5" color="textSecondary">
                        Question {this.props.number + 1}
                    </Typography>
                </div>
                <div className="quiz-divider">
                    <Divider />
                </div>
                <div className="quiz-question-placeholder">
                </div>
                <div className="quiz-question-question">
                    <Typography variant="h6" color="textSecondary">
                        {this.props.question.question}
                    </Typography>
                </div>
                <div className="quiz-question-selection">
                    {
                        this.props.question.answers.map((answer, index) => {
                            return <FormControlLabel key={answer}
                                control={
                                    <GreenCheckbox checked={this.checkeQuestionAnswered(index)} onChange={this.handleChange(index)} value={index}
                                        style={this.getAnswerStyle(index)} />
                                }
                                label={`${String.fromCharCode(97 + index).toUpperCase()}. ${answer}`}
                                style={this.getAnswerStyle(index)}
                            />
                        })
                    }
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
        addQuestionStatus,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Question);

