import nodemailer from 'nodemailer';
import { MailAdapter, SendMailProps } from '../main-adpater';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'eb0c4a8d375191',
    pass: 'f0783740a49bf6',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailProps) {
    await transport.sendMail({
      from: 'Equipe feedget <oi@feedget.com>',
      to: 'Luan Simões <luaan.carlos@hotmail.com',
      subject,
      html: body,
    });
  }
}
