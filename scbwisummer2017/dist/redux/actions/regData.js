"use strict";
var $ = require("jquery");
function setStep(step) {
    return {
        type: 'SET_STEP',
        step: step
    };
}
exports.setStep = setStep;
function fetchTracks() {
    return function (dispatch) {
        dispatch(fetchingTracks());
        $.ajax({
            method: 'post',
            url: '/registration/tracks'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchTracksSuccess(response.data));
            }
        });
    };
}
exports.fetchTracks = fetchTracks;
function fetchComprehensives() {
    return function (dispatch) {
        dispatch(fetchingComprehensives());
        $.ajax({
            method: 'post',
            url: '/registration/comprehensives'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchComprehensivesSuccess(response.data));
            }
        });
    };
}
exports.fetchComprehensives = fetchComprehensives;
function fetchCopy() {
    return function (dispatch) {
        dispatch(fetchingCopy());
        $.ajax({
            method: 'post',
            url: '/registration/copy'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchingCopySuccess(response.data));
            }
        });
    };
}
exports.fetchCopy = fetchCopy;
function fetchPrices() {
    return function (dispatch) {
        dispatch(fetchingPrices());
        $.ajax({
            method: 'post',
            url: '/registration/prices'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchingPricesSuccess(response.data));
            }
        });
    };
}
exports.fetchPrices = fetchPrices;
function fetchingTracks() {
    return {
        type: 'FETCHING_TRACKS',
        fetchingTracks: true
    };
}
function fetchTracksSuccess(data) {
    return {
        type: 'FETCH_TRACKS_SUCCESS',
        tracks: data,
        fetchingTracks: false
    };
}
function fetchingComprehensives() {
    return {
        type: 'FETCHING_COMPREHENSIVES',
        fetchingComprehensives: true
    };
}
function fetchComprehensivesSuccess(data) {
    return {
        type: 'FETCH_COMPREHENSIVES_SUCCESS',
        fetchingComprehensives: false,
        comprehensives: data
    };
}
function fetchingCopy() {
    return {
        type: 'FETCHING_COPY'
    };
}
function fetchingCopySuccess(copy) {
    return {
        type: 'FETCHING_COPY_SUCCESS',
        copy: copy
    };
}
function fetchingPrices() {
    return {
        type: 'FETCHING_PRICES',
    };
}
function fetchingPricesSuccess(prices) {
    return {
        type: 'FETCHING_PRICES_SUCCESS',
        prices: prices
    };
}
function fetchToken() {
    return function (dispatch) {
        $.ajax({
            method: 'post',
            url: '/registration/gettoken'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(setToken(response.data));
            }
        });
    };
}
exports.fetchToken = fetchToken;
function setToken(token) {
    return {
        type: 'SET_TOKEN',
        token: token
    };
}
//# sourceMappingURL=regData.js.map