import {
    FETCH_SCIENCE_CATEGORY_QUIZ_SUCCESS, FETCH_SCIENCE_CATEGORY_QUIZ_ERROR,
} from '../actions/Science';

const initialState = {
    quizes: [],
    error: undefined,
};


const ScienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SCIENCE_CATEGORY_QUIZ_SUCCESS:
            return {
                ...state,
                error: undefined,
                quizes: action.quizes,
            }
        case FETCH_SCIENCE_CATEGORY_QUIZ_ERROR:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
};


export default ScienceReducer;