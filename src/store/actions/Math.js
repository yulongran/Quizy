export const FETCH_MATH_CATEGORY_QUIZ = 'FETCH_MATH_CATEGORY_QUIZ';
export const FETCH_MATH_CATEGORY_QUIZ_SUCCESS = 'FETCH_MATH_CATEGORY_QUIZ_SUCCESS';
export const FETCH_MATH_CATEGORY_QUIZ_ERROR = 'FETCH_MATH_CATEGORY_QUIZ_ERROR';


export const fetchMathCategoryQuizSuccess = (quizes) => {
    return {
        type: FETCH_MATH_CATEGORY_QUIZ_SUCCESS,
        quizes: quizes,
    }
}

export const fetchMathCategoryQuizError = (error) => {
    return {
        type: FETCH_MATH_CATEGORY_QUIZ_ERROR,
        error: error,

    }
}

export const fetchMathCategoryQuiz = () => {
    return dispatch => {
        fetch('https://quizy-demo.herokuapp.com/quiz/category-math', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchMathCategoryQuizSuccess(res));
                return res;
            }).catch(error => {
                dispatch(fetchMathCategoryQuizError(error))
            })
    }
}