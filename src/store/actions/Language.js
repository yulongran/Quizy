export const FETCH_LANGUAGE_CATEGORY_QUIZ = 'FETCH_LANGUAGE_CATEGORY_QUIZ';
export const FETCH_LANGUAGE_CATEGORY_QUIZ_SUCCESS = 'FETCH_LANGUAGE_CATEGORY_QUIZ_SUCCESS';
export const FETCH_LANGUAGE_CATEGORY_QUIZ_ERROR = 'FETCH_LANGUAGE_CATEGORY_QUIZ_ERROR';


export const fetchLanguageCategoryQuizSuccess = (quizes) => {
    return {
        type: FETCH_LANGUAGE_CATEGORY_QUIZ_SUCCESS,
        quizes: quizes,
    }
}

export const fetchLanguageCategoryQuizError = (error) => {
    return {
        type: FETCH_LANGUAGE_CATEGORY_QUIZ_ERROR,
        error: error,

    }
}

export const fetchLanguageCategoryQuiz = () => {
    return dispatch => {
        fetch('http://localhost:3000/quiz/category-programming', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchLanguageCategoryQuizSuccess(res.response));
                return res.response;
            }).catch(error => {
                dispatch(fetchLanguageCategoryQuizError(error))
            })
    }
}