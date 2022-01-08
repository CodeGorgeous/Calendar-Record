import { IsNotEmpty, Min, Max} from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserDateMessage, PublicDateMessage } from '../DateMessage/index';

// 公历日期表
@Entity()
export class Date {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    @IsNotEmpty({ message: '月份不能为空' })
    @Min(1, { message: '一年的起始至少为1月' })
    @Max(12, { message: '一年的结尾之多为12月' })
    public month: number

    @Column()
    @IsNotEmpty({ message: '日期不能为空' })
    @Min(1, { message: '一月的起始至少为1日' })
    @Max(31, { message: '一月的结尾至多为31日' })
    public day: number

    @OneToMany((type) => UserDateMessage, (userMessages) => userMessages.date)
    public userMessages: UserDateMessage[]

    @OneToMany((type) => PublicDateMessage, (publicMessage) => publicMessage.date)
    public publicMessage: PublicDateMessage[]
}