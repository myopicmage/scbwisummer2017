import * as $ from 'jquery';

export function fetchPrices() {
    return dispatch => {
        dispatch(pricesFetching());

        $.ajax({
            method: 'post',
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
            data: price
        })
        .done(response => {
            if (response.success) {
                dispatch(fetchPrices());
            }
        });
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
            method: 'post',
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
            method: 'post',
            url: '/admin/workshops'
        })
        .done(response => {
            if (response.success) {
                dispatch(workshopsFetchingSuccess(response.data));
            }
        });
    };
}

export function addWorkshop(workshop) {
    return dispatch => {
        dispatch(workshopsFetching());

        $.ajax({
            method: 'post',
            url: '/admin/workshops',
            data: workshop
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
            method: 'post',
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
            method: 'post',
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
            method: 'post',
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
            data: coupon
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