export function registration(state = {}, action) {
    switch (action.type) {
        case 'ADD_FIRST_NAME':
            return {
                ...state,
                firstname: action.firstname
            };
        case 'ADD_LAST_NAME':
            return {
                ...state,
                lastname: action.lastname
            };
        case 'ADD_ADDRESS_1':
            return {
                ...state,
                address1: action.address1
            };
        case 'ADD_ADDRESS_2':
            return {
                ...state,
                address2: action.address2
            };
        case 'ADD_CITY':
            return {
                ...state,
                city: action.city
            };
        case 'ADD_PROVINCE':
            return {
                ...state,
                province: action.province
            };
        case 'ADD_POSTAL_CODE':
            return {
                ...state,
                postal: action.postal
            };
        default:
            return state;
    }
}