import { SendMailData } from "types/form";

export function sendEmail(data: SendMailData): Promise<boolean> {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return true; 
      } else {
        return false; 
      }
    })
    .catch(() => {
      return false;
    });
}