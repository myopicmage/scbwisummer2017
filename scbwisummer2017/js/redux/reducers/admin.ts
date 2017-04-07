const fetchInitial = {
    fprices: false,
    fregistrations: false,
    fworkshops: false,
    flatedate: false,
    fcopy: false,
    fcomprehensives: false,
    fcoupons: false
};

const adminInitial = {
    prices: [],
    registrations: [],
    workshops: [],
    latedate: '',
    copy: {},
    comprehensives: [],
    coupons: [],
    ...fetchInitial
};

export function admin(state = adminInitial, action) {
    switch (action.type) {
        case 'PRICES_FETCHING':
            return {
                ...state,
                fprices: true
            };
        case 'REGISTRATIONS_FETCHING':
            return {
                ...state,
                fregistrations: true
            };
        case 'WORKSHOPS_FETCHING':
            return {
                ...state,
                fworkshops: true,
            };
        case 'LATEDATE_FETCHING':
            return {
                ...state,
                flatedate: true
            };
        case 'COPY_FETCHING':
            return {
                ...state,
                fcopy: true
            };
        case 'COMPREHENSIVES_FETCHING':
            return {
                ...state,
                fcomprehensives: true
            };
        case 'COUPONS_FETCHING':
            return {
                ...state,
                fcoupons: true,
            };
        case 'PRICES_FETCHING_SUCCESS':
            return {
                ...state,
                fprices: false,
                prices: action.prices
            };
        case 'REGISTRATIONS_FETCHING_SUCCESS':
            return {
                ...state,
                fregistrations: false,
                registrations: action.registrations
            };
        case 'WORKSHOPS_FETCHING_SUCCESS':
            return {
                ...state,
                workshopsfetching: false,
                workshops: action.workshops
            };
        case 'LATEDATE_FETCHING_SUCCESS':
            return {
                ...state,
                latedatefetching: false,
                latedate: action.latedate
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
        case 'MAKE_WORKSHOP':
            return {
                ...state,
                tempworkshop: action.workshop
            };
        case 'MAKE_COMPREHENSIVE':
            return {
                ...state,
                tempcomprehensive: action.comprehensive
            };
        case 'MAKE_PRICE':
            return {
                ...state,
                tempprice: action.price
            };
        case 'COMPREHENSIVES_FETCHING_SUCCESS':
            return {
                ...state,
                comprehensivesfetching: false,
                comprehensives: action.comprehensives
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