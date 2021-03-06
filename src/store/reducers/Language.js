import {
    FETCH_LANGUAGE_CATEGORY_QUIZ_SUCCESS, FETCH_LANGUAGE_CATEGORY_QUIZ_ERROR,
} from '../actions/Language';

const initialState = {
    quizes: [],
    error: undefined,
};


const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LANGUAGE_CATEGORY_QUIZ_SUCCESS:
            return {
                ...state,
                error: undefined,
                quizes: action.quizes,
            }
        case FETCH_LANGUAGE_CATEGORY_QUIZ_ERROR:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
};


export default LanguageReducer;