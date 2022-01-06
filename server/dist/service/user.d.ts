import { RegisterUser, LoginUser } from '../entities/User/index';
import { IResponse } from '../types';
export declare class UserService {
    login(data: LoginUser): Promise<IResponse>;
    register(data: RegisterUser): Promise<IResponse>;
}
