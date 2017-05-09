import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducers } from './reducers';

export default function configureStore() {
    function thunkMiddleware({ dispatch, getState }) {
        return next => action =>
            typeof action === 'function' ?
                action(dispatch, getState) :
                next(action);
    }

    const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

    const store = createStore(
        combineReducers(reducers),
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(combineReducers(reducers));
        });
    }

    return store;
}