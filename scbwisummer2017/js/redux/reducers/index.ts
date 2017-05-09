import { user } from './user';
import { registration } from "./registration";
import { regData } from "./regData";
import { admin } from './admin';
import { routerReducer } from 'react-router-redux';

export const reducers = {
    user,
    registration,
    regData,
    admin,
    routing: routerReducer
};