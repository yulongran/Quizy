export const SHOW_QUIZ_RESULT = 'SHOW_QUIZ_RESULT';
export const HIDE_QUIZ_RESULT = "HIDE_QUIZ_RESULT";
export const ADD_QUESTION_SCORE = "ADD_QUESTION_SCORE";
export const RETAKE_QUIZ = "RETAKE_QUIZ";
export const INCREMENT_QUESTION_INDEX = "INCREMENT_CURRENT_QUESTION_INDEX";
export const DECREMENT_CURRENT_QUESTION_INDEX = "DECREMENT_CURRENT_QUESTION_INDEX";
export const BACK_TO_QUIZ_QUESTION_INDEX = "BACK_TO_QUIZ_QUESTION_INDEX";

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

export const retakeQuiz = () => {
    return {
        type: RETAKE_QUIZ,
    }
}

export const incrementCurrentQuestionIndex = () => {
    return {
        type: INCREMENT_QUESTION_INDEX,
    }
}

export const decrementCurrentQuestionIndex = () => {
    return {
        type: DECREMENT_CURRENT_QUESTION_INDEX,
    }
}

export const backToQuizQuestionIndex = (index) => {
    return {
        type: BACK_TO_QUIZ_QUESTION_INDEX,
        index: index,
    }
}