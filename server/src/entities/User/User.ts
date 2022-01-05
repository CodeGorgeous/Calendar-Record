import { IsNotEmpty, MinLength, MaxLength  } from 'class-validator';

export default abstract class User {
    @IsNotEmpty({message: '用户名不能为空'})
    @MinLength(2, {message: '用户名长度至少为1个字符'})
    @MaxLength(20, {message: '用户名长度至多为20个字符'})
    public userName: string;

    @IsNotEmpty({message: '用户密码不能为空'})
    @MinLength(6, {message: '用户密码长度至少为6个字符'})
    @MaxLength(16, {message: '用户密码长度至多为16个字符'})
    public userPassword: string;
}
