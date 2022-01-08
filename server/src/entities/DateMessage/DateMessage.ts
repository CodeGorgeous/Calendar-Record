import { IsNotEmpty } from 'class-validator';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class DateMessage {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    @IsNotEmpty({message: '记录信息不能为空'})
    public message: string

    @Column()
    @IsNotEmpty({message: '用户UID不能为空'})
    public uid: string

    @Column()
    public year: number
}