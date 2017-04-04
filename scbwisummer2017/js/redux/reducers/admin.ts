const initialState = {
    prices: {},
    registrations: [],
    workshops: [],
    latedate: '',
    copy: {},
    comprehensives: [],
    coupons: [],
    pricesfetching: false,
    registrationsfetching: false,
    workshopsfetching: false,
    latedatefetching: false,
    copyfetching: false,
    comprehensivesfetching: false,
    couponsfetching: false
}

export function admin(state = initialState, action) {
    switch (action.type) {
        case 'PRICES_FETCHING':
            return {
                ...state,
                pricesfetching: true
            };
        case 'PRICES_FETCHING_SUCCESS':
            return {
                ...state,
                pricesfetching: false,
                prices: action.prices
            };
        case 'REGISTRATIONS_FETCHING':
            return {
                ...state,
                registrationsfetching: true
            };
        case 'REGISTRATIONS_FETCHING_SUCCESS':
            return {
                ...state,
                registrationsfetching: false,
                registrations: action.registrations
            };
        default:
            return state;
    }
}