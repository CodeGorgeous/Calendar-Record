import { Entity, ManyToOne } from 'typeorm';
import { DateMessage } from './DateMessage';
import { Date } from '../Date/Date';

// 用户个人记录信息库s
@Entity()
export class UserDateMessage extends DateMessage {

    @ManyToOne((type) => Date, (date) => date.userMessages)
    public date: Date
}