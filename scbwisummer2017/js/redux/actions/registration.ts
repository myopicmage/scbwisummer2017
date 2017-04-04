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

export function calculateTotal(registration) {
    return dispatch => {
        dispatch(fetchingTotal());

        $.ajax({
            method: 'post',
            url: '/registration/calctotal',
            data: registration
        })
        .done(response => {
            if (response.success) {
                dispatch(setTotal(response.total, response.subtotal));
            }
        });
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