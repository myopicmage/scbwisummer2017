import * as $ from 'jquery';

export function fetchPrices() {
    return dispatch => {
        dispatch(pricesFetching());

        $.ajax({
            method: 'get',
            url: '/admin/prices'
        })
        .done(response => {
            if (response.success) {
                dispatch(pricesFetchingSuccess(response.data));
            }
        });
    };
}

export function addPrice(price) {
    return dispatch => {
        dispatch(pricesFetching());

        $.ajax({
            method: 'post',
            url: '/admin/prices',
            data: JSON.stringify(price),
            contentType: 'application/json'
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchPrices());
            }
        });
    };
}

export function makePrice(price) {
    return {
        type: 'MAKE_PRICE',
        price
    };
}

function pricesFetching() {
    return {
        type: 'PRICES_FETCHING'
    };
}

function pricesFetchingSuccess(prices) {
    return {
        type: 'PRICES_FETCHING_SUCCESS',
        prices
    };
}

export function fetchRegistrations(number = 10) {
    return dispatch => {
        dispatch(registrationsFetching());

        $.ajax({
            method: 'get',
            url: '/admin/registrations'
        })
        .done(response => {
            if (response.success) {
                dispatch(registrationsFetchingSuccess(response.data));
            }
        });
    };
}

export function addRegistration(registration) {
    return dispatch => {
        dispatch(registrationsFetching());

        $.ajax({
            method: 'post',
            url: '/admin/registrations',
            data: registration
        })
        .done(response => {
            console.log('response', response);

            if (response.success) {
                dispatch(fetchRegistrations());
            }
        });
    };
}

function registrationsFetching() {
    return {
        type: 'REGISTRATIONS_FETCHING'
    };
}

function registrationsFetchingSuccess(registrations) {
    return {
        type: 'REGISTRATIONS_FETCHING_SUCCESS',
        registrations
    };
}

export function fetchWorkshops() {
    return dispatch => {
        dispatch(workshopsFetching());

        $.ajax({
            method: 'get',
            url: '/admin/workshops'
        })
        .done(response => {
            if (response.success) {
                dispatch(workshopsFetchingSuccess(response.data));
            }
        });
    };
}

export function makeWorkshop(workshop) {
    return {
        type: 'MAKE_WORKSHOP',
        workshop
    };
}

export function addWorkshop(workshop) {
    return dispatch => {
        dispatch(workshopsFetching());

        $.ajax({
            method: 'post',
            url: '/admin/workshops',
            data: JSON.stringify(workshop),
            contentType: 'application/json'
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchWorkshops());
            }
        });
    };
}

function workshopsFetching() {
    return {
        type: 'WORKSHOPS_FETCHING'
    };
}

function workshopsFetchingSuccess(workshops) {
    return {
        type: 'WORKSHOPS_FETCHING_SUCCESS',
        workshops
    };
}

export function fetchLateDate() {
    return dispatch => {
        dispatch(lateDateFetching());

        $.ajax({
            method: 'get',
            url: '/admin/latedate'
        })
        .done(response => {
            if (response.success) {
                dispatch(lateDateFetchingSuccess(response.data));
            }
        });
    };
}

export function addLateDate(date) {
    return dispatch => {
        dispatch(lateDateFetching());

        $.ajax({
            method: 'post',
            url: '/admin/latedate',
            data: date
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchLateDate());
            }
        });
    };
}

function lateDateFetching() {
    return {
        type: 'LATEDATE_FETCHING'
    };
}

function lateDateFetchingSuccess(latedate) {
    return {
        type: 'LATEDATE_FETCHING_SUCCESS',
        latedate
    };
}

export function fetchCopy() {
    return dispatch => {
        dispatch(copyFetching());

        $.ajax({
            method: 'get',
            url: '/admin/copy'
        })
        .done(response => {
            if (response.success) {
                dispatch(copyFetchingSuccess(response.data));
            }
        });
    };
}

export function addCopy(copy) {
    return dispatch => {
        dispatch(copyFetching());

        $.ajax({
            method: 'post',
            url: '/admin/copy',
            data: copy
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchCopy());
            }
        });
    };
}

function copyFetching() {
    return {
        type: 'COPY_FETCHING'
    };
}

function copyFetchingSuccess(copy) {
    return {
        type: 'COPY_FETCHING_SUCCESS',
        copy
    };
}

export function setCopy(copy) {
    return {
        type: 'SET_COPY',
        copy
    };
}

export function fetchComprehensives() {
    return dispatch => {
        dispatch(comprehensivesFetching());

        $.ajax({
            method: 'get',
            url: '/admin/comprehensives'
        })
        .done(response => {
            if (response.success) {
                dispatch(comprehensivesFetchingSuccess(response.data));
            }
        });
    };
}

export function makeComprehensive(comprehensive) {
    return {
        type: 'MAKE_COMPREHENSIVE',
        comprehensive
    };
}

export function addComprehensive(comprehensive) {
    return dispatch => {
        dispatch(comprehensivesFetching());

        $.ajax({
            method: 'post',
            url: '/admin/comprehensives',
            data: comprehensive
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchComprehensives());
            }
        });
    };
}

function comprehensivesFetching() {
    return {
        type: 'COMPREHENSIVES_FETCHING',
    };
}

function comprehensivesFetchingSuccess(comprehensives) {
    return {
        type: 'COMPREHENSIVES_FETCHING_SUCCESS',
        comprehensives
    };
}

export function fetchCoupons() {
    return dispatch => {
        dispatch(couponsFetching());

        $.ajax({
            method: 'get',
            url: '/admin/coupons'
        })
        .done(response => {
            if (response.success) {
                dispatch(couponsFetchingSuccess(response.data));
            }
        });
    };
}

export function addCoupon(coupon) {
    return dispatch => {
        dispatch(couponsFetching());

        $.ajax({
            method: 'post',
            url: '/admin/coupons',
            data: JSON.stringify(coupon),
            contentType: 'application/json'
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchCoupons());
            }
        });
    };
}

function couponsFetching() {
    return {
        type: 'COUPONS_FETCHING'
    };
}

function couponsFetchingSuccess(coupons) {
    return {
        type: 'COUPONS_FETCHING_SUCCESS',
        coupons
    };
}

export function register(registration, user, success, failure) {
    return dispatch => {
        registration.user = user;

        $.ajax({
            method: 'post',
            url: '/admin/register',
            data: JSON.stringify(registration),
            contentType: 'application/json'
        })
        .done(response => {
            if (response.success) {
                success();
            } else {
                failure();
            }
        });
    }
}