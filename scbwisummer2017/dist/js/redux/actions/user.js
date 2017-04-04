"use strict";
function addFirstName(firstname) {
    return {
        type: "ADD_FIRST_NAME",
        firstname: firstname
    };
}
exports.addFirstName = addFirstName;
function addLastName(lastname) {
    return {
        type: "ADD_LAST_NAME",
        lastname: lastname
    };
}
exports.addLastName = addLastName;
function addAddress(address1) {
    return {
        type: "ADD_ADDRESS_1",
        address1: address1
    };
}
exports.addAddress = addAddress;
function addAddress2(address2) {
    return {
        type: "ADD_ADDRESS_2",
        address2: address2
    };
}
exports.addAddress2 = addAddress2;
function addCity(city) {
    return {
        type: "ADD_CITY",
        city: city
    };
}
exports.addCity = addCity;
function addProvince(province) {
    return {
        type: "ADD_PROVINCE",
        province: province
    };
}
exports.addProvince = addProvince;
function addPostalCode(postal) {
    return {
        type: "ADD_POSTAL_CODE",
        postal: postal
    };
}
exports.addPostalCode = addPostalCode;
function addPhone(phone) {
    return {
        type: "ADD_PHONE",
        phone: phone
    };
}
exports.addPhone = addPhone;
function addEmail(email) {
    return {
        type: "ADD_EMAIL",
        email: email
    };
}
exports.addEmail = addEmail;
function setMember(member) {
    return {
        type: "SET_MEMBER",
        member: member
    };
}
exports.setMember = setMember;
//# sourceMappingURL=user.js.map