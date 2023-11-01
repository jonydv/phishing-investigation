import dotenv from 'dotenv';
dotenv.config();
// import sgMail from '@sendgrid/mail';
// sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
import Server from './server/server';

const server = new Server();

server.listen();
