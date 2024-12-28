const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const envDir = './src/environments';
const envFile = path.join(envDir, 'environment.variables.ts');

if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}


const envFileContent = `
export const environment = {
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
  EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}',
  EMAILJS_AUTO_REPLY_TEMPLATE_ID: '${process.env.EMAILJS_AUTO_REPLY_TEMPLATE_ID}',
  EMAILJS_PUBLIC_KEY: '${process.env.EMAILJS_PUBLIC_KEY}',
};
`;

fs.writeFileSync(envFile, envFileContent);
console.log('Environment variables loaded successfully!');
