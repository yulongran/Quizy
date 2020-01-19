export const SHOW_QUIZ_RESULT = 'SHOW_QUIZ_RESULT';
export const HIDE_QUIZ_RESULT = "HIDE_QUIZ_RESULT";
export const ADD_QUESTION_SCORE = "ADD_QUESTION_SCORE";

export const showQuizResult = () => {
    return {
        type: SHOW_QUIZ_RESULT,
    }
}


export const hideQuizResult = () => {
    return {
        type: HIDE_QUIZ_RESULT,
    }
}


export const addQuestionScore = (score) => {
    return {
        type: ADD_QUESTION_SCORE,
        score: score,
    }
}