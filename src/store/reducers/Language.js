import {
    fetchLanguageCategoryQuizSuccess, fetchLanguageCategoryQuizError
} from '../actions/Language';

const initialState = {
    quizes: [],
    error: undefined,
};


const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchLanguageCategoryQuizSuccess:
            return {
                ...state,
                error: undefined,
                quizes: action.quizes,
            }
        case fetchLanguageCategoryQuizError:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
};


export default LanguageReducer;