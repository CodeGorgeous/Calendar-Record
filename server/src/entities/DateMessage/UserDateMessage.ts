import { Entity } from 'typeorm';
import { DateMessage } from './DateMessage';

// 用户个人记录信息库s
@Entity()
export class UserDateMessage extends DateMessage {}