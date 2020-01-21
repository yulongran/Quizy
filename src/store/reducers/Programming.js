import {
    FETCH_PROGRAMMING_CATEGORY_QUIZ_SUCCESS, FETCH_PROGRAMMING_CATEGORY_QUIZ_ERROR
} from '../actions/Programming';

const initialState = {
    quizes: [],
    error: undefined,
};


const ProgrammingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROGRAMMING_CATEGORY_QUIZ_SUCCESS:
            return {
                ...state,
                error: undefined,
                quizes: action.quizes,
            }
        case FETCH_PROGRAMMING_CATEGORY_QUIZ_ERROR:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
};


export default ProgrammingReducer;