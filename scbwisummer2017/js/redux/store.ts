import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from './reducers/index';

function thunkMiddleware({ dispatch, getState }) {
  return next => action =>
    typeof action === 'function' ?
      action(dispatch, getState) :
      next(action);
}

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;