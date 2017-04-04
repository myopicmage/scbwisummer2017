"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var initialState = {
    tracks: [],
    comprehensives: [],
    step: 0
};
function regData(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_STEP':
            return __assign({}, state, { step: action.step });
        default:
            return __assign({}, state);
    }
}
exports.regData = regData;
//# sourceMappingURL=regData.js.map