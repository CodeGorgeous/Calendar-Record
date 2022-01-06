import User from './User';
export declare class RegisterUser extends User {
    userEmail: string;
    verificationCode: string;
    readonly userUID: string;
}
