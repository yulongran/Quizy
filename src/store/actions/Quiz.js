export const SHOW_QUIZ_RESULT = 'SHOW_QUIZ_RESULT';
export const HIDE_QUIZ_RESULT = "HIDE_QUIZ_RESULT";
export const RETAKE_QUIZ = "RETAKE_QUIZ";
export const INCREMENT_QUESTION_INDEX = "INCREMENT_CURRENT_QUESTION_INDEX";
export const DECREMENT_CURRENT_QUESTION_INDEX = "DECREMENT_CURRENT_QUESTION_INDEX";
export const BACK_TO_QUIZ_QUESTION_INDEX = "BACK_TO_QUIZ_QUESTION_INDEX";
export const ADD_QUESTION_STATUS = "ADD_QUESTION_STATUS";
export const LOAD_QUIZ = "LOAD_QUIZ";

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

export const addQuestionStatus = (status) => {
    return {
        type: ADD_QUESTION_STATUS,
        status: status,
    }
}

export const loadQuiz = (quiz) => {
    return {
        type: LOAD_QUIZ,
        quiz: quiz,
    }
}