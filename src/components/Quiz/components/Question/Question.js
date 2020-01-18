import React from 'react';
import './Question.css';
import Typography from '@material-ui/core/Typography';
import { Divider, Checkbox, FormControlLabel } from '@material-ui/core';

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz-question-wrapper">
                <div className="quiz-question-placeholder">
                </div>
                <div className="quiz-question-number">
                    <Typography variant="h5" color="textSecondary">
                        Question 8
                    </Typography>
                </div>
                <div className="quiz-divider">
                    <Divider />
                </div>
                <div className="quiz-question-placeholder">
                </div>
                <div className="quiz-question-question">
                    <Typography variant="h6" color="textSecondary">
                        What does CSS stand for?
                    </Typography>
                </div>
                <div className="quiz-question-selection">
                    <FormControlLabel
                        control={
                            <Checkbox checked={false} onChange={()=>{}} value="checkedA" color="secondary" />
                        }
                        label=" A.    Cassdian Style Sheet"
                        style={{color:'gray'}}
                    />
                     <FormControlLabel
                        control={
                            <Checkbox checked={false} onChange={()=>{}} value="checkedA" color="secondary" />
                        }
                        label="B.    Cassdian Style Sheet"
                        style={{color:'gray'}}
                    />
                     <FormControlLabel
                        control={
                            <Checkbox checked={false} onChange={()=>{}} value="checkedA" color="secondary" />
                        }
                        label="C.    Cassdian Style Sheet"
                        style={{color:'gray'}}
                    />
                     <FormControlLabel
                        control={
                            <Checkbox checked={false} onChange={()=>{}} value="checkedA" color="secondary" />
                        }
                        label="D.    Cassdian Style Sheet"
                        style={{color:'gray'}}
                    />
                </div>
            </div>
        )
    }
}



export default Question;