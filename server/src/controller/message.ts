import { Controller, Get, Post, Body, Bind } from '@nestjs/common';
import { MessageService } from '../service/index';
import { plainToClass } from 'class-transformer';
import { UserDateMessage, PublicDateMessage} from '../entities/DateMessage/index';
import { IResponse, IUserRequestData, IPublicRequestData } from '../types';

@Controller()
export class MessageController {
    constructor(private readonly appService: MessageService) {}

    @Post('/api/message/user')
    @Bind(Body())
    private async addUserMessage(data: any): Promise<IResponse> {
        return await this.appService.addUserMessage(plainToClass(UserDateMessage, data));
    }

    @Post('/api/message/public')
    @Bind(Body())
    private async addPublicMessage(data: any): Promise<IResponse> {
        return await this.appService.addPublicMessage(plainToClass(PublicDateMessage, data));
    }

    @Get('/api/message/user')
    @Bind(Body())
    private async getUserMessage(data: IUserRequestData): Promise<IResponse> {
        return await this.appService.getUserMessage(data);
    }

    @Get('/api/message/public')
    @Bind(Body())
    private async getPublicMessage(data: IPublicRequestData): Promise<IResponse> {
        return await this.appService.getPublicMessage(data);
    }
}
