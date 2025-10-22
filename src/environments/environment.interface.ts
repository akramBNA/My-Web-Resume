export interface Environment {
  production: boolean;
  EMAILJS_SERVICE_ID: string;
  EMAILJS_TEMPLATE_ID: string;
  EMAILJS_AUTO_REPLY_TEMPLATE_ID: string;
  EMAILJS_PUBLIC_KEY: string;
  GOOGLE_ANALYTICS_ID: string;

  OPEN_WEATHER_API_KEY: string;
  OPEN_WEATHER_API_URL: string;
}
