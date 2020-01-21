import {
    SHOW_QUIZ_RESULT, HIDE_QUIZ_RESULT, RETAKE_QUIZ, INCREMENT_QUESTION_INDEX,
    DECREMENT_CURRENT_QUESTION_INDEX,
    BACK_TO_QUIZ_QUESTION_INDEX,
    ADD_QUESTION_STATUS,
    LOAD_QUIZ,
} from '../actions/Quiz';
import QuizData from './data';

const initialState = {
    show_result: 'none',
    quiz_data: QuizData,
    current_question_index: 0,
    onStart: true,
    onEnd: false,
    question_status: {},
};

let onStartCopy = true;
let onEndCopy = false;

const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_QUIZ:
            return {
                ...state,
                quiz_data: action.quiz,
            }
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
        case RETAKE_QUIZ:
            return initialState;
        case INCREMENT_QUESTION_INDEX:
            if (state.current_question_index >= 0) {
                onStartCopy = false;
                onEndCopy = false;
            }
            if (state.current_question_index + 1 >= state.quiz_data.length - 1) {
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
        case ADD_QUESTION_STATUS:
            if (Object.keys(state.question_status).length + 1 == state.quiz_data.length) {
                return {
                    ...state,
                    question_status: { ...state.question_status, ...action.status },
                    show_result: 'block',
                }
            }
            else {
                return {
                    ...state,
                    question_status: { ...state.question_status, ...action.status },
                }
            }
        default:
            return state;
    }
};


export default QuizReducer;