import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  EMAILJS_SERVICE_ID: process.env['EMAILJS_SERVICE_ID'] || '',
  EMAILJS_TEMPLATE_ID: process.env['EMAILJS_TEMPLATE_ID'] || '',
  EMAILJS_AUTO_REPLY_TEMPLATE_ID: process.env['EMAILJS_AUTO_REPLY_TEMPLATE_ID'] || '',
  EMAILJS_PUBLIC_KEY: process.env['EMAILJS_PUBLIC_KEY'] || '',
};
