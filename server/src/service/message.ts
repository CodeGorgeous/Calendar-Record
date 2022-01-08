import { Injectable } from '@nestjs/common';
import { UserDateMessage, PublicDateMessage } from '../entities/DateMessage/index';
import createResponse from '../utils/createResponse';
import { EResponseState, IResponse } from '../types';
import validateResponse from '../utils/validateResponse';
import { getConnection } from 'typeorm';
import { Date as MDate } from '../entities/Date/Date';
import { plainToClass } from 'class-transformer';

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

    /**
     * TODO:
     *  返回的信息需要包涵两个时间节点的, 一个是历史上当天的记录, 一个是当天的记录
     * TODO:
     *  查询数据的条件: uid, month, day
     */
    public async getUserMessage(data: any): Promise<IResponse> {
        try {
            return createResponse(EResponseState.success, '查询成功', {});
        } catch (error) {
            return createResponse(EResponseState.error, '未知错误', {});
        }
    }
    public async getPublicMessage(data: any): Promise<IResponse> {
        try {
            return createResponse(EResponseState.success, '查询成功', {});
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
    const dateObj = {
        month: date.getMonth() + 1,
        day: date.getDate()
    }
    await manager.findOne(MDate, dateObj).then(resp => {
        const date: any = resp;
        data.date = date;
    })
    data.year = (date.getFullYear());
    // 第三步: 数据添加入数据库
    return await manager.save(data).then(() => {
        return createResponse(EResponseState.success, '添加信息成功', {});
    }).catch(error => {
        return createResponse(EResponseState.fail, '添加信息失败', {});
    })
}

async function convenientQuery() {}