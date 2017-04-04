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
//# sourceMappingURL=regData.js.map