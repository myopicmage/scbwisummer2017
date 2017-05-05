"use strict";
var $ = require("jquery");
function fetchPrices() {
    return function (dispatch) {
        dispatch(pricesFetching());
        $.ajax({
            method: 'get',
            url: '/admin/prices'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(pricesFetchingSuccess(response.data));
            }
        });
    };
}
exports.fetchPrices = fetchPrices;
function addPrice(price) {
    return function (dispatch) {
        dispatch(pricesFetching());
        $.ajax({
            method: 'post',
            url: '/admin/prices',
            data: JSON.stringify(price),
            contentType: 'application/json'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchPrices());
            }
        });
    };
}
exports.addPrice = addPrice;
function makePrice(price) {
    return {
        type: 'MAKE_PRICE',
        price: price
    };
}
exports.makePrice = makePrice;
function pricesFetching() {
    return {
        type: 'PRICES_FETCHING'
    };
}
function pricesFetchingSuccess(prices) {
    return {
        type: 'PRICES_FETCHING_SUCCESS',
        prices: prices
    };
}
function fetchRegistrations(number) {
    if (number === void 0) { number = 10; }
    return function (dispatch) {
        dispatch(registrationsFetching());
        $.ajax({
            method: 'get',
            url: '/admin/registrations'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(registrationsFetchingSuccess(response.data));
            }
        });
    };
}
exports.fetchRegistrations = fetchRegistrations;
function addRegistration(registration) {
    return function (dispatch) {
        dispatch(registrationsFetching());
        $.ajax({
            method: 'post',
            url: '/admin/registrations',
            data: registration
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchRegistrations());
            }
        });
    };
}
exports.addRegistration = addRegistration;
function registrationsFetching() {
    return {
        type: 'REGISTRATIONS_FETCHING'
    };
}
function registrationsFetchingSuccess(registrations) {
    return {
        type: 'REGISTRATIONS_FETCHING_SUCCESS',
        registrations: registrations
    };
}
function fetchWorkshops() {
    return function (dispatch) {
        dispatch(workshopsFetching());
        $.ajax({
            method: 'get',
            url: '/admin/workshops'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(workshopsFetchingSuccess(response.data));
            }
        });
    };
}
exports.fetchWorkshops = fetchWorkshops;
function makeWorkshop(workshop) {
    return {
        type: 'MAKE_WORKSHOP',
        workshop: workshop
    };
}
exports.makeWorkshop = makeWorkshop;
function addWorkshop(workshop) {
    return function (dispatch) {
        dispatch(workshopsFetching());
        $.ajax({
            method: 'post',
            url: '/admin/workshops',
            data: JSON.stringify(workshop),
            contentType: 'application/json'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchWorkshops());
            }
        });
    };
}
exports.addWorkshop = addWorkshop;
function workshopsFetching() {
    return {
        type: 'WORKSHOPS_FETCHING'
    };
}
function workshopsFetchingSuccess(workshops) {
    return {
        type: 'WORKSHOPS_FETCHING_SUCCESS',
        workshops: workshops
    };
}
function fetchLateDate() {
    return function (dispatch) {
        dispatch(lateDateFetching());
        $.ajax({
            method: 'get',
            url: '/admin/latedate'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(lateDateFetchingSuccess(response.data));
            }
        });
    };
}
exports.fetchLateDate = fetchLateDate;
function addLateDate(date) {
    return function (dispatch) {
        dispatch(lateDateFetching());
        $.ajax({
            method: 'post',
            url: '/admin/latedate',
            data: date
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchLateDate());
            }
        });
    };
}
exports.addLateDate = addLateDate;
function lateDateFetching() {
    return {
        type: 'LATEDATE_FETCHING'
    };
}
function lateDateFetchingSuccess(latedate) {
    return {
        type: 'LATEDATE_FETCHING_SUCCESS',
        latedate: latedate
    };
}
function fetchCopy() {
    return function (dispatch) {
        dispatch(copyFetching());
        $.ajax({
            method: 'get',
            url: '/admin/copy'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(copyFetchingSuccess(response.data));
            }
        });
    };
}
exports.fetchCopy = fetchCopy;
function addCopy(copy) {
    return function (dispatch) {
        dispatch(copyFetching());
        $.ajax({
            method: 'post',
            url: '/admin/copy',
            data: copy
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchCopy());
            }
        });
    };
}
exports.addCopy = addCopy;
function copyFetching() {
    return {
        type: 'COPY_FETCHING'
    };
}
function copyFetchingSuccess(copy) {
    return {
        type: 'COPY_FETCHING_SUCCESS',
        copy: copy
    };
}
function setCopy(copy) {
    return {
        type: 'SET_COPY',
        copy: copy
    };
}
exports.setCopy = setCopy;
function fetchComprehensives() {
    return function (dispatch) {
        dispatch(comprehensivesFetching());
        $.ajax({
            method: 'get',
            url: '/admin/comprehensives'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(comprehensivesFetchingSuccess(response.data));
            }
        });
    };
}
exports.fetchComprehensives = fetchComprehensives;
function makeComprehensive(comprehensive) {
    return {
        type: 'MAKE_COMPREHENSIVE',
        comprehensive: comprehensive
    };
}
exports.makeComprehensive = makeComprehensive;
function addComprehensive(comprehensive) {
    return function (dispatch) {
        dispatch(comprehensivesFetching());
        $.ajax({
            method: 'post',
            url: '/admin/comprehensives',
            data: comprehensive
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchComprehensives());
            }
        });
    };
}
exports.addComprehensive = addComprehensive;
function comprehensivesFetching() {
    return {
        type: 'COMPREHENSIVES_FETCHING',
    };
}
function comprehensivesFetchingSuccess(comprehensives) {
    return {
        type: 'COMPREHENSIVES_FETCHING_SUCCESS',
        comprehensives: comprehensives
    };
}
function fetchCoupons() {
    return function (dispatch) {
        dispatch(couponsFetching());
        $.ajax({
            method: 'get',
            url: '/admin/coupons'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(couponsFetchingSuccess(response.data));
            }
        });
    };
}
exports.fetchCoupons = fetchCoupons;
function addCoupon(coupon) {
    return function (dispatch) {
        dispatch(couponsFetching());
        $.ajax({
            method: 'post',
            url: '/admin/coupons',
            data: JSON.stringify(coupon),
            contentType: 'application/json'
        })
            .done(function (response) {
            if (response.success) {
                dispatch(fetchCoupons());
            }
        });
    };
}
exports.addCoupon = addCoupon;
function couponsFetching() {
    return {
        type: 'COUPONS_FETCHING'
    };
}
function couponsFetchingSuccess(coupons) {
    return {
        type: 'COUPONS_FETCHING_SUCCESS',
        coupons: coupons
    };
}
//# sourceMappingURL=admin.js.map