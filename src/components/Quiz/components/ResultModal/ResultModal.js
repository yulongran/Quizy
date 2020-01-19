import React from 'react';
import './ResultModal.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showQuizResult, hideQuizResult } from '../../../../store/actions/Quiz';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CheckCircle } from '@material-ui/icons';


class ResultModal extends React.Component {
    constructor(props) {
        super(props)
    }

    onPressExist = () => {
        this.props.hideQuizResult();
    }

    getNumberOfCorrectQuestion = ()=>{
        let correct = 0;
        Object.values(this.props.Quiz.question_score).forEach((question)=>{
            if(question == 0){
                correct++;
            }
        })
        return correct;
    }
    
    render() {
        return (
            <div className="result-modal-container" style={{ display: [this.props.Quiz.show_result] }}>
                <Card className="result-modal-card">
                    <CardContent className="result-modal-content">
                        <div className="result-modal-content-title">
                            <Typography gutterBottom variant="h5" component="h2">
                                Quiz Result
                                </Typography>
                        </div>
                        <div className="result-modal-statistics">
                            <CheckCircle className="result-modal-statistics-checkedCircle" fontSize="large" />
                            <div className="result-modal-statistics-correct">
                                <Typography gutterBottom variant="subtitle1" component="h2" className="result-modal-statistics-message-start">
                                    Question Correct :
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="h2" className="result-modal-statistics-message-end">
                                    {this.getNumberOfCorrectQuestion()} questions
                                </Typography>
                            </div>
                            <div className="result-modal-statistics-correct">
                                <Typography gutterBottom variant="subtitle1" component="h2" className="result-modal-statistics-message-start">
                                    Your Score :
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="h2" className="result-modal-statistics-message-end" >
                                {this.getNumberOfCorrectQuestion()}  out of {this.props.Quiz.quiz_data.length} points
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions style={{ alignSelf: 'flex-end' }}>
                        <Button size="medium" color="primary" variant="outlined">
                            Try Again
                            </Button>
                        <Button size="medium" color="primary" variant="outlined" onClick={this.onPressExist}>
                            exist
                            </Button>
                    </CardActions>
                </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultModal);
