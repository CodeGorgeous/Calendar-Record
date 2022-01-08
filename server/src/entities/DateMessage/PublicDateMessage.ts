import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DateMessage } from './DateMessage';
import { Date } from '../Date/Date';

// 公共记录信息库
@Entity()
export class PublicDateMessage extends DateMessage {

    @ManyToOne((type) => Date, (date) => date.publicMessage)
    public date: Date
}