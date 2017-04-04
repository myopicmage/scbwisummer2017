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

export function fetchCopy() {
    return dispatch => {
        dispatch(fetchingCopy());

        $.ajax({
            method: 'post',
            url: '/registration/copy'
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchingCopySuccess(response.data));
            }
        });
    };
}

export function fetchPrices() {
    return dispatch => {
        dispatch(fetchingPrices());

        $.ajax({
            method: 'post',
            url: '/registration/prices'
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchingPricesSuccess(response.data));
            }
        });
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
        copy
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
        prices
    };
}