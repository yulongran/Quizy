import {
    FETCH_MATH_CATEGORY_QUIZ_SUCCESS, FETCH_MATH_CATEGORY_QUIZ_ERROR,
} from '../actions/Math';

const initialState = {
    quizes: [],
    error: undefined,
};


const MathReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MATH_CATEGORY_QUIZ_SUCCESS:
            return {
                ...state,
                error: undefined,
                quizes: action.quizes,
            }
        case FETCH_MATH_CATEGORY_QUIZ_ERROR:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
};


export default MathReducer;