import FormData from 'form-data';
import Mailgun, { InputFormData } from 'mailgun.js';
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY!,
});

export const sendEmail = async () => {
  const messageData = {
    from: 'jonatandavidvillalba@gmail.com',
    to: 'jonatandavidvillalba@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!',
  };
  try {
    const responseMsg = await mg.messages.create(
      process.env.MAILGUN_DOMAIN!,
      messageData
    );
    console.log('response ', responseMsg);
    return responseMsg;
  } catch (error) {
    console.log('error al enviar mail: ', error);
    return error;
  }
};
