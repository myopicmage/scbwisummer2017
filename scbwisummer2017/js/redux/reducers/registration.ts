const initialState = {
    track: -1,
    comprehensive: -1,
    manuscriptcritiques: 0,
    portfoliocritiques: 0,
    coupon: '',
    fetchingtotal: false,
    subtotal: 0,
    total: 0,
    nonce: '',
    seenmember: false,
    seenbasic: false,
    seencomprehensives: false,
    seentracks: false,
    seencritiques: false
};

export function registration(state = initialState, action) {
    switch (action.type) {
        case 'SET_TRACK':
            return {
                ...state,
                track: action.track
            };
        case 'SET_COMPREHENSIVE':
            return {
                ...state,
                comprehensive: action.comprehensive
            };
        case 'SET_MANUSCRIPT_CRITIQUES':
            return {
                ...state,
                manuscriptcritiques: action.m_critiques
            };
        case 'SET_PORTFOLIO_REVIEWS':
            return {
                ...state,
                portfoliocritiques: action.p_reviews
            };
        case 'SET_COUPON':
            return {
                ...state,
                coupon: action.coupon
            };
        case 'FETCHING_TOTAL':
            return {
                ...state,
                fetchingtotal: true
            };
        case 'SET_TOTAL':
            return {
                ...state,
                fetchingtotal: false,
                total: action.total,
                subtotal: action.subtotal
            };
        case 'SEEN_MEMBER':
            return {
                ...state,
                seenmember: true
            };
        case 'SEEN_BASIC':
            return {
                ...state,
                seenbasic: true
            };
        case 'SEEN_COMPREHENSIVES':
            return {
                ...state,
                seencomprehensives: true
            };
        case 'SEEN_TRACKS':
            return {
                ...state,
                seentracks: true
            };
        case 'SEEN_CRITIQUES':
            return {
                ...state,
                seencritiques: true
            };
        case 'SET_NONCE':
            return {
                ...state,
                nonce: action.nonce
            };
        default:
            return { ...state };
    }
}