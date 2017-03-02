export function addFirstName(firstname) {
    return {
        type: "ADD_FIRST_NAME",
        firstname
    }
}

export function addLastName(lastname) {
    return {
        type: "ADD_LAST_NAME",
        lastname
    };
}

export function addAddress(address1) {
    return {
        type: "ADD_ADDRESS_1",
        address1
    };
}

export function addAddress2(address2) {
    return {
        type: "ADD_ADDRESS_2",
        address2
    };
}

export function addCity(city) {
    return {
        type: "ADD_CITY",
        city
    };
}

export function addProvince(province) {
    return {
        type: "ADD_PROVINCE",
        province
    };
}

export function addPostalCode(postal) {
    return {
        type: "ADD_POSTAL_CODE",
        postal
    };
}

export function addPhone(phone) {
    return {
        type: "ADD_PHONE",
        phone
    };
}

export function addEmail(email) {
    return {
        type: "ADD_EMAIL",
        email
    };
}