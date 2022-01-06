import { getConnection } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Date } from '../entities/Date/Date';
// 用于初始化Date表数据

export async function initMysqlDate() {
    const manager = getConnection().manager;
    const dates: Date[] = createDateArray();
    const result = await Promise.all(dates.map(async (date) => {
        await manager.save(date);
    }))
}

function createDateArray(): Date[] {
    const dateList: Date[] = [];
    const month = 12;
    // 一个月有31天的月份1\3\5\7\8\10\12
    const _day_31: number[] = [1,3,5,7,8,10,12];
    for (let i = 1; i <= month; i++) {
        let day = 30;
        if (i === 2) { day = 29 }
        if (_day_31.includes(i)) { day = 31 }
        for (let j = 1; j <= day; j++) {
            const dateObj = {
                month: i,
                day: j
            }
            dateList.push(plainToClass(Date, dateObj));
        }
    }
    return dateList;
}
