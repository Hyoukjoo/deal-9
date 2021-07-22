import dotenv from "dotenv";

dotenv.config();

const env = {
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  PORT: Number(process.env.PORT) || 3000,
  CLIENT_URL: process.env.CLIENT_URL,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  AWS_ACCSS_KEY_ID: process.env.AWS_ACCSS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
};

export default env;
