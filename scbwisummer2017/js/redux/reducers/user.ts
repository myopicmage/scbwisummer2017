const initialState = {
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postal: '',
    email: '',
    phone: '',
    member: false
};

export function user(state = initialState, action) {
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
        case 'ADD_EMAIL':
            return {
                ...state,
                email: action.email
            };
        case 'ADD_PHONE':
            return {
                ...state,
                phone: action.phone
            };
        case 'SET_MEMBER':
            return {
                ...state,
                member: action.member
            };
        default:
            return state;
    }
}