import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 250,
        width: 250,
        marginRight: 10,
        marginLeft: 10,
        display: 'flex',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
    quizTitle: {
        fontWeight: '800',
        fontFamily: 'neuton',
    },
    quizQuestions: {
        color: '#455358',
    },
    quizAuthor: {
        color: '#455358',
    },
    quizContentWrapper: {
        padding: 10,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
});

export default function OutlinedCard(props) {
    const classes = useStyles();

    function onPressQuiz() {
        props.history.push('/quiz')
    }

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.quizContentWrapper} onClick={onPressQuiz}>
                <Typography variant="h7" component="h2" className={classes.quizTitle}>
                    {props.quiz.title}
                </Typography>
                <Typography variant="body2" component="p" className={classes.quizQuestions}>
                    {props.quiz.questions} questions
                </Typography>
            </CardActionArea>
        </Card>
    );
}