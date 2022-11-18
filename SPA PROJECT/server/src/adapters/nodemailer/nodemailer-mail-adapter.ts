import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f3dd9334a4e43e",
      pass: "57f6a514b3e905"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'SPA PROJECT <gabriel.zacari@gmail.com>',
            to: 'Gabriel Murata <gabriel.zacari@gmail.com>',
            subject,
            html: body,
        })
    }
}