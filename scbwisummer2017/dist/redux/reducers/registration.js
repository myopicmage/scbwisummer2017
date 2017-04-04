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
    track: -1,
    comprehensive: -1,
    manuscriptcritiques: -1,
    portfoliocritiques: -1,
    coupon: '',
    fetchingtotal: false,
    subtotal: 0,
    total: 0,
    seenmember: false,
    seenbasic: false,
    seencomprehensives: false,
    seentracks: false,
    seencritiques: false
};
function registration(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_TRACK':
            return __assign({}, state, { track: action.track });
        case 'SET_COMPREHENSIVE':
            return __assign({}, state, { comprehensive: action.comprehensive });
        case 'SET_MANUSCRIPT_CRITIQUES':
            return __assign({}, state, { manuscriptcritiques: action.m_critiques });
        case 'SET_PORTFOLIO_REVIEWS':
            return __assign({}, state, { portfoliocritiques: action.p_reviews });
        case 'SET_COUPON':
            return __assign({}, state, { coupon: action.coupon });
        case 'FETCHING_TOTAL':
            return __assign({}, state, { fetchingtotal: true });
        case 'SET_TOTAL':
            return __assign({}, state, { fetchingtotal: false, total: action.total, subtotal: action.subtotal });
        case 'SEEN_MEMBER':
            return __assign({}, state, { seenmember: true });
        case 'SEEN_BASIC':
            return __assign({}, state, { seenbasic: true });
        case 'SEEN_COMPREHENSIVES':
            return __assign({}, state, { seencomprehensives: true });
        case 'SEEN_TRACKS':
            return __assign({}, state, { seencritiques: true });
        default:
            return __assign({}, state);
    }
}
exports.registration = registration;
//# sourceMappingURL=registration.js.map