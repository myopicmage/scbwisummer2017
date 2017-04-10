export interface IUser {
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
};

export interface IRegistration {
    track: number;
    comprehensive: number;
    manuscriptcritiques: number;
    portfoliocritiques: number;
    coupon: string;
    fetchingtotal: boolean;
    subtotal: number;
    total: number;
    seenmember: boolean;
    seenbasic: boolean;
    seencomprehensives: boolean;
    seentracks: boolean;
    seencritiques: boolean;
};