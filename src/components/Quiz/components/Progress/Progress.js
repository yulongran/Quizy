import React from 'react';
import './Progress.css';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showQuizResult, hideQuizResult } from '../../../../store/actions/Quiz';

const styles = {
    buttonStyle: { margin: 5 },
}
class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onColor: null,
        }
    }

    /** https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript */
    search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].questionNumber === nameKey) {
                return myArray[i];
            }
        }
    }

    checkQuestionStatus = (questionScore, index) => {
        questionScore.map(question => {
            if (question.questionNumber == index) {
                if (question.questionScore == 0) {
                    return { backgroundColor: 'green', margin: 5 };
                }
                else {
                    return { backgroundColor: 'red', margin: 5 };
                }
            }
        })
        return { backgroundColor: 'gray', margin: 5 }
    }
    render() {
        return (
            <div className="quiz-progress-container">
                <div className="quiz-progress-header">
                    <Typography variant="h6" color="textSecondary">
                        Progress
                    </Typography>
                </div>
                <div className="quiz-progress-tracker">
                    {this.props.quiz.map((quiz, index) => {
                        return <Button key={quiz.question} variant="contained" style={this.checkQuestionStatus(this.props.questionScore, index)} onClick={() => {
                            this.props.onPressBackToQuestion(index)
                        }}>
                            {index + 1}
                        </Button>
                    })}
                </div>
                <div className="quiz-submit-button">
                    <Button variant="outlined" onClick={this.props.showQuizResult} style={{ borderRadius: 15, width: 100, height: 40, marginLeft: 5, marginRight: 5 }}>SUBMIT</Button>
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
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Progress);