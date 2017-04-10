const initialState = {
    tracks: [],
    comprehensives: [],
    step: 0,
    lateDate: '',
    copy: {
        lateDate: '',
        workshop: '',
        comprehensive: '',
        frontpage: '',
        critique: ''
    },
    prices: {
        workshop: {
            member: 0,
            nonmember: 0
        },
        comprehensive: {
            member: 0
        },
        critique: {
            regular: 0
        }
    },
    fetchingTracks: false,
    fetchingComprehensives: false,
    fetchingCopy: false,
    fetchingPrices: false,
    paypaltoken: ''
}

export function regData(state = initialState, action) {
    switch (action.type) {
        case 'SET_STEP':
            return {
                ...state,
                step: action.step
            };
        case 'FETCHING_TRACKS':
            return {
                ...state,
                fetchingTracks: true
            };
        case 'FETCH_TRACKS_SUCCESS':
            return {
                ...state,
                fetchingTracks: false,
                tracks: action.tracks
            };
        case 'FETCHING_COMPREHENSIVES':
            return {
                ...state,
                fetchingComprehensives: true
            };
        case 'FETCH_COMPREHENSIVES_SUCCESS':
            return {
                ...state,
                fetchingComprehensives: false,
                comprehensives: action.comprehensives
            };
        case 'FETCHING_COPY':
            return {
                ...state,
                fetchingCopy: true
            };
        case 'FETCHING_COPY_SUCCESS':
            return {
                ...state,
                copy: action.copy
            };
        case 'FETCHING_PRICES':
            return {
                ...state,
                fetchingPrices: true
            };
        case 'FETCHING_PRICES_SUCCESS':
            return {
                ...state,
                fetchingPrices: false,
                prices: action.prices
            }
        case 'SET_TOKEN':
            return {
                ...state,
                paypaltoken: action.token
            };
        default:
            return {
                ...state
            };
    }
}