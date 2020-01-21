import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { loadQuiz } from '../../../../../../store/actions/Quiz';
import { bindActionCreators } from 'redux';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        minWidth: 200,
        margin: 20,
    },
    media: {
        height: 140,
    },
});

function MediaCard(props) {
    const classes = useStyles();

    function onPressQuiz() {
        props.loadQuiz(props.quiz.quiz);
        props.history.push('./quiz');
    }

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={onPressQuiz}>
                <CardMedia
                    className={classes.media}
                    image={'https://images.unsplash.com/photo-1571498664957-fde285d79857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.quiz.quiz.length} Questions
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h2">
                        Created By {props.quiz.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


const mapStateToProps = (state) => {
    const { Quiz } = state
    return { Quiz }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadQuiz,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard);
