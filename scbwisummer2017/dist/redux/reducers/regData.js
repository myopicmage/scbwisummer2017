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
    step: 0,
    fetchingTracks: false,
    fetchingComprehensives: false,
    lateDate: ''
};
function regData(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_STEP':
            return __assign({}, state, { step: action.step });
        case 'FETCHING_TRACKS':
            return __assign({}, state, { fetchingTracks: true });
        case 'FETCH_TRACKS_SUCCESS':
            return __assign({}, state, { fetchingTracks: false, tracks: action.tracks });
        case 'FETCHING_COMPREHENSIVES':
            return __assign({}, state, { fetchingComprehensives: true });
        case 'FETCH_COMPREHENSIVES_SUCCESS':
            return __assign({}, state, { fetchingComprehensives: false, comprehensives: action.comprehensives });
        default:
            return __assign({}, state);
    }
}
exports.regData = regData;
//# sourceMappingURL=regData.js.map