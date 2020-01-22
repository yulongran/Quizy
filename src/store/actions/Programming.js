import { FETCH_LANGUAGE_CATEGORY_QUIZ_ERROR } from "./Language";

export const FETCH_PROGRAMMING_CATEGORY_QUIZ = 'FETCH_PROGRAMMING_CATEGORY_QUIZ';
export const FETCH_PROGRAMMING_CATEGORY_QUIZ_SUCCESS = 'FETCH_PROGRAMMING_CATEGORY_QUIZ_SUCCESS';
export const FETCH_PROGRAMMING_CATEGORY_QUIZ_ERROR = 'FETCH_PROGRAMMING_CATEGORY_QUIZ_ERROR';


export const fetchProgrammingCategoryQuizSuccess = (quizes) => {
    return {
        type: FETCH_PROGRAMMING_CATEGORY_QUIZ_SUCCESS,
        quizes: quizes,
    }
}

export const fetchProgrammingCategoryQuizError = (error) => {
    return {
        type: FETCH_LANGUAGE_CATEGORY_QUIZ_ERROR,
        error: error,

    }
}

export const fetchProgrammingCategoryQuiz = () => {
    return dispatch => {
        fetch('https://quizy-demo.herokuapp.com/quiz/category-programming', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(res => {
                dispatch(fetchProgrammingCategoryQuizSuccess(res));
                return res;
            }).catch(error => {
                dispatch(fetchProgrammingCategoryQuizError(error))
            })
    }
}