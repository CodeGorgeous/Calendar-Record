import { IsNotEmpty, MinLength, MaxLength  } from 'class-validator';
import User from './User';
import { v4 } from 'uuid';
import { Entity, Column } from 'typeorm';

@Entity('user')
export class RegisterUser extends User {
    @Column()
    @IsNotEmpty({message: '用户邮箱不能为空'})
    @MinLength(6, {message: '用户邮箱长度至少为6个字符'})
    @MaxLength(18, {message: '用户邮箱长度至多为18个字符'})
    public userEmail: string;

    @IsNotEmpty({message: '验证码不能为空'})
    @MinLength(4, {message: '验证码长度至少为4个字符'})
    @MaxLength(6, {message: '验证码长度至多为6个字符'})
    public verificationCode: string;

    @Column()
    public readonly userUID: string = v4().slice(0, 8);
}
