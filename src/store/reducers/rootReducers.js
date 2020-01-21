import { combineReducers } from 'redux';
import QuizReducer from './Quiz';
import LanguageReducer from './Language';
import ProgrammingReducer from './Programming';

const rootReducers = combineReducers({
    Quiz: QuizReducer,
    Language: LanguageReducer,
    Programming: ProgrammingReducer,
});


export default rootReducers;