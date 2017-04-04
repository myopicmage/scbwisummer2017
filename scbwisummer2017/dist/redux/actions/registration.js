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
function calculateTotal(registration) {
    return function (dispatch) {
        dispatch(fetchingTotal());
        $.ajax({
            method: 'post',
            url: '/registration/calctotal',
            data: registration
        })
            .done(function (response) {
            if (response.success) {
                dispatch(setTotal(response.total, response.subtotal));
            }
        });
    };
}
exports.calculateTotal = calculateTotal;
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
//# sourceMappingURL=registration.js.map