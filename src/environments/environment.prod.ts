export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: process.env['EMAILJS_SERVICE_ID'] || '',
  EMAILJS_TEMPLATE_ID: process.env['EMAILJS_TEMPLATE_ID'] || '',
  EMAILJS_AUTO_REPLY_TEMPLATE_ID: process.env['EMAILJS_AUTO_REPLY_TEMPLATE_ID'] || '',
  EMAILJS_PUBLIC_KEY: process.env['EMAILJS_PUBLIC_KEY'] || '',
  GOOGLE_ANALYTICS_ID: process.env['GOOGLE_ANALYTICS_ID'] || ''
};
