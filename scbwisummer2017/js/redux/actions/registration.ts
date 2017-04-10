import * as $ from 'jquery';

export function setTrack(track) {
    return {
        type: 'SET_TRACK',
        track: track
    };
}

export function setComprehensive(comprehensive) {
    return {
        type: 'SET_COMPREHENSIVE',
        comprehensive
    };
}

export function setManuscriptCritiques(critiques) {
    return {
        type: 'SET_MANUSCRIPT_CRITIQUES',
        m_critiques: critiques
    };
}

export function setPortfolioReviews(reviews) {
    return {
        type: 'SET_PORTFOLIO_REVIEWS',
        p_reviews: reviews
    };
}

export function setCoupon(coupon) {
    return {
        type: 'SET_COUPON',
        coupon
    };
}

export function calculateTotal(registration, user) {
    return dispatch => {
        dispatch(fetchingTotal());

        registration.user = user;

        $.ajax({
            method: 'post',
            url: '/registration/calctotal',
            data: JSON.stringify(registration),
            contentType: 'application/json'
        })
        .done(response => {
            if (response.success) {
                dispatch(setTotal(response.data.total, response.data.subtotal));
            }
        });
    };
}

export function register(registration, user, success, failure) {
    return dispatch => {
        dispatch(pendingRegistration());

        registration.user = user;

        $.ajax({
            method: 'post',
            url: '/registration/register',
            data: JSON.stringify(registration),
            contentType: 'application/json'
        })
        .done(response => {
            if (response.success) {
                dispatch(registrationSuccess());
                success();
            } else {
                failure();
            }
        });
    }
}

export function registerFree(registration, user, success) {
    return dispatch => {
        dispatch(pendingRegistration());

        registration.user = user;

        $.ajax({
            method: 'post',
            url: '/registration/register',
            data: JSON.stringify(registration),
            contentType: 'application/json'
        })
        .done(response => {
            if (response.success) {
                dispatch(registrationSuccess());
                success();
            }
        });
    }
}

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
        total,
        subtotal
    };
}

export function setNonce(nonce) {
    return {
        type: 'SET_NONCE',
        nonce
    };
}

export function seenMember() {
    return {
        type: 'SEEN_MEMBER'
    };
}

export function seenBasic() {
    return {
        type: 'SEEN_BASIC'
    };
}

export function seenComprehensives() {
    return {
        type: 'SEEN_COMPREHENSIVES'
    };
}

export function seenTracks() {
    return {
        type: 'SEEN_TRACKS'
    };
}

export function seenCritiques() {
    return {
        type: 'SEEN_CRITIQUES'
    };
}
