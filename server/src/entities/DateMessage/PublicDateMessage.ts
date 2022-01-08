import { Entity} from 'typeorm';
import { DateMessage } from './DateMessage';

// 公共记录信息库
@Entity()
export class PublicDateMessage extends DateMessage {}