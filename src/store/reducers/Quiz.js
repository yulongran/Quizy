import { SHOW_QUIZ_RESULT, HIDE_QUIZ_RESULT } from '../actions/Quiz';

const initialState = {
    show_result: 'none',
};

const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_QUIZ_RESULT:
            return {
                ...state,
                show_result: 'block',
            }
        case HIDE_QUIZ_RESULT:
            return{
                ...state,
                show_result: 'none',
            }
        default:
            return state;
    }
};


export default QuizReducer;