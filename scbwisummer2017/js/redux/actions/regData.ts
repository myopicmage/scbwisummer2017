import * as $ from 'jquery';

export function setStep(step) {
    return {
        type: 'SET_STEP',
        step
    };
}

export function fetchTracks() {
    return dispatch => {
        dispatch(fetchingTracks());

        $.ajax({
            method: 'post',
            url: '/registration/tracks'
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchTracksSuccess(response.data));
            }
        })
    };
}

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

export function fetchComprehensives() {
    return dispatch => {
        dispatch(fetchingComprehensives());

        $.ajax({
            method: 'post',
            url: '/registration/comprehensives'
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchComprehensivesSuccess(response.data));
            }
        });
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