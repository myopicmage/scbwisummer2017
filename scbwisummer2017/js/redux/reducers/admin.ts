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
        case 'WORKSHOPS_FETCHING':
            return {
                ...state,
                workshopsfetching: true,
            };
        case 'WORKSHOPS_FETCHING_SUCCESS':
            return {
                ...state,
                workshopsfetching: false,
                workshops: action.workshops
            };
        case 'LATEDATE_FETCHING':
            return {
                ...state,
                latedatefetching: true
            };
        case 'LATEDATE_FETCHING_SUCCESS':
            return {
                ...state,
                latedatefetching: false,
                latedate: action.latedate
            };
        case 'COPY_FETCHING':
            return {
                ...state,
                copyfetching: true
            };
        case 'COPY_FETCHING_SUCCESS':
            return {
                ...state,
                copyfetching: false,
                copy: action.copy
            };
        case 'SET_COPY':
            return {
                ...state,
                copy: action.copy
            };
        case 'COMPREHENSIVES_FETCHING':
            return {
                ...state,
                comprehensivesfetching: true
            };
        case 'COMPREHENSIVES_FETCHING_SUCCESS':
            return {
                ...state,
                comprehensivesfetching: false,
                comprehensives: action.comprehensives
            };
        case 'COUPONS_FETCHING':
            return {
                ...state,
                couponsfetching: true,
            };
        case 'COUPONS_FETCHING_SUCCESS':
            return {
                ...state,
                couponsfetching: false,
                coupons: action.coupons
            };
        default:
            return state;
    }
}