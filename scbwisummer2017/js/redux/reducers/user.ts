export interface user {
    firstname: string;
    lastname: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    postal: string;
    email: string;
    phone: string;
    country: string;
    member: boolean;
    valid: boolean;
}

const initialState : user = {
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postal: '',
    email: '',
    phone: '',
    member: false,
    country: 'US',
    valid: false
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
        case 'ADD_COUNTRY':
            return {
                ...state,
                country: action.country
            };
        case 'MARK_VALID':
            return {
                ...state,
                valid: action.valid
            };
        default:
            return state;
    }
}