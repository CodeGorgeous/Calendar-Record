import { validate } from 'class-validator';
import createResponse from './createResponse';
import { EResponseState, IResponse } from '../types';

export default function validateResponse(data: any): Promise<IResponse | void> {
    return validate(data).then(error => {
        if (error.length > 0) { // 说明数据有问题
            const msg: string = (error.map(item => {
                let text = '';
                for (const key in item.constraints) {
                    text = item.constraints[key]
                }
                return text;
            })).join('|');
            return createResponse(EResponseState.fail, msg, {});
        } else {
            return
        }
    })
}
