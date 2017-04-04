const initialState = {
    track: -1,
    comprehensive: -1,
    manuscriptcritiques: -1,
    portfoliocritiques: -1,
    coupon: '',
    subtotal: 0,
    total: 0
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
        case 'CALCULATE_TOTAL':
            return {
                ...state,
                total: action.total,
                subtotal: action.subtotal
            };
        default:
            return { ...state };
    }
}