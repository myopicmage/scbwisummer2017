"use strict";
var redux_1 = require("redux");
var index_1 = require("./reducers/index");
function thunkMiddleware(_a) {
    var dispatch = _a.dispatch, getState = _a.getState;
    return function (next) { return function (action) {
        return typeof action === 'function' ?
            action(dispatch, getState) :
            next(action);
    }; };
}
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
var store = redux_1.createStore(index_1.reducers, composeEnhancers(thunkMiddleware));
console.log(store);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
//# sourceMappingURL=store.js.map