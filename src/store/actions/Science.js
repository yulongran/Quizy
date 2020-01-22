export const FETCH_SCIENCE_CATEGORY_QUIZ = 'FETCH_SCIENCE_CATEGORY_QUIZ';
export const FETCH_SCIENCE_CATEGORY_QUIZ_SUCCESS = 'FETCH_SCIENCE_CATEGORY_QUIZ_SUCCESS';
export const FETCH_SCIENCE_CATEGORY_QUIZ_ERROR = 'FETCH_SCIENCE_CATEGORY_QUIZ_ERROR';


export const fetchScienceCategoryQuizSuccess = (quizes) => {
    return {
        type: FETCH_SCIENCE_CATEGORY_QUIZ_SUCCESS,
        quizes: quizes,
    }
}

export const fetchScienceCategoryQuizError = (error) => {
    return {
        type: FETCH_SCIENCE_CATEGORY_QUIZ_ERROR,
        error: error,

    }
}

export const fetchScienceCategoryQuiz = () => {
    return dispatch => {
        fetch('https://quizy-demo.herokuapp.com/quiz/category-science', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchScienceCategoryQuizSuccess(res));
                return res;
            }).catch(error => {
                dispatch(fetchScienceCategoryQuizError(error))
            })
    }
}