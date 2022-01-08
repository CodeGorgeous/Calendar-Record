import { Injectable } from '@nestjs/common';
import { UserDateMessage, PublicDateMessage } from '../entities/DateMessage/index';
import createResponse from '../utils/createResponse';
import { EResponseState, IResponse, IUserRequestData, IPublicRequestData } from '../types';
import validateResponse from '../utils/validateResponse';
import { getConnection } from 'typeorm';

@Injectable()
export class MessageService {
    public async addUserMessage(data: UserDateMessage): Promise<IResponse> {
        try {
            return await convenientAddition(data);
        } catch (error) {
            return createResponse(EResponseState.error, '未知错误', {});
        }
    }
    public async addPublicMessage(data: PublicDateMessage): Promise<IResponse> {
        try {
            return await convenientAddition(data);
        } catch (error) {
            return createResponse(EResponseState.error, '未知错误', {});
        }
    }

    public async getUserMessage(data: IUserRequestData): Promise<IResponse> {
        try {
            const manager = getConnection().manager;
            // 第二步: 根据日期表, uid去UserDateMessage表查询数据
            const result2 = await manager.find(UserDateMessage, {
                where: {
                    uid: data.uid,
                    month: data.month,
                    day: data.day
                },
                select: ['id', 'message', 'year']
            });
            // 第三步: 将拿到的数据进行分类并返回
            const prev: UserDateMessage[] = [];
            const current: UserDateMessage[] = [];
            const year: number = new Date().getFullYear();
            result2.forEach(item => {
                if(item.year === year) {
                    current.push(item);
                } else {
                    prev.push(item);
                }
            })
            return createResponse(EResponseState.success, '查询成功', {
                prev,
                current
            });
        } catch (error) {
            return createResponse(EResponseState.error, '未知错误', {});
        }
    }

    public async getPublicMessage(data: IPublicRequestData): Promise<IResponse> {
        try {
            const manager = getConnection().manager;
            const result2 = await manager.find(PublicDateMessage, {
                where: {
                    month: data.month,
                    day: data.day
                },
                select: ['id', 'message', 'year']
            });
            const prev: PublicDateMessage[] = [];
            const current: PublicDateMessage[] = [];
            const year: number = new Date().getFullYear();
            result2.forEach(item => {
                if(item.year === year) {
                    current.push(item);
                } else {
                    prev.push(item);
                }
            })
            return createResponse(EResponseState.success, '查询成功', {
                prev,
                current
            });
        } catch (error) {
            return createResponse(EResponseState.error, '未知错误', {});
        }
    }
}


async function convenientAddition(data: UserDateMessage | PublicDateMessage): Promise<IResponse> {
    // 第一步: 检验数据
    const result = await validateResponse(data);
    if (result) { return result; }
    const manager = getConnection().manager;
    // 第二步: 将当前时间加入到对象中
    const date = new Date();
    data.year = date.getFullYear();
    data.month = date.getMonth() + 1;
    data.day = date.getDate();
    // 第三步: 数据添加入数据库
    return await manager.save(data).then(() => {
        return createResponse(EResponseState.success, '添加信息成功', {});
    }).catch(error => {
        return createResponse(EResponseState.fail, '添加信息失败', {});
    })
}
