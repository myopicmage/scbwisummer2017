"use strict";
var $ = require("jquery");
function setTrack(track) {
    return {
        type: 'SET_TRACK',
        track: track
    };
}
exports.setTrack = setTrack;
function setComprehensive(comprehensive) {
    return {
        type: 'SET_COMPREHENSIVE',
        comprehensive: comprehensive
    };
}
exports.setComprehensive = setComprehensive;
function setManuscriptCritiques(critiques) {
    return {
        type: 'SET_MANUSCRIPT_CRITIQUES',
        m_critiques: critiques
    };
}
exports.setManuscriptCritiques = setManuscriptCritiques;
function setPortfolioReviews(reviews) {
    return {
        type: 'SET_PORTFOLIO_REVIEWS',
        p_reviews: reviews
    };
}
exports.setPortfolioReviews = setPortfolioReviews;
function setCoupon(coupon) {
    return {
        type: 'SET_COUPON',
        coupon: coupon
    };
}
exports.setCoupon = setCoupon;
function calculateTotal(registration, user) {
    return function (dispatch) {
        dispatch(fetchingTotal());
        registration.user = user;
        $.ajax({
            method: 'post',
            url: '/registration/calctotal',
            data: JSON.stringify(registration),
            contentType: 'application/json'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(setTotal(response.data.total, response.data.subtotal));
            }
        });
    };
}
exports.calculateTotal = calculateTotal;
function register(registration, user, success, failure) {
    return function (dispatch) {
        dispatch(pendingRegistration());
        registration.user = user;
        $.ajax({
            method: 'post',
            url: '/registration/register',
            data: JSON.stringify(registration),
            contentType: 'application/json'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(registrationSuccess());
                success();
            }
            else {
                failure();
            }
        });
    };
}
exports.register = register;
function registerFree(registration, user, success) {
    return function (dispatch) {
        dispatch(pendingRegistration());
        registration.user = user;
        $.ajax({
            method: 'post',
            url: '/registration/register',
            data: JSON.stringify(registration),
            contentType: 'application/json'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(registrationSuccess());
                success();
            }
        });
    };
}
exports.registerFree = registerFree;
function pendingRegistration() {
    return {
        type: 'SUBMITTING_REGISTRATION'
    };
}
function registrationSuccess() {
    return {
        type: 'REGISTRATION_SUCCESS'
    };
}
function fetchingTotal() {
    return {
        type: 'FETCHING_TOTAL'
    };
}
function setTotal(total, subtotal) {
    return {
        type: 'SET_TOTAL',
        total: total,
        subtotal: subtotal
    };
}
function setNonce(nonce) {
    return {
        type: 'SET_NONCE',
        nonce: nonce
    };
}
exports.setNonce = setNonce;
function seenMember() {
    return {
        type: 'SEEN_MEMBER'
    };
}
exports.seenMember = seenMember;
function seenBasic() {
    return {
        type: 'SEEN_BASIC'
    };
}
exports.seenBasic = seenBasic;
function seenComprehensives() {
    return {
        type: 'SEEN_COMPREHENSIVES'
    };
}
exports.seenComprehensives = seenComprehensives;
function seenTracks() {
    return {
        type: 'SEEN_TRACKS'
    };
}
exports.seenTracks = seenTracks;
function seenCritiques() {
    return {
        type: 'SEEN_CRITIQUES'
    };
}
exports.seenCritiques = seenCritiques;
//# sourceMappingURL=registration.js.map