const initialState = {
    tracks: [],
    comprehensives: [],
    step: 0,
    fetchingTracks: false,
    fetchingComprehensives: false,
    lateDate: ''
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
        default:
            return {
                ...state
            };
    }
}