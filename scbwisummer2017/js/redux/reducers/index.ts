import { user } from './user';
import { registration } from "./registration";
import { regData } from "./regData";
import { admin } from './admin';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    user,
    registration,
    regData,
    admin
});