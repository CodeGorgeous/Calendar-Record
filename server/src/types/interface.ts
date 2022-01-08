import { EResponseState } from './index';
import { UserDateMessage, PublicDateMessage} from '../entities/DateMessage/index';

export interface IResponse {
  state: EResponseState;
  msg: string;
  data: any;
}

export interface IResponseData {
  prev: UserDateMessage[] | PublicDateMessage[],
  current: UserDateMessage[] | PublicDateMessage[]
}
