import { IResponse, EResponseState } from '../types';

// 根据参数返回一个组装好的信息
export default function createResponse(
  state: EResponseState,
  msg: string,
  data: any,
): IResponse {
  return {
    state,
    msg,
    data,
  };
}
