import { SHOW_QUIZ_RESULT, HIDE_QUIZ_RESULT, ADD_QUESTION_SCORE } from '../actions/Quiz';
import QuizData from './data';

const initialState = {
    show_result: 'none',
    question_score: {},
    quiz_data: QuizData,
};

const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_QUIZ_RESULT:
            return {
                ...state,
                show_result: 'block',
            }
        case HIDE_QUIZ_RESULT:
            return {
                ...state,
                show_result: 'none',
            }
        case ADD_QUESTION_SCORE:
            return {
                ...state,
                question_score: {...state.question_score, ...action.score},
            }
        default:
            return state;
    }
};


export default QuizReducer;