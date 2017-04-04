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
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postal: '',
    email: '',
    phone: '',
    member: false
};
function user(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'ADD_FIRST_NAME':
            return __assign({}, state, { firstname: action.firstname });
        case 'ADD_LAST_NAME':
            return __assign({}, state, { lastname: action.lastname });
        case 'ADD_ADDRESS_1':
            return __assign({}, state, { address1: action.address1 });
        case 'ADD_ADDRESS_2':
            return __assign({}, state, { address2: action.address2 });
        case 'ADD_CITY':
            return __assign({}, state, { city: action.city });
        case 'ADD_PROVINCE':
            return __assign({}, state, { province: action.province });
        case 'ADD_POSTAL_CODE':
            return __assign({}, state, { postal: action.postal });
        case 'ADD_EMAIL':
            return __assign({}, state, { email: action.email });
        case 'ADD_PHONE':
            return __assign({}, state, { phone: action.phone });
        case 'SET_MEMBER':
            return __assign({}, state, { member: action.member });
        default:
            return state;
    }
}
exports.user = user;
//# sourceMappingURL=user.js.map