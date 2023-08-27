import { MailFormData } from "types/form";

export function sendEmail(data: MailFormData): Promise<boolean> {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return true; // Promise<boolean> olarak dönüş yapılır
      } else {
        return false; // Promise<boolean> olarak dönüş yapılır
      }
    })
    .catch(() => {
      return false; // Promise<boolean> olarak dönüş yapılır
    });
}