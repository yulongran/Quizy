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
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import {HighlightOffIcon} from '@material-ui/icons';


class ResultModal extends React.Component {
    constructor(props) {
        super(props)
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
                            <div className="result-modal-statistics-pie-chart">
                                <ReactMinimalPieChart
                                    animate={false}
                                    animationDuration={500}
                                    animationEasing="ease-out"
                                    cx={50}
                                    cy={50}
                                    data={[
                                        {
                                            color: 'green',
                                            title: 'One',
                                            value: 9
                                        },
                                        {
                                            color: 'red',
                                            title: 'One',
                                            value: 1
                                        },
                                    ]}
                                    label={false}
                                    labelPosition={50}
                                    lengthAngle={360}
                                    lineWidth={100}
                                    onClick={undefined}
                                    onMouseOut={undefined}
                                    onMouseOver={undefined}
                                    paddingAngle={0}
                                    radius={40}
                                    rounded={false}
                                    startAngle={0}
                                    viewBoxSize={[
                                        50,
                                        50
                                    ]}
                                />
                            </div>
                            <div>
                                <HighlightOffIcon/>
                                <Typography gutterBottom variant="h5" component="h2">
                                3 incorrect questions
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                 7 out of 10 points
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Try Again
                            </Button>
                        <Button size="small" color="primary">
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
