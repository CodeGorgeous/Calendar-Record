import { EResponseState } from './index';
export interface IResponse {
    state: EResponseState;
    msg: string;
    data: any;
}
