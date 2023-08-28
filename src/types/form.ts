export type MailFormData = {
    name: string;
    email: string;
    message: string;
  };

export type SendMailData = {
  _from: string;
  _to: string;
  _subject: string;
  _text: string;
}