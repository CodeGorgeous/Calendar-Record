const nodemailer = require('nodemailer');
import { v4 } from 'uuid';

// 邮件发送相关处理
// 发送者邮箱配置
const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
        user: '2460481461@qq.com',
        pass: 'ygaxnhpzumeaeafh'
    }
});

export async function sendVerificationCode(email: string, code: string): Promise<boolean> {
    console.log('开始发送验证码');
    const option = {
        from: '2460481461@qq.com',
        to: email,
        subject: '来自日历记录的验证码',
        text: code
    };

    return await transporter.sendMail(option).then(info => {
        console.log('验证码发送成功');
        return true;
    }).catch(err => {
        console.log('验证码发送失败');
        return false;
    })
}

export const verificationCode: string = v4().slice(0, 6);