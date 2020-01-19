import {
    SHOW_QUIZ_RESULT, HIDE_QUIZ_RESULT,
    ADD_QUESTION_SCORE, RETAKE_QUIZ, INCREMENT_QUESTION_INDEX,
    DECREMENT_CURRENT_QUESTION_INDEX,
    BACK_TO_QUIZ_QUESTION_INDEX,
} from '../actions/Quiz';
import QuizData from './data';

const initialState = {
    show_result: 'none',
    question_score: {},
    quiz_data: QuizData,
    current_question_index: 0,
    onStart: true,
    onEnd: false,
};

let onStartCopy = true;
let onEndCopy = false;

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
            if (Object.keys(state.question_score).length + 1 == state.quiz_data.length) {
                return {
                    ...state,
                    question_score: { ...state.question_score, ...action.score },
                    show_result: 'block',
                }
            }
            return {
                ...state,
                question_score: { ...state.question_score, ...action.score },
            }
        case RETAKE_QUIZ:
            return initialState;
        case INCREMENT_QUESTION_INDEX:
            if (state.current_question_index >= 0) {
                onStartCopy = false;
            }
            if (state.current_question_index + 1 == state.quiz_data.length - 1) {
                onEndCopy = true;
            }
            return {
                ...state,
                current_question_index: state.current_question_index + 1,
                onStart: onStartCopy,
                onEnd: onEndCopy,
            }
        case DECREMENT_CURRENT_QUESTION_INDEX:
            if (state.current_question_index - 1 == 0) {
                onStartCopy = true;
            }
            if (state.current_question_index - 1 < state.quiz_data.length - 1) {
                onEndCopy = false;
            }
            return {
                ...state,
                current_question_index: state.current_question_index - 1,
                onStart: onStartCopy,
                onEnd: onEndCopy,
            }
        case BACK_TO_QUIZ_QUESTION_INDEX:
            if (action.index == 0) {
                onStartCopy = true;
                onEndCopy = false;
            } else if (action.index == state.quiz_data.length - 1) {
                onStartCopy = false;
                onEndCopy = true;
            } else {
                onStartCopy = false;
                onEndCopy = false
            }
            return {
                ...state,
                current_question_index: action.index,
                onStart: onStartCopy,
                onEnd: onEndCopy,
            }
        default:
            return state;
    }
};


export default QuizReducer;