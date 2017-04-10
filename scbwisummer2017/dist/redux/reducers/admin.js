"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var fetchInitial = {
    fprices: false,
    fregistrations: false,
    fworkshops: false,
    flatedate: false,
    fcopy: false,
    fcomprehensives: false,
    fcoupons: false
};
var adminInitial = __assign({ prices: [], registrations: [], workshops: [], latedate: '', copy: {}, comprehensives: [], coupons: [] }, fetchInitial);
function admin(state, action) {
    if (state === void 0) { state = adminInitial; }
    switch (action.type) {
        case 'PRICES_FETCHING':
            return __assign({}, state, { fprices: true });
        case 'REGISTRATIONS_FETCHING':
            return __assign({}, state, { fregistrations: true });
        case 'WORKSHOPS_FETCHING':
            return __assign({}, state, { fworkshops: true });
        case 'LATEDATE_FETCHING':
            return __assign({}, state, { flatedate: true });
        case 'COPY_FETCHING':
            return __assign({}, state, { fcopy: true });
        case 'COMPREHENSIVES_FETCHING':
            return __assign({}, state, { fcomprehensives: true });
        case 'COUPONS_FETCHING':
            return __assign({}, state, { fcoupons: true });
        case 'PRICES_FETCHING_SUCCESS':
            return __assign({}, state, { fprices: false, prices: action.prices });
        case 'REGISTRATIONS_FETCHING_SUCCESS':
            return __assign({}, state, { fregistrations: false, registrations: action.registrations });
        case 'WORKSHOPS_FETCHING_SUCCESS':
            return __assign({}, state, { workshopsfetching: false, workshops: action.workshops });
        case 'LATEDATE_FETCHING_SUCCESS':
            return __assign({}, state, { latedatefetching: false, latedate: action.latedate });
        case 'COPY_FETCHING_SUCCESS':
            return __assign({}, state, { copyfetching: false, copy: action.copy });
        case 'SET_COPY':
            return __assign({}, state, { copy: action.copy });
        case 'MAKE_WORKSHOP':
            return __assign({}, state, { tempworkshop: action.workshop });
        case 'MAKE_COMPREHENSIVE':
            return __assign({}, state, { tempcomprehensive: action.comprehensive });
        case 'MAKE_PRICE':
            return __assign({}, state, { tempprice: action.price });
        case 'COMPREHENSIVES_FETCHING_SUCCESS':
            return __assign({}, state, { comprehensivesfetching: false, comprehensives: action.comprehensives });
        case 'COUPONS_FETCHING_SUCCESS':
            return __assign({}, state, { couponsfetching: false, coupons: action.coupons });
        default:
            return state;
    }
}
exports.admin = admin;
//# sourceMappingURL=admin.js.map