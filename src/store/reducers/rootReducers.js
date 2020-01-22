import { combineReducers } from 'redux';
import QuizReducer from './Quiz';
import LanguageReducer from './Language';
import ProgrammingReducer from './Programming';
import MathReducer from './Math';
import ScienceReducer from './Science';

const rootReducers = combineReducers({
    Quiz: QuizReducer,
    Language: LanguageReducer,
    Programming: ProgrammingReducer,
    Math: MathReducer,
    Science:ScienceReducer,
});


export default rootReducers;