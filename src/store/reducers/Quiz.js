import { SHOW_QUIZ_RESULT, HIDE_QUIZ_RESULT, ADD_QUESTION_SCORE, RETAKE_QUIZ, INCREMENT_QUESTION_INDEX, DECREMENT_CURRENT_QUESTION_INDEX } from '../actions/Quiz';
import QuizData from './data';

const initialState = {
    show_result: 'none',
    question_score: {},
    quiz_data: QuizData,
    current_question_index: 0,
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
                question_score: { ...state.question_score, ...action.score },
            }
        case RETAKE_QUIZ:
            return initialState;
        case INCREMENT_QUESTION_INDEX:
            return{
                ...state,
                current_question_index: state.current_question_index+1,
            }
        case DECREMENT_CURRENT_QUESTION_INDEX:
            return{
                ...state,
                current_question_index: state.current_question_index-1,
            }
        default:
            return state;
    }
};


export default QuizReducer;