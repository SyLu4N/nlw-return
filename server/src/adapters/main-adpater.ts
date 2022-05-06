export interface SendMailProps {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (data: SendMailProps) => Promise<void>;
}
