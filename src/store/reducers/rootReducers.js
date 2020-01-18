import { combineReducers } from 'redux';
import QuizReducer from './Quiz';

const rootReducers = combineReducers({
    Quiz: QuizReducer,
});


export default rootReducers;