export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: process.env['EMAILJS_SERVICE_ID'] || 'default_service_id',
  EMAILJS_TEMPLATE_ID: process.env['EMAILJS_TEMPLATE_ID'] || 'default_template_id',
  EMAILJS_AUTO_REPLY_TEMPLATE_ID: process.env["EMAILJS_AUTO_REPLY_TEMPLATE_ID"] || 'default_auto_reply_template_id',
  EMAILJS_PUBLIC_KEY: process.env["EMAILJS_PUBLIC_KEY"] || 'default_public_key',
  GOOGLE_ANALYTICS_ID: process.env["GOOGLE_ANALYTICS_ID"] || 'default_analytics_id',
};