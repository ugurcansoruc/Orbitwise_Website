import { MailDocument } from "types/newsletter";

export function saveMail(data: MailDocument): Promise<boolean> {
  const apiEndpoint = 'https://uvuxstsi6hgemax5mhdgaglyau0roajt.lambda-url.eu-north-1.on.aws/api/Newsletter/AddEmail';

  console.log(JSON.stringify(data));

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        "content-type": "application/json",
    },
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