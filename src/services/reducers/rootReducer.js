import { combineReducers } from 'redux';
import { puzzleReducer } from './puzzle';

export const rootReducer = combineReducers({
    puzzle: puzzleReducer
})