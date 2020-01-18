import React from 'react';
import './Question.css';
import Typography from '@material-ui/core/Typography';
import { green, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Checkbox, FormControlLabel } from '@material-ui/core';



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
        if (!this.state.disabled) {
            this.setState({
                checked: event.target.value,
                disabled: true,
                showAnswer: true,
            });
        }
        return false;
    };

    checkAnswer = () => {
        if (this.state.checked == this.props.question.answer) {
            return { color: 'red' };
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
                            return <FormControlLabel
                                control={
                                    <GreenCheckbox checked={this.state.checked == index} onChange={this.handleChange(index)} value={index}
                                        style={this.state.checked != index ? { color: 'gray' } :
                                            this.state.checked != this.props.question.correct - 1 ? { color: 'red' } : { color: 'green' }} />
                                }
                                label={`${String.fromCharCode(97 + index).toUpperCase()}. ${answer}`}
                                style={this.props.question.correct - 1 != this.state.checked && this.state.checked == index ?
                                    { color: 'red' } :
                                    this.state.showAnswer && this.props.question.correct - 1 == index ? { color: 'green' } : { color: 'gray' }}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}



export default Question;